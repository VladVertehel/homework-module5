for(let a of document.getElementsByClassName('img')){
    a.onclick = function(){
        alert(a.getAttribute('src'));
    }
}

// _______________________________________________________________________________________

let link = document.querySelector('a');
let href = link.getAttribute('href');
let i = 0;

function addLink() {
    if (i === 0) {
        link.textContent += '   ' + href;
    }
    i++;
}

link.addEventListener('mousemove', addLink);
link.removeEventListener('mouseout', addLink);

// _______________________________________________________________________________________

let paragraph = document.getElementById('text');

let Write = function() {
    paragraph.innerHTML = this.value;
}

for(let z of document.getElementsByTagName('input')){
    z.addEventListener('focusout', Write);
}

// _______________________________________________________________________________________

let inputs = document.querySelector('.inputs');

let q = 0;

let WriteValue = function(){
    if(q === 0){
        alert(this.value);
        q++;
    } 
}

inputs.onclick = function(){
    for(let y of document.getElementsByTagName('input')){
        y.addEventListener('click', WriteValue);  
    }
}

// _______________________________________________________________________________________

let numberInput = document.querySelector('.number');

numberInput.onclick = function(){
    numberInput.value = Math.pow(numberInput.value, 2);
}

// _______________________________________________________________________________________

let container = document.querySelector('.container');

let PaintRed = function(){
    this.style.backgroundColor = 'red';
}
let PaintGreen = function(){
    this.style.backgroundColor = 'green';
}

container.onclick = function(){
    for (let i of document.getElementsByClassName('image')) {
        if(i.getAttribute('style') === 'background-color: red;'){
            i.removeEventListener('click', PaintRed);
            i.addEventListener('click', PaintGreen);
        } else if(i.getAttribute('style') === 'background-color: green;'){
            i.removeEventListener('click', PaintGreen);
            i.addEventListener('click', PaintRed);
        } else{
            i.addEventListener('click', PaintRed);
        }
    }
}