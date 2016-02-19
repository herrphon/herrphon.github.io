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



## Make a hexdump of a file

{% highlight shell %}
$ xxd HelloWorld.class
00000000: cafe babe 0000 0034 001d 0a00 0600 0f09  .......4........
00000010: 0010 0011 0800 120a 0013 0014 0700 1507  ................
00000020: 0016 0100 063c 696e 6974 3e01 0003 2829  .....<init>...()
00000030: 5601 0004 436f 6465 0100 0f4c 696e 654e  V...Code...LineN
00000040: 756d 6265 7254 6162 6c65 0100 046d 6169  umberTable...mai
00000050: 6e01 0016 285b 4c6a 6176 612f 6c61 6e67  n...([Ljava/lang
00000060: 2f53 7472 696e 673b 2956 0100 0a53 6f75  /String;)V...Sou
00000070: 7263 6546 696c 6501 000f 4865 6c6c 6f57  rceFile...HelloW
00000080: 6f72 6c64 2e6a 6176 610c 0007 0008 0700  orld.java.......
00000090: 170c 0018 0019 0100 0c48 656c 6c6f 2057  .........Hello W
000000a0: 6f72 6c64 2107 001a 0c00 1b00 1c01 000a  orld!...........
000000b0: 4865 6c6c 6f57 6f72 6c64 0100 106a 6176  HelloWorld...jav
000000c0: 612f 6c61 6e67 2f4f 626a 6563 7401 0010  a/lang/Object...
000000d0: 6a61 7661 2f6c 616e 672f 5379 7374 656d  java/lang/System
000000e0: 0100 036f 7574 0100 154c 6a61 7661 2f69  ...out...Ljava/i
000000f0: 6f2f 5072 696e 7453 7472 6561 6d3b 0100  o/PrintStream;..
00000100: 136a 6176 612f 696f 2f50 7269 6e74 5374  .java/io/PrintSt
00000110: 7265 616d 0100 0770 7269 6e74 6c6e 0100  ream...println..
00000120: 1528 4c6a 6176 612f 6c61 6e67 2f53 7472  .(Ljava/lang/Str
00000130: 696e 673b 2956 0021 0005 0006 0000 0000  ing;)V.!........
00000140: 0002 0001 0007 0008 0001 0009 0000 001d  ................
00000150: 0001 0001 0000 0005 2ab7 0001 b100 0000  ........*.......
00000160: 0100 0a00 0000 0600 0100 0000 0100 0900  ................
00000170: 0b00 0c00 0100 0900 0000 2500 0200 0100  ..........%.....
00000180: 0000 09b2 0002 1203 b600 04b1 0000 0001  ................
00000190: 000a 0000 000a 0002 0000 0003 0008 0004  ................
000001a0: 0001 000d 0000 0002 000e                 ..........
{% endhighlight %}

* [wiki - java class file](https://en.wikipedia.org/wiki/Java_class_file)
* [wiki - java byte code](https://en.wikipedia.org/wiki/Java_bytecode)

