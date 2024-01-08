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
 * DOM is often refered as DOM TREE
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