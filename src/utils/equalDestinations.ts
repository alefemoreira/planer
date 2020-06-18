interface Destiny {
  country: string;
  state: string;
  city: string;
  cep: string;
}

const equalDestinations = (
  actualDestiny: Destiny,
  otherDestiny: Destiny
): boolean => {
  if (otherDestiny.country === actualDestiny.country) {
    if (otherDestiny.state === actualDestiny.state) {
      if (otherDestiny.city === actualDestiny.city) {
        if (otherDestiny.cep === actualDestiny.cep) {
          return true;
        }
      }
    }
  }
  return false;
};

export default equalDestinations;
