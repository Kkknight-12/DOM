import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { setupCounter } from "./counter.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`;

setupCounter(document.querySelector("#counter"));

// ----------------------------------------------

const openNewWindow = () => {
  let newWindow = window.open("", "", "width=600,height=600");

  // Close the window after 3 seconds
  setTimeout(() => {
    console.log("close");
    newWindow.close();
  }, 3000);
};

// --------------------------------------------------------------------------------
// from documents object use querySelector to select the button
function selectElements() {
  const myDiv = document.querySelector("#myDiv2");
  const myButton = document.querySelector("#myButton");
  return { myDiv, myButton };
}

// pass in the button and div elements
// add an event listener to the button
// change the text content of the div
function addEventListener(myButton, myDiv) {
  myButton.addEventListener("click", () => {
    myDiv.textContent = "Hello DOM!";
  });
}

const { myDiv, myButton } = selectElements();
addEventListener(myButton, myDiv);

// --------------------------------------------------------------------------------

// add a new paragraph to the body
function addNewElement() {
  let newElement = document.createElement("p");
  newElement.textContent = "This is a new paragraph.";
  document.body.appendChild(newElement);
}

// --------------------------------------------------------------------------------

// Changing the style of an element:
function removeElement() {
  let elementToRemove = document.getElementById("myDiv");
  // Remove the element
  // parentNode - returns the parent node of the specified node
  // removeChild - removes a specified child node of the specified element
  elementToRemove.parentNode.removeChild(elementToRemove);
}

// --------------------------------------------------------------------------------

// Changing the style of an element:
function changeStyle() {
  document.getElementById("myDiv").style.color = "red";
}

// Adding a class to an element:
function addClass() {
  document.getElementById("myDiv").classList.add("newClass");
}

function removeClass() {
  document.getElementById("myDiv").classList.remove("newClass");
}

function toggleClass() {
  document.getElementById("myDiv").classList.toggle("newClass");
}

// ------------------XXXXXXX----------------------
// Practice on manipulate nodes

function createNewNode() {
  console.log("createNewNode");
  let newNode = document.createElement("p");
  newNode.textContent = "This is a new node.";
  document.body.appendChild(newNode);
}

// --------------------------------------------------------------------------------

function _cloneNode() {
  console.log("cloneNode");
  let elementToClone = document.getElementById("myDiv");
  console.log("elementToClone", elementToClone);
  let clonedElement = elementToClone.cloneNode(true);
  document.body.appendChild(clonedElement);
}

// --------------------------------------------------------------------------------

const oldNode = document.body.appendChild(document.createElement("p"));
oldNode.id = "replaceNode";
oldNode.innerText = "This is the old node.";

function _replaceNode() {
  let oldNode = document.getElementById("replaceNode");
  let newNode = document.createElement("p");
  newNode.textContent = "This is a new node.";
  // parentNode - returns the parent node of the specified node
  // replaceChild - replaces a child node with a new node
  oldNode.parentNode.replaceChild(newNode, oldNode);
}

// ------------------XXXXXXX----------------------