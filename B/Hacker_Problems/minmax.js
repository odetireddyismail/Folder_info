//Given five positive integers, find the minimum and maximum values that can be calculated by 
//summing exactly four of the five integers. Then print the respective minimum and maximum 
//values as a single line of two space-separated longintegers.
//Problem
//Example
//arr = [1,3,5,7,9]
//The minimum sum is 1+3+5+7=16 and the maximum sum is 3+5+7+9 24. The function prints
//Submissions
//16 24
//Function Description
//Complete the miniMaxSum function in the editor below.
//miniMaxSum has the following parameter(s): ⚫ arr: an array of 5 integers
//Print
//Print two space-separated integers on one line: the minimum sum and the maximum sum of 4 of 5 elements.
//Explanation

//The numbers are 1, 2, 3, 4, and 5. Calculate the following sums using four of the five integers:
//Submissions
//1. Sum everything except 1, the sum is 2+3+4+5=14.
//2. Sum everything except 2. the sum is 1+3+4+5=13.
//3. Sum everything except 3, the sum is 1+2+4+5=12.
//4. Sum everything except 4, the sum is 1+2+3+5=11.
//5. Sum everything except 5, the sum is 1+2+3+4=10.
function miniMaxSum(arr) {
    
    arr.sort((a,b)=>a-b)
    
    var minSum=arr.slice(0,arr.length-1).reduce((sum,cum)=>sum+cum,0);
    var maxSum=arr.slice(1).reduce((sum,cum)=>sum+cum,0)
    
    console.log(minSum+' '+maxSum)
   
}
var arr=[2,3,4,1,5]
miniMaxSum(arr)