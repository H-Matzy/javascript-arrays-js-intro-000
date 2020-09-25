var chocolateBars = ["snickers","hundred grand","kitkat","skittles"];

function addElementToBeginningOfArray(A,E){
var Solution = [E,...A];
return Solution;
}
function destructivelyAddElementToBeginningOfArray(A,E){
var Solution = [E];
Solution.push(A);
return Solution;

}