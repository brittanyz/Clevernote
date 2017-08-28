const quickSort = (arr) => {
  if (arr.length < 1 ) return arr;
  let pivot = arr.unshift();

  let left = quickSort(arr.filter( (el) => Date.parse(el.created_at) < Date.parse(pivot.created_at)));
  let right = quickSort(arr.filter( (el) => Date.parse(el.created_at) > Date.parse(pivot.created_at)));

  return [left].concat([pivot]).concat(right);
};
