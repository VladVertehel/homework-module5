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

link.addEventListener('mousemove', addLink.bind(link));
link.removeEventListener('mouseout', addLink.bind(link));

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

inputs[0].addEventListener('focusout', inputs.Write0.bind(inputs));
inputs[1].addEventListener('focusout', inputs.Write1.bind(inputs));
inputs[2].addEventListener('focusout', inputs.Write2.bind(inputs));

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

let div = document.querySelectorAll('.image');
let divs = {
    0: div[0],
    1: div[1],
    2: div[2],

    // PaintRed() {
    //     div[0].classList.add('red');
    //     div[1].classList.add('red');
    //     div[2].classList.add('red');
    // },
    // PaintGreen() {
    //     div[0].classList.add('green');
    //     div[1].classList.add('green');
    //     div[2].classList.add('green');
    // }
    Paint0() {
        divs[0].classList.add('red');
        if(divs[0].classList.contains('green')){
            divs[0].classList.replace('green', 'red');
        } else{
            divs[0].classList.replace('red', 'green');
        }
    },
    Paint1() {
        divs[1].classList.add('red');
        if(divs[1].classList.contains('green')){
            divs[1].classList.replace('green', 'red');
        } else{
            divs[1].classList.replace('red', 'green');
        }
    },
    Paint2() {
        divs[2].classList.add('red');
        if(divs[2].classList.contains('green')){
            divs[2].classList.replace('green', 'red');
        } else{
            divs[2].classList.replace('red', 'green');
        }
    }
}

// divs[0].onclick = function(){
//     if(divs[0].classList.contains('green')){
//         divs[0].classList.remove('green');
//         divs.PaintRed();
//     } else{
//         divs.PaintRed();
//     }
// }
// divs[0].ondblclick = function(){
//     if(divs[0].classList.contains('red')){
//         divs[0].classList.remove('red');
//         divs.PaintGreen();
//     }
// }

// divs[0].onclick = function(){
//     divs[0].classList.add('red');
//     if(divs[0].classList.contains('green')){
//         divs[0].classList.replace('green', 'red');
//     } else{
//         divs[0].classList.replace('red', 'green');
//     }
// }

divs[0].addEventListener('click', divs.Paint0.bind(inputs));
divs[1].addEventListener('click', divs.Paint1.bind(inputs));
divs[2].addEventListener('click', divs.Paint2.bind(inputs));