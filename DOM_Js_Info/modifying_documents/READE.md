### difference between static nodelist and live nodelist

A NodeList in JavaScript is a collection of nodes extracted
from a document. There are two types of NodeLists: static
and live.

1. **Static NodeList**: A static NodeList does not
   automatically update itself to reflect changes in the
   DOM. It represents a snapshot of the DOM at the moment
   the NodeList was created. If elements are added or
   removed from the DOM after the NodeList is created, those
   changes will not be reflected in the static NodeList.
   The `document.querySelectorAll()` method returns a static
   NodeList.

2. **Live NodeList**: A live NodeList automatically updates
   itself to reflect changes in the DOM. If elements are
   added or removed from the DOM after the NodeList is
   created, those changes will be reflected in the live
   NodeList.
   The `document.getElementsByTagName()`, `document.getElementsByClassName()`,
   and `document.getElementsByName()` methods return a live
   NodeList.

In simple terms, a static NodeList is like a photo of the
DOM at a specific moment in time, while a live NodeList is
like a live video feed of the DOM that updates in real time.

<br>
<hr>
<br>

### HTMLCollection

An HTMLCollection in JavaScript is a type of collection that
holds HTML elements. It is similar to a NodeList, but with a
few key differences:

1. **Live Collection**: An HTMLCollection is live, meaning
   it automatically updates to reflect changes to the
   document's structure. If elements are added or removed
   from the document, those changes will be reflected in the
   HTMLCollection.

2. **Element-specific**: An HTMLCollection only contains
   HTML elements, not other types of nodes like text nodes
   or comment nodes. This is different from a NodeList,
   which can contain any type of node.

3. **Access by ID or name**: Elements in an HTMLCollection
   can be accessed both by their index number and by
   their `id` or `name` attribute. For example, if you have
   an HTMLCollection of form elements, you can access a form
   element either by its index number (like `forms[0]`) or
   by its `id` or `name` attribute (like `forms["myForm"]`).

Methods like `document.getElementsByTagName()`
and `document.getElementsByClassName()` return an
HTMLCollection.

<br>
<hr>
<br>

### difference between HTMLCollection and nodelist

An HTMLCollection and a NodeList are both collections of
nodes in the DOM, but they have some differences:

1. **NodeList**: A NodeList can contain any type of node (
   element nodes, text nodes, comment nodes, etc.), while an
   HTMLCollection can only contain element nodes.

2. **Live vs Static**: Both HTMLCollection and NodeList can
   be live, meaning they automatically update to reflect
   changes in the DOM. However, a NodeList returned by some
   methods like `document.querySelectorAll()` is static and
   does not automatically update.

3. **Access by ID or name**: Elements in an HTMLCollection
   can be accessed both by their index number and by
   their `id` or `name` attribute. For example, if you have
   an HTMLCollection of form elements, you can access a form
   element either by its index number (like `forms[0]`) or
   by its `id` or `name` attribute (like `forms["myForm"]`).
   This is not possible with a NodeList.

In summary, while both are collections of nodes, an
HTMLCollection is a bit more specialized, being limited to
HTML elements and allowing access by `id` or `name`
attributes. A NodeList is more general, including all types
of nodes and being either live or static depending on the
method used to retrieve it.