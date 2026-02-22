import {username, num1, num2, num3, num4, num5, num6, input1, input2, input3} from "./helper.js";


console.log("we're in MathSub")


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
function getting_right_subAans(button, ans, numA, numB, response){
        console.log("in subtraction getting_right_subAans")  
    button.addEventListener('click', function(){ 
        if (ans.value==numA-numB){
            response.innerHTML="that is the correct answer";
            correct_count++;
            response.classList.add("bouncing");
            button.style="display: none";
            //music for correct answer
            const correctSound=document.getElementById("rightAnsSound");
            correctSound.play();
            //console.log(correct_count)
            if (correct_count===3){
                document.getElementById("Pcontrols").style.display="inline";
                document.getElementById("controls").style.display="inline";
                //info_to_player.innerHTML=" Refresh page, and play More!!";
            }
        }
        else{
            const testingSound=document.getElementById("defeat1");
            testingSound.play();//sound for wrong answer
            setTimeout(() => {defeat(response)}, 200)//delay defeat mx by 1200 ms to allow sound to play first
        }
    });
}




getting_right_subAans(button1, ans1, num1, num2, Response1)
getting_right_subAans(button2, ans2, num3, num4, Response2)
getting_right_subAans(button3, ans3, num5, num6, Response3)











//1. I now have a helper module and I can start work on questions
//2. okay the code below allows me to compare input value with sum of num1 & num2 
//num1 and num2 are generated from another file
//3. now I can responsive to correct or bad answers

/*
const button=document.getElementById("mysubmit");
const response=document.getElementById("response");
var ans;

//odd syntax to get the value
button.addEventListener('click', function(){
    ans =document.getElementById("input1");
    if (ans.value==num1+num2){response.innerHTML="that is the correct answer";}
    else{response.innerHTML="try adding on paper";}
    document.res
   
    
})
*/
