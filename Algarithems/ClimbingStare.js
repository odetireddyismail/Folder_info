//Climbing stsircases

function Demo(n){
    let arr=[1,2]
    for(let i=2;i<=n;i++){
        arr[i]=arr[i-1]+arr[i-2]
    }
    return arr[n-1]
}

console.log(Demo(2));
console.log(Demo(3));
console.log(Demo(4));
console.log(Demo(5));