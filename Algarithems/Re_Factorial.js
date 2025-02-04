function Fac(n) {
  if (n < 2) {
    return 1;
  }
  return n * Fac(n - 1);
}

console.log(Fac(4));
console.log(Fac(5));

//B(O) - O(n)

