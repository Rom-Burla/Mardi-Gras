import { colorArray } from "./colors.js";
let section = document.getElementsByTagName("section")[0];

const obgArr = [
  {
    question: "how about the....?????",
    answer: "fdslkjfhsdjklhfkljdshfkjhdsfkjhds",
  },
  {
    question: "hi how are you....?????",
    answer: "fdslkjfhsdjklhfkljdshfkjhdsfkjhds",
  },
  {
    question: "do you have....?????",
    answer: "fdslkjfhsdjklhfkljdshfkjhdsfkjhds",
  },
  {
    question: "do you want to....?????",
    answer: "fdslkjfhsdjklhfkljdshfkjhdsfkjhds",
  },
];

let faqContiner = document.createElement("div");
section.appendChild(faqContiner);
faqContiner.className = "faqContiner";

for (let i = 0; i < obgArr.length; i++) {
  //create elements

  let question = document.createElement("div");
  let answer = document.createElement("div");
  question.className = "question";
  answer.className = "answer";
  faqContiner.appendChild(question);
  faqContiner.appendChild(answer);
  //insert data
  question.innerHTML += `
    <p>${i + 1}. question : ${obgArr[i].question}</p>`;

  //question.style.backgroundColor=colorArray[i]
  answer.innerHTML += `
    <p>${i + 1}. answer : ${obgArr[i].answer}</p>`;

  //add event on the click
  question.addEventListener("click", () => {
    answer.classList.toggle("answer-active");
    if (i === obgArr.length - 1) {
      question.classList.toggle("question");
      question.classList.toggle("question-active");
    }
  });
}
