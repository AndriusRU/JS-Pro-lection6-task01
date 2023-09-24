export default function orderByProps(obj, [...param]) {
  let arraySort = [];
  const result = [];
  for (const prop in obj) {
    if (!param.includes(prop)) {
      arraySort.push(prop);
    }
  }
  arraySort = [...param, ...arraySort.sort()];
  for (let i = 0; i < arraySort.length; i += 1) {
    const elem = {
      key: arraySort[i],
      value: obj[arraySort[i]],
    };
    result.push(elem);
  }
  return result;
}
