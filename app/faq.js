import { colorArray } from "./colors and media.js";
let section = document.getElementsByTagName("section")[0];

const obgArr = [
  {
    question: "When was the first Mardi Gras?",
    answer: "The first Mardi Gras parade was held in New Orleans on Feb. 24, 1857 by the Krewe of Comus. They began the tradition of presenting a parade with floats and following it with a ball for the krewe and their guests",
  },
  {
    question: "What is the significance of the Mardi Gras colors, and where did they come from?",
    answer: "Rex, the King of Carnival, selected the Mardi Gras colors and assigned meaning to them in 1892. Purple stands for justice, green for faith, and gold for power.",
  },
  {
    question: "Why are masks worn?",
    answer: "By law, float riders must always have a mask on. On Fat Tuesday, masking is legal for everyone else, and the elaborate masks that some wear add to the fun.",
  },
  {
    question: "How does Mardi Gras benefit the New Orleans economy?",
    answer: "Economic impact reports indicate that Mardi Gras generates over $1 billion in annual spending.",
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
