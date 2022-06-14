
const starButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById("question-container")
const questionElement = document.getElementById('question')
const answersButtonsElement = document.getElementById("answer-buttons")

let shuffledWuestion , currentQuestionIndex 

starButton.addEventListener('click', starGame)
nextButton.addEventListener('click', ()=>{
    currentQuestionIndex++;
    setNextquestion()
})

function starGame()
{
    console.log("Started")
    starButton.classList.add("hide")
    shuffledWuestion = question.sort(() => Math.random() -.5)
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove("hide")
    setNextquestion();

}

function showQuestion(){

    questionElement.innerText = question[currentQuestionIndex].question
    
    question[currentQuestionIndex].answers.forEach(answer =>{
       
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct === true){
        
            console.log(answer.correct)
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selecAnswer)
        answersButtonsElement.appendChild(button)

    })
}

function setNextquestion()
{
    ressetState()
 showQuestion(shuffledWuestion[currentQuestionIndex])
}




function ressetState(e){
    clearStatusClass(document.body)
nextButton.classList.add("hide")
while(answersButtonsElement.firstChild){
    answersButtonsElement.removeChild(answersButtonsElement.firstChild)
}

}

function selecAnswer(e)
{
    const selectedButton= e.target
    
    // console.log(selectedButton)

const correct = selectedButton.dataset.correct
setStatusClass(document.body , correct)
Array.from(answersButtonsElement.children).forEach(button =>{
    setStatusClass(button, button.dataset.correct)
})

if(shuffledWuestion.length >currentQuestionIndex +1)
{

    nextButton.classList.remove("hide")
}else{
    starButton.innerText = 'Restart'
    starButton.classList.remove('hide')
}

}

function setStatusClass(element, correct){
clearStatusClass(element)
if(correct) {
    element.classList.add("correct")
}else{
    element.classList.add("wrong")
}
}

function clearStatusClass(element){
    element.classList.remove("correct")
    element.classList.remove("wrong")
}

const question = [
    {  question: "35x2",
    answers:[
        {text:"60" , correct: false},
        {text:"72" , correct: false},
        {text:"70" , correct: true}
    ]},
    {  question: "Capital de Uruguy",
    answers:[
        {text:"Bogota" , correct: false},
        {text:"Montevideo" , correct: true}
        {text:"Bogota" , correct: false},
        {text:"Madrid" , correct: false}
    ]},
    {  question: "quiero un clima agradable o ... ",
    answers:[
        {text:"muy caliente" , correct: false},
        {text:"caliente" , correct: false},
        {text:"frialento" , correct: false},
        {text:"estable" , correct: true}
    ]}
]