---
layout: page
title: "Git"
description: ""
---



## News

 
* [git 2.7](https://github.com/blog/2094-new-year-new-git-release)
* [git 2.6](https://github.com/blog/2066-git-2-6-including-flexible-fsck-and-improved-status)
* [git 2.5 - whats new](https://github.com/blog/2042-git-2-5-including-multiple-worktrees-and-triangular-workflows)


* [git lfs](https://github.com/blog/2069-git-large-file-storage-v1-0)
* [Atlassians Advanced Git Stuff](https://www.atlassian.com/git/tutorials/advanced-overview)


## Aliases

```
alias.root=rev-parse --show-toplevel
# or:
alias.root=!pwd
``` 


## Commands


{% highlight shell %}
$ git merge-base
$ git submodule
$ git subtree
{% endhighlight %} 
 


{% highlight shell %}
$ git log --graph --decorate --oneline

*   cafebabe (HEAD, master) Merge branch 'feature'
|\  
| * 1122331 consectetur adipisicing elit, sed do eiusmod
| * 1234567 Lorem ipsum dolor sit amet
* | caaffee Excepteur sint occaecat cupidatat non
|/  
* baabbee Ut enim ad minim veniam
* 22cafe2 cillum dolore eu fugiat nulla pariatur
{% endhighlight %}
 



{% highlight shell %}
$ git branch --all --contains cafebabe

  master
* feature-branch
  remotes/origin/HEAD -> origin/master
  remotes/origin/master

{% endhighlight %}


{% highlight shell %}
$ git merge-base --is-ancestor cafebabe master && echo "cafebabe is on master" || echo "cafebabe is not on master"

cafebabe is on master
{% endhighlight %}



```bash
 $ git check-ignore build -q || echo build >> .gitignore
```

## Move git branch to another location e.g. one commit back

```bash
  $ git reset --hard HEAD^ 
  $ git push -f 
```


## Only checkout a subdirectory


i'll do a tldr at some point in time - but for now, this is also nice enough:

* [some dude](http://jasonkarns.com/blog/subdirectory-checkouts-with-git-sparse-checkout/)



