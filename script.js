let container = document.querySelector('.container');

for(let a of container.getElementsByClassName('img')){
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

let inputs = document.querySelector('.inputs');
let paragraph = document.getElementById('text');

let Write = function() {
    paragraph.innerHTML = this.value;
}

for(let z of inputs.getElementsByTagName('input')){
    z.addEventListener('focusout', Write);
}

// _______________________________________________________________________________________

let q = 0;

let WriteValue = function(){
    if(q === 0){
        alert(this.value);
        q++;
    } 
}

inputs.onclick = function(){
    for(let y of inputs.getElementsByTagName('input')){
        y.addEventListener('click', WriteValue);  
    }
}

// _______________________________________________________________________________________
let numberInput = document.querySelector('.number');

numberInput.onclick = function(){
    numberInput.value = Math.pow(numberInput.value, 2);
}

// _______________________________________________________________________________________

let PaintRed = function(){
    this.style.backgroundColor = 'red';
}
let PaintGreen = function(){
    this.style.backgroundColor = 'green';
}

container.onclick = function(){
    for (let i of container.getElementsByClassName('image')) {
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
