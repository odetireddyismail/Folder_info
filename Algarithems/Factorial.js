//Factorial number Like 5*4*3*2*1

//5*4*3*2*1
function Fac(n){
    
    let k=1
    
    for(let i=1;i<=n;i++){
        k=k*i //1*2*3*4*5
    }
    
    return k
}


console.log(Fac(5))
console.log(Fac(6))
console.log(Fac(7))