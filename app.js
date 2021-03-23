const container = document.getElementById('container');

let count = 1;

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



function onHover(id) { 
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
         
    document.getElementById(id).style.backgroundColor = `rgb(${r},${g},${b})`;
}

function reSet() {        
    let gridSize = prompt("set grid dimension");
    if(gridSize > 100 || gridSize < 0 || gridSize == NaN){
        alert('please enter a number betwenn 0 and 100');
        genGrid(64)
    }

    clearGrid("container");
    genGrid(gridSize);
}

function clearGrid(className) {
    const element = document.getElementById(className);
    element.textContent = '';
}
window.onload(genGrid(64))