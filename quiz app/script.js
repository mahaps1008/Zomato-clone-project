const questions=[
    {
        question:"How many Union Territories are in India?",
        
            answers:[
                {text:"8",correct:true},
                {text:"9",correct:false},
                {text:"10",correct:false},
                {text:"11",correct:false},
      ] 
    },
    {
        question:"Leh is the capital of _______",
        
            answers:[
                {text:"Ladakh",correct:true},
                {text:" Puducherry",correct:false},
                {text:"Jammu and Kashmir",correct:false},
                {text:"Arunachal Pradesh",correct:false},
      ] 
    },
    {
        question:"Quit India Movement started in ",
        
        
            answers:[
                {text:"1922",correct:false},
                {text:"1932",correct:false},
                {text:"1942",correct:true},
                {text:" 1940",correct:false},
      ] 
    },
    {
        question:"Largest Port in India is located in ______",
        
            answers:[
                {text:"Himachal Pradesh",correct:false},
                {text:"  Gujarat",correct:true},
                {text:"Uttarakhand",correct:false},
                {text:"Madhya Pradesh",correct:false},
      ] 
    },

    {
        question:"Victoria Memorial is located in ________",
        
            answers:[
                {text:"Mumbai",correct:false},
                {text:"Kolkata",correct:true},
                {text:"Hyderabad",correct:false},
                {text:"Bengaluru",correct:false},
      ] 
    },
]
const questionElement=document.getElementById("question");
const answerButtons=document.getElementById("answer-button");
const nextButton=document.getElementById("next-btn");

let currentquestionIndex=0;
let score=0;
function startquiz(){
    currentquestionIndex=0;
    score=0;
    nextButton.innerHTML="Next";
    showQuestion(); 
}
function showQuestion() {
    resetState();
    let currentquestion = questions[currentquestionIndex];
    let questionNo = currentquestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentquestion.question;
    currentquestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct=answer.correct;
        }
        button.addEventListener("click",selectAnswer);
    });
}
function resetState(){
    nextButton.style.display="none";
    while (answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}
function selectAnswer(e) {
    const selectedBtn=e.target;
    const incorrect=selectedBtn.dataset.correct=== "true";
    if(incorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect"); 
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct=== "true"){
            button.classList.add("correct");
        }
        button.disabled =true;
    });
    nextButton.style.display="block";
    }
    function showScore(){
        resetState();
        questionElement.innerHTML=`You scored ${score} out of ${questions.length}!`;
        nextButton.innerHTML="Play Again";
        nextButton.style.display="block";
    }

    function handleNextButton(){
        currentquestionIndex++;
        if (currentquestionIndex < questions.length){
            showQuestion();
        }else{
            showScore();
        }
    }
    nextButton.addEventListener("click", ()=>{
        if(currentquestionIndex<questions.length){
            handleNextButton();
        }
        else{
            startquiz();
        }
        
    });
    
startquiz();




