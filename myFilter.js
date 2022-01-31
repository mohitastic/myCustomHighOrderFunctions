/////////////////
//    Filter   //
/////////////////

let arr = [2,3,4,5,6,7,8,9,10];

let evenArr = arr.filter(function(x){
    return x%2===0;
})

console.log(evenArr);


////////////////////
//  Custom Filter //
////////////////////

function myCustomFilter(arr,callBackFn){
    let myArr = [];

    for(let i=0;i<arr.length;i++){
        if(callBackFn(arr[i])){
            myArr.push(arr[i]);
        }
    }

    return myArr;
}

function isEven(x){
    if(x%2===0) return x; 
}

console.log(myCustomFilter(arr,isEven));