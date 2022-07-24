---
layout: article
title: Getting yourself a Jekyll website
permalink: /website/
tags:
  - technology
  - guide

---

<div class="img__post__right">
<img src="/assets/images/jekyll/octojekyll.svg">
</div>
I work in a theoretical physics [research group](https://www.iiserkol.ac.in/~slal/), and we recently decided to create a new website for the group. Since I had already worked on two websites, I wanted to take this up. For the benefit of myself as well as the others who will come after me and might have to handle the website, I decided to document the entire process, in as much detail as possible. I believe there are too many general-purpose blog posts on creating Jekyll websites in the wild (see, for example, [this](https://jekyllrb.com/docs/), [this](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages) or [this](https://opensource.com/article/17/4/getting-started-jekyll)), so this will instead be an elaborate wiki for a very specific use case. The website will have a home page that gives an overview of the research of the group, a dedicated page for the list of publications, a gallery for the present and past members of the group, a page for a more detailed exposition on the topics of our research, as well as other miscellaneous content.
{: style="text-align: justify"}


## Ruby, gems and Jekyll
[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) is an interpreted, high-level programming language. Libraries in `ruby` are referred to as `gems`. [RubyGems](https://en.wikipedia.org/wiki/RubyGems) is a package manager for `ruby` that makes installing and maintaining `gems` easier. [Bundler](https://github.com/rubygems/bundler) is a `gem` whose job is to create consistent environments for running `ruby`. It does this by managing the `gems` that the application depends on. Given a list of `gems`, it can automatically download and install those `gems`, as well as any other `gems` needed by the `gems` that are listed, _all at the appropriate versions_.
{: style="text-align: justify"}

<div class="img__post__left">
<img src="/assets/images/jekyll/jekyll.svg">
</div>
Finally, [Jekyll](https://jekyllrb.com/) is a static site generator written in `ruby`. It is in fact a `gem` that takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more. Such a website can then be hosted on any server. [Github Pages](https://jekyllrb.com/docs/github-pages/) is a free option, where you can host the website on GitHub’s `github.io` domain or on a custom domain name of your choice. `Jekyll` was developed by [Tom Preston-Werner](https://en.wikipedia.org/wiki/Tom_Preston-Werner), GitHub's co-founder.
{: style="text-align: justify"}

In summary
- `gems` are libraries in the language Ruby, managed by the RubyGems package manager

- `bundler` creates environments from specified libraries and their versions

- `Jekyll` is a ruby library that  generates a static website from the provided content

With these definitions out of the way, we can now start creating the website.

## Starting with a base theme

### Choosing a Jekyll theme

There are innumerable Jekyll themes on Github. Each such theme consists of a set of templates, layouts, stylesheets and so on. They represent standalone complete websites, and you can add content to it as well modify the existing colors, designs and so on. We will use the famous [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme created by [Michael Rose](https://github.com/mmistakes). It has a modern and attractive style, and allows for sufficient customisation. The simplest way to use the theme is to create a copy of it, and then add content on top of it or make modifications wherever necessary. There are a couple of ways of creating a copy of the theme, and both these methods involve its [GitHub repository](https://github.com/mmistakes/minimal-mistakes). A GitHub repository is simply a cloud storage location for the contents of the theme. In order to create a copy of this theme, we can either _download_ the theme or _fork_ it. Downloading the repository simply downloads the files, while forking the repository creates a copy of the repository under our own GitHub account. Since we would have to ultimately create a repository anyway, it is more efficient to just fork the theme repository. _A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project_. Once we fork the repository, the new forked repository becomes our base website which we can then tweak. 
{: style="text-align: justify"}

### Forking the theme repository

All the steps will be performed from the account of **epqm**, my research group. To fork the repository, go to the [Minimal Mistakes GitHub repository](https://github.com/mmistakes/minimal-mistakes) and click the `Fork` button at the top right of the webpage.
{: style="text-align: justify"}

<div class="img__post">
<img src="/assets/images/jekyll/fork.svg"/>
</div>

The fork button is encircled in the screenshot above. Alternatively, you can just go to [this link](https://github.com/mmistakes/minimal-mistakes/fork). Either way, you will end up on the page shown in the screenshot below. In order to finish creating the forked repository, you need to insert a name for the new repository, in the space provided under **Repository name**. In order to act as a GitHub Pages website, the name of the repository has to be of the form <code><i>username</i>.github.io</code>, where _username_ has to be replaced with the name of the GitHub user account, which in this case is `epqm`. Choosing any other name will not allow the repository to be used as a website. Once a suitable name has been entered (a green tick should appear adjacent to the name), click the `Create fork` button.
{: style="text-align: justify"}

<div class="img__post">
<img src="/assets/images/jekyll/fork2.svg"/>
</div>

### Deploying the website

The repository for containing our website has now been created, but the website itself is not active yet. In order to activate it, click on the `Settings` button at the right end of the top menu.
{: style="text-align: justify"}
<div class="img__post">
<img src="/assets/images/jekyll/settings.svg"/>
</div>
Inside the settings, click on the `Pages` option in the left sidebar menu.
<div class="img__post">
<img src="/assets/images/jekyll/pages.svg"/>
</div>
We are now in the GitHub Pages part of the settings for our repository. Within these settings, you will have to set the `Source` by clicking on the `Branch` menu and choosing the `master` branch. Branches are essentially views of a repository. If we so desire, the files in the repository can be kept in multiple states, each state representing a branch. Any of these branches can be used to deploy a website. By default, there is only one branch, which is called the _master_ branch. By selecting _master_ from the drop-down menu, we are choosing that branch as our website. After selecting _master_, click on the `Save` button adjacent to the `Branch` menu to make the change permanent.
{: style="text-align: justify"}
<div class="img__post">
<img src="/assets/images/jekyll/master.svg"/>
</div>
The website has now been deployed. After about 5 minutes, it should be possible to access the website at <code>https://<i>username</i>.github.io</code>. We will have to modify the content in the repository in order to make this into a personalised website for our use. 
{: style="text-align: justify"}

### Summing it all up

We end this part by summarising the steps involved in creating and deploying the website.

1. The first step is to choose a `Jekyll theme` on which to start creating the website.

1. The next step is to fork the GitHub repository of this theme. While forking, the name of the forked repository has to be of the form <code><i>username</i>.github.io</code>.

1. Once the repository is created, we need to go to the repository and click on `Settings > Pages`, and choose `master` as the branch from which to deploy the website. This has to be confirmed by clicking on `Save`.

## Compiling your website locally

The minimal workflow of modifying the website now consists of making changes to the repository, up
