//Prime number is noting but it is not divisible by 2

//(4*1 or 2*2 or 1*4) this is not prime number

//Optimized Primality Test
//Integers larger than the square root do not need to be checked because, whenever `n=a*b` one of the
//two factores `a` and `b` less than are equal to square root of `n`
// n=24 , a=4 and b=6
//the square root of 24 is 4.89
//4 is less than 4.89
//a is less than the square root of n
//n=35, a=5 and b=7

function Fac(n) {
    if (n < 2) {
      return false;
    }
    for (let i = 2; i < Math.sqrt(n); i++) {
      if (n % 2 === 0) {
        return false;
      }
    }
    return true;
  }
  
  console.log(Fac(1));
  console.log(Fac(6));
  console.log(Fac(7));
  
// function Fac(n) {
//   if (n < 2) {
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % 2 === 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(Fac(5));
// console.log(Fac(6));
// console.log(Fac(7));
