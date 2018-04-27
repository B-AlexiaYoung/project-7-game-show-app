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
    console.log(phraseArray[quote]);
    let splitQuote = phraseArray[quote].toLowerCase().split(""); 
    console.log(splitQuote)
    return splitQuote;
       
 };
 //let phraseLetters= getRandomPhraseArray(phraseArray);

//function to create list of letter in phrase, append to ul and check for  whitespace.
function addPhraseToDisplay (letters){
    let list = document.getElementsByTagName('ul');

    for(i=0; i<letters.length; i++){
        console.log(letters[i]);
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


// This one almost works   funky behavior
   function checkletter (qrty){
    let buttons = document.getElementsByClassName("letter");
    console.log(buttons);
    console.log(event.target.innerHTML);
    letterfound=null;
    for (i=0; i< buttons.length; i++){
        let buttonPressed = event.target.innerHTML;
        if(buttonPressed == buttons[i].innerHTML){
            console.log(buttons[i].innerHTML);
            letterfound= buttonPressed;
            buttons[i].className += ' show';
            console.log(letterfound);
        };   
    }; 
  };  

  function checkWin() {
    let shownLetters = document.getElementsByClassName("show");
    let letter = document.getElementsByClassName("letter");
    console.log(shownLetters);
        if(shownLetters.length == letter.length){
            alert("you win");
        };
    
    };





// listener for clicked button and removes heart if no match.
//===========================
qrty.addEventListener('click',function (e){
    checkletter();
    
    if (event.target.tagName ==="BUTTON"){
        event.target.className += "chosen";
        event.target.disabled=true;
    };    

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
});
 


