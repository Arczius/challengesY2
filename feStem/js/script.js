"use strict";

/*
    DV: a constant boolean which allows for console logs where needed when it's set to true
*/
const debugMode = true;

const main = document.querySelector(".container#main");

var mainItem = `
    <div class='w3-container'>
        <h1>StemWijzer</h1>
        <h2>Tweede Kamerverkiezingen</h2>
        <p>Test je politieke voorkeur aan de hand van 30 stellingen</p>
        <button id='start_btn' class='w3-btn w3-round-large w3-indigo w3-hover-blue w3-xxlarge'>Start</button>
    </div>
`;

main.innerHTML = mainItem;



var startBtn = document.querySelector("#start_btn");

if(debugMode){
    console.log(startBtn);
}