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
document.getElementById("funBtn1").addEventListener("click", () => {
    const display = document.getElementById("timerP1");    
    const threeMinutes = 1 * 60; // 3 minutes in seconds default 3 minutes
document.getElementById("game1").style.display="none";
document.getElementById("right").style.display="none";
    startTimer(threeMinutes, display);
});

document.getElementById("funBtn").addEventListener("click", () => {
    const display = document.getElementById("timerP1");
    const threeMinutes = 1 * 60; // 3 minutes in seconds
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
    const script = loadScript("../MathSub/insert.js", "subHTML");
    script.onload = () => {
        console.log("subHTML loaded");
    };
    script.onerror = () => {
        console.error("Failed to load subHTML script");
    };
    document.getElementById("right").style.display="block";
})
