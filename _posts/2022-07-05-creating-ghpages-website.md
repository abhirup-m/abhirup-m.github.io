---
layout: article
title: Getting yourself a Jekyll website
permalink: /website/
aside:
  toc: true
tags:
  - technology
  - guide

---

![](/assets/images/jekyll/octojekyll.svg){: class="img__post"}

I work in a theoretical physics [research group](https://www.iiserkol.ac.in/~slal/), and we recently decided to create a new website for the group. Since I had already worked on two websites, I wanted to take this up. For the benefit of myself as well as the others who will come after me and might have to handle the website, I decided to document the entire process, in as much detail as possible. I believe there are too many general-purpose blog posts on creating Jekyll websites in the wild (see, for example, [this](https://jekyllrb.com/docs/), [this](https://programminghistorian.org/en/lessons/building-static-sites-with-jekyll-github-pages) or [this](https://opensource.com/article/17/4/getting-started-jekyll)), so this will instead be an elaborate wiki for a very specific use case. The website will have a home page that gives an overview of the research of the group, a dedicated page for the list of publications, a gallery for the present and past members of the group, a page for a more detailed exposition on the topics of our research, as well as other miscellaneous content.

## Ruby, gems and Jekyll
[Ruby](https://en.wikipedia.org/wiki/Ruby_(programming_language)) is an interpreted, high-level programming language. Libraries in `ruby` are referred to as `gems`. [RubyGems](https://en.wikipedia.org/wiki/RubyGems) is a package manager for `ruby` that makes installing and maintaining `gems` easier. [Bundler](https://github.com/rubygems/bundler) is a `gem` whose job is to create consistent environments for running `ruby`. It does this by managing the `gems` that the application depends on. Given a list of `gems`, it can automatically download and install those `gems`, as well as any other `gems` needed by the `gems` that are listed, _all at the appropriate versions_.

![](/assets/images/jekyll/jekyll.svg){: class="img__post"}

Finally, [Jekyll](https://jekyllrb.com/) is a static site generator written in `ruby`. It is in fact a `gem` that takes text written in your favorite markup language and uses layouts to create a static website. You can tweak the site’s look and feel, URLs, the data displayed on the page, and more. Such a website can then be hosted on any server. [Github Pages](https://jekyllrb.com/docs/github-pages/) is a free option, where you can host the website on GitHub’s `github.io` domain or on a custom domain name of your choice. `Jekyll` was developed by [Tom Preston-Werner](https://en.wikipedia.org/wiki/Tom_Preston-Werner), GitHub's co-founder.


In summary
- `gems` are libraries in the language Ruby, managed by the RubyGems package manager

- `bundler` creates environments from specified libraries and their versions

- `Jekyll` is a ruby library that  generates a static website from the provided content

With these definitions out of the way, we can now start creating the website.

## Starting with a base theme

### Choosing a Jekyll theme
There are innumerable Jekyll themes on Github. Each such theme consists of a set of templates, layouts, stylesheets and so on. They represent standalone complete websites, and you can add content to it as well modify the existing colors, designs and so on. We will use the famous [Minimal Mistakes](https://github.com/mmistakes/minimal-mistakes) theme created by [Michael Rose](https://github.com/mmistakes). It has a modern and attractive style, and allows for sufficient customisation. The simplest way to use the theme is to create a copy of it, and then add content on top of it or make modifications wherever necessary. There are a couple of ways of creating a copy of the theme, and both these methods involve its [GitHub repository](https://github.com/mmistakes/minimal-mistakes). A GitHub repository is simply a cloud storage location for the contents of the theme. In order to create a copy of this theme, we can either _download_ the theme or _fork_ it. Downloading the repository simply downloads the files, while forking the repository creates a copy of the repository under our own GitHub account. Since we would have to ultimately create a repository anyway, it is more efficient to just fork the theme repository. _A fork is a copy of a repository. Forking a repository allows you to freely experiment with changes without affecting the original project_. Once we fork the repository, the new forked repository becomes our base website which we can then tweak. 


### Forking the theme repository
All the steps will be performed from the account of **epqm**, my research group. To fork the repository, go to the [Minimal Mistakes GitHub repository](https://github.com/mmistakes/minimal-mistakes) and click the `Fork` button at the top right of the webpage.


![](/assets/images/jekyll/fork.svg){: class="img__post"}


The fork button is encircled in the screenshot above. Alternatively, you can just go to [this link](https://github.com/mmistakes/minimal-mistakes/fork). Either way, you will end up on the page shown in the screenshot below. In order to finish creating the forked repository, you need to insert a name for the new repository, in the space provided under **Repository name**. In order to act as a GitHub Pages website, the name of the repository has to be of the form <code><i>username</i>.github.io</code>, where _username_ has to be replaced with the name of the GitHub user account, which in this case is `epqm`. Choosing any other name will not allow the repository to be used as a website. Once a suitable name has been entered (a green tick should appear adjacent to the name), click the `Create fork` button.



![](/assets/images/jekyll/fork2.svg){: class="img__post"}


### Deploying the website

The repository for containing our website has now been created, but the website itself is not active yet. In order to activate it, click on the `Settings` button at the right end of the top menu.


![](/assets/images/jekyll/settings.svg){: class="img__post"}

Inside the settings, click on the `Pages` option in the left sidebar menu.

![](/assets/images/jekyll/pages.svg){: class="img__post"}

We are now in the GitHub Pages part of the settings for our repository. Within these settings, you will have to set the `Source` by clicking on the `Branch` menu and choosing the `master` branch. Branches are essentially views of a repository. If we so desire, the files in the repository can be kept in multiple states, each state representing a branch. Any of these branches can be used to deploy a website. By default, there is only one branch, which is called the _master_ branch. By selecting _master_ from the drop-down menu, we are choosing that branch as our website. After selecting _master_, click on the `Save` button adjacent to the `Branch` menu to make the change permanent.


![](/assets/images/jekyll/master.svg){: class="img__post"}

The website has now been deployed. After about 5 minutes, it should be possible to access the website at <code>https://<i>username</i>.github.io</code>. We will have to modify the content in the repository in order to make this into a personalised website for our use. 


### Summing it all up
We end this part by summarising the steps involved in creating and deploying the website.

1. The first step is to choose a `Jekyll theme` on which to start creating the website.

1. The next step is to fork the GitHub repository of this theme. While forking, the name of the forked repository has to be of the form <code><i>username</i>.github.io</code>.

1. Once the repository is created, we need to go to the repository and click on `Settings > Pages`, and choose `master` as the branch from which to deploy the website. This has to be confirmed by clicking on `Save`.

The repository looks like this:

![](/assets/images/jekyll/repo.svg){: class="img__post"}

## Git & markdown cheatsheet
Going forward, we will be making use of git and markdown, so its necessary to get familiar with the relevant aspects of them.

### What is git?
Git is a free version control system. It is used, at the very minimum, to track changes in software, allowing the possibility of rolling back changes, creating branches for working on multiple features simultaneously, and even removing specific changes among many others. We will need to know of a very small subset of the features of git for our purposes. A very basic workflow using git involves the following: (i) making some changes in a project, (ii) telling git to track the files, and hence note the changes made in the files, (iii) asking git to cement these changes by marking this state of the repository as a checkpoint, and (iv) uploading the changes to some cloud/online repository.
The second step is referred to as **adding** the files. This is done using the command `git add <file>`. The simplest way is to just add all the files in the project. That is done through `git add .`. The third step is referred to as **committing** the changes, and each checkpoint is referred to as a **commit**. Each commit is (preferably) accompanied by a **commit message**. Commits are made using the command `git commit -m <commit message>`. The fourth step is referred to as **pushing** the commit, and is as simple as `git push`.

There are some other actions that we might find useful. Creating a local copy of an online repository (say, from GitHub) is referred to as **cloning** the repository: `git clone <repository url>`. Fetching the latest version of a cloned repository from the online source is referred to as **pulling**: `git pull`. We will also often end up in the following scenario: after committing some changes, we realise that we have forgotten to add some small edit to the commit. This is rectified by making all the changes to the project, adding all the files, and then `ammending` the previous commit while keeping the commit message unchanged: `git commit --ammend --no-edit`. The option `--ammend` means we are rectifying the previous commit, while the option `--no-edit` means we are keeping the previous commit message unchanged. Note that you need to add the files before running the new commit command. If you had also pushed the previous incomplete commit, you need to add a `-f` flag when you now push the new amended commit.

### Summary of git commands
This is a summary of the git commands that are relevant to us. Each command is a concrete example.
- Cloning a repository:
```
git clone https://github.com/epqm/epqm.github.io
```
- Pulling the latest version of repository: 
```
git pull
```
- Adding and committing the changed files, then push online: 
```
git add file1 file2 # EITHER add specific files
git add . # OR add all files, just to be sure
git commit -m "modified this and this" # commit the changes
git push # push changes online
```
- Workflow for rectifying the latest commit: 
```
git add file1 file 2
git commit -m "this is a commit"
git push
# realise you forgot to add a file to the commit
git add file1 file2 file3 # add the remaining file
git commit --ammend --no-edit # make the ammending commit
git push -f # force push the new commit to replace the old one
```

### What is markdown?
Markdown is a markup language: it allows us to create a formatted and structured document by using certain predefined symbols. The markdown file itself is just a plain text file, but it can be converted to other formats like pdf, html, docx, odt and others using software like pandoc. For example, if you write `# This is heading` in a text file and pass this text file through a markdown-to-latex parser, that line will be replaced by `\section{This is a heading}`. This is an example to illustrate what I meant when I said that markdown allows us to add formatting by using only a few symbols. Jekyll allows us to create our webpages in markdown. This means that we can write our posts in markdown, and Jekyll will convert that to html. 

### Summary of markdown rules
The following is a list of the markdown rules that we will often use to format our documents. The version of markdown that is used by our theme is called Kramdown. Kramdown supports some extra features.

- Create headers of decreasing levels by using increasing numbers of `#`: 

~~~
# Heading 1
## Heading 2
###### Heading 6
~~~

- Make text bold or italic by enclosing within `**` or `_`:

~~~
Normal text, **bold text**, _italic text_
~~~

- Create unnumbered list using `-`: 

~~~
 - item 1
 - item 2
 - item 3
~~~

- Write programming code by enclosing within `` ` `` :

~~~
`a += 1`
~~~

- Insert a horizontal rule using three dashes:

~~~
---
~~~

- Insert a hyperlink using the syntax `[text](link)`:

~~~
[link to repo](https://github.com/epqm/epqm.github.io)
~~~

- Insert a local image using the syntax `![title for image](path_to_image)`:

~~~
![this is an image](/assets/images/jekyll/edit-final.svg)
~~~

## Modifying the website
Modifying the website requires _pushing_ changes to the GitHub repository. Whenever we commit and push a change to the repository, GitHub will recompile the repository and update the website with the changes. There are two broad ways of pushing changes to the repository.

### Using GitHub's web interface ✘
The first way is to use the browser interface of GitHub. By opening the repository in your browser, you can edit any file and immediately commit the changes, and this will also update the website. To demonstrate this, we will update the `README.md` file. The REAME file is present to provide information regarding the repository. It is only displayed in the GitHub repository web interface, and is not displayed on the website. For example, the current README provides information on the Minimal Mistakes theme, because that is the repository from which we forked our repository. In order to update this file, click on the file name in the list of files.
![](/assets/images/jekyll/readme1.svg){: class="img__post"}
This displays the contents of the file in the browser. In order to start editing the file, click on the edit icon <i class="fas fa-pen"></i>:
![](/assets/images/jekyll/edit_icon.svg){: class="img__post"}
This opens the file in the editor of GitHub. We can now update the contents of the README by deleting all the existing content and replacing it with something relevant and simple for the time being. The final form looks something like this:
![](/assets/images/jekyll/edit-md.svg){: class="img__post"}
To save the changes, we need to `commit` them. This can be done by supplying a commit message in the box provided just under `Commit changes` near the bottom of the page, and then clicking on `Commit changes`.
![](/assets/images/jekyll/edit-final.svg){: class="img__post"}

We have now added our first commit to the repository. Even though this does not affect the website (because the README is not displayed there), this exercise demonstrates how we can modify any file within the repository.

There are, however, two issues with this approach:

- You can edit only a single file in each commit. You _cannot_ edit multiple files and then combine all those changes into a single commit.

- You cannot preview the edit before you commit them. The only way to find out how the website will be affected by your edit is to check the website _after_ you have committed the edits.

### Working with a local copy ✔
The more superior approach is to clone the repository (create a local clone in your machine), make changes in your local copy, commit those changes and then push the commits to the GitHub repository. This allows us to make multiple changes within a single commit. We can also preview the changes we have made, by building the repository using `Jekyll`. While it is true that this requires us to setup `git` and `Jekyll` in our local machines, it is only a one-time effort, and is not too tricky. This subsection is a bit long, so we summarise the steps here:

{% assign subsections = "Install git on your machine and download the repository,Install Ruby and relevant gems,Make required changes to files,Build website locally using Jekyll to preview changes,Commit and push changes to upstream when satisfied with changes" | split: ',' %}
{% for subsection in subsections -%}
1. [{{ subsection }}](#{{ subsection | downcase | replace: " ","-" }})
{% endfor %}

We will now elaborate on each of these steps. Note that steps 1 and 2 need to be performed only once.

#### 1. {{ subsections[0] }}

The basics of git has been summarised in the [relevant section](#git--markdown-cheatsheet). We start by discussing how to install it. On a Linux machine, run one of the following commands in the terminal, depending on the particular distribution you are using:
```
$ sudo pacman -S git # Arch-based distributions
$ sudo apt install git # Debian-based distributions
```
If you are using macOS, run the following command in the terminal:
```
$ brew install git
```
If you are using Windows, go [here](https://git-scm.com/download/win) and click on the link that says **64-bit Git for Windows Setup**. This will download the git installer for windows. Once the download has finished, click on the installer and go through all the steps, choosing the default option whenever you are prompted to make a choice.

Now that we have installed git, we need to be able to run git commands. _Note that all commands must be run within the folder of the project_. On Linux or macOS, you can just open a terminal in the folder of the project and run git commands in that folder. For example, in order to pull the latest version of a research project, we first change into that folder (using cd) and then run `git pull`.
```
$ ( ~ ) 
$ ( ~ ) cd "/home/historia/storage/work/local MIT"
$ ( local MIT ) git pull
Already up to date.
$ ( local MIT )
```
On a Windows machine, we need to change into the folder of the project, right click inside the folder to reveal the drop-down menu, and select **Git Bash Here** from the menu. This starts a terminal in the folder, where we can now run the same git commands.

Having installed git on your machine, the next step is to provide some details regarding the user account and authentication. Run the following commands in a terminal:
```
$ git config --global user.name <username>
$ git config --global user.email <email id>
```
The `<username>` and `<email id>` are replaced with the username and email-id of your GitHub account. In order to push changes to the GitHub repository, one more step is necessary. In order to authenticate yourself, you need to generate a pair of public-private SSH keys, and add the public key to GitHub. To generate the key, run the following in a terminal:
```
$ ssh-keygen -t ed25519 -C "<email id>"
```
After running this command, you might be presented with a number of prompts. Press enter at all of them. The final output should display, among other things, the location of the public key. For example, a typical output on Linux reads
```
$ ssh-keygen -t ed25519 -C "historia@gmail.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/historia/.ssh/id_ed25519):
Enter passphrase (empty for no passphrase):
Enter same passphrase again:
Your identification has been saved in /home/historia/.ssh/id_ed25519
Your public key has been saved in /home/historia/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:0w4qTixw3jGOsNObS/5SN2/vkCAA5sjuXp8mjVH7Tek historia@gmail.com
```
As is apparent, the second line gives the location of the public key. In order to add the public key to GitHub, follow the steps laid out in [this GitHub docs page](https://docs.github.com/en/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account). This concludes setting up git.

The next step is to download the repository. The repository has a url, which can be obtained by opening the GitHub repository in the browser and looking at the navigation bar. For this example, we assume that this url is `https://github.com/epqm/epqm.github.io`. Copy this url from the browser, and run the following command in either the Linux/macOS terminal or in the Git Bash terminal on Windows:
```
$ git clone https://github.com/epqm/epqm.github.io
```
This will download the repository to your machine, into its own folder. By looking at the list of folders, you should be able to tell the name of the folder the repository was downloaded into. Assuming the name of the folder is `epqm.github.io`, we move into this folder by running `cd`:
```
$ cd epqm.github.io
```

#### 2. {{ subsections[1] }}
The next step is to install Ruby and its gems. This is required in order to be able to compile the website locally and see what the website actually looks after the changes we made, before we commit and push the changes. _Note also that Ruby2.7 is the version that works best with Jekyll, so that is the version we will install_. To install Ruby on a Linux machine, run one of the following commands, depending on your distribution:
```
$ sudo pacman -S ruby2.7 # Arch-based distributions
$ sudo apt install ruby2.7 # Debian-based distributions
```
On macOS, run the following command:
```
$ brew install ruby@2.7
```
These commands need not be run within the repository folder. On Windows, you will need to first go to [this download page](https://rubyinstaller.org/downloads/) and click on the link that says **Ruby 2.7.6-1 (x64)**. This downloads the Windows installer for the appropriate Ruby version. Once downloaded, click on the installer and go through the steps to install it, choosing the default option whenever asked to make a choice.

Now that we have installed Ruby 2.7, we have to get into gems. As mentioned before, RubyGems is the library-manager for ruby. It is used to install and remove Ruby libraries, which are also referred to as gems (hence the name RubyGems). The first step is to update RubyGems, and this is done through the commad:
```
$ sudo gem-2.7 update --system # on Linux
$ sudo gem update --system # on macOS
$ gem update --system # on Windows
```
This commands must be run in a Linux/macOS/Windows terminal. The Windows terminal can be accessed from the drop down menu that appears by holding down Shift and then clicking the right mouse button.

Having updated RubyGems, we now need to install the specific gems that are necessary for our website. The list of the necessary gems along with their versions is already provided in the repository in the form of Gemfile(s) which can be read by a gem named bundler. **Bundler** makes it easy to install a specific set of gems. Note that the following two commands have to be run _inside_ the folder of the repository. You can either use your graphical file explorer to navigate into this folder and open a terminal there, or you can just `cd` into the folder from a terminal that was opened elsewhere. At any rate, ensure you are in a terminal and inside the repository folder. Then, run the following two commands:
```
$ bundle config set --local path 'vendor/bundle' # set the location for installing gems
$ bundle-2.7 install # install the required gems 
``` 
The first command sets the location where the gems will be installed. The second command installs the required gems, into the location specified earlier. As mentioned before, the part after the '#` acts as a comment which is ignored by the terminal and which has been provided just for your information. 

#### 3. {{ subsections[2] }}
Just to demonstrate the workflow of making changes to the website, previewing it and pushing the changes, we will make a simple edit. Open the `_pages/about.md` file in a text editor. There should be some text between two `---` at the top of the page - do not edit that. Instead, remove all the text _below_ the bottom `---`, and replace it with something else, like "Welcome to EPQM!". Save the changes in the text editor and close it. The below images show the state of the file before and after the edit.

![](/assets/images/jekyll/file-edit.svg){: class="img__post"}

#### 4. {{ subsections[3] }}
Having made some changes, it is time to compile the website using jekyll to preview the changes. In order to compile the website, _make sure that you are just inside the repository folder, and not inside anny of the subfolders within the repository_. Having ensured this, start a terminal in the folder and run the following command:
```
$ bundle-2.7 exec jekyll serve -lIw
```
An explanation of this command is due. The first part `bundle-2.7 exec` means that we will be running the later part of the command inside the environment created by the gems listed in the Gemfile. This ensures that the correct versions of the libraries are used. The latter part `jekyll serve` instructs jekyll to compile the website and make it available to be viewed. You can view the website by opening the browser and going to the url [http://localhost:4000/](http://localhost:4000/). The final part `-lIw` is a set of options that we have passed to jekyll. 
- The option `w` stands for watch; it makes sure that if we keep this command running, jekyll automatically recompiles the website whenever we make and save any changes.
- The option `l` stands for livereload; it refreshes the browser whenever we make and save any changes, in order to reflect the modified website.
- The option `I` means incremental build; it allows faster compiling of the website.

To see the effect our change in the about.md file, open the browser and go to [http://localhost:4000/](http://localhost:4000/). This will show the home page of the website. At the right end of the top bar, click on the **About** tab, and this opens the about page of the website. In this page, we should be able to see the message we typed in earlier in the `about.md` file.

![](/assets/images/jekyll/about.svg){: class="img__post"}

#### 5. {{ subsections[4] }}
Once we are happy with the changes, we need to commit and push them to GitHub, so that they are reflected on the actual website that can be viewed at `https://<username>.github.io`, which for us is `https://epqm.github.io/`. As discussed above, the final steps are adding the files, committing the change and then pushing the changes to GitHub.
```
$ git add .
$ git commit -m "modified about"
$ git push
```
