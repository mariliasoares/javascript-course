/* ************ Operator precedence *************
    very handy cheatsheet to determine which JavaScript operators are evaluated first.
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
    1. on the top of the list will be executed before the others 
*/

// **** MULTIPLE ASSIGNMENTS ****
var x, y;
x = y = (3 + 5) * 4 - 6;
/*  x = y = -> at this point Y is still undefined, but x is not.
    ASSOCIATIVITY: the direction in which the operation is executed
    in the multiplication/addition we have LEFT TO RIGHT
    and assignment ( ... = ... ) works from RIGHT TO LEFT
    -----------------------------------------
    1.the grouping has higher precedence (20)
    2. then multiplication (14)
    3. and finally subtraction (13)
    4. we ends up with the result of 26
    5. then the assignment works from right to left. 
      So it doesn't start by doing X equal Y but instead it starts by saying Y equals 26.
      Only then it does X equals 26.
*/
console.log(x, y);

// ******* MORE OPERATORS *********
x = x * 2;
x *= 2; // x * 2 without us having to write out that X times here like before
x += 10; // x = x + 10

x = x + 1;
x += 1;
x++;

