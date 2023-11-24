// takes a number as an argument
// returns random integer between 0 and the given number
export const randomIndex = (num) => Math.floor(Math.random() * num);

export const unifyString = (string, criteria) => {
  switch (criteria) {
    case 'store':
      return string.toLowerCase();
    case 'display':
      return string.toUpperCase();
  }
};
