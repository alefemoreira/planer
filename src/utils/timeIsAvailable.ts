const timeIsAvailable = (
  ActualFlight: string,
  OtherFlight: string
): boolean => {
  const timeActualFlight = new Date(ActualFlight);
  const timeOtherFlight = new Date(OtherFlight);

  const minutesAddSub = 30 * 60 * 1000; // 30 Minutes in milliseconds

  const timeToCompared = {
    add30: timeActualFlight.getTime() + minutesAddSub,
    sub30: timeActualFlight.getTime() - minutesAddSub,
  };

  return (
    timeOtherFlight.getTime() >= timeToCompared.add30 ||
    timeOtherFlight.getTime() <= timeToCompared.sub30
  );
};

export default timeIsAvailable;
