//variables

const qrty = document.getElementById("qwerty");
let phrs = document.getElementById("phrase");
let missed = 0;

let buttonReset = document.getElementsByClassName("btn__reset");
// movie phrases held in array
let phraseArray = [
    "Louis I think this is the beginning of a beautiful friendship.",
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
 let phraseLetters= getRandomPhraseArray(phraseArray);

//function to create list item, append to ul and check for whitespace.
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
       }
    };
};
// call addPhraseToDisplay function
addPhraseToDisplay (phraseLetters);
 

// function that checks for pressed letter match in phrase and disable choice.


function checkletter (qrty){
    let buttons = document.getElementsByClassName("letter");
    console.log(buttons);
    console.log(event.target.innerHTML);
    for (i=0; i<buttons.length; i++){

        if(event.target.innerHTML == buttons[i].innerHTML){
            console.log(buttons[i].innerHTML);
            buttons[i].className += ' show';
            
        }else{
            
            
           // return null;
        }
    };  
      event.target.className += "chosen";

        event.target.disabled=true;

};

// event listener on keyboard.
qrty.addEventListener('click', checkletter, false);
