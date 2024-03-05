// Creating the document

/*
 * Creating an element: To create a new DOM node, you can use
 * document.createElement(tag). This creates a new element node with the
 * given tag.
 * */

let div = document.createElement('div')

/*
 * Creating a text node: To create a new text node, you can use
 * document.createTextNode(text). This creates a new text node with the
 * given text. For example, let textNode = document.createTextNode('Here I
 * am'); creates a new text node with the text "Here I am".
 * */

let textNode = document.createTextNode('Here I am')

// ------------------------- Insertion methods -----------------------------

// document.body.append(div).
// This method adds the element to the end of the body.

let messageDiv = document.createElement('div')

messageDiv.innerHTML = '<strong>Hello</strong>, World!'
messageDiv.className = 'alert'

const rootElement = document.getElementById('root')

// append method
// append adds the element to the end of the parent
// rootElement.append(messageDiv)

// insert nodes or strings before node,
rootElement.before(messageDiv)

// Here are more insertion methods, they specify different places where to insert:

/*
 * node.append(...nodes or strings) – append nodes or strings at the end of
 * node,
 *
 * node.prepend(...nodes or strings) – insert nodes or strings at the
 * beginning of node,
 *
 * node.before(...nodes or strings) –- insert nodes or strings before node,
 *
 * node.after(...nodes or strings) –- insert nodes or strings after node,
 *
 * node.replaceWith(...nodes or strings) –- replaces node with the given
 * nodes or strings.
 * */

/*
 * difference between append and after
 *
 * node.append(...nodes or strings): This method adds nodes or strings at
 * the end of the node. If the node is a parent element, append will add the
 * new elements as the last child(ren) of the parent.
 *
 * node.after(...nodes or strings): This method inserts nodes or strings
 * after the node, meaning that the new elements will be siblings of the node
 * and placed immediately after it in the DOM structure.
 * */

ol.before('before') // insert string "before" before <ol>
ol.after('after') // insert string "after" after <ol>

let liFirst = document.createElement('li')
liFirst.innerHTML = 'prepend'
ol.prepend(liFirst) // insert liFirst at the beginning of <ol>

let liLast = document.createElement('li')
liLast.innerHTML = 'append'
ol.append(liLast) // insert liLast at the end of <ol>

// output will be
/*
 * before
 * <ol id="ol">
 *    <li>prepend</li>
 *    <li>0</li>
 *    <li>1</li>
 *    <li>2</li>
 *    <li>append</li>
 * </ol>
 * after
 * */

const divBefore = document.getElementById('divBefore')

let p = document.createElement('p')
p.innerHTML = 'Hello'

// before method can have multiple arguments
divBefore.before(p, document.createElement('hr'), document.createElement('a'))
/*
 * <p>Hello</p>;
 * <hr>
 * <a></a>
 * <div id="div"></div>
 * */

// --------------- insertAdjacentHTML/Text/Element --------------------------

/*
 * "beforebegin" – insert html immediately before elem,
 * "afterbegin" – insert html into elem, at the beginning,
 * "beforeend" – insert html into elem, at the end,
 * "afterend" – insert html immediately after elem.
 *  */

const oltwo = document.getElementById('ol-2')

oltwo.insertAdjacentHTML('beforebegin', '<p>Hello before</p>')
oltwo.insertAdjacentHTML('afterbegin', '<p>Hello after</p>')
oltwo.insertAdjacentHTML('beforeend', '<p>Goodbye before</p>')
oltwo.insertAdjacentHTML('afterend', '<p>Goodbye after</p>')

/*
* <p>Hello before</p>
* <ol id="ol-2">
    <p>Hello after</p>
        <li>0</li>
        <li>1</li>
        <li>2</li>
*    <p>Goodbye before</p>
* </ol>
* <p>Goodbye after</p>
* */

// ----------------- insertAdjacentText & insertAdjacentElement ----------------

/*
 * two more methods:
 * elem.insertAdjacentText(where, text) – the same syntax, but a string of
 * text is inserted “as text” instead of HTML,
 * example: elem.insertAdjacentText('beforebegin', 'Hello!') – insert as
 * text,
 *
 * elem.insertAdjacentElement(where, elem) – the same syntax, but inserts an
 * element.
 * example: elem.insertAdjacentElement('afterend', elem) – insert elem after
 * the element.
 * */

/*
 * In practice, only insertAdjacentHTML is used most of the time. Because for
 * elements and text, we have methods append/prepend/before/after – they are
 * shorter to write and can insert nodes/text pieces
 * */

// ------------------------------ Node removal ---------------------------------

// To remove a node, there’s a method node.remove().

const nodeRemoveDiv = document.createElement('div')
nodeRemoveDiv.className = 'alert'
nodeRemoveDiv.innerHTML =
  "<strong>Hi there!</strong> You've read an important message."

rootElement.append(nodeRemoveDiv)

console.log(nodeRemoveDiv) // <div class="alert">...</div>

nodeRemoveDiv.remove()

console.log(nodeRemoveDiv) // <div class="alert">...</div>

// .remove method don't remove the reference of the node, it just removes the
// node from the DOM, so the reference still exists which can be seen in the
// console.log

// ----------------------------- swap elements ----------------------------------

// All insertion methods automatically remove the node from the old place.

// let’s swap elements:

/*
 * <div id="first">First</div>
 * <div id="second">Second</div>
 * */

const first = document.getElementById('first')
const second = document.getElementById('second')

second.after(first)

/*
 * <div id="second">Second</div>
 * <div id="first">First</div>
 * */

// ----------------------------- Cloning and moving nodes ----------------------

/*
 * elem.cloneNode(true) creates a “deep” clone of the element – with all
 * attributes and subelements.
 *
 * elem.cloneNode(false), then the clone is made without child elements.
 *  */

const deepCloneDiv = document
  .getElementsByClassName('clone-nodes')[0]
  .cloneNode(true)
rootElement.append(deepCloneDiv)

const shallowCloneDiv = document
  .getElementsByClassName('clone-nodes')[0]
  .cloneNode(false)
rootElement.append(shallowCloneDiv)

// ----------------------------- DocumentFragment ------------------------------------

// DocumentFragment is a special DOM node that serves as a wrapper to pass
// around lists of nodes.

const fragmentUl = document.querySelector('.document-fragment')

function getListContent() {
  let fragment = new DocumentFragment()

  for (let i = 1; i <= 3; i++) {
    let li = document.createElement('li')
    li.append(i)
    fragment.append(li)
  }

  return fragment
}

fragmentUl.append(getListContent())

// DocumentFragment is rarely used explicitly. Why append to a special kind
// of node, if we can return an array of nodes instead?

/*
* function getListContent() {
  let result = [];

  for(let i=1; i<=3; i++) {
    let li = document.createElement('li');
    li.append(i);
    result.push(li);
  }

   return result;
 }

* ul.append(...getListContent());
*  */

// --------------------------------------------------------------------------

// ----------------------------- Summary ------------------------------------

/*
 * Creating Elements: You can create new DOM nodes using
 * document.createElement(tag). This creates a new element node with the
 * given tag. To create a new text node, you can use
 * document.createTextNode(text). This creates a new text node with the given
 * text.
 *
 * Insertion Methods: There are several methods to insert nodes or strings at
 * different positions relative to a given node. These include node.append(),
 * node.prepend(), node.before(), node.after(), and node.replaceWith().
 *
 * insertAdjacentHTML/Text/Element: These methods insert HTML, text, or an
 * element at a specified position relative to the current element. The
 * positions can be "beforebegin", "afterbegin", "beforeend", or "afterend".
 *
 * Node Removal: To remove a node, you can use the node.remove() method. This
 * method removes the node from the DOM, but the reference to the node still
 * exists.
 *
 * Swap Elements: All insertion methods automatically remove the node from
 * the old place. So, you can use these methods to swap elements.
 *
 * Cloning Nodes: You can create a clone of an element using
 * elem.cloneNode(true) for a deep clone (with all attributes and
 * subelements) or elem.cloneNode(false) for a shallow clone (without child
 * elements).
 *
 * DocumentFragment: This is a special DOM node that serves as a wrapper to
 * pass around lists of nodes. It's rarely used explicitly, as you can
 * return an array of nodes instead.
 *  */