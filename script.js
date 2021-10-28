let img = document.querySelectorAll('img');
let images = {
    0: img[0],
    1: img[1],
    2: img[2],
}

img[0].onclick = function(){
    alert(images[0].getAttribute('src'));
}
img[1].onclick = function(){
    alert(images[1].getAttribute('src')); 
}
img[2].onclick = function(){
    alert(images[2].getAttribute('src')); 
}

// _______________________________________________________________________________________

let link = document.querySelector('a');
let href = link.getAttribute('href');
let i = 0;

function addLink() {
    if (i === 0) {
        link.textContent += '   ' + href;
        console.log(href);
    }
    i++;
}

link.addEventListener('mousemove', addLink);
link.removeEventListener('mouseout', addLink);

// _______________________________________________________________________________________

let input = document.querySelectorAll('input');
let paragraph = document.getElementById('text');
const inputs = {
    0: input[0],
    1: input[1],
    2: input[2],

    Write0() {
        paragraph.innerHTML = inputs[0].value;
    },
    Write1() {
        paragraph.innerHTML = inputs[1].value;
    },
    Write2() {
        paragraph.innerHTML = inputs[2].value;
    }
}

inputs[0].addEventListener('focusout', inputs.Write0);
inputs[1].addEventListener('focusout', inputs.Write1);
inputs[2].addEventListener('focusout', inputs.Write2);

// _______________________________________________________________________________________
let q = 0;
let w = 0;
let e = 0;
inputs[0].onclick = function(){
    if(q === 0){
        alert(inputs[0].value);
        q++;
    }

}
inputs[1].onclick = function(){
    if(w === 0){
        alert(inputs[1].value);
        w++;
    }
}
inputs[2].onclick = function(){
    if(e === 0){
        alert(inputs[2].value);
        e++;
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
