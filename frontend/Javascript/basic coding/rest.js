

function sum(...args) {  // kitne bhi input le sakta hai called as REST            // args acts like an arrray
    let sm = 0
    for(let i=0;i<args.length;i++){
        sm+=args[i]
    }
    console.log(sm)
    console.log(arguments)   // predefined variable in all functions, not much used
}


// destructuring  -> alag alag define krne se achaa it do the thing in one go by making an array of variables 

names = ["tony", "bruce" , " peter" , "steve" , "strange"]

// let first = names[0];
// let sec = names[1];
// let third = names[2];

let [first,sec , ...others] = names     