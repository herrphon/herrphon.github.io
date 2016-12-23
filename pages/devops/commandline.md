---
layout: page
title: "Command-line Stuff"
description: ""
---



## Check shell scripts

Always use <https://www.shellcheck.net/> to check bash code :-)



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


## Rsync with different Port

```bash
rsync -avz -e "ssh -p $portNumber" user@remoteip:/path/to/files/ /local/path/
```




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

``` bash
 $ hexdump -C sequence.dat

00000000  00 01 02 03 04 05 06 07  08 09 0a 0b 0c 0d 0e 0f  |................|
00000010  10 11 12 13 14 15 16 17  18 19 1a 1b 1c 1d 1e 1f  |................|
00000020  20 21 22 23 24 25 26 27  28 29 2a 2b 2c 2d 2e 2f  | !"#$%&'()*+,-./|
00000030  30 31 32 33 34 35 36 37  38 39 3a 3b 3c 3d 3e 3f  |0123456789:;<=>?|
00000040  40 41 42 43 44 45 46 47  48 49 4a 4b 4c 4d 4e 4f  |@ABCDEFGHIJKLMNO|
00000050  50 51 52 53 54 55 56 57  58 59 5a 5b 5c 5d 5e 5f  |PQRSTUVWXYZ[\]^_|
00000060  60 61 62 63 64 65 66 67  68 69 6a 6b 6c 6d 6e 6f  |`abcdefghijklmno|
00000070  70 71 72 73 74 75 76 77  78 79 7a 7b 7c 7d 7e 7f  |pqrstuvwxyz{|}~.|
00000080  80 81 82 83 84 85 86 87  88 89 8a 8b 8c 8d 8e 8f  |................|
00000090  90 91 92 93 94 95 96 97  98 99 9a 9b 9c 9d 9e 9f  |................|
000000a0  a0 a1 a2 a3 a4 a5 a6 a7  a8 a9 aa ab ac ad ae af  |................|
000000b0  b0 b1 b2 b3 b4 b5 b6 b7  b8 b9 ba bb bc bd be bf  |................|
000000c0  c0 c1 c2 c3 c4 c5 c6 c7  c8 c9 ca cb cc cd ce cf  |................|
000000d0  d0 d1 d2 d3 d4 d5 d6 d7  d8 d9 da db dc dd de df  |................|
000000e0  e0 e1 e2 e3 e4 e5 e6 e7  e8 e9 ea eb ec ed ee ef  |................|
000000f0  f0 f1 f2 f3 f4 f5 f6 f7  f8 f9 fa fb fc fd fe ff  |................|
00000100
```


## Display SSL Certificate Details

{% highlight shell %}
$ export SERVER=gnupg.org
$ echo | openssl s_client -showcerts -servername ${SERVER}  \
                      -connect ${SERVER}:443 2>/dev/null  \
                      | openssl x509 -inform pem -noout -text


Certificate:
    Data:
        Version: 3 (0x2)
        Serial Number:
            fa:f3:f4:88:f1:c5:46:11:3e:70:4c:11:4c:de:b3:5f
    Signature Algorithm: sha256WithRSAEncryption
        Issuer: C=FR, ST=Paris, L=Paris, O=Gandi, CN=Gandi Standard SSL CA 2
        Validity
            Not Before: Dec 21 00:00:00 2015 GMT
            Not After : Mar 19 23:59:59 2018 GMT
        Subject: OU=Domain Control Validated, OU=Gandi Standard SSL, CN=gnupg.org
        Subject Public Key Info:
            Public Key Algorithm: rsaEncryption
                Public-Key: (2048 bit)
                Modulus:
                    00:c3:46:a5:40:4b:7e:e6:a4:79:8f:51:2e:01:2c:
                    32:61:99:2b:53:39:1b:31:4f:73:45:83:ef:d4:06:
                    b2:41:23:cd:ab:11:d5:fd:61:f1:6c:d2:77:b6:3f:
                    b6:a4:86:1e:a8:80:e5:07:59:f5:c1:d1:72:93:78:
                    08:1b:ea:27:5f:56:e7:e9:6e:bc:30:a3:b4:8c:03:
                    56:a8:40:59:62:d3:42:d8:3a:88:02:3f:91:52:66:
                    b4:13:bf:9c:cc:73:6b:7e:12:31:30:9b:29:d6:0d:
                    ed:4c:74:cc:37:18:fa:28:7a:c6:5a:95:e9:c7:e9:
                    a7:05:01:99:bb:ac:48:e5:9a:ae:d9:f2:f7:04:ba:
                    12:e3:23:79:71:06:ac:b5:23:80:73:eb:83:a4:2e:
                    3b:38:be:5b:e7:ed:91:9d:a0:77:37:6d:d3:aa:46:
                    f6:b1:9c:1f:6b:48:10:8d:4d:1c:78:db:89:43:47:
                    38:72:28:8d:86:44:41:9c:9d:a8:8a:8d:19:78:a1:
                    a2:61:22:d3:9f:2e:f7:f3:39:01:1d:87:c1:89:e2:
                    49:0e:9f:73:72:fb:24:ad:26:18:76:ff:ec:ae:9c:
                    a1:a9:bb:f4:79:44:ff:b2:91:65:12:48:d2:13:78:
                    f2:b5:1f:ea:5d:2b:12:e7:16:c3:47:e1:34:40:cd:
                    32:85
                Exponent: 65537 (0x10001)
        X509v3 extensions:
            X509v3 Authority Key Identifier:
                keyid:B3:90:A7:D8:C9:AF:4E:CD:61:3C:9F:7C:AD:5D:7F:41:FD:69:30:EA

            X509v3 Subject Key Identifier:
                97:76:3F:1A:4C:01:36:1C:06:F7:30:4A:7A:6B:A1:8F:D0:D7:DF:B2
            X509v3 Key Usage: critical
                Digital Signature, Key Encipherment
            X509v3 Basic Constraints: critical
                CA:FALSE
            X509v3 Extended Key Usage:
                TLS Web Server Authentication, TLS Web Client Authentication
            X509v3 Certificate Policies:
                Policy: 1.3.6.1.4.1.6449.1.2.2.26
                  CPS: https://cps.usertrust.com
                Policy: 2.23.140.1.2.1

            X509v3 CRL Distribution Points:

                Full Name:
                  URI:http://crl.usertrust.com/GandiStandardSSLCA2.crl

            Authority Information Access:
                CA Issuers - URI:http://crt.usertrust.com/GandiStandardSSLCA2.crt
                OCSP - URI:http://ocsp.usertrust.com

            X509v3 Subject Alternative Name:
                DNS:gnupg.org, DNS:www.gnupg.org
    Signature Algorithm: sha256WithRSAEncryption
         73:d7:ab:a9:58:6e:4d:2a:a5:ec:38:ab:1d:ed:6d:14:f8:5a:
         5b:91:ec:ee:d5:94:e9:1b:33:b9:5b:86:44:ce:5c:ac:4f:13:
         fa:6c:5a:72:0a:51:79:f4:2f:0e:38:68:c8:b1:2d:7b:24:6e:
         f2:dd:3b:68:aa:06:ee:b8:e5:a4:63:15:76:0c:9c:30:b1:c1:
         93:44:d9:19:d5:9f:31:15:53:aa:5a:8e:ac:a3:e1:c2:b4:e5:
         84:e6:89:2d:61:fa:9c:b9:f9:a9:bc:45:e5:af:92:40:50:c2:
         d6:58:b3:88:e1:4d:4d:67:ea:58:ef:2c:f5:28:8b:c1:c5:33:
         db:01:a9:50:81:54:ff:dd:5b:95:ff:f4:af:25:95:d3:3a:bb:
         6a:46:71:41:9a:2a:ae:c4:69:40:df:b4:6a:8f:38:77:e9:a5:
         ad:0b:23:3a:f0:c2:87:85:d8:6e:56:27:39:a9:5c:f7:b4:6a:
         1c:3b:93:38:04:1b:76:bd:9e:4b:17:fc:f6:ff:07:25:84:c6:
         bf:88:0e:ae:a2:15:b2:33:6e:3f:5d:74:7d:28:e6:4b:52:ba:
         32:da:39:64:b2:d4:c7:b8:dc:4d:6c:fc:c7:7c:a1:a1:56:2e:
         90:b5:db:ff:b4:12:b2:a6:a0:86:36:b0:1a:cb:d6:e3:cb:af:
         28:9d:bf:a5
{% endhighlight %}


## Parse Commandline Input with Bash

http://wiki.bash-hackers.org/howto/getopts_tutorial


## Analyze traffic remotely with wireshark and tcpdump over ssh

```
   ssh root@${HOSTNAME} tcpdump -U -s0 -w 'not port 22' | wireshark -k -i -
```


[other options](https://www.commandlinefu.com/commands/view/4373/analyze-traffic-remotely-over-ssh-w-wireshark)


