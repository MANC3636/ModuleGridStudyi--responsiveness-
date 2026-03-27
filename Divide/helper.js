//okay.  Division works, but I have to do something about prime numbers.


console.log("okay, I can feed data to insert.js, which will change the html in math-insert")

export var username="Pupil";

function isPrime(num) {
    // Validate input type
    if (typeof num !== "number" || !Number.isInteger(num)) {
        throw new Error("Input must be an integer.");
    }

    // Handle numbers less than 2 (not prime)
    if (num < 2) return false;

    // 2 and 3 are prime
    if (num === 2 || num === 3) return true;

    // Eliminate even numbers and multiples of 3
    if (num % 2 === 0 || num % 3 === 0) return false;

    // Check divisors up to sqrt(num)
    for (let i = 5; i * i <= num; i += 6) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
    }
    return true;
}

export var num1=Math.floor(Math.random()*20)+1;
const divisors1 = [];
for (let i = 1; i <= num1; i++) {
    if (num1 % i === 0 ) {
        
        divisors1.push(i);
    }
}
export var divisor2=divisors1[Math.floor(Math.random() * divisors1.length)];
export var num2=divisor2;

export var num3=Math.floor(Math.random()*20)+1;
const divisors3 = [];   
for (let i = 1; i <= num3; i++) {
    if (num3 % i === 0) {
        divisors3.push(i);
    }   
}
export var divisor4=divisors3[Math.floor(Math.random() * divisors3.length)];
export var num4=divisor4;

export var num5=Math.floor(Math.random()*20)+1;
const divisors5 = [];
for (let i = 1; i <= num5; i++) {
    if (num5 % i === 0) {
        divisors5.push(i);
    }   
}
export var divisor6=divisors5[Math.floor(Math.random() * divisors5.length)];    
export var num6=divisor6;



export var phraseA=document.getElementById("phraseA")
export var phraseB=document.getElementById("phraseB")
export var input1=document.getElementById("input1");
export var phraseC=document.getElementById("phraseC")
export var phraseD=document.getElementById("phraseD")
export var input2=document.getElementById("input2");
export var phraseE=document.getElementById("phraseE")
export var phraseF=document.getElementById("phraseF")
export var input3=document.getElementById("input3");



phraseA.textContent="Farmer John has " + num1 + " boxes.";
phraseB.textContent="If he put " + num2 + " apples in each box, how many apples would he have?";
phraseC.textContent="There are " + num3 + " forks on each table.";
phraseD.textContent="If there are " + num4 + " tables, how many forks are there?";
phraseE.textContent="Some friends threw a party, and each friend gives " + num5 + "  dollars to the party.";
phraseF.textContent="If there are " + num6 + " friends, how much money was given?";







function mult1(num1, num2){return num1/num2;}
function mult2(num3, num4){return num3/num4;}
function mult3(num5, num6){return num5/num6;}




input1.setAttribute("placeholder",  username + ", try " + num1 + " divided by " +  num2);
input2.setAttribute("placeholder",  username + ", try " + num3 + " divided by " +  num4);
input3.setAttribute("placeholder",  username + ", try " + num5 + " divided by " +  num6);


//TODO:  separate PhaseA into A & B. What is the HTML for that?
//TODO: now I have to find a way to compare the input with the sum of 
