// Document is an object

/*
 * Traversing the DOM
 *
 * To traversing DOM, we can use the following methods
 *
 * firstElementChild - returns the first child element of the specified element
 * lastElementChild - returns the last child element of the specified element
 * previousElementSibling - returns the previous element of the specified element
 * nextElementSibling - returns the next element of the specified element
 *
 * children - returns a collection of an element's child elements
 * firstChild - returns the first child node of the specified element
 * lastChild - returns the last child node of the specified element
 *
 * parentElement - returns the parent element of the specified element
 * parentNode - returns the parent node of the specified element
 *
 * */

// ------------------------------

// Select the parent element
let parent = document.getElementById('parent')

// firstElementChild
// Select the first child element
let firstElementChild = parent.firstElementChild
console.log(firstElementChild.textContent) // "First Child"

// lastElementChild
// Select the last child element
let lastElementChild = parent.lastElementChild
console.log(lastElementChild.textContent) // "Last Child"

// ------------------------------

// Select the middle child element
let middleChild = document.getElementById('middleChild')

// previousElementSibling
// Select the previous sibling element
let previousElementSibling = middleChild.previousElementSibling
console.log(previousElementSibling.textContent) // "First Child"

// nextElementSibling
// Select the next sibling element
let nextElementSibling = middleChild.nextElementSibling
console.log(nextElementSibling.textContent) // "Last Child"

// Select all child elements
let children = parent.children
for (let i = 0; i < children.length; i++) {
  console.log(children[i].textContent)
}

// ------------------------------

/*
 * firstChild and lastChild properties return the first and last child
 * nodes of an element, respectively. These properties consider any type of
 * node including text nodes, comment nodes, and element nodes.
 *
 * In HTML, whitespace (like line breaks and indentation for formatting the
 * HTML source code) often creates text nodes in the DOM. So, if the first or
 * last child of an element is a text node that only contains whitespace,
 * firstChild or lastChild could refer to these whitespace text nodes.
 *
 * In your HTML, there are line breaks and indentation before the first and
 * after the last child elements of the parent div. Therefore,
 * parent.firstChild and parent.lastChild are likely referring to these
 * whitespace text nodes, not the actual child elements.
 *
 * If you want to select the first and last child elements, you should use
 * firstElementChild and lastElementChild instead. These properties ignore
 * text nodes and only consider element nodes.
 *
 *  */
// Select the first child node
let firstChild = parent.firstChild
console.log(firstChild) // "First Child"

// Select the last child node
let lastChild = parent.lastChild
console.log(lastChild) // "Last Child"

// parentElement
// Select the parent element of the middle child
let parentElement = middleChild.parentElement
console.log(parentElement.id) // "parent"

// parentNode
// Select the parent node of the middle child
let parentNode = middleChild.parentNode
console.log(parentNode.id) // "parent"