// https://javascript.info/searching-elements-dom#getelementsby

// Searching: getElement*, querySelector*
// document.getElementById or just id
// if there are multiple elements with the same id, only the first one will be returned
//

let elem = document.getElementById("elem");
// make its background red
elem.style.background = "red";

let elems1 = document.getElementById("elem-content1");
elems1.style.color = "white";
console.log(elems1);

// window is an object that represents the browser window
// with window["elem-content"] we can access the element with id="elem-content"
window["elem-content2"].style.background = "blue";

// but with window["elem-content"] we can't access class="elem-content"
// window["elem-content3"].style.background = "blue";
/*
 * The window object in JavaScript represents the browser's window.
 * When you use window["element-id"], you're trying to access an HTML
 * element by its ID through the window object. This works because IDs
 * are supposed to be unique in a document, and JavaScript automatically
 * creates properties on the window object for each unique ID.
 *
 * However, classes are not unique identifiers. Multiple elements can have
 * the same class, and JavaScript does not automatically create properties
 * on the window object for classes. Therefore, window["class-name"] will
 * not work to access elements by their class.
 *
 * To access elements by their class, you can use document.getElementsByClassName("class-name")
 * or document.querySelector(".class-name"). These methods return a live HTMLCollection
 * and the first matching Element respectively.
 * */

// --------------------------------------------------------------------------------

// querySelectorAll
// document.querySelectorAll(css) returns all elements inside the document
// that match the given CSS selector. The result is a static (not live) NodeList.

/*
<ul>
  <li>The</li>
  <li>test</li>
</ul>
<ul>
  <li>has</li>
  <li>passed</li>
</ul>
* */
let elements = document.querySelectorAll("ul > li:last-child");

for (let elem of elements) {
    console.log(elem.innerHTML); // "test", "passed"
}

/*
 * NOTE:
 * A NodeList in JavaScript is a collection of nodes extracted from a document.
 * There are two types of NodeLists: static and live.
 *
 * Static NodeList: A static NodeList does not automatically update itself to
 * reflect changes in the DOM. It represents a snapshot of the DOM at the
 * moment the NodeList was created. If elements are added or removed from the
 * DOM after the NodeList is created, those changes will not be reflected in
 * the static NodeList. The document.querySelectorAll() method returns a
 * static NodeList.
 *
 * Live NodeList: A live NodeList automatically updates itself to reflect
 * changes in the DOM. If elements are added or removed from the DOM after
 * the NodeList is created, those changes will be reflected in the live NodeList.
 * The document.getElementsByTagName(), document.getElementsByClassName(),
 * and document.getElementsByName() methods return a live NodeList.
 *
 * In simple terms, a static NodeList is like a photo of the DOM at a
 * specific moment in time, while a live NodeList is like a live video
 * feed of the DOM that updates in real time.
 * */

/*
 * */

// --------------------------------------------------------------------------------

// querySelector
// document.querySelector(css) returns the first element for the given CSS selector.
// In other words, the result is the same as elem.querySelectorAll(css)[0],

// --------------------------------------------------------------------------------

// matches
// elem.matches(css) returns true if the elem matches the given CSS selector.
// It’s a newer method, supported by modern browsers.

/*
<a href="http://example.com/file.zip">...</a>
<a href="http://ya.ru">...</a>
* */
for (let elem of document.body.children) {
    // if it's an <a> elem with href ending in .zip
    if (elem.matches('a[href$="zip"]')) {
        console.log("The archive reference: " + elem.href);
    }
}

// --------------------------------------------------------------------------------

// closest

// Ancestors of an element are: parent, the parent of parent, its parent and
// so on. The ancestors together form the chain of parents from the element to the top.
//
// elem.closest(css) returns the closest ancestor that matches the CSS-selector.
// The elem itself is also included in the search.
// If there are multiple such ancestors, the most closest one is returned.

/*
<h1>Contents</h1>

<div class="contents">
  <ul class="book">
    <li class="chapter">Chapter 1</li>
    <li class="chapter">Chapter 2</li>
  </ul>
</div>
* */

// <li class="chapter">Chapter 1</li>
let chapter = document.querySelector(".chapter"); // LI

// <ul class="book"> ... </ul>
console.log(chapter.closest(".book"));

// null (because it's not a descendant)
console.log(chapter.closest("h1"));

// --------------------------------------------------------------------------------

// getElementsBy*
// document.getElementsByClassName, document.getElementsByTagName, document.getElementsByName
// These methods are the oldest DOM methods. They are supported by all browsers.
// They return a live HTMLCollection of elements.

/*
 * elem.getElementsByTagName(tag) looks for elements with the given tag and
 * returns the collection of them. The tag parameter can also be a star "*" for “any tags”.
 *
 * elem.getElementsByClassName(className) returns elements that have the given CSS class.
 *
 * document.getElementsByName(name) returns elements with the given name attribute,
 * document-wide. Very rarely used.
 * */

/*
<table id="table">
  <tr>
    <td>Your age:</td>

    <td>
      <label>
        <input type="radio" name="age" value="young" checked> less than 18
      </label>
      <label>
        <input type="radio" name="age" value="mature"> from 18 to 50
      </label>
      <label>
        <input type="radio" name="age" value="senior"> more than 60
      </label>
    </td>
  </tr>
</table>
* */

// getElementsByTagName - returns a collection of elements with the given tag name
let inputs = table.getElementsByTagName("input");
console.log(inputs); // HTMLCollection of 3 elements

for (let input of inputs) {
    console.log(input.value + ": " + input.checked);
}

// getElementsByName - returns a collection of elements with the given name attribute
/*
<form name="my-form">
  <div class="article">Article</div>
  <div class="long article">Long article</div>
</form>
* */

// find by name attribute
// returns a collection of elements with the given name
let form = document.getElementsByName("my-form");
console.log(form); // HTMLCollection of 1 element
console.log(form[0]); // <form name="my-form">...</form>

// getElementsByClassName
// returns a collection of elements with the given class
// form = form[0]
// let articles = form.getElementsByClassName('article');
let articles = document.getElementsByClassName("article");
console.log(articles[0]); // <div class="article">Article</div>
console.log(articles[1]); // <div class="long article">Long article</div>

// --------------------------------------------------------------------------------

// Live collections