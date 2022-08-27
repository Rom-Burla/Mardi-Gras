


//set elements
let section = document.getElementsByTagName("section")[0];
let container =  document.createElement("div");
let innerDiv =  document.createElement("div");
let inputRadio = document.createElement("input");
let labelRadio = document.createElement("label");
let btn = document.createElement("button");
const ArreyRd=[

 {

    question:"nir",
    answer1: "rrr",
    answer2:"sds",
    answer3:"sdsdfsds",
 
    },
    


];
console.log(questionObj);
console.log(container);

container.className="container";
innerDiv.className="inner-div";
labelRadio.className="radio-label";
inputRadio.className="radio-input";
btn.className="btn";

inputRadio.type="radio";
inputRadio.name="radio";
inputRadio.id="radio";
labelRadio.type="radio";
labelRadio.textContent="radio"
container.appendChild(innerDiv);
innerDiv.appendChild(labelRadio);
innerDiv.appendChild(inputRadio);



section.appendChild(container)


section.appendChild(btn)


btn.addEventListener('click' ,()=>{
    if(inputRadio.checked){
        console.log("dfd");
    }
})
btn.textContent="click me";










