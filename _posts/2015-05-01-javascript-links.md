---
layout: post
title: "Javascript Links"
description: ""
category: javascript 
tags: [javascript]
---
{% include JB/setup %}


* [JSLint](http://www.jslint.com/)

* [JSHint](http://www.jshint.com/)


* [Learning JavaScript Design Patterns (by Addy Osmani)](http://addyosmani.com/resources/essentialjsdesignpatterns/book/)

* [Javascript @ Crockford](http://javascript.crockford.com/)

* [Google DevTools Course](http://discover-devtools.codeschool.com/)


## Making the web faster

<iframe width="854" height="480" src="https://www.youtube.com/embed/BaneWEqNcpE" frameborder="0" allowfullscreen></iframe>



## Something for beginners
[Javascript: Understanding the Weird Parts - The First 3.5 Hours](https://www.youtube.com/watch?v=Bv_5Zv5c-Ts)


Types:

* undefined
* null
* NaN
* boolean
* number
* string
* symbol (ES6)




* [Operator precedence](https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

* [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators)

* [Equality comparisons and saneness](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness)




<pre><code>function getCounter() {
    var count = 0;
    return {
        incr: function () { return ++count; },
        decr: function () { return --count; }
    };
}
</code></pre>


<pre><code>--------------------------------
| getCounter                   |
| _______________________      |
| |                     |-     |
| |                     ||-    |
| |               ______|||    |
| |  _______/--> | incr |||    |
| |  |count|     -------|||    |
| |  -------      ______|||    |
| |         \--> | decr |||    |
| |              -------|||    |
| |                     |||    |
| |                     |||    |
| |---------------------|||    |
|  |---------------------||    |
|   |---------------------|    |
|                              |
--------------------------------
</code></pre>



## Node.js

<https://www.youtube.com/watch?v=czmulJ9NBP0>