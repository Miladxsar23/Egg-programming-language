# -Egg-programming-language-with-javascript
In this section, I created a simple JavaScript-based programming language. I wrote this to gain a deeper understanding of how programming languages work, and it was very instructive for me.


# Prerequisties
* install node js

# installation
 Check that the node is installed on your system otherwise install it through [install-node-js](https://nodejs.org/en/)
 
 second download or clone this project via terminal command: 
 ```shell
git clone https://github.com/Miladxsar23/Egg-programming-language.git
```

# Syntax
Like all programming languages, our language follows a certain syntax to perform certain operations.

Syntax | arguments | Description 
--- | --- | --- | 
if | (condition, trueCallbak, falseCallback) | The if statement works by checking that if the first argument is true, it calls the second argument, otherwise it calls the third argument.| 
while | (condition, callback) | The while statement works by calling the second argument until the condition is met in the first argument | 
do | (task1, task2, ...) | Uses this expression to sequence mattresses | 
define | (variableName, variableValue) | To define variables, we use the expression that the first argument is defined as the name of the variable and the second argument as the value of that variable. | 
fun | (arg1, arg2, ..., body) | We use it to define a function. The last argument is interpreted as the body of the function and the rest of the arguments are interpreted as function arguments. | 
set | (variableName, variableValue) | Used to change the value of a predefined variable | 


# Enviroinment variable
Like all languages, our language has a set of internal values called environmental variables, which are interpreted based on their values.

name | arguments | Description 
--- | --- | --- | 
array | (value1, value2, ...) | Defines an array | 
length | (string || array) | return a length of array or string |
element | (array, index) | return a value at index in array |
print | (arg) | print a arg in console |
false | --- | false (boolean value)
true | --- | true (boolean value)
\* | --- | multiplication operation
\+ | --- | sum operation
\- | --- | mines operation
\/ | --- | division operation
\> | --- | Comparative operation
\< | --- | Comparative operation
\== | --- | Comparative operation

## Comment in egg language
To write a comment, just use the # sign at the beginning of your sentence, then the whole line will be considered as a comment.
```
# this is a comment
define(count, 1)
```

# How run *egg* program???
First create a file with the .egg extension and then write your egg program in it : 
*test.egg*
```
do(define(total, 0),
   define(count, 1),
   while(<(count, 11),
         do(define(total, +(total, count)),
            define(count, +(count, 1)))),
   print(total))
# ouput is 55
```
In the next step, just run its interpreter, Egg.js, with node and send your program file as input to it : 

***Be sure to open your terminal along the root of this project***

 ```shell
node src/code/Egg.js <path of your egg file>
//example
node src.cide/egg.js test.egg
```

## Contributing
As I use this for my own projects, I know this might not be the perfect approach
for all the projects out there. If you have any ideas, just
[open an issue](https://github.com/Miladxsar23/Egg-programming-language/issues/new) and tell me what you think.

If you'd like to contribute, please fork the repository and make changes as
you'd like. Pull requests are warmly welcome.

## Licensing
This project is licensed under MIT license.

## Contact
* email: milad.xsar72@gmail.com
