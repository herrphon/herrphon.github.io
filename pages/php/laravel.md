---
layout: page
title: "Laravel"
description: "PHP Web-Framework"
---


## Links

* [Nice video tutorial](https://laracasts.com/series/laravel-5-from-scratch)

* [What's new in laravel 5.3](https://laracasts.com/series/whats-new-in-laravel-5-3)

* [Laravel Documentation](https://laravel.com/docs/5.2/)



## Commandline Basics


* Create a new laravel project  -  ``` $ laravel new project ```
* Start webserver  -  ``` $ php artisan serve ```




## Routes

'*app/Http/routes.php*'

Small things can be put directly into the routes file:

{% highlight php %}
<?php
    Route::get('/', function () {
        return view('welcome');       // 'resources/views/welcome.blade.php'
    });

    Route::get('about', function () {
        return view("pages.about");   // 'resources/views/pages/about.blade.php'
    });

    Route::get('/data', function () {
        $people = ['Taylor', 'Matt', 'Jeffrey'];
        // return View::make();
        // return view('welcome', ['people' => $people ]);
        // return view('welcome')->with('people', $people);
        // return view('welcome')->withPeople($people);
        return view('welcome', compact('people'));
    });
{% endhighlight %}


But a better way is it to put it into a controller:

{% highlight php %}
<?php   // Calling Controller Format: ControllerName @ Method
    Route::get('about', 'PagesController@about');
{% endhighlight %}





## Controllers

'*App/Http/Controllers*'

``` bash
$ php artisan help make:controller
$ php artisan make:controller PagesController
```




## Views with Blade - Templating Engine

'*resources/views*'


* [blade doc](https://laravel.com/docs/5.2/blade)


``` php
<!-- the old way:    -->
    <?php foreach ($people as $person) : ?>
        <li><?= $person; ?></li>
    <?php endforeach; ?>

<!-- the blade way: -->
    @if (empty($people))
        There are no people.
    @else
        There are some people.
    @endif

    @unless (true == true)
        unless works also
    @endunless

    @foreach ($people as $person)
        <li>{{ $person }}</li>
    @endforeach
```




## Blade-Layout Files

Inside the layout file (*layout.blade.php*):

``` php
@yield('content')  // yield a section of the template file
```


Inside the template file:

``` php
@extends('layout')  // reference to layout.blade.php

@section('content')  // define the start of the section 'content'
[...]
@stop
```



## Build Process - CSS, SCSS, JS, ...


Laravel uses [elixir](https://www.laravel.com/docs/5.3/elixir) - references can be found in the '/gulpfile.js'. To install all needed packages do a 'npm install' (which installs all packages referenced in the 'package.json' file).


To run the build process:

``` $ gulp ```  or  ``` $ gulp --production ```  or  ``` $ gulp watch ```


Further elixir tutorial at laracasts video...



### SCSS

'*resources/assets/sass/app.scss*'




## Database

'*config/database.php*'


Laravel uses an [ORM](https://en.wikipedia.org/wiki/Object-relational_mapping) called [eloquent](https://laravel.com/docs/5.3/eloquent)









