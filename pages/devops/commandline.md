---
layout: page
title: "Command-line Stuff"
description: ""
---





## Search and replace a string in multiple files


{% highlight shell %}
$ grep -rl "foo" dir | xargs sed -i 's/foo/bar/g'
{% endhighlight %}


## Show some info about a x509 cert

 
{% highlight shell %}
$ openssl x509 -in name.pem -noout -text 
{% endhighlight %}


[more](http://operational.io/openssl-commonly-used-commands/)
 
 
 

## RHEL/Centos: Show from which yum repo a package was installed from

{% highlight shell %}
$ repoquery -i packgeName
or
$ yum version packageName
{% endhighlight %}


[more](http://serverfault.com/questions/62026/how-to-know-from-which-yum-repository-a-package-has-been-installed)

 
## Cluster SSH Tool for OS X - Do the same thing on multiple servers

* [csshx](https://github.com/brockgr/csshx)
* [some blog article](https://www.outsideopen.com/csshx/)




## Very nice alternative to screen



[tmux](https://tmux.github.io/)

[ubuntu-users wiki - tmux](https://wiki.ubuntuusers.de/tmux/)


## SysStat - IOstat

{% highlight shell %}
$ apt-get install sysstat
{% endhighlight %}



