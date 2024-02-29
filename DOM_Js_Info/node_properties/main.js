/*
 * In the Document Object Model (DOM), each part of the document is
 * represented as a node. These nodes can be of different types, such as
 * Element nodes, Text nodes, Comment nodes, etc. Each of these node types
 * corresponds to a built-in class in the DOM API, and these classes form a
 * hierarchy.
 *
 * At the root of this hierarchy is the EventTarget class.
 *
 * EventTarget is an abstract base class that provides the ability to
 * receive and react to events, such as user interactions or changes in the
 * document. All DOM nodes can handle events because they all inherit,
 * directly or indirectly, from EventTarget.
 *
 * The Node class inherits from EventTarget, and it is
 * also an abstract base class. It provides properties and methods that are
 * common to all DOM nodes, regardless of their type. These include
 * properties for navigating the node tree (like parentNode, nextSibling, and
 * childNodes) and methods for manipulating the node and its subtree.
 *
 * Different types of nodes have additional properties and methods that are
 * specific to their type. For example, an Element node (which corresponds to
 * an HTML tag in the document) has properties like tagName and className,
 * and methods like getAttribute and setAttribute. These are defined in the
 * Element class, which inherits from Node.
 *
 * Similarly, a Text node (which represents a text content in the document)
 * has a data property that contains the text, and a length property that
 * gives the number of characters in the text. These are defined in the
 * CharacterData class, which also inherits from Node.
 *
 * The specific types of Element nodes, like <a> or <input>, correspond to
 * more specific classes (HTMLAnchorElement and HTMLInputElement,
 * respectively) that inherit from HTMLElement, which in turn inherits from
 * Element. These classes provide properties and methods that are specific to
 * the corresponding HTML elements.  Here's a simplified view of the class
 *  hierarchy: */

/*
EventTarget
|
+-----Node
      |
      +---- Element <div> ... </div>
      |   |
      |   +---- HTMLElement
      |       |
      |       +---- HTMLInputElement <input type="..">
      |       |
      |       +---- HTMLAnchorElement <a href="..">
      |       |
      |       +---- HTMLBodyElement <body>
      |
      +---- CharacterData
      |    |
      |    +---- Text "Hello"
      |    |
      |    +---- Comment <!-- ... -->
      |
      +---- Document
           |
           +---- HTMLDocument -> "Document as whole"


*/

// In JavaScript, every object has a constructor property that points to the
// function that was used to create the object. The name property of a
// function gives the name of the function. So
// document.body.constructor.name gives the name of the function that was
// used to create the body object, which is HTMLBodyElement.
console.log(document.body.constructor.name) // HTMLBodyElement

// We also can use instanceof to check the inheritance:
console.log(document.body instanceof HTMLBodyElement) // true
console.log(document.body instanceof HTMLElement) // true
console.log(document.body instanceof Element) // true
console.log(document.body instanceof Node) // true
console.log(document.body instanceof EventTarget) // true

/*
 *  instanceof operator is used to check if an object is an instance of a
 *  particular class. So document.body instanceof HTMLBodyElement checks if
 *  document.body is an instance of HTMLBodyElement. This will be true
 *  because the body of a document is represented as an HTMLBodyElement in
 *  the DOM.
 *  */

// As we can see, DOM nodes are regular JavaScript objects. They use
// prototype-based classes for inheritance.

// ------------------- Inspecting DOM nodes --------------------------

// console.log -> shows the element DOM tree.
/*
 * The properties and methods of a DOM node can be inspected using the
 * console.log method. For example, we can log the body of a document to
 * inspect its properties and methods:
 * */

const bodyElement = document.body
console.log(bodyElement) // true

// console.dir -> shows the element DOM object.
/*
 * We can also use the console.dir method to inspect the properties and
 * methods of a DOM node. This method prints an interactive list of the
 * properties and methods of an object to the console. It's similar to
 * console.log, but it provides a more detailed view of the object.
 * */

console.dir(bodyElement) // true

// ------------------- nodeType --------------------------------------

/*
 * The nodeType property is a property of a Node object in the Document
 * Object Model (DOM). It returns an integer that represents the type of the
 * node. The returned value is one of the node type constants, which are
 * numeric codes that indicate the type of the node.
 *
 * Here are some of the common node types and their corresponding nodeType
 * values:
 * 1: This represents an Element node like <p> or <div>.
 * 3: This represents a Text node containing a text segment within an element.
 * 9: This represents a Document node, which is the root of the DOM tree.
 *
 * In the provided code, document.body is an Element node, so elem.nodeType
 * returns 1. elem.firstChild is a Text node (it's the whitespace text node
 * before the <script> tag), so elem.firstChild.nodeType returns 3. document
 * is a Document node, so document.nodeType returns 9.
 *
 * While modern scripts often use instanceof and other class-based tests to
 * determine the node type, nodeType can be simpler in some cases. However,
 * it's important to note that nodeType is a read-only property, meaning you
 * can't change the type of a node by setting a new value to nodeType.
 *
 * Here's a JavaScript code snippet that demonstrates the use of nodeType:
 *  */

console.log(bodyElement.nodeType) // 1 => Element node
console.log(bodyElement.firstChild.nodeType) // 3 => Text node
console.log(document.nodeType) // 9 => Document node

// ------------------- Tag:nodeName and tagName ----------------------

/*
 * The nodeName and tagName properties in the Document Object Model (DOM) are
 * used to get the name of a node or tag respectively.
 *
 * The nodeName property is defined for any Node. For Element nodes, it
 * returns the same value as tagName. For other node types (like Text nodes,
 * Comment nodes, etc.), it returns a string representing the node type. For
 * example, for a Comment node, nodeName would return #comment.
 *
 * On the other hand, the tagName property exists only for Element nodes. If
 * you try to access the tagName property of a non-Element node, it will
 * return undefined.  Here's a JavaScript code snippet that demonstrates the
 * use of nodeName and tagName:
 *
 * Element example:
 * <div> element has a nodeName and a tagName of "DIV".
 * <p> element has a nodeName and a tagName of "P".
 * <a> element has a nodeName and a tagName of "A".
 * <input> element has a nodeName and a tagName of "INPUT".
 * <body> element has a nodeName and a tagName of "BODY".
 * <html> element has a nodeName and a tagName of "HTML".
 * <head> element has a nodeName and a tagName of "HEAD".
 * <title> element has a nodeName and a tagName of "TITLE".
 * <script> element has a nodeName and a tagName of "SCRIPT".
 * <style> element has a nodeName and a tagName of "STYLE".
 * <link> element has a nodeName and a tagName of "LINK".
 * <meta> element has a nodeName and a tagName of "META".
 * <base> element has a nodeName and a tagName of "BASE".
 * */

// tagName property exist only for an element node
console.log(bodyElement.nodeName) // BODY
console.log(bodyElement.tagName) // BODY

// character data ( text, comment ) and document nodes
// don't have a tagName property as they are not element nodes

// for a comment node
let commentNode = bodyElement.firstChild
console.log(commentNode.nodeName) // #comment
console.log(commentNode.tagName) // undefined

// for the document node
console.log(document.nodeName) // #document
console.log(document.tagName) // undefined

// ------------------- innerHTML: the contents -----------------------

const divElement = document.createElement('div')
divElement.innerHTML = '<p>Hello</p>'

const root = document.getElementById('root')
root.appendChild(divElement)

const greetElement = document.createElement('p')
greetElement.innerHTML += 'Good Morning'

greetElement.innerHTML += ' Good Afternoon'
// is a shorter way to write:
// greetElement.innerHTML = greetElement.innerHTML + ' Good Afternoon'
// <p>Good Morning Good Afternoon</p>

root.appendChild(greetElement)

// innerHTML+= does this:
//
// The old contents is removed.
// The new innerHTML is written instead (a concatenation of the old and the
// new one).

// ------------------- outerHTML: -----------------------------------

/*
 * The outerHTML property in JavaScript is like a snapshot of an HTML
 * element and everything inside it. It's a string that contains the HTML
 * code for the element and all its content.
 *
 * You can also use outerHTML to replace an HTML element with new content.
 * You do this by setting outerHTML to a new string of HTML code. But
 * there's a catch: the original JavaScript variable that was pointing to
 * the old element doesn't get updated. It still points to the old element,
 * even though that element has been replaced in the webpage.
 *
 *  */
let div = document.createElement('div')
div.innerHTML = 'Hello, world!'
root.appendChild(div)

console.log(div.outerHTML)
// Output: <div>Hello, world!</div>

div.outerHTML = '<p>Goodbye, world!</p>'

console.log(div.outerHTML)
// Output: <div>Hello, world!</div>

/*
 * So, if you replace an element using outerHTML and then try to do
 * something with the original JavaScript variable, you might get unexpected
 * results because that variable is still linked to the old element, not the
 * new one. If you need to work with the new element, you should get a new
 * reference to it from the webpage.
 *  */

// ------------------- text node Content: -----------------------------

/*
 * The nodeValue and data properties in JavaScript are used to get or set the content of a text node. These properties are almost identical, with only minor differences in their specifications. For simplicity, we often use data because it's shorter.
 *  */

let textNode = document.createTextNode('adding Text node, world!')
root.appendChild(textNode)
console.log(textNode.data) // Outputs: 'Hello, world!'

textNode.data = 'Updating Text node, world!'
console.log(textNode.data) // Outputs: 'Goodbye, world!'

/*
 * In the above example, we first create a text node. We then log the
 * content of the text node using the data property. After that, we change
 * the content of the text node and log the new content.
 *
 * This can be useful when you want to read or modify the content of a text
 * node in your HTML document. For example, you might want to change the text
 * displayed in a paragraph or heading based on user input or some other
 * event.
 *
 * Similarly, you can use these properties to read or modify the content of
 * comment nodes. This can be useful if you're using comments to store some
 * kind of data or instructions in your HTML code. For example, you might
 * have a comment that contains a template for some HTML code, and you could
 * use JavaScript to read this template and insert it into your document.
 *
 *  */

// ------------------- textContent: pure text ---------------------------

/*
 * The textContent provides access to the text inside the element: only text,
 * minus all <tags>.
 *  */

console.log(root.textContent)
// HelloGood Morning Good AfternoonGoodbye, world!Updating Text node, world!

// ------------------------- Hidden: -------------------------------------

/*
 * The hidden property in JavaScript is used to hide or show an HTML element.
 * If an element has the hidden attribute or if its hidden property is set to
 * true, the element is not visible on the page. It's similar to using
 * style="display:none" in your HTML, but it's shorter to write.
 *  */

let newdiv = document.createElement('div')
newdiv.innerHTML = 'Hello, world!'
root.appendChild(newdiv)

console.log(newdiv.hidden) // Outputs: false

newdiv.hidden = true

console.log(newdiv.hidden) // Outputs: true

/*
 * In the above example, we first create a div element and add it to the
 * page. At this point, the div is visible, so div.hidden is false. We then
 * set div.hidden to true, which hides the div. Now, div.hidden is true.
 *  */

// -------------------------  other properties: ---------------------------

/*
 * DOM elements also have other properties that correspond to their HTML
 * attributes. For example, an input element has a value property that
 * represents its current value, a type property that represents its type,
 * and an id property that represents its id. You can use these properties to
 * get or set the corresponding attributes.
 *  */

let input = document.createElement('input')
input.type = 'text'
input.id = 'my-input'
input.value = 'Hello, world!'
root.appendChild(input)

console.log(input.type) // Outputs: 'text'
console.log(input.id) // Outputs: 'my-input'
console.log(input.value) // Outputs: 'Hello, world!'