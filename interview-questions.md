# ASSESSMENT 2: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

1. What is the difference between a parameter and an argument?

Your answer: Parameters are represented value types that need to be passed through a function for it to work work. Arguments are the actual values that are passed through the function. 

Researched answer: The parameter is one of the variables in a function.It is however dynamic and represents the arguement that is going to contain the actual data that will actually be passed through the function. The parameter is essentially just the place holder waiting for the arguments to be passed through the function in its place. 

2. The JavaScript built in method .map() takes predefined parameters. What are they? Which are required and which are optional?

Your answer: .map is a higher order function that iterates over an array. It takes in up to 3 parameters. They are value, index and array. The value parameter is required while the parameters of index and array are optional. 

Researched answer: .map does iterate over each element in the given array and returns a new array. It does not change the original array. It calls a function each of these elements as it iterates over them. It does not however call the given function on an empty element of the array. It takes up to three parameters (element, index, and array) with only the element (also valled value) being required while the other two are optional.   

3. What is the difference between map and filter?

Your answer: .map iterates over each element in an array calling a function on each of those elemements. It then returns a new array with each element in the same index location as the first array but the valeus changes by the fuction that was called.
.filter also iterates over each item in an array. like .map it also returns a new array In this new array are only the elements that have passed through the logic of the function that was passed with .filter. These elements in the new array DO NOT keep their original index from the original array.

Researched answer: Both of these HOF's are used to iterate over the elements. They both also call a function on each element of the array that has a value but not that are empty. They both also return a brand new array and do not change the original array. .map returns every element, after the function was preformed on it, in the new array but in its original index locatation. .filters only returns the elements that pass a "test" in the called function. The items that do get passed into the new array do not keep thier original index from the original array.    

4. What is iteration?

Your answer: Iteration is the process of moving over every element a group of elements. An example of this would be the elements of an array. Using a higher order function, you can use a seperate called upon function, to apply that seperate called function to each and every element in the array while only calling on the HOF once because it is iterating over each elements. Unless defined otherwise specified these iterate forward at an incriment of 1 though these parameters can be changed if one wanted to.   

Researched answer: Iteratation is the process of doing a task of function over and over again. Also could be referenced as repeating. Iterating or repeating a series of of functions that are progressing towards the outcome that is wanted. 

5. What is the difference between a function and a method?

Your answer: In javascript, a function is a block of code that contains the logic for the task that it was written for. A small "code machine" that has a consistent input and output based on the values that are passed through it. A method is very similar to a function in that both are designed and written to perform a task. Methods however are differant in that they are specifically assosiated to an object.   

Researched answer:
 In JS a function is considered an object. It is a block of code written to complete an action that has a consistent input and output based on the values that are passed through it. Methods are very simlilar to this but are specifically used with objects. So with all this being said, since a method works on objects and a function is considered an object, a method works by taking a function as its arguement.

6. STRETCH: What is hoisting in JavaScript? 

Your answer: I do not know what that is at this time but I will absolutely research it and get back to you with the answer.

Researched answer: Hoisting in JS is a process where the declaration of a function, class or variable is moved before the execution of the writeen code. It is moved to the top of the scope. This will allow one to use a varible or function before it is declared.  

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Classes: JS classes are the directions or a "blueprint" for how an object is to be created

2. Spread operator: A spreader operator allows you to work with iterable elemements and perform actions such as concatination and duplicate using just the ... sytax 

3. React state: React state is a build in object in the react framework that contains data about a component. 

4. React props: React props is the properties and function similar to HTML. The attribute values of a tag is stored in props in React.

5. DOM events: is when something happens on the Document Object Model (DOM) There are 8 JS DOM events.
When a user clicks the mouse.
When a web page has loaded.
When an image has been loaded.
When the mouse moves over an element.
When an input field is changed.
When an HTML form is submitted.
When a user strokes a key.
