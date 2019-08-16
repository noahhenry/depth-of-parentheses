# depth-of-parentheses

## 1st Objective
Solve the problem of determining the deepest depth of a string of parentheses.

i.e. `"(()((())))()"`.

Wait... What if the string is not symmetrical?

## 2nd Objective
Add some logic to determine if the string of parentheses is not symmetrical. Maybe indicate which parenthesis type there are more of?

i.e. `"(())())))"`.

## 3rd Objective
Woah, `Objective 2` does not display depth count if the string of parentheses is not symmetrical. Let's fix that.

Indicate how many extra right or left parenthesis or parentheses exist as well as maintain existing functionality of `Objective 1` (tracking the deepest level of nested parentheses in a given string). Must determine depth no matter where it happens in the given string.

i.e. `")))())"`. <- depth === 1, with 4 right parenthesis that do not have a match.

## 4th Objective
Write a GUI/Interface that allows a user to specify the string and document in real-time the depth of the array. Use a framework/library like `Angular`, `Vue`, or `React`?

## 5th Objective
Color-code matching oppening and closing parentheses like the `vsCode` [Rainbow Brackets](https://stackoverflow.com/questions/31778413/run-javascript-in-visual-studio-code) extension.

## 6th Objective
Allow user to input more than just `()`s. Maybe even allow interpolation of any type?

i.e. `[]` or `{}` or `[({})]`.
