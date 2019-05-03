/****** DIFFERENCE BETWEEN '==' AND '===' *********
    - TRIPLE EQUAL OPERATOR: for STRICT equality comparisons. Dont do type coercion
    - EQUAL EQUAL: does type coercion, which means to convert the string to a number and then compare the numbers (that the data types of both variables do not have to match)
*/
defined = 12;

if (defined == '12') { //  converts the string of 23 to a number!!! (in Javascript) and then says that its the same as 12, the NUMBER
  console.log('The == operator does type coercion!'); 
}

// the BEST PRACTICE is to ALWAYS USE THE TRIPLE EQUAL, the strict equality operator

/*****************************
* CODING CHALLENGE 2
*/

/*
John and Mike both play basketball in different teams. In the latest 3 games, John's team scored 89, 120 and 103 points, while Mike's team scored 116, 94 and 123 points.
1. Calculate the average score for each team
2. Decide which teams wins in average (highest average score), and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw (the same average score)
4. EXTRA: Mary also plays basketball, and her team scored 97, 134 and 105 points. Like before, log the average winner to the console. HINT: you will need the && operator to take the decision. If you can't solve this one, just watch the solution, it's no problem :)
5. Like before, change the scores to generate different winners, keeping in mind there might be draws.
GOOD LUCK 😀
*/

var averageJohn = (89 + 120 + 103)/3;
var averageMike = (119 + 94 + 123)/3;
var averageMary = (97 + 134 + 105)/3;
var winner;

if (averageJohn > averageMike && averageJohn > averageMary) {
  winner = 'John\'s team wins with ' + averageJohn + ' points!';
} else if (averageMike > averageJohn && averageMike > averageMary) {
  winner = 'Mike\'s team wins with ' + averageMike + ' points!';
} else if (averageMary > averageJohn && averageMary > averageMike) {
  winner = 'Mary\'s team wins with ' + averageMary + ' points!';
} else {
  winner = 'There is a DRAW!';
}

console.log(winner);

// eismer escola dos servidores o mudo do servidor