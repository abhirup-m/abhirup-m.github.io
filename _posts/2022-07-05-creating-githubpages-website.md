---
layout: article
title: Getting yourself a Jekyll website
permalink: /website/
tags:
  - technology
  - guide

---

<img src="/assets/images/octojekyll.png" width=400 style="float:right;margin-left:2em;">
I work in a theoretical physics [research group](https://www.iiserkol.ac.in/~slal/), and we recently decided to create a new website for the group. Since I had already worked on two websites, I wanted to take this up. For the benefit of myself as well as the others who will come after me and might have to handle the website, I decided to document the entire process, in as much detail as possible. I believe there are too many general-purpose blog posts on creating Jekyll websites in the wild (see, for example, [this](https://jekyllrb.com/docs/), [this](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages) or [this](https://opensource.com/article/17/4/getting-started-jekyll)), so this will instead be an elaborate wiki for a very specific use case.
{: style="text-align: justify"}

## Ruby, gems and Jekyll
[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) is an interpreted, high-level programming language. Libraries in `ruby` are referred to as `gems`. [RubyGems](https://en.wikipedia.org/wiki/RubyGems) is a package manager for `ruby` that makes installing and maintaining `gems` easier. [Bundler](https://github.com/rubygems/bundler) is a `gem` whose job is to create consistent environments for running `ruby`. It does this by managing the `gems` that the application depends on. Given a list of `gems`, it can automatically download and install those `gems`, as well as any other `gems` needed by the `gems` that are listed, _all at the appropriate versions_.
{: style="text-align: justify"}

Finally, [Jekyll](https://jekyllrb.com/) is a static site generator written in `ruby`. It is in fact a `gem` that takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more. Such a website can then be hosted on any server. [Github Pages](https://jekyllrb.com/docs/github-pages/) is a free option, where you can host the website on GitHub’s `github.io` domain or on a custom domain name of your choice. `Jekyll` was developed by [Tom Preston-Werner](https://en.wikipedia.org/wiki/Tom_Preston-Werner), GitHub's co-founder.
{: style="text-align: justify"}

In summary
- `gems` are libraries in the language Ruby, managed by the RubyGems package manager

- `bundler` creates environments from specified libraries and their versions

- `Jekyll` is a ruby library that  generates a static website from the provided content

With these definitions out of the way, we can now start creating the website.

## Starting with a base theme

There are innumerable Jekyll themes on Github. Each such theme consists of a set of templates, layouts, stylesheets and so on. They represent standalone complete websites, and you can add content to it as well modify the existing colors, designs and so on. We will use the famous [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme created by [Michael Rose](https://github.com/mmistakes). It has a modern and attractive style, and allows for sufficient customisation. In order to start using the theme, we go to the [Github repository](https://github.com/mmistakes/minimal-mistakes) for the theme, and fork the repository. This means we will create a copy of the repository in our own account, such that we can now add changes on top of it. To create a fork, we click the fork button at the top right of the webpage.
