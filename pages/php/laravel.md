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


Create a new laravel project with:

``` $ laravel new project ```

Start webserver:

``` $ php artisan serve ```




## Routes

Config file: 'app/Http/routes.php'

Small things can be put directly into the routes file:

```
    Route::get('/', function () {
        /*
        /   - view code can be found here:
        /     'resources/views/welcome.blade.php'
        /   - path prefix 'resources/views/' has to be ommited
        /   - postfix .blade.php can be ommited
        */
        return view('welcome');
    });

    Route::get('about', function () {
        /*
        / view code can be found here:
        / 'resources/views/pages/about.blade.php'
        */
        return view("pages.about");
    });

    Route::get('/data', function () {

        $people = ['Taylor', 'Matt', 'Jeffrey'];

        //return View::make();


        /* type 1: */
        // return view('welcome', ['people' => $people ]);

        /* or with compact which does the same: */
        return view('welcome', compact('people'));


        /* type 2:  */
        // return view('welcome')->with('people', $people);

        /* dynamic methods:  */
        // return view('welcome')->withPeople($people);
    });
```


But a better way is it to put it into a controller:

```
    // Call controller functions using the format: ControllerName @ Method
    Route::get('about', 'PagesController@about');
```





## Controllers


Path: 'App/Http/Controllers'


Create with:

```
    $ php artisan help make:controller

    $ php artisan make:controller PagesController

```





## Views

Path: 'resources/views'


## Blade - The templating engine

* [blade doc](https://laravel.com/docs/5.2/blade)


```
    <!-- the old way:
        <?php foreach ($people as $person) : ?>
            <li><?= $person; ?></li>
        <?php endforeach; ?>
    -->

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




## Blade - Layout Files

Inside the layout file:

```
    // to yield a section of the template file
    @yield('content')
```


Inside the template file:

```
    @extends('layout')  // reference to layout.blade.php

    @section('content')  // define the start of the section 'content'

    [...]

    @stop

```



## Build Process - CSS, SCSS, JS, ...


Laravel uses 'elixir' - references can be found in the '/gulpfile.js'. To install all needed packages do a 'npm install' (which installs all packages referenced in the 'package.json' file).


To run the build process:

```
    $ gulp
    or
    $ gulp --production
    or
    $ gulp watch
```

Further elixir tutorial at laracasts video...



### SCSS

Path: 'resources/assets/sass/app.scss'




## Database

Configuration path: 'config/database.php'



ORM: 'eloquent'







