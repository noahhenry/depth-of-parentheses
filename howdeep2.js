// -- OBJECTIVES -- //
// -- Determine the deepest depth of the string of parentheses and print it to the console.
// -- Specify whether the string is symmetrical. If not, indicate why.

const string = '))))(((()';
let deepestDepth = 0;
let depthCount = 0;

let isEqual;
const generalErrorMsg = 'Error: there are not an equal amount of opening and closing parentheses.';
const tooManyRightParenErrorMsg = 'Error: there are too many right parentheses.';
const tooManyLeftParenErrorMsg = 'Error: there are too many left parentheses.';

function doesItEqual(string) {
  for (let i = 0; i < string.length; i++) {
    if (string.charAt(i) === '(') {
      depthCount++;
    } else {
      depthCount--;
    }
  }
}

function solve() {
  doesItEqual(string);

  if (depthCount === 0) {
    isEqual = true;
  } else {
    isEqual = false;
    if (depthCount < 0) {
      console.log(generalErrorMsg);
      console.log(tooManyRightParenErrorMsg);
    } else {
      console.log(generalErrorMsg);
      console.log(tooManyLeftParenErrorMsg);
    }
  }

  if (isEqual) {
    for (let i = 0; i < string.length; i++) {
      if (string.charAt(i) === '(') {
        depthCount++;
      } else {
        depthCount--;
      }

      if (depthCount > deepestDepth) {
        deepestDepth = depthCount;
      }
    }
  }
}

solve()

console.log('Count: ' + depthCount);
console.log('Deepest Depth: ' + deepestDepth);