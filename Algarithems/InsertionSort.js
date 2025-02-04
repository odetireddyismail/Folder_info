

//Here it follow the Big(O) linear 
// Time is proposnal to size of the input
//Because here we only uses the one for loop iside the function 
let arr = [-6, 20, 888, -2, 94]

function Demo(curr) {
    for (let i = 1; i < curr.length; i++) {
        let insertTo = curr[i] //8
        let j = i - 1  //1 
        while (j >= 0 && curr[j] > insertTo) {  //20
            curr[j + 1] = curr[j]
            j = j - 1
        }
        curr[j + 1] = insertTo
    }
    return curr
}

console.log(Demo(arr));

//Another Way to Solve the problem
//Quick Sort
let arr1 = [8, 20, -2, 44, -66]

function quickSort(curwhat) {
    if (curr.length < 2) {
        return curr
    }
    let pivot = curr[curr.length - 1]
    let leftArr = []
    let rightArr = []
    for (let i = 0; i < curr.length - 1; i++) {
        //   if(pivot>curr[i]){
        if (curr[i] > pivot) {
            rightArr.push(curr[i])
        }
        else {
            leftArr.push(curr[i])

        }
    }
    return ([...quickSort(leftArr), pivot, ...quickSort(rightArr)])
}
console.log(quickSort(arr1))

//Worest Case -O(n^2)
//Avg case -O(n logn)


//Merge Sort Algarithom