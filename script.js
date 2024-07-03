const addElementBtn = document.getElementById("addElementBtn");
const toggleClassBtn = document.getElementById("toggleClassBtn");

const content = document.getElementById("content");

addElementBtn.addEventListener("click", () => {
  const createElem = document.createElement("p");
  createElem.innerText = "New element";
  content.appendChild(createElem);
});

toggleClassBtn.addEventListener("click", () => {
  const elements = content.querySelectorAll("p");
  elements.forEach((elem) => {
    if (elem.classList.contains("highlight")) {
      elem.classList.remove("highlight");
    } else {
      elem.classList.add("highlight");
    }
  });
});
