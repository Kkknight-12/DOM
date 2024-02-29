// ------------------XXXXXXX----------------------

// Hierarchy
// topmost tree nodes are available directly as document properties:

// The topmost document node is document.documentElement.
// That’s the DOM node of the <html> tag.
const html = document.documentElement;
console.log("html", html);

// another widely used property is document.body.
const body = document.body;
console.log("body", body);
// if script is in the <body>, then document.body is the <body> tag.
// if script is in the <head>, then document.body is null.
// That’s because the <body> tag is not loaded yet, so the DOM node is not created.

// The document.head property references the <head> tag.
const head = document.head;
console.log("head", head);

// Children: childNodes, firstChild, lastChild
// there are two terms we will use:
// Child nodes (or children) – elements that are direct children.
// Descendants – elements that are below, at any nesting level.

// childNodes collection lists all child nodes,
// childNodes looks like an array.
// But actually it’s not an array, but rather a collection –
// a special array-like iterable object.
for (let i = 0; i < document.body.childNodes.length; i++) {
  console.log(document.body.childNodes[i]); // Text, DIV, Text, UL, ..., SCRIPT
}
// We can also use for..of to iterate.

//
const check1 = document.childNodes[0] === document.firstChild;
console.log("check1", check1);

const check2 =
  document.childNodes[document.childNodes.length - 1] === document.lastChild;
console.log("check2", check2);

// There’s also a special function elem.hasChildNodes()
// to check whether there are any child nodes.
console.log("document.body.hasChildNodes()", document.body.hasChildNodes());

// ------------------XXXXXXX----------------------

// DOM collections
// DOM collections are not arrays, but we can iterate over them.
const arrayLike = document.body.childNodes;
console.log("arrayLike", arrayLike);
// Array methods won’t work, because it’s not an array:

const array1 = Array.from(arrayLike);
console.log("array1", array1);
// Now we have a real array, so we can call array methods.

const array2 = [...arrayLike];
console.log("array2", array2);

// ------------------XXXXXXX----------------------

// Siblings and the parent

// The parentNode property of an element refers to the parent node of the element.
// parent of <body> is <html>
console.log(
  "body.parentNode === documentElement",
  document.body.parentNode === document.documentElement
);

// nextSibling and previousSibling properties
// The nextSibling property returns the node immediately following the specified node,
// in the same tree level.
// The previousSibling property returns the node immediately preceding the specified node,
// in the same tree level.
console.log("head.nextSibling", document.head.nextSibling);

console.log("head.nextSibling", document.body.previousSibling); // <head>

// ------------------XXXXXXX----------------------

// Element-only navigation
// nodes – all nodes, including text nodes.
// element nodes – only element nodes (HTML tags).
// There are 6 navigation properties that return element nodes only:
// children – only those children that are element nodes.
// firstElementChild, lastElementChild – first and last element children.
// previousElementSibling, nextElementSibling – neighbor elements.
// parentElement – parent element.

// document.documentElement -> html
console.log(document.documentElement.parentNode); // document
console.log(document.documentElement.parentElement); // null

/*
 * reason is that the root node document.documentElement (<html>)
 * has document as its parent. But document is not an "element" node,
 * so parentNode returns it and parentElement does not.
 * */

// ------------------XXXXXXX----------------------

// The childNodes property returns a collection of a node's child nodes, as a NodeList object.
// The nodes in the collection are sorted as they appear in the source code and can be accessed by index numbers.

console.log("children ", document.body.children);
console.log("childNodes ", document.body.childNodes);