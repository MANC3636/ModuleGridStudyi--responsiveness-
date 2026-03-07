

const dino=document.getElementById("dino")
const rock=document.getElementById("rock")
const score=document.getElementById("dinoScore")

const DinoFunBtn=document.getElementById("funBtn1")

const instructions=document.getElementById("timerP2")



//what happens when dino jumps, build the dino func
//attaches the animation and then removes it from the classList

function jump(){
    console.log("hi")    
    dino.classList.add('jump-animation');
    setTimeout(()=>{dino.classList.remove('jump-animation')}, 700);
}
//now we attach an EventListener to the document

//document.addEventListener('keypress', ()=>{jump();})
//-------------------------stop here----------------------------------
//event listener improved
document.addEventListener('keypress', ()=>{
    /* if dino classList does not contain jump-animation, then we can jump */
    if(!dino.classList.contains('jump-animation')){ jump()}
    }) 
    
let NumScore=0;


//collision detection
//we put it in a setInterval 
//so that we can check the state of the game at the interval
//let's us 50ms intervals
//TODO: work on collision Detection.
setInterval(()=>{
  ++NumScore;//increment score, get it working
score.innerHTML=NumScore;}, 1000);/* every 1000ms, we increment score by 1 */  

setInterval(()=>{

    //get rock & dino pos && make rock disappear when offscreen
    let dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
//check with console.log
    const rockLeft=parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
    //let rockLeft=rock.getBoundingClientRect().left;
  
    //let's get rid of offscreen rock
    //collision detection logic
   
    if (rockLeft <10) {
        rock.style.display = "none";
        }
    if(rockLeft>0 && rockLeft<50 && dinoTop>=150){//collision
        instructions.innerText="Game Over! "
        instructions.style.color="red";
        //console.log("Game Over! Your final score is: " + NumScore); 
       alert("Game Over! Your Longevity is: " + NumScore);
        location.reload(); /* reloads the current document */
    
         }  
    
     else {rock.style.display = "inline-block";
        
     }
     } , 50);/* every 50ms, we check positions for collision */