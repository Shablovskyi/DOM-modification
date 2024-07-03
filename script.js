const addElementBtn = document.getElementById("addElementBtn");
const toggleClassBtn = document.getElementById("toggleClassBtn");
const replaceElemBtn = document.getElementById("replaceElementBtn");
const insertFragmentBtn = document.getElementById("insertFragmentBtn");

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

replaceElemBtn.addEventListener("click", () => {
  const elements = content.querySelectorAll("p");
  elements[0].innerText = "New text"
})

insertFragmentBtn.addEventListener("click", () => {
  const fragment = document.createDocumentFragment();

  const newP1 = document.createElement("p")
  newP1.innerText = "New paragraf 1"

  const newP2 = document.createElement("p")
  newP2.innerText = "New paragraf 2"

  fragment.appendChild(newP1)
  fragment.appendChild(newP2)
  
  content.prepend(fragment)
})