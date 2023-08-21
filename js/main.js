console.log('Raman is live now!');

// <h1>Hi, this is heading</h1>
//     <div id="imglist">
//          <input type="text" name="" id="">
//         <img class="dice" src="./img/1.png" alt="dice1">
//          <input type="text" name="" id="">
//         <img class="dice" src="./img/2.png" alt="dice2">
//     </div>
// <button id="play">Play</button>

let heading = document.createElement('h1');
let imgDiv = document.createElement('div');
let inputDiv = document.createElement('div');
let input1 = document.createElement('input');
let img1 = document.createElement('img');
let input2 = document.createElement('input');
let img2 = document.createElement('img');
let btn = document.createElement('button');


heading.classList.add('heading');
heading.innerText = "Draw!"
imgDiv.setAttribute("id", "imglist");
input1.setAttribute("id", "input1");
input1.setAttribute("value", "Player 1");
input2.setAttribute("id", "input2");
input2.setAttribute("value", "Player 2");
img1.classList.add('dice');
img2.classList.add('dice');
img1.setAttribute('src', './img/6.png');
img2.setAttribute('src', './img/6.png');
img1.setAttribute('alt', 'dice1');
img2.setAttribute('alt', 'dice2');
btn.setAttribute("id", "play");
btn.innerHTML = "Play";
btn.setAttribute("onclick", 'imgRandom()');
btn.setAttribute("style", "margin-bottom: 100px")



document.body.appendChild(heading);
document.body.appendChild(inputDiv);
inputDiv.appendChild(input1);
inputDiv.appendChild(input2);
document.body.appendChild(imgDiv);
imgDiv.appendChild(img1);
imgDiv.appendChild(img2);
document.body.appendChild(btn);

function imgRandom() {
    let images = ['./img/1.png', './img/2.png', './img/3.png', './img/4.png', './img/5.png', './img/6.png'];
    let random1 = Math.random();
    random1 = Math.floor(random1 * 6);
    let random2 = Math.random();
    random2 = Math.floor(random2 * 6);

    img1.setAttribute('src', images[random1]);
    img2.setAttribute('src', images[random2]);

    if (random1 < random2) {
        heading.innerText = `${input1.value} wins`
    } else if (random1 == random2) {
        heading.innerText = "Match draw"
    } else {
        heading.innerText = `${input2.value} wins`
    }
}