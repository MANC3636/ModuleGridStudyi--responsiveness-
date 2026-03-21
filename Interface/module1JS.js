console.log("we're in Module1")


// HTML: Add this to your HTML file
// <div id="timer">03:00</div>
// <button id="startButton">Start Game</button>

// CSS: Add this to your CSS file
/* #timer {
    font-size: 2em;
    font-weight: bold;
} */    
let timerInterval;
let countdown=new Audio('../13_sec_countdown.wav');

function startTimer(duration, display) {
    let timer = duration, minutes, seconds;

    timerInterval = setInterval(() => {
        minutes = Math.floor(timer / 60);
        seconds = timer % 60;

        // Format time as MM:SS
        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = `${minutes}:${seconds}`;

        if (--timer < 2) {
            clearInterval(timerInterval);
            document.getElementById("left").style.display="none"
            document.getElementById("game1").style.display="none" 
           
        }
        else if (--timer<50 &&--timer>14){
            document.getElementById("timerP2").innerText="Tick Tock..."
        }
        else if (--timer<13 && --timer>2){
            //countdown.play();
            document.getElementById("timerP2").innerHTML="Prepare to stop."
            document.getElementById("timerP2").style.color="red"           
        }
       

    }, 1000);
} 
//dynamically load MathAdd and MathSub scripts and make them children of op_container
function loadScript(url, id) {
    const script = document.createElement('script');
    script.src = url;
    script.id = id;
    script.type = "module";
    script.async = true;
    document.getElementById("op_container").appendChild(script);
    console.log(`Loaded script: ${url}`);
    
    return script;
}

//loadScript("../MathAdd/module3JS.js", "addHTML");
//loadScript("../MathSub/module4JS.js", "subHTML");



//-------addEventListener Timers----------------------
document.getElementById("funBtnStart").addEventListener("click", () => {
    const display = document.getElementById("timerP1");    
    const threeMinutes = 3 * 60; // 3 minutes in seconds default 3 minutes
    const oneMinute = 1 * 60; // 1 minute in seconds
//document.getElementById("game1").style.display="none";
document.getElementById("right").style.display="none";
    startTimer(oneMinute, display);
});

document.getElementById("funBtn").addEventListener("click", () => {
    const display = document.getElementById("timerP1");
    const threeMinutes = 3 * 60; // 3 minutes in seconds
    const oneMinute = 1 * 60; // 1 minute in seconds
    startTimer(threeMinutes, display);
});

//-------addEventListener Math Buttons----------------------
document.getElementById("mathAddBtn").addEventListener("click", () => {
    const addBtb = document.getElementById("mathAddBtn");
    addBtb.style.backgroundColor="lightgreen";
    const script = loadScript("../MathAdd/module3JS.js", "addHTML");
    script.onload = () => {
        console.log("addHTML loaded");
    };
    script.onerror = () => {
        console.error("Failed to load addHTML script");
    };
    document.getElementById("right").style.display="block";
})

document.getElementById("mathSubBtn").addEventListener("click", () => {
    const subBtb = document.getElementById("mathSubBtn");
    subBtb.style.backgroundColor="lightblue";
    /**
     * Loads an external JavaScript file and injects it into a specified HTML element.
     * @function loadScript
     * @param {string} filePath - The relative path to the JavaScript file to load (e.g., "../MathSub/insert.js")
     * @param {string} targetElementId - The ID of the HTML element where the script content will be injected (e.g., "subHTML")
     * @returns {Promise|void} The result of loading and executing the script
     * @description Loads the script from the specified path and inserts it into the DOM element with the ID "subHTML"
     */
    const script = loadScript("../MathSub/insert.js", "subHTML");
    script.onload = () => {
        console.log("subHTML loaded");
    };
    script.onerror = () => {
        console.error("Failed to load subHTML script");
    };
    document.getElementById("right").style.display="block";
})

document.getElementById("mathMulBtn").addEventListener("click", () => {
    const mulBtb = document.getElementById("mathMulBtn");
    mulBtb.style.backgroundColor="lightyellow";
    const script = loadScript("../Multiply/insert.js", "mulHTML");
    script.onload = () => {
        console.log("multHTML loaded");
    };
    script.onerror = () => {
        console.error("Failed to load multHTML script");
    };
    document.getElementById("right").style.display="block";
})
