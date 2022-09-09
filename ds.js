//empty array
//no missing
const arr = [1,2,3,5,6];
let missingNum = false
const searchMissingNum = (arr) => {
    if(arr.length<1){
        console.log("empty Array")
    }
    for(i=0; i<arr.length; i++){
        if(arr[i] == i+1){

        }else{
            missingNum = true
            return console.log("missing number is: ", i+1)
        }
    }
    if(!missingNum){
        console.log("nothing is missing")
    }
}
searchMissingNum(arr)

//given array, remove duplicate element of array

let myArr = [0,1,2,3,3,4,4,4,5]
// output: [0,1,2,3,4,5]
let newArr = [];
const removeDuplicate = (myArr) => {
    for(i=0;i< myArr.length;i++){
        if(myArr[i] != myArr[i+1]){
            newArr.push(myArr[i])
        }
    }
    console.log(newArr)
}
removeDuplicate(myArr)