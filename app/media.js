import { imgArray } from "./colors and media.js";

let section = document.getElementsByTagName("section")[0];
let article = document.getElementsByTagName("article")[0];
let imgRow = document.createElement("div");
imgRow.className = "image-row";
section.appendChild(imgRow);
for (let i = 0; i < imgArray.length; i++) {
  if (i === 0 || i / 4) {
    let imgColumn = document.createElement("div");
    imgColumn.className = "image-column";
    imgRow.appendChild(imgColumn);
    let img = document.createElement("img");
    img.src = imgArray[i].img;
    img.alt = imgArray[i].alt;
    img.style.width = "100%";
    img.style.maxWidth = "300px";
    img.className = "image-gallery";
    imgColumn.appendChild(img);
    let imgModal = document.createElement("div");
    imgModal.className = "image-modal";
    document.body.appendChild(imgModal);
    let closeBtn = document.createElement("span");
    closeBtn.innerHTML = "&times;";
    closeBtn.className = "close";
    imgModal.appendChild(closeBtn);
    let imgModalContent = document.createElement("img");
    imgModalContent.className = "image-modal-content";
    imgModal.appendChild(imgModalContent);
    let imgModalCaption = document.createElement("div");
    imgModalCaption.className = "image-modal-caption";
    imgModal.appendChild(imgModalCaption);

    img.addEventListener("click", () => {
      imgModal.style.display = "block";
      imgModalContent.src = imgArray[i].img;
      imgModalCaption.innerHTML = imgArray[i].alt;
    });
    closeBtn.addEventListener("click", () => {
      imgModal.style.display = "none";
    });
    window.addEventListener("click", (evt) => {
      if (evt.target === imgModal) {
        imgModal.style.display = "none";
      }
    });
  }
}
