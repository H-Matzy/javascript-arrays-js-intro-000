var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(A,E){
var Solution = [E,...A];
return Solution;
}
function destructivelyAddElementToBeginningOfArray(A,E){
A.unshift(E)
return A
}
function addElementToEndOfArray(A,E){
  var Solution = [...A,E]
  return Solution
}
function destructivelyAddElementToEndOfArray(A,E){
  A.push(E)
  return A
}
