# Ion Engine
Ion Engine is a lightweight, still experimental templating engine. The Ion templating engine is capable of taking expressions enclosed in matching pairs of curly braces and replacing them with data from a provided javascript object. e.g.
```<h1>{title}</h1>``` and in javascript: ```
{
  title: "Hello, world."
}```

Being a "powerful" templating engine, it comes with two helper functions to hopefully make your puny html a little smarter. 

## Built-In Helpers
The if statement for conditional code...
```
<!--HTML-->
{if condition}
  <!-- some conditional code-->
{fi}
```
```
//javascript
{ conditon: true }
```
...and the faulty each statement and looping.
```
<!--HTML-->
{each item in array}
  <li>item</li>
{each}
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
