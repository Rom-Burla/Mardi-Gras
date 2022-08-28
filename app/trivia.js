//set elements
let section = document.getElementsByTagName("section")[0];
let container = document.createElement("div");
section.appendChild(container);
let triviaForm = document.createElement("form");
container.appendChild(triviaForm);

triviaForm.method = "get";

let btn = document.createElement("button");

const ArreyRd = [
  {
    question: "Who is the mayor of New Orleans?",
    answer1: "Rom burla",
    answer2: "LaToya Cantrell",
    answer3: "Nir Sade",
  },
  {
    question: "Mardi Gras also called?",
    answer1: "Fat Tuesday",
    answer2: "Pancake Tuesday",
    answer3: "All answers!",
  },
  {
    question: "The first North American Mardi Gras was celebrated at?",
    answer1: "Louisiana",
    answer2: "New york city",
    answer3: "Alabama",
  },
  {
    question: "The traditional colors of the Mardi Gras are?",
    answer1: "green,black, and yellow",
    answer2: "purple, green, and gold",
    answer3: "pink,yellow, and gold",
  },
  {
    question:
      "It is illegal to wear masks in New Orleans except on Mardi Gras?",
    answer1: "no",
    answer2: "yes",
    answer3: "it's llegal to wear masks but only at morning",
  },
  {
    question: "What is Mardi Gras?",
    answer1: "Mardi Gras is day of eating all day long",
    answer2:
      "Mardi Gras is a French term, which literally translates into “Fat Tuesday”",
    answer3: "Mardi Gras is the name of space ship",
  },
  {
    question: "When the Mardi Gras started?",
    answer1: "in 1937",
    answer2: "in 1703 ",
    answer3: "in 1854",
  },
  {
    question: "How Long Does Mardi Gras Last in New Orleans?",
    answer1: "one week",
    answer2: "two week",
    answer3: "one month",
  },
  {
    question: "What is the most famose Coffee place in New Orleans",
    answer1: "Cafe the Rom",
    answer2: "Cafe du Monde",
    answer3: "Cafe the Nir",
  },
  {
    question: "King Cake is?",
    answer1: "fruit sald",
    answer2: "this is a free suger diat cake",
    answer3: "This is a brioche style dough covered in sugar",
  },
];

ArreyRd.forEach((question) => {
  triviaForm.innerHTML += `
    <div class="trivia-question">
        <label for="${question.question}"><h1>${question.question}</h1></label>
        <div class="trivia-answer">
            <input value="${question.answer1}" name="${
    question.question
  }" type="radio" id="answer1-${ArreyRd.indexOf(question)}"></input>
            <label for=${question.answer1}>${question.answer1}</label>
        </div>
        <div class="trivia-answer">
            <input value="${question.answer2}" name="${
    question.question
  }" type="radio" id="answer2-${ArreyRd.indexOf(question)}"></input>
            <label for=${question.answer2}>${question.answer2}</label>
        </div>
        <div class="trivia-answer">
            <input value="${question.answer3}" name="${
    question.question
  }" type="radio" id="answer3-${ArreyRd.indexOf(question)}"></input>
            <label for=${question.answer3}>${question.answer3}</label>
        </div>
    </div>
           
`;
});

triviaForm.addEventListener("click", (event) => {
  if (event.target.id === "answer2-0") {
    console.log("1pt");
  }
});
