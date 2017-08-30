const quickSort = (arr) => {
  if (arr.length <= 1 ) return arr;
  let pivot = arr[0];
  arr = arr.slice(1);

  let left = quickSort(arr.filter( (el) => Date.parse(el.updated_at) < Date.parse(pivot.updated_at)));
  let right = quickSort(arr.filter( (el) => Date.parse(el.updated_at) > Date.parse(pivot.updated_at)));

  return left.concat([pivot]).concat(right);
};
 export default quickSort;
