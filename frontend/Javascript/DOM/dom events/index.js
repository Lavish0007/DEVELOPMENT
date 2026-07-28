
let btn = document.querySelectorAll("button")

for(x of btn){
    x.addEventListener("click",()=>{
        console.log("you clicked it")
    })
    x.addEventListener("mouseover",()=>{
        console.log("hovering over button")
    })
}