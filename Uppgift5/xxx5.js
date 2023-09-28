const array1 = [5,8,12,44,130];

const found = array1.find((element) => element >10);

const isLargeNumber = (element) => element >13

console.log(found);
console.log(array1.findIndex(isLargeNumber));