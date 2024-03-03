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

// ----------------------------------HTML attributes------------------------------

const rootElement = document.getElementById('root')
const newDiv = document.createElement('div')
newDiv.innerHTML = 'Hello, Elephant!'

// Writing to an attribute
// setAttribute(name, value) is used to set the value of an attribute.
newDiv.setAttribute('id', 'elem') // standard attribute
newDiv.setAttribute('about', 'Elephant') // non-standard attribute

// Adding the new element to the DOM
rootElement.appendChild(newDiv)
// <div id="elem" about="Elephant">Hello, world!</div>

// Reading from an attribute wit  getAttribute(name) is used to read the value
// of an attribute. Note that attribute names are case-insensitive.
console.log(newDiv.getAttribute('About')) // Elephant

console.log(newDiv.getAttribute('id')) // elem

//
console.log(newDiv.outerHTML)
// <div id="elem" about="Elephant">Hello, Elephant!</div>

// Listing all attributes
for (let attr of newDiv.attributes) {
  console.log(`${attr.name} = ${attr.value}`)
}

/*
 * getAttribute('About') is used to read the value of an attribute. Note that
 * attribute names are case-insensitive.
 *
 * setAttribute('Test', 123) is used to set the value of an attribute. Any
 * value assigned to an attribute is converted to a string.
 *
 * outerHTML is used to check if the attribute is present in the HTML. It
 *  includes all attributes, both standard and non-standard.
 *
 * The attributes collection is iterable and contains all the attributes of
 * the element (both standard and non-standard) as objects with name and
 * value properties.
 *  */

// hasAttribute(name) returns true if the attribute exists, otherwise false.
console.log(newDiv.hasAttribute('id')) // true

// removeAttribute(name) removes the attribute.
newDiv.removeAttribute('about')
console.log(newDiv.hasAttribute('about')) // false

// ----------------------Property-attribute synchronization---------------------------

// Create a new div element
const div = document.createElement('div')

// Set an attribute on the div
div.setAttribute('id', 'myDiv')

// Log the id property of the div
console.log(div.id) // Outputs: myDiv

rootElement.appendChild(div)

// Change the id property of the div
div.id = 'newId'

// Log the id attribute of the div
console.log(div.getAttribute('id')) // Outputs: newId

// Now let's try with the value attribute of an input element
const input = document.createElement('input')

// Set the value attribute
input.setAttribute('value', 'initialValue')

rootElement.appendChild(input)

// Log the value property
console.log(input.value) // Outputs: initialValue

// Change the value property
input.value = 'newValue'

// Log the value attribute
console.log(input.getAttribute('value')) // Outputs: initialValue

/*
 * In this example, when we change the id attribute of the div element, the
 * id property also changes. Similarly, when we change the id property, the
 * id attribute changes. This is an example of property-attribute
 * synchronization.
 *
 * However, when we change the value attribute of the input element, the
 * value property changes. But when we change the value property, the value
 * attribute does not change. This is an example of the exceptions to
 * property-attribute synchronization.
 *  */

//  ------------------------- DOM properties are typed -------------------------------------

// The types of DOM properties are not always strings. They can be different
// types depending on the attribute they are associated with.

// Create a new checkbox input element
const checkbox = document.createElement('input')
checkbox.type = 'checkbox'
checkbox.checked = true

// Log the checked attribute and property
console.log(checkbox.getAttribute('checked')) // Outputs: null
// why null? because the checked attribute is a boolean attribute, which means
// the presence of the attribute represents true, and the absence of the
// attribute represents false. Therefore, the checked attribute does not have
// a value, and getAttribute returns null.
console.log(checkbox.checked) // Outputs: true

// Create a new div element
const divTwo = document.createElement('div')
divTwo.style.color = 'red'
divTwo.style.fontSize = '120%'

// Log the style attribute and property
console.log(divTwo.getAttribute('style')) // Outputs: color: red; font-size: 120%;
console.log(divTwo.style) // Outputs: CSSStyleDeclaration {color: "red", font-size: "120%", ...}
console.log(divTwo.style.color) // Outputs: red

// Create a new anchor element
const anchor = document.createElement('a')
anchor.href = '#hello'

// Log the href attribute and property
console.log(anchor.getAttribute('href')) // Outputs: #hello
console.log(anchor.href) // Outputs: http://site.com/page#hello (assuming site.com is your site)

/*
 * In this example, the checked property of the checkbox is a boolean, not a
 * string. The style property of the div is an object, not a string. And the
 * href property of the anchor is a full URL, not just the value of the href
 * attribute as written in the HTML.
 *
 * This demonstrates that DOM properties can have different types, and their
 * values can sometimes be different from the corresponding attribute values.
 * If you need the value of an attribute exactly as it is written in the
 * HTML, you should use the getAttribute method.
 *  */

// -------------------------- Non-standard attributes, dataset ----------------------------------

let orderState = div.dataset.orderState // "new", "pending", or "canceled"

// The dataset property provides read/write access to all the custom data
console.log(div.dataset.orderState) // "new"

for (let div of document.querySelectorAll('[data-order-state]')) {
  // Get the value of the data-order-state attribute
  let value = div.getAttribute('data-order-state')

  if (value === 'pending') {
    div.setAttribute('data-order-state', 'done')
    console.log(div) // <div data-order-state="done">...</div>
  }
}

/*
 * The document.querySelectorAll('[data-order-state]') function call is used
 * to select all HTML elements that have a data-order-state attribute. The
 * argument passed to querySelectorAll is a CSS selector.
 *
 * [data-order-state] is an attribute selector, which matches all elements
 * that have a data-order-state attribute, regardless of its value. The
 * square brackets [] are part of the CSS syntax for attribute selectors,
 * not an array
 *  */

/*
 * the potential conflict between non-standard attributes and future standard
 * attributes is a valid concern. To mitigate this, HTML5 introduced the
 * data-* attributes. These are intended to store custom data private to the
 * page or application.
 *  */