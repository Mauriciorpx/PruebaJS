let m = [
  [1, 1, 0, 0],
  [0, 0, 1, 0],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
];

let n = [
  [1, 1, 1, 0],
  [0, 0, 1, 0],
  [1, 1, 1, 1],
  [0, 0, 1, 0],
  [0, 0, 1, 0],
];

let maxUnosF = 0;

let maxUnosC = 0;

function maxNumerOne(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let numUnosF = 0;
    for (let j = 0; j < matrix[i].length; j++) {
      if (matrix[i][j] === 1) {
        numUnosF++;
      }
    }
    if (numUnosF > maxUnosF) {
      maxUnosF = numUnosF;
    }
  }

  for (let i = 0; i < matrix[0].length; i++) {
    let numUnosC = 0;
    for (let j = 0; j < matrix.length; j++) {
      if (matrix[j][i] === 1) {
        numUnosC++;
      }
    }
    if (numUnosC > maxUnosC) {
      maxUnosC = numUnosC;
    }
  }

  if (maxUnosC > maxUnosF) {
    return maxUnosC;
  } else {
    return maxUnosF;
  }
}

console.log(maxNumerOne(m));
console.log(maxNumerOne(n));
