//
// This is only a SKELETON file for the 'Two fer' exercise. It's been provided as a
// convenience to get you started writing code faster.
//comment new again again again again again

export const twoFer = (name) => {
  // throw new Error("Remove this statement and implement this function");
    if (typeof name === 'string')
      console.log('One for' + name + 'one for me.');
    else if (name.length === 0) {
      console.log('One for you, one for me.');
    }
};
