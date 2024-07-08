const addElementBtn = document.getElementById("addElementBtn");
const toggleClassBtn = document.getElementById("toggleClassBtn");
const replaceElemBtn = document.getElementById("replaceElementBtn");
const insertFragmentBtn = document.getElementById("insertFragmentBtn");

const content = document.getElementById("content");

addElementBtn.addEventListener("click", () => {
  const createElem = document.createElement("p");
  createElem.innerText = "New element";
  createElem.classList.add("text-emerald-500")
  content.appendChild(createElem);
});


toggleClassBtn.addEventListener("click", (e) => {
  const elements = content.querySelectorAll("p");
  elements.forEach(elements => {
    elements.classList.toggle("highlight")
  })
});

replaceElemBtn.addEventListener("click", () => {
  const elements = content.querySelectorAll("p");
  elements[0].innerText = "New text";
  elements[0].classList.add("text-lime-500")
});

insertFragmentBtn.addEventListener("click", () => {
  const fragment = document.createDocumentFragment();

  const newP1 = document.createElement("p");
  newP1.innerText = "New paragraph 1";
  newP1.classList.add("text-rose-500")

  const newP2 = document.createElement("p");
  newP2.innerText = "New paragraph 2";
  newP2.classList.add("text-rose-500")

  fragment.appendChild(newP1);
  fragment.appendChild(newP2);

  content.prepend(fragment);
});

document.addEventListener("keydown", (event) => {
  if (event.repeat) {
    return;
  }

  console.log(`Key down: ${event.key}, Code: ${event.code}`);
});

document.addEventListener("keyup", (event) => {
  if (event.repeat) {
    return;
  }
  console.log(`Key up: ${event.key}, Code: ${event.code}`);
});
