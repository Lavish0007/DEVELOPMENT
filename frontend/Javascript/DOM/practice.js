let para1 = document.createElement("p")
para1.innerText = "Hey i'm Red"
document.querySelector("body").append(para1)

para1.classList.add("red")


let h3 = document.createElement("h3")
h3.innerText = "Hey I'm Blue"
document.querySelector("body").append(h3)

h3.classList.add("blue")


let h1 = document.createElement("h1")
h1.innerText="I'm inside a div"

let para = document.createElement("p")
para.innerText = "Me too!"

let div = document.createElement("div")
div.innerText = "this is my content"
document.querySelector("body").append(div)

div.appendChild(h1)
div.appendChild(para)
div.classList.add("bd")
