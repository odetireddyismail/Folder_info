//Another Way
//PowerOfTwo
function Fac(n) {
    if(n<1){
        return false
    }
    return (n & (n-1))===0
    }
    
    console.log(Fac(1));
    console.log(Fac(3));
    console.log(Fac(6));
    console.log(Fac(19));

    //It follow the best solution is Bog(O)- O(logn)

// function Fac(n) {
//     if(n<1){
//         return false
//     }
//     while(n>1){
//         if(n%2!==0){
//             return false
//         }
//         n=n/2
//     }
//     return true
//     }
    
//     console.log(Fac(1));
//     console.log(Fac(2));
//     console.log(Fac(6));
//     console.log(Fac(19));
    