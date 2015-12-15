---
layout: post
title: "Go   First Steps"
description: ""
category: go
tags: [golang]
---
{% include JB/setup %}



## Setup Golang Envionment and IDE


### Install go


### Install tools

go get -u -v github.com/nsf/gocode
go get -u -v github.com/rogpeppe/godef
go get -u -v golang.org/x/tools/cmd/goimports
go get -u -v golang.org/x/tools/cmd/oracle
go get -u -v golang.org/x/tools/cmd/gorename



### Sublime
https://scotch.io/bar-talk/the-complete-visual-guide-to-sublime-text-3-getting-started-and-keyboard-shortcuts
https://scotch.io/bar-talk/best-of-sublime-text-3-features-plugins-and-settings

http://stackoverflow.com/questions/17742781/keyboard-shortcut-to-comment-lines-in-sublime-text-3

git
gitgutter


https://packagecontrol.io/packages/GoSublime


https://packagecontrol.io/packages/GoTools


relatively new - but the official plugin:
https://packagecontrol.io/packages/Golang%20Build


## intro
https://www.youtube.com/watch?v=hha7d97VYkM



## setup ide
https://golang.org/doc/code.html
http://dave.cheney.net/2014/12/01/five-suggestions-for-setting-up-a-go-project


## testing and tdd
https://golang.org/pkg/testing/

e.g. fib performance tests: 
http://dave.cheney.net/2013/06/09/writing-table-driven-tests-in-go
https://github.com/davecheney/fib/blob/master/fib_test.go

http://dave.cheney.net/2013/06/30/how-to-write-benchmarks-in-go


https://www.binpress.com/tutorial/getting-started-with-go-and-test-driven-development/160

https://medium.com/@matryer/5-simple-tips-and-tricks-for-writing-unit-tests-in-golang-619653f90742#.ydoq3sj64

https://www.binpress.com/tutorial/getting-started-with-go-and-test-driven-development/160




## reference

https://golang.org/ref/spec
(e.g. https://golang.org/ref/spec#Comparison_operators)


http://blog.golang.org/


http://blog.golang.org/gouk15




## make vs new



## Variable Types

reference types:

* maps 
* slices
* pointers

    var m map[string]int

    m = make(map[string]int)


## slices - slices vs arrays
https://blog.golang.org/go-slices-usage-and-internals

## map
https://blog.golang.org/go-maps-in-action


## json
https://blog.golang.org/json-and-go
https://www.youtube.com/watch?v=2rHgpx2gClk


## code review comments
https://github.com/golang/go/wiki/CodeReviewComments


## profiling
http://blog.golang.org/profiling-go-programs




If you have no ideas what to code, look here e.g. https://projecteuler.net/archives
