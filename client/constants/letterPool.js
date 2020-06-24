const condensedLetterFrequencies = {
  2: ['J', 'K', 'Q', 'X', 'Z'],
  3: ['B', 'C', 'F', 'H', 'M', 'P', 'V', 'W', 'Y'],
  4: ['G'],
  5: ['L'],
  6: ['D', 'S', 'U'],
  8: ['N'],
  9: ['T', 'R'],
  11: ['O'],
  12: ['I'],
  13: ['A'],
  18: ['E'],
};

export const letterFrequencies = {
  J: '2',
  K: '2',
  Q: '2',
  X: '2',
  Z: '2',
  B: '3',
  C: '3',
  F: '3',
  H: '3',
  M: '3',
  P: '3',
  V: '3',
  W: '3',
  Y: '3',
  G: '4',
  L: '5',
  D: '6',
  S: '6',
  U: '6',
  N: '8',
  T: '9',
  R: '9',
  O: '11',
  I: '12',
  A: '13',
  E: '18',
};

const letterList = [];
for (let key in letterFrequencies) {
  for (let i = 0; i < letterFrequencies[key]; i++) {
    letterList.push(key);
  }
}

export default letterList;
