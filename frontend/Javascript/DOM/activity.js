let btn = document.getElementById("btn")
let backg=document.querySelector(".backg");
let h= document.querySelector("h1")



function changecolour(){
    let red = Math.floor( Math.random()*256);
    let blue = Math.floor( Math.random()*256);
    let green = Math.floor( Math.random()*256);
    backg.style.backgroundColor = `rgb(${red},${green},${blue})` ;
    h.innerText = `rgb(${red},${green},${blue})`;
    
}
btn.addEventListener('click', changecolour);