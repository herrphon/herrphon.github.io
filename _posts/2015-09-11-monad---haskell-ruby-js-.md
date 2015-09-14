---
layout: post
title: "Monad   Haskell, Ruby, JS, ..."
description: ""
category: haskell
tags: [monad, haskell, ruby]
---
{% include JB/setup %}




<http://adit.io/posts/2013-04-17-functors,_applicatives,_and_monads_in_pictures.html>
<http://adit.io/posts/2013-06-10-three-useful-monads.html>



1. Einheitsfunktion unit-function (Haskells _return_):
    <pre><code> return :: a -> a  </code></pre>

2. bind-Operator (&gt;&gt;=)
    <pre><code>  (>>=) :: m a -> (a -> m b) -> m b   </code></pre>

    The OO transform:
    * bind(monad, func)
    * monad.bind(func)


3. Kleisli-Operator(&gt;=&gt;)
    <pre><code>   (>=>) :: (a -> m b) -> (b -> m c) -> (a -> m c)   </code></pre>

4. Functor
    <pre><code>   fmap :: (a -> b) -> m a -> m b    </code></pre>

5. join
    <pre><code>   join :: m (m a) -> m a    </code></pre>

6. empty

7. +

8. fail


## Axioms

<https://wiki.haskell.org/Monad_laws>



### OO rewritting

1. unit(value).bind(f) `=== f(value)


2. monad.bind(unit) ==== monad


3. Composition:
    <pre><code>   monad.bind(f).bind(g) ==== monad.bind(function(value) { 
                               return f(value).bind(g);
                              }) 

    
    bind(bind(monad, f), f)
    monad.bind(f).bind(g)
    </code></pre>


    






https://www.youtube.com/watch?v=dkZFtimgAcM


## Ruby

http://www.idryman.org/blog/2014/01/23/yet-another-monad-tutorial/




From [Monads in Ruby, Part 1: Introduction](http://moonbase.rydia.net/mental/writings/programming/monads-in-ruby/00introduction.html)


A monad, for our purposes, is made up of three things:

1. A container type.
2. the operation wrap: puts a single value in an instance of the container; Haskell calls this (confusingly) return
3. the operation pass: extracts the values from the container and filters them through a function (we’ll use a block); Haskell calls this “bind” (spelt >>=)





## Javascript

http://igstan.ro/posts/2011-05-02-understanding-monads-with-javascript.html

[Philip Roberts: What the heck is the event loop anyway? | JSConf EU 2014](https://www.youtube.com/watch?v=8aGhZQkoFbQ)
[Simulation on how the JS call stack and event queue work](http://latentflip.com/loupe/)



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




Making ugly things like with promises:

{% highlight javascript %}
getStudent(name, function student)) {
    getLatestGrade(student, function (grade) {
        console.log(grade);
        logOut();
    });
});
{% endhighlight %}

Look like that:

{% highlight javascript %}
getStudent(name)
    .then(getLatestGrade)
    .then(console.log)
    .catch(logError)
    .then(logOut)
{% endhighlight %}



## Haskell

[1,2,3] >>= (\ x -> [1,2,3] >>= (\y -> return (x/=y) >>= (\r -> case r of
 True -> return (x,y) 
  _    -> fail "")))



## Maybe Monad

Get rid of all the _null_ checks...



## Concurrency

Concurrency is trying to make lots of things happen at the same time. Currency is really hard. 
Threads are evil. Threads do not scale well. They are really hard to use. They race, they dead lock.
There are alternative to threads - one of them is pure functional programming.

If there are no side effects nothing ever conflicts.

Problem - you have to deal with the real world.

More practical solution:

### Turn based processing

* single-threaded - race free - deadlock free
* the 3 laws: 
** never wait
** never block
** finish fast

* events - message passing - no threads - no mutexes
* usage:
** web browsers
** ui frameworks
** server - like node.js

* Asynchronicity can be hard to manage

The naive way is to write nested event handlers.

## Promises / Futures

Promises are an excellent mechanism for managing asynchronicity. A promise is an object that represents a possible future value.

Every promise has a corresponding resolver that is used to ultimately assign a value to the promise.

A Promise has one of 3 states:  
* pending
* kept / fullfilled: has a value
* broken / rejected: has a reason


{% highlight javascript %}
pending ----> kept
        \---> broken
{% endhighlight %}



A promise is an event generator. It fires its events when the value of the promise is ultimately known. At any time after the making the promise, event handling functions can be registered with the promise, which will be called in order with the promise's value when it is known. A promise can accept functions that will be called 

promise.when(success, failure) returns another promise for the result of your success function.

### Make a vow:

var my_vow = VOW.make();
    .make(value)
    .break(reason)
    .promise
        .when(kept, broken)









[Promise Debugging](http://stackoverflow.com/questions/25827234/how-to-debug-javascript-promises)







## Other links

* [State of the Haskell Ecosystem](http://www.haskellforall.com/2015/08/state-of-haskell-ecosystem-august-2015.html#logging)



## Further viewing

* <https://channel9.msdn.com/Shows/Going+Deep/Hewitt-Meijer-and-Szyperski-The-Actor-Model-everything-you-wanted-to-know-but-were-afraid-to-ask>

* <https://www.youtube.com/watch?v=w9hHHvhZ_HY>

* <https://www.youtube.com/watch?v=oBqeDYETXME>
