module.exports = function towelSort(matrix) {
  let result = [];

  if (matrix === undefined) return [];

  matrix.forEach((item, index) => {
    if (index % 2 === 0) {
      result.push(...item);
    } else {
      result.push(...item.reverse());
    }

  })
  return result;
}
