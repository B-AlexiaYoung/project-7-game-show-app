//variables

const qrty = document.getElementById("qwerty");
let phrs = document.getElementById("phrase");
let missed = 0;

let buttonReset = document.getElementsByClassName("btn__reset");
// movie phrases held in array
let phraseArray = [
    "Louis I think this is the beginning of a beautiful friendship",
    "If you build it they will come",
    "I see dead people",
    "Elementary my dear Watson",
    "Nobody puts Baby in a corner",
    "Hasta la vista baby",
    "I want to be alone",
    "I love the smell of napalm in the morning",
    "Good morning Vietnam",
    "I know kung fu",
];

let phraseLetters= getRandomPhraseArray(phraseArray);
let match = false;
let lostLife = document.querySelectorAll("img");
let letterfound= null;
let buttonPressed = 0;
let buttons = document.getElementsByClassName("letter");

// event listener to hide overlay 
window.addEventListener('click', (event) => {
    console.log(event.target);
    if(event.target.className ==="btn__reset"){
        let hideovrly = document.getElementById("overlay");
        hideovrly.style.display = "none";
    }   
});

// function to get, convert to lower case, and split random phrase
 function getRandomPhraseArray(phraseArray){
    let quote = Math.floor(Math.random() * phraseArray.length);
    //console.log(phraseArray[quote]);
    let splitQuote = phraseArray[quote].toLowerCase().split(""); 
    //console.log(splitQuote)
    return splitQuote;
 };

//function to create list of letter in phrase, append to ul and check for  whitespace.
function addPhraseToDisplay (letters){
    let list = document.getElementsByTagName('ul');

    for(i=0; i<letters.length; i++){
        //console.log(letters[i]);
        const li=  document.createElement("li");
        list[0].appendChild(li);
            
        li.innerHTML= letters[i];
        if (letters[i] !=" ") {
            li.className +='letter';
       } else {
           li.className +='space';
       };
    };
};

// call addPhraseToDisplay function
addPhraseToDisplay (phraseLetters);
 
// function that checks for pressed letter match in phrase and reveals the right letter
   function checkletter (qrty){
    let buttons = document.getElementsByClassName("letter");
    //console.log(buttons);
    //console.log(event.target.innerHTML);
    letterfound=null;
    for (i=0; i< buttons.length; i++){
        let buttonPressed = event.target.innerHTML;
        if(buttonPressed == buttons[i].innerHTML){
            //console.log(buttons[i].innerHTML);
            letterfound= buttonPressed;
            buttons[i].className += ' show';
            //console.log(buttons[i]);
            buttons[i].setAttribute("style", "color:white; font-size: 2em; border: 2px solid #254b87; -webkit-transition: width 1s, height 1s, background-color 2s");
            //console.log(letterfound);
        };   
    }; 
  };  

  function checkWin() {
    let shownLetters = document.getElementsByClassName("show");
    let letter = document.getElementsByClassName("letter");
    console.log(shownLetters);
    let showOverlay = document.getElementById("overlay");
    //console.log(shownLetters.length);
    //console.log(letter.length);
        if(shownLetters.length == letter.length){
            showOverlay.classList.remove("lose");
            showOverlay.className +=" win";
            showOverlay.style.display ="flex";
            console.log(showOverlay.className);
            document.getElementsByTagName("H2")[0].setAttribute("id", "titleSet");
            const setNewTitle = document.getElementById("titleSet").innerHTML= "Winner!";
            resetGame ();
        } else if(missed >= 5){
            showOverlay.classList.remove("win");
            showOverlay.className += " lose";
            showOverlay.style.display = "flex";
            document.getElementsByTagName("H2")[0].setAttribute("id", "titleSet");
            const setNewTitle = document.getElementById("titleSet").innerHTML= "Sorry, you lose!";
            resetGame ();
        }
    };

// listener for clicked button and removes heart if no match.
qrty.addEventListener('click',function (e){
    checkletter();
    // call for reset here
    if (event.target.tagName ==="BUTTON"){
        event.target.className += "chosen";
        event.target.disabled=true;

    if (letterfound ===null){
        lostLife[missed].src="images/lostHeart.png";

        console.log("letterfound should now be null");
        console.log(letterfound);
        console.log(missed);
    
        if (missed >= 0|| missed < 5){
            lostLife[missed].src="images/lostHeart.png";
            
        }  
        missed += 1;
        checkWin();
    } 
    else{
        checkWin();    
    }
};    

});
 
function resetGame(){
// traverse DOM and remove li from ul
const accessdiv= document.getElementById("phrase");  //get div
const accesstext = accessdiv.childNodes[0]; // get text
const accessUl= accesstext.nextSibling;//get ul
//console.log(accessUl);
    while(accessUl.firstChild) {
        accessUl.removeChild(accessUl.firstChild);
        //console.log(accessUl);
    }

// reset game keyboard
/*====== NOTE TO SELF==========
 undefined error will occur if loop is equal to btn.length btn is an array starts at 0 
so if you make it equal to btn.length it will go through one more time than needed and throw undefined error
 So logically if the code works and throws an error then its looping more than it needs to.   
*/

 const btn= document.getElementsByTagName("BUTTON");
 //console.log(btn.length);
    for (i=0; i<btn.length; i++){
        btn[i].classList.remove("chosen");  
        btn[i].classList.remove("disabled");
        btn[i].disabled=false;
    }  
// start button to reset button
const resetButton =document.getElementsByClassName("btn__reset");
resetButton[0].innerHTML="Play Again";
// generate new phrase
phraseLetters= getRandomPhraseArray(phraseArray);
addPhraseToDisplay (phraseLetters);

// get red hearts
missed = 0;
for(i=0; i<lostLife.length; i++){
    lostLife[i].src="images/liveHeart.png";
}

// remove win or lose class from overlay
/*   let showOverlay = document.getElementById("overlay");
showOverlay.classList.remove("win");
showOverlay.classList.remove("lose");
console.log(showOverlay.classList);     */
};
