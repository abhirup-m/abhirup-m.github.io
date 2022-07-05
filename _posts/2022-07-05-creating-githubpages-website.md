---
layout: article
title: "Getting yourself a Jekyll website"
permalink: /website/
tags:
  - technology
  - guide

---

<img src="/assets/images/octojekyll.png" width=400 style="float:right;margin-left:2em;">
I work in a theoretical physics [research group](https://www.iiserkol.ac.in/~slal/), and we recently decided to create a new website for the group. Since I had already worked on two websites, I wanted to take this up. For the benefit of myself as well as the others who will come after me and might have to handle the website, I decided to document the entire process, in as much detail as possible. I believe there are too many general-purpose blog posts on creating Jekyll websites in the wild (see, for example, [this](https://jekyllrb.com/docs/), [this](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages) or [this](https://opensource.com/article/17/4/getting-started-jekyll)), so this will instead be an elaborate wiki for a very specific use case.
{: style="text-align: justify"}

## Ruby, gems and Jekyll
[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) is an interpreted, high-level programming language. Libraries in ruby are referred to as **gems**. [RubyGems](https://en.wikipedia.org/wiki/RubyGems) is a package manager for ruby that makes installing and maintaining gems easier. [Bundler](https://github.com/rubygems/bundler) is a gem whose job is to create consistent environments for running ruby. It does this by managing the gems that the application depends on. Given a list of gems, it can automatically download and install those gems, as well as any other gems needed by the gems that are listed, all at the appropriate versions.

Finally, [Jekyll](https://jekyllrb.com/) is a static site generator written in Ruby. It is in fact a Ruby library that takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more. Such a website can then be hosted on any server. Github-pages is a free and open-source option. Jekyll was in fact developed by [Tom Preston-Werner](https://en.wikipedia.org/wiki/Tom_Preston-Werner), GitHub's co-founder.

In summary
- gems are libraries in the language Ruby, managed by the RubyGems package manager
- Bundler creates environments from specified libraries and their versions
- Jekyll is a Ruby library that  generates a static website from the provided content

With these definitions out of the way, we can now start creating the website.
