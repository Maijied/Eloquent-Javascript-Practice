/* "The W3C Document Object Model (DOM) is a platform and language-neutral interface that allows 
 programs and scripts to dynamically access and update the content, structure, and style of a document."

DOM stands for Document Object Model, a representation of an HTML document in nodes and objects.
Ref.: https://flaviocopes.com/dom/  */

/* How to DOM works: 
The DOM is the browser’s internal representation of a web page. When the browser retrieves your HTML from your server, 
the parser analyzes the structure of your code and creates a model of it. Based on this model, 
the browser then renders the page on the screen. */

/* Browsers expose an API that you can use to interact with the DOM. This is how modern JavaScript frameworks work -
   they use the DOM API to tell the browser what to display on the page.   */

/* What is the Window Object in DOM? ✔
The window object represents the window that contains the DOM document.
window.document points to the document object loaded in the window.
Properties : console , document , history , location , location , sessionStorage 
Methods : alert(), postMessage(), requestAnimationFrame(), setInterval(), clearInterval(), setTimeout(), setImmediate(),
          addEventListener(), removeEventListener()      */   

/* What is the Document Object in DOM? 
The document object represents the DOM tree loaded in a window. */

/* Basic Selectors in DOM =>
getElementsByTagName() -> This method returns all the elements that matches the specified Tag name.
getElementsByClassName() -> This method returns all the elements that matches the specified Class name.
getElementById() -> returns only the first matched element while ignoring the remaining.       */

/* Query Selectors in DOM 
querySelector() -> first element that matches the specified CSS selector in the document.
querySelectorAll() ->  returns all the elements that match the specified CSS selector in the document.  */

/* What is the difference between getElement and Query selectors?
    With a querySelector statement, you can select an element based on a CSS selector. This means you can select
    elements by ID, class, or any other type of selector. Using the getElementById method, you can only select an
    element by its ID.
*/


