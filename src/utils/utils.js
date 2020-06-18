export const getRandomArrayItem = (items) => {
  return items[Math.floor(Math.random() * items.length)];
};

// it would be better to use something like loadash.isEqual
export const arraysEqual = (a, b) => {
  if (a === b) {
    return true;
  }

  if (a === null || b === null) {
    return false;
  }

  if (a.length !== b.length) {
    return false;
  }

  const difference = a.filter((x) => !b.includes(x));

  return (difference.length > 0) ? false : true;
};


