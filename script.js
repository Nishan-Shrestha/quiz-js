
 
const correctAnswer = ["A","A","A","A","A","A"];

const form = document.querySelector(".quiz-form");
 const result = document.querySelector(".result");
const quesition = document.querySelectorAll(".quesition")
form.addEventListener("submit", event =>{
    event.preventDefault();
let score = 0;   
    const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value,form.q5.value]
    
    userAnswer.forEach((answer, index)=>{
        if(answer === correctAnswer[index]){
            
       score = score + 1;
       quesition[index].classList.add("correct");
        }
        else{
            quesition[index].classList.add("wrong");
        }
    });
    console.log(score); 
    scrollTo(0,0);
    result.classList.remove("hide");
    console.log(result.querySelector("p").textContent = `You Scored ${score} /5 !`);


});