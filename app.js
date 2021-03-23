//setting variables
let rainbow = true;
let black = false; 
const container = document.getElementById('container');
let blackBtn = document.getElementById('black')
let rainbowBtn = document.getElementById('rainbow')
let eraseBtn = document.getElementById('eraser')
let count = 1;

// genereting grid 
function genGrid(num) {      

    container.style.setProperty('--grid-rows', num);
    container.style.setProperty('--grid-cols', num);

    for (let i = 0; i < num ** 2; i++) {

        const box = document.createElement('div');
        container.appendChild(box);
        box.innerText = "";
        box.className = 'box';
        box.id = ('id' + count);
        box.setAttribute('onmouseover', 'onHover(this.id)');
        count++;
    };
}
//setting color and btns
eraseBtn.onclick = function(){
    clearGrid('container')
    genGrid(64)
}

blackBtn.onclick = function(){
    black = true;
    rainbow = false;
}
rainbowBtn.onclick = function(){
    rainbow = true;
    black= false; 
}

//on hover rainbow effect
function onHover(id) { 
    if(rainbow === true){
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
         
    document.getElementById(id).style.backgroundColor = `rgb(${r},${g},${b})`;
} else if(black === true){
    document.getElementById(id).style.backgroundColor = 'black'
}
}
//reset and set grid 
function reSet() {        
    let gridSize = prompt("set grid dimension, between 1 and 100");
    if(gridSize > 100 || gridSize < 0 || gridSize == NaN){
        alert('please enter a number betwenn 0 and 100');
        
    }

    clearGrid("container");
    genGrid(gridSize);
}

function clearGrid(className) {
    const element = document.getElementById(className);
    element.textContent = '';
}
