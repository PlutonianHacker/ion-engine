# template-engine
A lousy excuse for a templating engine. Template Engine is capable of taking expressions enclosed in matching pairs of curly braces and replacing them with data from a provided javascript object. e.g.
```<h1>{title}</h1>``` and in javascript: ```
{
  title: "Hello, world."
}```

Being a "powerful" templating engine, it comes with two helper functions to hopefully make your puny html a little smarter. 

The if statement...
```
<!--HTML-->
{@if condition}
  <!-- some conditional code-->
{/if}
```
```
//javascript
{ conditon: true }
```
...and the faulty each statement.
```
<!--HTML-->
{each item in array}
  <li>item</li>
{/each}
```
```
//javascript
{ 
  array: [
   "Fred",
   "Dave",
   "Steve",
  ],
}
```
This basically justs returns one ```<li>``` for each item in the provided array.

For more info that more than likely doesn't exist, don't hesitate to head over to the nonexistant docs. 
