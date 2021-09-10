
//The Scope
if (true) {
    const message = 'Hello';
    console.log(message);
  }
  console.log(message); // ReferenceError: message is not defined
  //The if code block creates a scope for message variable.

//Block Scope
if (true) {
    // "if" block scope
    const message1 = 'Hello';
    console.log(message1); // 'Hello'
  }
  console.log(message1, "What"); // throws ReferenceError
