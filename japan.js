const question = document.querySelector('#question');
const choices = document.getElementsByClassName("choice-text");
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');

let currentQuestion = {}
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "What is the capital of Japan?",
        choice1: "Tokyo",
        choice2: "Osaka",
        choice3: "Kyoto",
        choice4: "Nagoya",
        answer: 1,
    },
    {
        question: "What is not a Japanese dish?",
        choice1: "Karage",
        choice2: "Soba",
        choice3: "Bingsu",
        choice4: "Omurice",
        answer: 3,
    },
    {
        question: "What is the most popular sport in Japan?",
        choice1: "Volleyball",
        choice2: "Baseball",
        choice3: "Soccer",
        choice4: "Sumo",
        answer: 2,
    },
    {
        question: "What is the national flower of Japan?",
        choice1: "Cherry Blossom",
        choice2: "Red Camellia",
        choice3: "Wisteria",
        choice4: "Kiku",
        answer: 1,
    },
    {
        question: "What is the national sport of Japan?",
        choice1: "Karate",
        choice2: "Kendo",
        choice3: "Judo",
        choice4: "Sumo",
        answer: 4,
    },
    {
        question: "What is not a Japanese video game?",
        choice1: "Super Mario",
        choice2: "Persona 5",
        choice3: "Genshin Impact",
        choice4: "Final Fantasy",
        answer: 3,
    },
    {
        question: "Who is the emperor of Japan?",
        choice1: "Shinzo Abe",
        choice2: "Fumio Kishida",
        choice3: "Naruhito",
        choice4: "Hirohito",
        answer: 3,
    },
    {
        question: "What is the population of Japan(2021)?",
        choice1: "126.4 million",
        choice2: "125.7 million",
        choice3: "128.8 million",
        choice4: "127.3 million",
        answer: 2,
    },
    {
        question: "Where is Japan located?",
        choice1: "Eastern Asia",
        choice2: "Southern Asia",
        choice3: "Western Asia",
        choice4: "Northern Asia",
        answer: 1,
    },
    {
        question: "What is the currency of Japan?",
        choice1: "Yuan",
        choice2: "Won",
        choice3: "Rupee",
        choice4: "Yen",
        answer: 4,
    },
]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 10

startGame = () => {
    questionCounter = -1
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)
        
        return window.location.assign('end.html')
    }

    questionCounter++
    progressText.innerText = `Question ${questionCounter} of ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS) * 100}%`

    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    for (let i = 0; i < choices.length; i++){
        const num = choices[i].dataset ['number']
        choices[i].innerText = currentQuestion['choice' + num]
    }

    availableQuestions.splice(questionsIndex, 1)

    acceptingAnswers = true 
}

let selectedAnswer = 0

function buttonClick(buttonChoice){ 
    if(!acceptingAnswers) return
    
    acceptingAnswers = false    
    selectedAnswer = buttonChoice
    if (selectedAnswer == currentQuestion.answer){
        score++;
        scoreText.innerText = score

    }
    getNewQuestion();
}

startGame()

