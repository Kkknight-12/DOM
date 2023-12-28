const openNewWindow = () => {
  let newWindow = window.open("", "", "width=600,height=600");

  // Close the window after 3 seconds
  setTimeout(() => {
    console.log("close");
    newWindow.close();
  }, 3000);
};

/*
 * setTimeout is a DOM API */

// ----------------------------------------------------------------

// children property of document.body returns a HTMLCollection
// which is an array-like object
const bodyChildren = document.body.children;
console.log(bodyChildren); // [button, h1, p, form, form, script]

// it looks like an array but it is not
// we can iterate over it using for loop
// we can use Array.from to convert it to an array
// we can also use spread operator to convert it to an array

// ----------------------------------------------------------------