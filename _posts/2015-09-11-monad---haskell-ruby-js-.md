---
layout: post
title: "Monad   Haskell, Ruby, JS, ..."
description: ""
category: haskell
tags: [monad, haskell, ruby]
---
{% include JB/setup %}


## Ruby

* [Monads in Ruby, Part 1: Introduction](http://moonbase.rydia.net/mental/writings/programming/monads-in-ruby/00introduction.html)


## Javascript

{% highlight javascript %}
function MONAD() {
	return function unit(value) {
        var monad = Object.create(null);
        monad.bind = function (func) {
            return func(value);
        };
        return monad;
    };
}

var identify = MONAD();
var monad = identity("Hello World.");
monad.bind(alert);
{% endhighlight %}




## Other links

* [State of the Haskell Ecosystem](http://www.haskellforall.com/2015/08/state-of-haskell-ecosystem-august-2015.html#logging)

