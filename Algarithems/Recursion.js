//Recurtion
//Recurtion is a problem solving technique where the solution depends on to smaller
//instance of the same problem

//Recursion is when a function calls itself

//Why?
//A great technique to simplify your solution
//If you find yourself breaking down your problem into smaller
// versions of the same problem

//Few points
//Every recursive solution needs to have a base case- a condition to terminate the recurtion.
//Recurtion might somplify solving a problem but it does not always translate to a faster
//solution. A recurtion may be worse compared to an iterative solution.

//Recurtion is a topic that is not the most straight forward to understand. Do
// not give up if you struggle with the concept.

//Recursive Fibanacci sequence

function Recursion() {
  if (n < 2) {
    return n;
  }

  return Recursion(n - 1) + Recursion(n - 2);
}

console.log(Recursion(1));
console.log(Recursion(3));
console.log(Recursion(6));

//O(n) - Iterative
//O(2^n) - Recursive
//Recursive is not good solution for fibanacci it Horrible
//It follows the f(n-1)+f(n-2) formula
