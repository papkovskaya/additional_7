module.exports = function solveSudoku(matrix) {
  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      if (matrix[row][col] === 0) {
        let a_i = Math.floor(row / 3) * 3;
        let a_j = Math.floor(col / 3) * 3;
        let array = [];
        let new_array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i = 0; i < 9; i++) {
          array.push(matrix[row][i])
          array.push(matrix[i][col])
          array.push(matrix[a_i + i % 3][a_j + Math.floor(i / 3)])
        }

        array = array.filter(i => i > 0);

        new_array = new_array.filter(i => array.indexOf(i) < 0);

        for (let i = 0; i < new_array.length; i++) {
          matrix[row][col] = new_array[i];
          let result = solveSudoku(matrix);
          
          if (result != false) {
            return result;
          }
        }

        matrix[row][col] = 0;

        return false;
      }
    }
  }
  return matrix;
}
