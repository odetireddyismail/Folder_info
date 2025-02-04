function Fac(n) {
    if(n<1){
        return false
    }
    while(n>1){
        if(n%2!==0){
            return false
        }
        n=n/2
    }
    return true
    }
    
    console.log(Fac(1));
    console.log(Fac(2));
    console.log(Fac(6));
    console.log(Fac(19));
    