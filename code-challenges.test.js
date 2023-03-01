// ASSESSMENT 2: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in an array of numbers and returns an array with all the numbers multiplied by 3.

// a) Create a test with expect statements for each of the variables provided.


const numbersArray1 = [6, 7, 8, 9, 10]
// Expected output: [18, 21, 24, 27, 30]
const numbersArray2 = [24, 27, 30, 33, 36]
// Expected output: [72, 81, 90, 99, 108]

// --------------------1) Create a function that takes a object as an argument and decides if the number inside it is evenly divisible by three or not.

// input: object
// output: String stating yes or no if the number inside the object is devisible by 3.

// psuedo: create a function called filterTheThrees. Pass the object through the function as the value. Using a conditional statment, use a modulo operator to determine if there is a remainder when the number in the object is devided by 3. If there is no remainder, the number is devisible by 3 and will return "is divisible by three". else if there is a remainder, then the number is not devisible by 3 and will return "is not divisible by three". use else statment as an error catch all for a wrong input saying, "Whatever mumbo jumbo you just entered is not the object we were looking or asked for. Please try again but this time use the CORRECT input. Thank you." 

// a) Create a test with expect statements for each of the variables provided.

// describe("filterTheThrees", () => {
//     it("if the number inside it is evenly divisible by three or not" , () => {
//         expect(filterTheThrees(object1)).toEqual("15 is divisible by three")
//         expect(filterTheThrees(object2)).toEqual("0 is divisible by three")
//         expect(filterTheThrees(object3)).toEqual("-7 is not divisible by three")
//     })
// })

const object1 = { number: 15 }
// Expected output: "15 is divisible by three"
const object2 = { number: 0 }
// Expected output: "0 is divisible by three"
const object3 = { number: -7 }
// Expected output: "-7 is not divisible by three"

// yarn test 1:

// FAIL  ./code-challenges.test.js
// filterTheThrees
//   ✕ if the number inside it is evenly divisible by three or not

// ● filterTheThrees › if the number inside it is evenly divisible by three or not

//   ReferenceError: filterTheThrees is not defined

//     106 | describe("filterTheThrees", () => {
//     107 |     it("if the number inside it is evenly divisible by three or not" , () => {
//   > 108 |         expect(filterTheThrees(object1)).toEqual("15 is divisible by three")
//         |         ^
//     109 |         expect(filterTheThrees(object2)).toEqual("0 is divisible by three")
//     110 |         expect(filterTheThrees(object3)).toEqual("-7 is not divisible by three")
//     111 |     })

//     at Object.expect (code-challenges.test.js:108:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// yarn test 2: 

// FAIL  ./code-challenges.test.js
// filterTheThrees
//   ✕ if the number inside it is evenly divisible by three or not (1 ms)

// ● filterTheThrees › if the number inside it is evenly divisible by three or not

//   expect(received).toEqual(expected) // deep equality

//   Expected: "15 is divisible by three"
//   Received: undefined

//     106 | describe("filterTheThrees", () => {
//     107 |     it("if the number inside it is evenly divisible by three or not" , () => {
//   > 108 |         expect(filterTheThrees(object1)).toEqual("15 is divisible by three")
//         |                                          ^
//     109 |         expect(filterTheThrees(object2)).toEqual("0 is divisible by three")
//     110 |         expect(filterTheThrees(object3)).toEqual("-7 is not divisible by three")
//     111 |     })

//     at Object.toEqual (code-challenges.test.js:108:42)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// yarn test 3: 
// PASS  ./code-challenges.test.js
// filterTheThrees
//   ✓ if the number inside it is evenly divisible by three or not (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total

// b) Create the function that makes the test pass.

// const filterTheThrees = (object) => {
//     if(object.number % 3 === 0) {
//         return `${object.number} is divisible by three`
//     } else if (object.number % 3 !== 0) {
//         return `${object.number} is not divisible by three`
//     } else {
//         return "Whatever mumbo jumbo you just entered is not the object we were looking or asked for. Please try again, but this time use the CORRECT input. Thank you."
//     }
// }
// --------------------2) Create a function that takes in an array of words and returns an array with all the words capitalized.

//input: an array of words
//output: the input array with the first letter of each word capitalized

//pseudo: create a function named wordCapitalize. .map to iterate over the input array. Then .charAt(0) will be used to pull the first letter at the 0 index of the string into a new string. .to UpperCase will then be used to capitalize the letters in this new string. .slice(1) will then be used to to pull a copy from the original array with the index of 1 being used so the the original first letters, and then .toLowerCase. 

// a) Create a test with expect statements for each of the variables provided.

// describe("wordCapitalize", () => {
//     it("return an array with all the words capitalized" , () => {
//         expect(wordCapitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         expect(wordCapitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     })
// })

const randomNouns1 = ["streetlamp", "potato", "teeth", "conclusion", "nephew"]
// Expected output: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
const randomNouns2 = ["temperature", "database", "chopsticks", "mango"]
// Expected output: ["Temperature", "Database", "Chopsticks", "Mango"]

// yarn test 1:

// FAIL  ./code-challenges.test.js
// wordCapitalize
//   ✕ return an array with all the words capitalized

// ● wordCapitalize › return an array with all the words capitalized

//   ReferenceError: wordCapitalize is not defined

//     200 | describe("wordCapitalize", () => {
//     201 |     it("return an array with all the words capitalized" , () => {
//   > 202 |         expect(wordCapitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         |         ^
//     203 |         expect(wordCapitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     204 |     })
//     205 | })

//     at Object.expect (code-challenges.test.js:202:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// yarn test 2:

// FAIL  ./code-challenges.test.js
// wordCapitalize
//   ✕ return an array with all the words capitalized (2 ms)

// ● wordCapitalize › return an array with all the words capitalized

//   expect(received).toEqual(expected) // deep equality

//   Expected: ["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"]
//   Received: undefined

//     200 | describe("wordCapitalize", () => {
//     201 |     it("return an array with all the words capitalized" , () => {
//   > 202 |         expect(wordCapitalize(randomNouns1)).toEqual(["Streetlamp", "Potato", "Teeth", "Conclusion", "Nephew"])
//         |                                              ^
//     203 |         expect(wordCapitalize(randomNouns2)).toEqual(["Temperature", "Database", "Chopsticks", "Mango"])
//     204 |     })
//     205 | })

//     at Object.toEqual (code-challenges.test.js:202:46)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// yarn test 3: 

// PASS  ./code-challenges.test.js
// wordCapitalize
//   ✓ return an array with all the words capitalized (1 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total


// b) Create the function that makes the test pass.

// const wordCapitalize = (array) => {
//     return array.map(word => {
//         const firstLetter = word.charAt(0).toUpperCase();
//         const rest = word.slice(1).toLowerCase();
    
//         return firstLetter + rest;
//       });
// }

// --------------------3) Create a function that takes in a string and logs the index of the first vowel.



// a) Create a test with expect statements for each of the variables provided.

// input: a sting
// output: and index number of the first vowel from the input

// psuedo: Create a function called firstVowel that takes a sting as its input. create a let variable with to use with .search and array using regular expression and /i to cover any capitol letters. 

const vowelTester1 = "learn";
// Expected output: 1
const vowelTester2 = "academy"
// Expected output: 0
const vowelTester3 = "challenges"
// Expected output: 2

// b) Create the function that makes the test pass.

describe("firstVowel", () => {
    it("log the index of the first vowel" , () => {
        expect(firstVowel(vowelTester1)).toEqual(1)
        expect(firstVowel(vowelTester2)).toEqual(0)
        expect(firstVowel(vowelTester3)).toEqual(2)
    })
})

// yarn tesst 1:

// FAIL  ./code-challenges.test.js
// firstVowel
//   ✕ log the index of the first vowel (1 ms)

// ● firstVowel › log the index of the first vowel

//   ReferenceError: firstVowel is not defined

//     226 | describe("firstVowel", () => {
//     227 |     it("log the index of the first vowel" , () => {
//   > 228 |         expect(firstVowel(vowelTester1)).toEqual(1)
//         |         ^
//     229 |         expect(firstVowel(vowelTester2)).toEqual(0)
//     230 |         expect(firstVowel(vowelTester3)).toEqual(2)
//     231 |     })

//     at Object.expect (code-challenges.test.js:228:9)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

// yarn test 2:

// FAIL  ./code-challenges.test.js
// firstVowel
//   ✕ log the index of the first vowel (2 ms)

// ● firstVowel › log the index of the first vowel

//   expect(received).toEqual(expected) // deep equality

//   Expected: 1
//   Received: undefined

//     226 | describe("firstVowel", () => {
//     227 |     it("log the index of the first vowel" , () => {
//   > 228 |         expect(firstVowel(vowelTester1)).toEqual(1)
//         |                                          ^
//     229 |         expect(firstVowel(vowelTester2)).toEqual(0)
//     230 |         expect(firstVowel(vowelTester3)).toEqual(2)
//     231 |     })

//     at Object.toEqual (code-challenges.test.js:228:42)

// Test Suites: 1 failed, 1 total
// Tests:       1 failed, 1 total

const firstVowel = (string) => {
    let vowelsOnly = string.search(/[a,e,i,o,u,]/i)
    return (vowelsOnly);
}





