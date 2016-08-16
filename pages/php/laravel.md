---
layout: page
title: "Laravel"
description: "PHP Web-Framework"
---

# Laravel

## Links

* [Nice video tutorial](https://laracasts.com/series/laravel-5-from-scratch)
* [What's new in laravel 5.3](https://laracasts.com/series/whats-new-in-laravel-5-3)




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
```



## Views

Path: 'resources/views'

