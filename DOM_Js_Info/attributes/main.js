// Attributes and properties

/*
 * Attributes are the values you give to an element in the HTML markup, while
 * properties are the values that JavaScript uses after the browser has
 * parsed the HTML and created the DOM (Document Object Model) tree.
 *
 * When a page is loaded, the browser creates the DOM based on the HTML.
 * During this process, it creates JavaScript objects for each HTML element,
 * and each attribute in the HTML becomes a property on the corresponding
 * JavaScript object.
 *
 * For example, if you have an HTML element like this:
 * <body id="page">, the browser will create a JavaScript object for the
 * body element, and that object will have an id property with the value of
 * "page".
 *  */

/*
 * DOM (Document Object Model) properties are characteristics of DOM nodes
 * that can be accessed and manipulated using JavaScript. DOM nodes are
 * regular JavaScript objects, and as such, you can add your own properties
 * and methods to them.
 *
 * For example, you can add a new property to the document.body object like
 * this:
 *  */

document.body.myData = {
  name: 'Caesar',
  title: 'Imperator',
}

// You can then access this property like you would any other JavaScript
// object property:
console.log(document.body.myData.name) // Caesar

/*
 * You can also add methods to DOM objects. For example, you can add a
 * sayTagName method to the document.body object:
 * */

document.body.sayTagName = function () {
  console.log(this.tagName)
}

document.body.sayTagName() // BODY

/*
 * In this case, this inside the method refers to the document.body object.
 *
 * You can even add methods to the prototype of built-in constructors like
 * Element, which will then be available on all element objects:
 * */

Element.prototype.sayHi = function () {
  console.log(`Hello, I'm ${this.tagName}`)
}

document.documentElement.sayHi() // Hello, I'm HTML
document.body.sayHi() // Hello, I'm BODY

/*
 * DOM properties and methods behave just like those of regular JavaScript
 * objects. They can hold any value, and they are case-sensitive. For
 * example, elem.nodeType is not the same as elem.NoDeTyPe.
 *  */