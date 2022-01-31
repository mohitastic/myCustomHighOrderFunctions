/////////////////
//     Map     //
/////////////////

let arr = [1,2,3,4,5];

let squaredArr = arr.map(function(x){
    return x*x;
})

console.log(arr);
console.log(squaredArr);

/////////////////
//  Custom Map //
/////////////////

let arr = [1,2,3,4,5]

function myCustomMap(arr,callBackFn){
    let newArr = []

    for(let i=0;i<arr.length;i++){
        newArr.push(callBackFn(arr[i]));
    }

    return newArr;
}

function square(x){
    return x*x;
}

console.log(myCustomMap(arr,square));