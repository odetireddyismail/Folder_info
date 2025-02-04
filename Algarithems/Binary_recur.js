function line(n) {
  let index = n;
  let arr = [-5, 2, 4, 6, 10];
  let lengt = arr.length - 1;
  return search(index, arr, lengt);
}

function search(index, arr, lengt) {
  let sub = lengt / 2;
  if (arr.length <= 0) {
    return -1;
    //console.log('-1')
  } else if (index < arr[sub]) {
    console.log(arr[sub - 1]);
  } else if (index > arr[sub]) {
    console.log(arr[sub + 1]);
  }
}

console.log(line(2));
//Big (O) - O(n)
