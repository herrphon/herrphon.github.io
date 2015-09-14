---
layout: post
title: "Package Manager for Windows"
description: ""
category: windows
tags: [windows]
---
{% include JB/setup %}



Installing software in windows is a pure pain. With linux distributions you have all sorts of package management systems like *apt-get*, *yum install*, *emerge* or *eix*. 

For mac there is [brew](http://brew.sh). 


With my new corporate laptop, I didn't want to go through the paint of installing everything again - so I searched for a solution and discovered [Chocolatery](https://chocolatey.org/).


Very easy installation with:


    @powershell -NoProfile -ExecutionPolicy Bypass -Command "iex ((new-object net.webclient).DownloadString('https://chocolatey.org/install.ps1'))" && SET PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin




Afterwards you can install packages with:


    choco install -y notepadplusplus


The *-y* option automatically accepts the license stuff.


Enjoy!


## My Favorite Packages

* ConEmu <http://sourceforge.net/projects/conemu/>

* ...

