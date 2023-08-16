/*
The condition statement is evaluated at the beginning of every loop iteration and will continue as long as it evaluates to true.
 When the condition is false at the start of the iteration, the loop will stop executing. 
 This means if the condition starts as false, your loop will never execute.

The final expression is executed at the end of each loop iteration, 
prior to the next condition check and is usually used to increment or decrement your loop counter.

In the following example we initialize with i = 0 and iterate
 while our condition i < 5 is true. We'll increment i by 1 in each loop iteration with i++ as our final expression.
*/

const ourArray = [];

for (let i = 0; i < 5; i++) {
  ourArray.push(i);
}