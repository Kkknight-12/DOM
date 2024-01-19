// Document is an object

/*
 * Accessing the DOM
 *
 * To access DOM, we use document object
 *
 * document.getElementById // returns an element object
 * document.getElementsByClassName // returns an HTMLCollection
 * document.getElementsByTagName // returns an HTMLCollection
 * document.querySelector // returns an element object
 * document.querySelectorAll // returns a NodeList
 *
 * - DOM in browser is visual representation of your page ( HTML )
 * - the browser give us access to this structure via DOM API
 * - DOM API gives us many methods to access the DOM
 * - we use javascript to execute these methods
 * */

console.log('document', document) //

//
console.dir(document)

/*
 * Global object
 * global object in the browser is window, if you type in this or window
 * the console will output the window object
 *
 * window object
 * by clicking window object we can look at all the properties
 * and methods the window contain
 * */

// -----------------------------------------------------------------------------

// Understanding the DOM tree

/*
 * DOM is often referred as DOM TREE
 * this tree consists of millions of objects called nodes, each node
 * represent an HTML element. The root node is the document object.
 * The root node is the document object, the document object is the parent
 * of all nodes.
 *
 * To understand how to access the DOM, we need to understand HTML
 * <h1 id="heading">Hope you are learning about DOM</h1>
 *
 * h1 is tag
 * id is attribute
 * heading is attribute value
 * "Hope you are learning about DOM" is text
 *
 * Everything you see is the element
 * */

// -----------------------------------------------------------------------------

// 1. Accessing the DOM with getElementById

const header = document.getElementById('header')
header.style.backgroundColor = 'lightblue'

// check the type of Node
console.log(header.nodeType) // 1
// 1 means element node

console.log(header.nodeName) // Div
// Div is the name of the element

// NOTE: id is unique, so we can only have one element with the same id

// -----------------------------------------------------------------------------

// 2. Accessing the DOM with getElementsByClassName

const items = document.getElementsByClassName('header')

console.log(items) // HTMLCollection [li.header, li.header]

console.log(items[0]) // <div class="header"></div>

// getElementsByClassName return an HTMLCollection
// which is an array like object, so we can access the element
// by using index number

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = 'lightblue'
}

// -----------------------------------------------------------------------------

// 3. Accessing the DOM with getElementsByTagName
// this method searches through all nodes, finding those with a specified
// tag name
// for this reason it can be performance heavy
// it return list of live HTMl collection, which is an array like object

const pTags = document.getElementsByTagName('p')
console.log(pTags) // HTMLCollection(2) [p.box, p.box]

for (let i = 0; i < pTags.length; i++) {
  pTags[i].style.backgroundColor = 'lightyellow'
}

// -----------------------------------------------------------------------------