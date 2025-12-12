// Example file with linting errors
function exampleFunction() {
  let unusedVar = "This variable is not used";
  console.log("This is a console log statement");
  const message = "Hello, world!";
  return message;
}

// Another example with double quotes
const anotherMessage = "This should be single quotes";

// Missing semicolon
function missingSemicolon() {
  return "Hello"
}