// ASSESSMENT 2: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------1) What will this log?

const cohort = "Alpha 2023"
// console.log(cohort.split(""))

// a) Your answer: Using .split("") on the variable containing the string value will break each character into its own string value within the array. By having the quotation marks within the parens, this will translate to each .split char having quaotation marks around it.

// b) Verify and explain: My initial answer is correct however I did forget that the space is still an indexed value so it still receives the quotation marks. I also did not state that each string value would be separated by a comma 

// --------------------2) What will this log?

const greeter = (name) => {
  `Hello, ${name}!`
}
// console.log(greeter("LEARN Student"))

// a) Your answer: This will not return anything because there is no a return statement  
// b) Verify and explain: Though somewhat correct, my answer did not include to correct console.log which is undefined. 

// --------------------3) What will this log?

const multipliedByTwo = [4, 5, 6, 7, 8].map((number) => number * 2)
// console.log(multipliedByTwo)

// a) Your answer: This will return 8, 10, 12, 14, 16 in an array.
// b) Verify and explain: This logic will work since it is all in one line, therefor, not requiring a return statement. The .map will iterate over the array, passing each number value over the * 2 function.

// --------------------4) What will this log?

const onlyOdds = [11, 12, 13, 14, 15].filter((number) => number % 2 !== 0)
// console.log(onlyOdds)

// a) Your answer: This will return 11, 13, and 15.
// b) Verify and explain: 11, 13, and 15 are returned as a new array. Like the question above, the logic will work without a return since it is all inline. returning only the numbers that do not (!) have a remainder after being devided by 2. using the modulo (%)

// --------------------5) What will this log?

const myCodingSkills = {
  languages: ["JavaScript", "Ruby"],
  frameworks: ["React", "Ruby on Rails"],
  databases: "PostgreSQL",
  versionControl: "GitHub"
}
console.log(myCodingSkills.languages[0])

// a) Your answer: "JavaScript"
// b) Verify and explain: Javascript is returned because when invoking the object, myCodingSkills, the key, is called but using the "." and then the keys name, "languages". The value of that key at the zero index [0], which is "JavaScript", is logged in the terminal. 
