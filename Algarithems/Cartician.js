let a = [1, 2];
let b = [3, 4, 5];

function Demo(A, B) {
  let arr = [];

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < B.length; j++) {
      arr.push([A[i], B[j]]);
    }
  }
  console.log(arr);
}
console.log(Demo(a, b));

// It follow's the O(n^2)
//Here time is propoesnal to square root of size of the input
