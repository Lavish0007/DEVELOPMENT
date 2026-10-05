

let btn = document.querySelector(".add")
let remove = document.querySelector(".remove")
let inp = document.querySelector("input")
let ul = document.querySelector("ul")


btn.addEventListener("click",function(){
    let item = document.createElement("li")
    item.innerText = inp.value
    ul.appendChild(item)

    let delbtn = document.createElement("button");
    delbtn.innerText="Delete";
    item.appendChild(delbtn);
    delbtn.classList.add("delbtn");

    console.log(`Task: ${inp.value} is added`)
    inp.value=""

})

ul.addEventListener("click",function(event){
    if(event.target.nodeName=="BUTTON"){
        let buttonparent = event.target.parentElement;
        buttonparent.remove();
        console.log("task deleted")
    }
})

remove.addEventListener("click",function(){
    let lch = ul.lastElementChild;
    ul.removeChild(lch)
})