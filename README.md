1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans : getElementById selects only one element by id and getElementsByClassName selectes all matching classes by className . And querySelector  selects only first element by tagname,id,class and querySelectorAll
selects all the matching elements by classname,tagname etc.

2. How do you create and insert a new element into the DOM?
  Ans : First we target the section where will append the child then document.createElement('div') and then append this chiild to parent using appenChild(div)

3. What is Event Bubbling? And how does it work?
Ans : when an event happens on a element first it runs on the element and then moves up(bubble ups) to parent and then grandparent, then document.

4. What is Event Delegation in JavaScript? Why is it useful?
And : Instead of adding eventListner to every child just add event listner to their parent. it is useful because If I have 100 buttons and need to add event listners
to each button the code will be lengthy and messy and the performance of the website will slow. that's why we use event listerns to parent

5. What is the difference between preventDefault() and stopPropagation() methods?
Ans : preventDefault stops the default behavior of an element where stopPropagation stops the events where they bubbling up.
