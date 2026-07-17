arr = [1,2,3,4,5]
newarr = [...arr]
chars = [..."Helloji"] //  ['H', 'e', 'l', 'l', 'o', 'j', 'i']

newhai = [...newarr , ...chars] // dono ke saath

// objects mein spread operator

data = {
    name:"Lavish",
    rollno:33
}

datacopy = {...data,id:456 , language:"English"}

let obj1 = {...chars}
