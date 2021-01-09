function buildQuiz() {
  // create an empty array to store the HTML output for each question
  const output = [];

  // for each question in myQuestions
  for (let i = 0; i < myQuestions.length; i++) {
    // console.log(i);

    // create an empty array to store the HTML output for each answer
    const outputAnswers = [];

    // create a variable currentQuestion which stores the question object
    const currentQuestion = myQuestions[i];

    // for each letter in the current questions' answers
    for (letter in currentQuestion.answers) {
      // add the HTML output for each answer
      // hint: use the push method to add the HTML output for each answer into the answers array

      outputAnswers.push(
        `<label>
      <input type="radio"  name="question${i}" value="${letter}"/>
      ${letter}: ${currentQuestion.answers[letter]} 
    </label>`
      );
    }

    // add the HTML for the question and its answers to the output array

    // hint: use the push method

    output.push(
      `<h4 class="question">${currentQuestion.question}
      <h4><div class="answers"> ${outputAnswers.join("")}</div>`
    );
  }
  quizContainer.innerHTML = output.join("");
  // combine our output list into one string of HTML and put it on the page
}

// ----------------------------------------------------------

function showResults() {
  const questions = quizContainer.querySelectorAll(".question");
  
  // get all answer containers from our quiz using querySelectorAll
  const answers = quizContainer.querySelectorAll(".answers");
  // create a variable to keep track of the number of correct answers
  let correctAnswers = 0;
  // for each question...
  for (let i = 0; i < myQuestions.length; i++) {
    // create a variable currentQuestion which stores the question object
    const currentQuestion = myQuestions[i];
    // create a variable answerContainer to store the value of the answerContainer for each question
    const answerContainer = answers[i];

    // hint: you need to use indexing e.g. array[index]
    // create a variable selector to store the input element that the user selected as the answer
    const selector = `input[name=question${i}]:checked`;
    // create a variable userAnswer to get the value of the answer in the selector
    const userAnswer = answerContainer.querySelector(selector).value;
    
    // if answer is correct
    if (userAnswer === currentQuestion.correctAnswer) {
      // add to the number of correct answers
      correctAnswers += 1
      // color the answers green
      // hint: use element.style.color = 'green'
      questions[i].style.color = 'green'
      // you have to change the element to the element you want to style
    } else {
      // if answer is wrong or blank
      // color the answers red
      questions[i].style.color = 'red'
    }
  }
  // show number of correct answers out of total
  // hint: set the innerHTML of the resulsContainer
  resultsContainer.innerHTML = `${correctAnswers} out of ${myQuestions.length}`
}

// create 3 variables to store the value of each element
// the 3 variables are quizContainer, resultsContainer, submitButton
// hint: use getElementById
const quizContainer = document.getElementById("quiz");
const submitButtonContainer = document.getElementById("submit");
const resultsContainer = document.getElementById("results");
// create a variable myQuestions and add an array of question objects
const myQuestions = [
  {
    question: "Who is the strongest?",
    answers: {
      a: "You",
      b: "The Hulk",
      c: "Superman"
    },
    correctAnswer: "a"
  },
  {
    question: "Who is the smartest?",
    answers: {
      a: "You",
      b: "Iron Man",
      c: "Batman"
    },
    correctAnswer: "a"
  },
  {
    question: "Who is the fastest?",
    answers: {
      a: "You",
      b: "The Flash",
      c: "Quicksilver"
    },
    correctAnswer: "a"
  },
   {
    question: "Who is the BEST?",
    answers: {
      a: "Nigelee7708",
      b: "Superman",
      c: "Vision"
    },
    correctAnswer: "a"
  }
];

// call the build quiz function to display the quiz

buildQuiz();
// add an event listener that listens to the "click" event on the submit button
// show results when the submit button is clicked
submitButtonContainer.addEventListener("click", showResults);
