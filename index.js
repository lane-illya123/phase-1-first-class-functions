function callbackFunction() {
    console.log('This is a callback function');
  }
  
  function receivesAFunction(callback) {
    // Do some work here...
    console.log('Doing some work...');
  
    // Execute the callback function
    callback();
  }
  
  // Pass the callback function as an argument
  receivesAFunction(callbackFunction);
 
  function returnsANamedFunction() {
    console.log("Calling the named function");
  
    // Define a named function
    function nameFunction() {
      console.log("Inside the named function");
      // Add your logic here
    }
  
    // Return the named function
    return nameFunction;
  }
  
  // Call the returnsANamedFunction
  var returnedFunction = returnsANamedFunction();
  
  // Call the returned function
  returnedFunction();

  function returnsAnAnonymousFunction() {
    console.log("Calling the anonymous function");
  
    // Return an anonymous function
    return function() {
      console.log("Inside the anonymous function");
      // Add your logic here
    };
  }
  
  // Call the returnsAnAnonymousFunction
  var returnedFunction = returnsAnAnonymousFunction();
  
  // Call the returned function
  returnedFunction();
