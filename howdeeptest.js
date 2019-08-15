// -- OBJECTIVE -- //
// -- Determine the deepest depth of the parentheses string and print it to the console.

let deepestDepth = 0;
let count = 0;
let string = '(()((())))()'; // deepest depth === 4

for (let i = 0; i < string.length; i++) {
  if (string.charAt(i) === '(') {
    count++;
  } else {
    count--;
  }

  if (count > deepestDepth) {
    deepestDepth = count;
  }
}

console.log('Count: ' + count);
console.log('Deepest Depth: ' + deepestDepth);