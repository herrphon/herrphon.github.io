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






