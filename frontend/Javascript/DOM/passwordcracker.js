let inp = document.querySelector("input")

let btn = document.querySelector("button")

let div = document.querySelector("div")

inp.addEventListener("keydown",function(event){
    console.log(event.key)
    btn.innerText=event.key
    div.innerText+=" " + event.key
})