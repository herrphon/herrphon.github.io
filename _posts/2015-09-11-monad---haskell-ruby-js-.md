---
layout: post
title: "Monad   Haskell, Ruby, JS, ..."
description: ""
category: haskell
tags: [monad, haskell, ruby]
---
{% include JB/setup %}



1. Einheitsfunktion (return):
    <pre><code> return :: a -> a  </code></pre>

2. bind-Operator (&gt;&gt;=)
    <pre><code>  (>>=) :: m a -> (a -> m b) -> m b   </code></pre>

3. Kleisli-Operator(&gt; = &gt;)
    <pre><code>   (>=>) :: (a -> m b) -> (b -> m c) -> (a -> m c)   </code></pre>

4. Functor
    <pre><code>   fmap :: (a -> b) -> m a -> m b    </code></pre>



https://wiki.haskell.org/Monad_laws



https://www.youtube.com/watch?v=dkZFtimgAcM


## Ruby

http://www.idryman.org/blog/2014/01/23/yet-another-monad-tutorial/




From [Monads in Ruby, Part 1: Introduction](http://moonbase.rydia.net/mental/writings/programming/monads-in-ruby/00introduction.html)


A monad, for our purposes, is made up of three things:

1. A container type.
2. the operation wrap: puts a single value in an instance of the container; Haskell calls this (confusingly) return
3. the operation pass: extracts the values from the container and filters them through a function (we’ll use a block); Haskell calls this “bind” (spelt >>=)





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

