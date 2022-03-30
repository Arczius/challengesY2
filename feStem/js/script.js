"use strict";

/*
    DV: a constant boolean which allows for console logs where needed when it's set to true
*/
const debugMode = true;


const main = document.querySelector(".container#main");


var curPage = 0;

var answers = [];

const eensBtnLabel = "Eens";
const dontKnowBtnLabel = "Geen van beide";
const oneensBtnLabel = "Oneens";

// assigning the variables eensBtn, idkBtn and oneensBtn, to be undefined
var [eensBtn, idkBtn, oneensBtn] = [undefined, undefined, undefined];


var mainInner = `
    <div class='w3-container w3-display-container'>
        <div class=''>
            <h1>StemWijzer</h1>
            <h2>Tweede Kamerverkiezingen</h2>
            <p>Test je politieke voorkeur aan de hand van 30 stellingen</p>
            <button id='start_btn' class='w3-btn w3-round-large w3-indigo w3-hover-blue w3-xxlarge'>Start</button>
        </div>
    </div>
`;

main.innerHTML = mainInner;

const buttonsHolder = `
        <div>
            <button id='eensButton' class='w3-btn w3-round-large w3-green'>${eensBtnLabel}</button>
            <button id='dontKnowButton' class='w3-btn w3-white w3-round-large w3-border w3-border-black'>${dontKnowBtnLabel}</button>
            <button id='oneensButton' class='w3-btn w3-round-large w3-red'>${oneensBtnLabel}</button>
        </div>
`;

function questions(start){
    if(!start){
        curPage++
    }
    
    main.innerHTML = `
    <div>
        <h1>${subjects[curPage].title}</h1>
        <p>${subjects[curPage].statement}</p>
        ${buttonsHolder}
    </div>
    `;
    console.log(eensBtn)
}

var startBtn = document.querySelector("#start_btn");

startBtn.onclick = function(){
    questions(true);
}

console.log(subjects.length);