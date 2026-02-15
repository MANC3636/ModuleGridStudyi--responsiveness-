import {username, num1, num2, num3, num4, num5, num6, input1, input2, input3} from "./MathAddhelper.js";

console.log("we're in MathAdd")
//const pongControl=document.getElementById("Pcontrols")


const button1=document.getElementById("mysubmit1");
const button2=document.getElementById("mysubmit2");
const button3=document.getElementById("mysubmit3");
const Response1=document.getElementById("response1");
const Response2=document.getElementById("response2");
const Response3=document.getElementById("response3");
var ans1=document.getElementById("input1")
var ans2=document.getElementById("input2")
var ans3=document.getElementById("input3")
var correct_count=0;

function defeat(response){
    
    response.innerHTML="Wrong Answer, try again!";
    response.classList.add("bouncingBad");
}

//odd syntax to get the value
function getting_right_ans(button, ans, numA, numB, response){
        console.log("in addition getting_right_ans")
        button.addEventListener('click', function(){   
    
    if (ans.value==numA+numB){response.innerHTML="that is the correct answer";
        correct_count++;
        response.classList.add("bouncing");
        button.style="display: none";
        //music for correct answer
        const correctSound=document.getElementById("rightAnsSound");
        correctSound.play();
        console.log(correct_count)
        if (correct_count==3){pongControl.style.display="inline";
            //document.getElementById("buttonDiv").style.display="inline";
            //info_to_player.innerHTML=" Refresh page, and play More!!";
        }
            }
    else{
        const testingSound=document.getElementById("defeat1")   ;
        testingSound.play();//sound for wrong answer
        setTimeout(() => {defeat(response)}, 1200)//delay defeat mx by 1200 ms to allow sound to play first

    }
        
})}

/*


var r_w1=getting_right_ans(button1, ans1, num1, num2, Response1)
var r_w2=getting_right_ans(button2, ans2, num3, num4, Response2)
var r_w3=getting_right_ans(button3, ans3, num5, num6, Response3)
*/

getting_right_ans(button1, ans1, num1, num2, Response1)
getting_right_ans(button2, ans2, num3, num4, Response2)
getting_right_ans(button3, ans3, num5, num6, Response3)