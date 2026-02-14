//console.log("we're in Module2")

let game11=document.getElementById("interface_game")
game11.innerHTML=" "

let funBtn=document.getElementById("funBtnStart")
funBtn.addEventListener("click", ()=>{game1(); 
funBtn.addEventListener("touchstart", ()=>{game1();})      
  const canvas=document.getElementById("game1") //canvas did not need an id; maybe b/s there's only one
    const context=canvas.getContext("2d");
canvas.style.display="block";
})  

 //reset button to reset page when game stops
 let resetBtn=document.getElementById("reset") 
resetBtn.addEventListener("click", ()=>{location.reload();})     


function ball_mvt(ball, paddle, player, midX){
const canvas=document.getElementById("game1") //canvas did not need an id; maybe b/s there's only one
const context=canvas.getContext("2d");

    if (ball.x <0 || ball.x > canvas.width){ball.speedX=-ball.speedX;}
    if (ball.y <0){ball.speedY=-ball.speedY;}
    if (ball.y > paddle.y){
        const isLeftOfPaddle =ball.x < paddle.x;
        const isRightOfPaddle=ball.x> paddle.x + paddle.len;
        if (isLeftOfPaddle || isRightOfPaddle){
            ball.x=midX; ball.y=0; ball.speedX=1, ball.speedY= 5;
            player.hits=0;          
            }
        else{ball.speedY=-ball.speedY;
            const midPaddle=paddle.x+(paddle.len/2);
            ball.speedX=.1 * (ball.x-midPaddle);
            const ballHitSound=document.getElementById("ballHitSound");
            ballHitSound.play();
            player.hits++;
            if (player.hits>player.hightscore){player.hightscore=player.hits;}
        }
}}

function game1(){game();
    funBtn.style.display="none"
}//func holding the game

function game () {//the game
//first let's get the canvas and context
const canvas=document.getElementById("game1") //canvas did not need an id; maybe b/s there's only one
const context=canvas.getContext("2d");

const midX=canvas.width/2
//now let's declare the ball, paddle & player & their starting values
let ball={x:midX, y:0, speedX:1, speedY: 5}//why is the ball a var, but the paddle a const?
const paddle={x:midX-50, y:canvas.height-50, len:100, direction: 0}
const player={hits:0, hightscore:0}
var info_to_player=document.getElementById("info")

//callback func for animation frame

const render=()=> {
    paddle.x=paddle.x+paddle.direction;

    if (player.hits<20){
        ball_mvt(ball, paddle, player, midX);
        ball.x=ball.x+ball.speedX;
        ball.y=ball.y+ball.speedY;}
    else { player.hits=11;
        info_to_player.innerHTML="Refresh page; then answer questions to right"
        ball_mvt(ball.y=0, paddle, player, midX);   
        ball.x=ball.x+ball.speedX;
        ball.y=ball.y+ball.speedY;    
    };
    
    
    //clear prev drawing
    context.clearRect(0,0, canvas.width, canvas.height);
    context.beginPath();

    //turning to the ball
    context.arc(ball.x, ball.y, 5, 0, Math.PI*2);

    //paddle
    context.moveTo(paddle.x, paddle.y); //wehre is paddleY defined?
    context.lineTo(paddle.x + paddle.len, paddle.y);

    //draw ball & paddle
    context.stroke();

    //draw hit count and high score
    context.font="20px sans-serif";
    context.fillStyle='white'
    context.fillText("Hits: " + player.hits, 20, paddle.y+30);
    context.fillText("High score: " + player.hightscore, canvas.width-140, player.y+30);
    context.strokeStyle='purple';
    context.strokeText("Hits: " + player.hits, 20, paddle.y+30);

    //continue animation
    requestAnimationFrame(render);
}

//event handlers

document.addEventListener("keydown", e=>{
    if (e.code=="ArrowLeft"){paddle.direction=-5;
        const testingSound=document.getElementById("defeat1");
        testingSound.play();
    }
    if (e.code=="ArrowRight"){paddle.direction=5;
        const testingSound=document.getElementById("defeat1");
        testingSound.play();
    }
});

document.addEventListener("keyup", ()=> {paddle.direction=0;});

// -- on-screen / touch / pointer controls for mobile:
const leftBtn = document.getElementById('leftBtn');
const rightBtn = document.getElementById('rightBtn');

function startLeft(){ paddle.direction = -6; }
function startRight(){ paddle.direction = 6; }
function stopMove(){ paddle.direction = 0; }

if (leftBtn){
  leftBtn.addEventListener('pointerdown', e=>{ e.preventDefault(); startLeft(); });
  leftBtn.addEventListener('pointerup', stopMove);
  leftBtn.addEventListener('pointercancel', stopMove);
  leftBtn.addEventListener('pointerleave', stopMove);
}
if (rightBtn){
  rightBtn.addEventListener('pointerdown', e=>{ e.preventDefault(); startRight(); });
  rightBtn.addEventListener('pointerup', stopMove);
  rightBtn.addEventListener('pointercancel', stopMove);
  rightBtn.addEventListener('pointerleave', stopMove);
}

// Make buttons also respond to touchstart for older browsers
['touchstart','touchend'].forEach(ev => {
  if (leftBtn) leftBtn.addEventListener(ev, e=>{ e.preventDefault(); if (ev==='touchstart') startLeft(); else stopMove(); });
  if (rightBtn) rightBtn.addEventListener(ev, e=>{ e.preventDefault(); if (ev==='touchstart') startRight(); else stopMove(); });
});

requestAnimationFrame(render)


}