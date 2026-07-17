// check all elements are multiple of 10 or not 

// arr=[10,20,30,40,50]
// let ans = arr.every(el=> el%10===0)
// console.log(ans)

// find minimum of an array

arr=[91,23,4,5,6,78]
let ans  =  arr.reduce((min,el)=>{
    if(el<min) min=el;
    return min;
})
console.log(ans)