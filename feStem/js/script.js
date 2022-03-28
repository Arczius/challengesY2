"use strict";

/*
    DV: a constant boolean which allows for console logs where needed when it's set to true
*/
const debugMode = true;


const main = document.querySelector(".container#main");


var curPage = 0;

var answers = [];

const eensBtn = "Eens";
const dontKnowBtn = "Geen van beide";
const oneensBtn = "Oneens";


var mainItem = `
    <div class='w3-container w3-display-container'>
        <div class=''>
            <h1>StemWijzer</h1>
            <h2>Tweede Kamerverkiezingen</h2>
            <p>Test je politieke voorkeur aan de hand van 30 stellingen</p>
            <button id='start_btn' class='w3-btn w3-round-large w3-indigo w3-hover-blue w3-xxlarge'>Start</button>
        </div>
    </div>
`;

main.innerHTML = mainItem;


function questions(start){
    
    main.innerHTML = `
    <div>
        <h1>${subjects[curPage].title}</h1>
        <p>${subjects[curPage].statement}</p>
        <div>
            <button id='eensButton'>${eensBtn}</button>
            <button id='dontKnowButton'>${dontKnowBtn}</button>
            <button id='oneensButton'>${oneensBtn}</button>
        </div>
    </div>
    `;


    if(!start){
        curPage++
    }

}



var startBtn = document.querySelector("#start_btn");


startBtn.onclick = function(){
    questions(true);
}


console.log(subjects.length);