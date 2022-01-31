/////////////////
//    Reduce   //
/////////////////

let arr = [1,2,3,4,5];

let sumArr = arr.reduce(function(accumulator,x){
    return accumulator+x;
},0)

console.log(sumArr);

////////////////////
//  Custom Reduce //
////////////////////

let arr = [1,2,3,4,5]

function myCustomReduce(arr,callBackFn){
    let sum = 0;

    for(let i=0;i<arr.length;i++){
        sum = callBackFn(sum,arr[i]);
    }

    return sum;
} 

function sumFn(acc,x){
    return acc+x;
}

console.log(myCustomReduce(arr,sumFn));