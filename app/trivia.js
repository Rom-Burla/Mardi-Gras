//set elements
let section = document.getElementsByTagName("section")[0];
let article = document.getElementsByTagName("article")[0];
let container = document.createElement("div");
section.appendChild(container);
let triviaHead = document.createElement("h1");
triviaHead.textContent = "Trivia Quiz!";
container.appendChild(triviaHead);
let triviaForm = document.createElement("form");
container.appendChild(triviaForm);
triviaForm.method = "get";
let points = 0;
let submitBtn = document.createElement("input");
submitBtn.type = "submit";
submitBtn.className = "submit-button";
submitBtn.textContent = "Submit";
let answers = [];
answers.length = 9;

let pointsDiv = document.createElement("div");
article.appendChild(pointsDiv);
const ArrayRd = [
  {
    question: "Who is the mayor of New Orleans?",
    answer1: "Arnold Schwarzenegger",
    answer2: "LaToya Cantrell",
    answer3: "Eric Garcetti",
  },
  {
    question: "Mardi Gras also called?",
    answer1: "Fat Tuesday",
    answer2: "Pancake Tuesday",
    answer3: "All answers!",
  },
  {
    question: "The first city in the USA that celebrated Mardi Gras?",
    answer1: "Mobile, Alabama",
    answer2: "New York City, New York",
    answer3: "New Orleans, Louisiana",
  },
  {
    question: "The traditional colors of the Mardi Gras are?",
    answer1: "Green, Black, & Yellow",
    answer2: "Purple, Green, & Gold",
    answer3: "Pink, Yellow, & Gold",
  },
  {
    question:
      "Is it illegal to wear masks in New Orleans except on Mardi Gras?",
    answer1: "No",
    answer2: "It's llegal to wear masks but only at morning",
    answer3: "Yes",
  },
  {
    question: "What is Mardi Gras?",
    answer1: `Mardi Gras is a French term, which literally translates into Fat Tuesday`,
    answer2: "Mardi Gras is day of eating all day long",
    answer3: "Mardi Gras is the name of space ship",
  },
  {
    question: "What year was the first Mardi Gras in the USA?",
    answer1: "in 1854",
    answer2: "in 1703 ",
    answer3: "in 1699",
  },
  {
    question: "How Long Does the Mardi Gras Last in New Orleans?",
    answer1: "Four to Eight weeks, depending on when Easter falls",
    answer2: "One to Three weeks, depending on when Easter falls",
    answer3: "Six weeks, no matter what",
  },
  {
    question: "What is the most famose Coffee place in New Orleans",
    answer1: "Cafe De Rom",
    answer2: "Cafe Du Monde",
    answer3: "Cafe De Nir",
  },
  {
    question: "King Cake is?",
    answer1: "Fruit Salad",
    answer2: "Sugar free diet cake",
    answer3:
      "Sweet and colorful cake filled with cinnamon, sugar, pecans, and, if you're lucky, a plastic baby",
  },
];
let rightAnswers = [
  ArrayRd[0].answer2,
  ArrayRd[1].answer3,
  ArrayRd[2].answer1,
  ArrayRd[3].answer2,
  ArrayRd[4].answer3,
  ArrayRd[5].answer1,
  ArrayRd[6].answer3,
  ArrayRd[7].answer1,
  ArrayRd[8].answer2,
  ArrayRd[9].answer3,
];
ArrayRd.forEach((question) => {
  triviaForm.innerHTML += `
    <div class="trivia-question">
        <label for="${question.question}"><h3>${question.question}</h3></label>
        <div class="trivia-answer">
            <input value="${question.answer1}" name="${
    question.question
  }" type="radio" id="answer1-${ArrayRd.indexOf(question)}"></input>
            <label for=${question.answer1}>${question.answer1}</label>
        </div>
        <div class="trivia-answer">
            <input value="${question.answer2}" name="${
    question.question
  }" type="radio" id="answer2-${ArrayRd.indexOf(question)}"></input>
            <label for=${question.answer2}>${question.answer2}</label>
        </div>
        <div class="trivia-answer">
            <input value="${question.answer3}" name="${
    question.question
  }" type="radio" id="answer3-${ArrayRd.indexOf(question)}"></input>
            <label for=${question.answer3}>${question.answer3}</label>
        </div>
    </div>
           
`;
});
triviaForm.appendChild(submitBtn);
triviaForm.addEventListener("click", (event) => {
  if (ArrayRd[0].question === event.target.name) {
    if (event.target.id === "answer2-0") {
      document.getElementsByClassName(
        "trivia-question"
      )[0].innerHTML = `<h1>${ArrayRd[0].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(0, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[0].innerHTML = `<h1>${ArrayRd[0].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(0, 1, event.target.value);
    }
  } else if (ArrayRd[1].question === event.target.name) {
    if (event.target.id === "answer3-1") {
      document.getElementsByClassName(
        "trivia-question"
      )[1].innerHTML = `<h1>${ArrayRd[1].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(1, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[1].innerHTML = `<h1>${ArrayRd[1].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(1, 1, event.target.value);
    }
  } else if (ArrayRd[2].question === event.target.name) {
    if (event.target.id === "answer1-2") {
      document.getElementsByClassName(
        "trivia-question"
      )[2].innerHTML = `<h1>${ArrayRd[2].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(2, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[2].innerHTML = `<h1>${ArrayRd[2].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(2, 1, event.target.value);
    }
  } else if (ArrayRd[3].question === event.target.name) {
    if (event.target.id === "answer2-3") {
      document.getElementsByClassName(
        "trivia-question"
      )[3].innerHTML = `<h1>${ArrayRd[3].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(3, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[3].innerHTML = `<h1>${ArrayRd[3].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(3, 1, event.target.value);
    }
  } else if (ArrayRd[4].question === event.target.name) {
    if (event.target.id === "answer3-4") {
      document.getElementsByClassName(
        "trivia-question"
      )[4].innerHTML = `<h1>${ArrayRd[4].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(4, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[4].innerHTML = `<h1>${ArrayRd[4].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(4, 1, event.target.value);
    }
  } else if (ArrayRd[5].question === event.target.name) {
    if (event.target.id === "answer1-5") {
      document.getElementsByClassName(
        "trivia-question"
      )[5].innerHTML = `<h1>${ArrayRd[5].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(5, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[5].innerHTML = `<h1>${ArrayRd[5].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(5, 1, event.target.value);
    }
  } else if (ArrayRd[6].question === event.target.name) {
    if (event.target.id === "answer3-6") {
      document.getElementsByClassName(
        "trivia-question"
      )[6].innerHTML = `<h1>${ArrayRd[6].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(6, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[6].innerHTML = `<h1>${ArrayRd[6].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(6, 1, event.target.value);
    }
  } else if (ArrayRd[7].question === event.target.name) {
    if (event.target.id === "answer1-7") {
      document.getElementsByClassName(
        "trivia-question"
      )[7].innerHTML = `<h1>${ArrayRd[7].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(7, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[7].innerHTML = `<h1>${ArrayRd[7].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(7, 1, event.target.value);
    }
    console.log(answers);
  } else if (ArrayRd[8].question === event.target.name) {
    if (event.target.id === "answer2-8") {
      document.getElementsByClassName(
        "trivia-question"
      )[8].innerHTML = `<h1>${ArrayRd[8].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(8, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[8].innerHTML = `<h1>${ArrayRd[8].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(8, 1, event.target.value);
    }
    console.log(answers);
  } else if (ArrayRd[9].question === event.target.name) {
    if (event.target.id === "answer3-9") {
      document.getElementsByClassName(
        "trivia-question"
      )[9].innerHTML = `<h1>${ArrayRd[9].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(9, 1, event.target.value);
    } else {
      document.getElementsByClassName(
        "trivia-question"
      )[9].innerHTML = `<h1>${ArrayRd[9].question}</h1>
      <p>Thank you for your answer</p>`;
      answers.splice(9, 1, event.target.value);
    }
    console.log(answers);
  }
});
submitBtn.addEventListener("click", (e) => {
  if (answers.includes(undefined)) {
    alert("You didn't answer all the questions!");
  } else if (!answers.includes(undefined)) {
    article.style.paddingTop = "20px";
    for (let i = 0; i < answers.length; i++) {
      pointsDiv.innerHTML += `
    <h3>The question was: ${ArrayRd[i].question}</h3><br>
    <p style="color: blue">Your answer was: ${answers[i]}</p><br>
    <p style="color: darkblue">The right answer was: ${rightAnswers[i]}</p><br>
    `;
      if (answers[i] === rightAnswers[i]) {
        pointsDiv.innerHTML += `<p style="color: green">You were right!!!</p><br>`;
        points++;
      } else if (answers[i] !== rightAnswers[i]) {
        pointsDiv.innerHTML += `<p style="color: red">You were wrong :(</p><br>`;
      }
    }
    pointsDiv.innerHTML += `<h1>Your score is: ${points} out of 10</h1>`;
    pointsDiv.style.textAlign = "center";
    e.preventDefault();
  }
});
