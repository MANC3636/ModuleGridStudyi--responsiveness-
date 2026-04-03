const dino=document.getElementById("dino")
const rock=document.getElementById("rock")
const score=document.getElementById("score")



//what happens when the dino jumps, build the dino fun
//attaches the animation and then removes it from classList

function jump(){
        console.log("hi");
        dino.classList.add('dinoJump-animation');
      
        setTimeout(()=>(dino.classList.remove("dinoJump-animation")),  250);
        }

//const sound1=new Audio("sound.wav");
function playSound(sound){
        const sound1=new Audio(sound);
        sound1.play();
        }       

document.addEventListener('keypress', ()=>{
        if(!dino.classList.contains('dinoJump-animation')){jump();}})


setInterval(()=>{//setInterval does 
//get rock & dino pos && make rock disappear when offscreen
        const dinoTop=parseInt(window.getComputedStyle(dino).getPropertyValue('top'));
        //check with console.log
        /**
         * Gets the computed left position of the rock element in pixels and converts it to an integer
         * @type {number}
         */
        const rockLeft=parseInt(window.getComputedStyle(rock).getPropertyValue('left'));
        const rockTop=parseInt(window.getComputedStyle(rock).getPropertyValue('top'));
        //check with console.log
        console.log(rockLeft + "; this is the pos of rockTop: " + rockTop)
        if (rockLeft<0 || rockTop>175){rock.style.display="none";
                                        playSound('sound.wav');
        }//let's get rid of offscreen

        //------collision detection-----------
        if ((rockLeft>20 && rockLeft<120 )&&(dinoTop>=150)){
        alert("game over");
        location.reload();
        }
        }, 100);






