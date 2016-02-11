---
layout: post
title: "Java 8   Lambdas, ..."
description: ""
category: java
tags: [java]
---



<link rel="stylesheet" href="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/styles/androidstudio.min.css">
<script src="//cdnjs.cloudflare.com/ajax/libs/highlight.js/8.7/highlight.min.js"></script>
<script>hljs.initHighlightingOnLoad();</script>



## Lambda Expressions


{% highlight java %}
// java.lang.Iterable: Iterable interface with new forEach method:
public interface Iterable<T> {
    Iterator<T> iterator(); 
  
    default void forEach(Consumer<? super T> action) {
        for (T t : this) {
            action.accept(t);
        }
    }
} 
{% endhighlight %}



{% highlight java %}
/**
 * Represents a supplier of results.
 *
 * <p>There is no requirement that a new or distinct result be returned each
 * time the supplier is invoked.
 *
 * <p>This is a <a href="package-summary.html">functional interface</a>
 * whose functional method is {@link #get()}.
 *
 * @param <T> the type of results supplied by this supplier
 *
 * @since 1.8
 */
@FunctionalInterface
public interface Supplier<T> {

    /**
     * Gets a result.
     *
     * @return a result
     */
    T get();
}
{% endhighlight %}

One thing to mention is that java now allows to implement methods in interfaces - so called 'default' method. For details see [here](https://docs.oracle.com/javase/tutorial/java/IandI/defaultmethods.html)



{% highlight java %}
Consumer<int> plusOne = new Consumer<int>() {
		 					public void accept(int x) {
		      					System.out.println(x + 1);
		   					}
						})


Consumer<int> plusOne = (int x) -> System.out.println(x + 1);
Consumer<int> plusOne = (x) -> System.out.println(x + 1);
Consumer<int> plusOne = x -> System.out.println(x + 1);

Consumer<int> plusOne = (x) -> { System.out.println(x + 1); };

Consumer<int> fortyTwo = () -> System.out.println(42);


Supplier<T>


// for filters:
Predicate<Object> a = Objects::nonNull;
Predicate<Object> b = x -> x != null;



reduce(new IntBinaryOperator() {
    int applyAsInt(int left, int right) {
        return Math.max(left, right);
    }
});

reduce( (int left, int right) -> Math.max(left, right) );


reduce(Math::max);

http://stackoverflow.com/questions/20001427/double-colon-operator-in-java-8/20001866#20001866

{% endhighlight %}




{% highlight java %}
public interface BiPredicate<T, U> {
    boolean test(T t, U u);
}
public interface BiFunction<T, U, R> {
    R apply(T t, U u);
}


BiPredicate<String,String>        sp1 =  (s,t) -> s.equalsIgnoreCase(t); // 1
BiFunction<String,String,Boolean> sp2 =  (s,t) -> s.equalsIgnoreCase(t); // 2
{% endhighlight %}



{% highlight java %}
List<String> myList = new ArrayList<String>();
List<String> myList = new ArrayList<>();

myList.forEach(new Consumer<String>() {
    public void accept(String s) {

    }
} )


myList.forEach(s -> System.out.println(s));




myList.stream().filter(new Predicate<String>() {
    public boolean test(String s) {
        return false;
    }
})

myList.stream().filter(s -> false);
myList.stream().filter(s -> {doSomething(); return false;} );




List<String> myList = new ArrayList<>(
                Arrays.asList("abc", "", "   def   ", null, "ghi", "   ", "xzy")
            );

myList.removeIf( s -> s == null );
myList.replaceAll( String::trim );
myList.removeIf( String::isEmpty );
myList.forEach( System.out::println );


List<File> fileList = myFileList.collect( 
                          Collectors.toCollection(
                              ArrayList::new 
                          ) 
                      );

{% endhighlight %}


<http://www.torsten-horn.de/techdocs/java-lambdas.htm>






## Read more here

* <https://blog.codecentric.de/2013/10/java-8-erste-schritte-mit-lambdas-und-streams/>
* <http://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html>
* <http://www.oracle.com/webfolder/technetwork/tutorials/obe/java/Lambda-QuickStart/index.html>
* <http://www.oracle.com/technetwork/articles/java/architect-lambdas-part1-2080972.html>

* <http://www.tutego.de/blog/javainsel/2014/03/funktionale-schnittstelle-aus-dem-java-util-function-paket/>