---
title: My Journey with Hexo - Building a Blog from Scratch
date: 2023-12-12 03:45:43
tags:
  - "hexo"
  - "programming"
categories:
  - "Software Engineering"
  - "Frameworks"
  - "Hexo"
  - "Notebooks"
subtitle: "A Developer's Diary: Creating a Blog with Hexo"
description: "Embark on my personal journey as I build a blog from the ground up using Hexo, the popular static site generator. This post details the step-by-step process, from choosing Hexo and setting it up to designing a unique theme and optimizing the blog for search engines. Discover the challenges I faced, the solutions I crafted, and the satisfaction of building a fully functional blog tailored to my needs."
keywords:
  - "Building a blog with Hexo"
  - "Hexo setup guide"
  - "Customizing Hexo themes"
  - "Static blogging tips"
  - "DIY blog development"
---

## Hello... World!

Welcome to my very first blog post! 🎉 I am super excited to share my journey with you. Combining tech and creativity has always been my jam, and what better way to do that than by building my own blog, right? So, I dived into the world of Hexo - a super cool blog framework that's all about speed and simplicity.


## Why Hexo? Good Question!

I chose Hexo for a few kick-ass reasons:

- **Lightning Fast**: Hexo zips through generating pages like a race car. 🏎️💨
- **Markdown Magic**: Writing in Markdown is like texting, but cooler. And Hexo totally gets that.
- **Plugin Paradise**: Hexo's got this treasure trove of plugins and themes that let me tweak my blog just the way I like.

<!-- more -->

## Getting My Hands Dirty with Hexo

Getting started was as easy as pie:

```sh
npm install -g hexo-cli
```

Then I kicked off my new blog project:

```sh
hexo init blog
```

```sh
cd blog
```


```sh
hexo serve
```
> Now you have it!


## Writing a Post
Let me break it down for you. It's as simple as making a cup of coffee – well, almost!

### The Magic Command

All it takes is one command to start a new post. Here it is:

```sh
hexo new "The Title of Your Post"
```

Replace `"The Title of Your Post"` with whatever mind-blowing title you've cooked up for your next blog entry. When you run this command, Hexo creates a new Markdown file in the `source/_posts` directory. It's prepped and ready for you to pour your thoughts into.

### The Markdown Charm

Now, the fun part begins! Open this new file, and you'll see some default content called front-matter at the top. It looks something like this:

```md
---
title: The Title of Your Post
date: 2023-12-12 10:00:00
---
```

After this front-matter, it's your stage! Write your post using Markdown, a super intuitive way to format text. If you haven't used Markdown before, don't sweat it. It's pretty straightforward – like, `*italic*` for *italic* and `**bold**` for **bold**. You'll get the hang of it in no time!

### Preview as You Go

Want to see how your post looks as you write? Just run `hexo server` in your blog directory, and you can see your work in progress in real-time by visiting `localhost:4000` in your browser. It's like having a live preview – pretty cool, huh?
> Without live reload plugin, you will have to constantly `cmd + r`.

## Don't Forget: Set Up Your GitHub Pages!

Let's not forget an essential piece of the puzzle – setting up GitHub Pages. It's like finding the perfect stage to perform on! 🎭 Here's how you get this stage ready for your Hexo blog's grand debut.

### GitHub Pages 101

First things first, GitHub Pages is this awesome service provided by GitHub that turns your repository into a website. It's free and super easy to use.

### Steps to Stardom

1. **Create a GitHub Repository**:
- If you haven't already, create a repository on GitHub. This is where your blog's content will live and be served from.

2. **Create a Deploy Key**:
- Use the `~/.ssh/id_rsa.pub` to generate a deploy key to have the right permission & check the wirte access box.

3. **Configure Hexo**:
- In your Hexo blog's `_config.yml` file, update the `deploy` section with your repository details. It should look something like this:
```yaml
deploy:
  type: git
  repo: https://github.com/enkr1/blog
  branch: master
```

4. **First Deployment**:
- Run `hexo clean && hexo generate && hexo deploy`
- This will push your generated blog to the `master` branch of your GitHub repository.

5. **Check It Out**:
- After a few minutes, your blog should be live at `https://enkr1.github.io/blog`.
- Go on, open your browser and bask in the glory of your new Hexo blog!


## Deployment! 🔧

### Simple Deployment Script 🚀
Alright, here comes the tech wizardry part! 🧙‍♂️ When I am ready to deploy your blog. As it could've been a chore, but I've got this neat little trick up my sleeve. I created a custom command (**alias**, in geek speak) that does all the heavy lifting in one go. Check this out:

```bash
alias hd='hexo clean && hexo generate && hexo deploy'
```

What does it do? Well, it's like a magic spell that cleans up old files, generates new ones, and then, whoosh, deploys everything to my site!
🚀 So, instead of typing three separate commands every time, I just type `hd`, and bam – my updates are live!

### Supercharging Deployment Script with Git Push 🚀

Now that you're familiar with my basic deployment alias, let's take this automation a step further. I've enhanced my deployment process with a custom shell function that not only handles the Hexo operations but also manages the Git commits and pushes updates to the repository. Here's how it works:

#### The `hd` Function: More than Just Deployment
Rather than just cleaning, generating, and deploying, this function also handles version control automatically. Here's the script I use:

```bash
function hd() {
    hexo clean
    hexo generate
    hexo deploy

    # Stage all changes, including new files
    git add .

    # Set the default commit message
    commit_message="[auto-commit] Deployed"

    # Update commit message if $1 is provided
    if [[ -n $1 ]]; then
        commit_message="[deploy] $1"
    fi

    # Commit with the determined message
    git commit -m "$commit_message"
    git push origin master
}
```

#### How It Enhances the Workflow
This script is a real time-saver. Let me break it down:

1. **Cleaning, Generating, and Deploying:** Just like the alias, it starts by cleaning up old files, generating new ones, and deploying them to the server.
2. **Git Integration:** After deploying, it automatically adds all changes to Git (`git add .`), sets a default commit message, and checks if a custom message has been provided when calling the function. It then commits (`git commit -a -m "$commit_message"`) and pushes the changes to the master branch on the repository (`git push origin master`).

#### Why Use This Function?
With this enhanced deployment function, you can significantly streamline your publishing workflow. It's not just about making deployment easier; it's about integrating the entire process from local changes to live updates on your blog, all with a single command. This method ensures that your latest changes are not only deployed but also tracked and version-controlled seamlessly.

Feel free to adapt this script to fit your workflow or system configuration. It's all about enhancing efficiency and reducing repetitive tasks, allowing you more time to focus on creating great content!

### Lastly, Making It Stick! - Saving to .profile
I didn't want to type this alias every time I open a new terminal session, right? So, I went a step further and saved it into my .profile file. This means my hd command is always ready to go, no matter when or where I start my work. Here's how you can do it:

Use `vim` to edit your `.profile` or `~/.bash_profil` (the file of your main profile):
```sh
# In my case, I saved it in ~/.profile
vim ~/.profile
```
> Add the alias line to the file and save it and close the editor by `:x`

To make the changes take effect, you can restart your terminal or type `source ~/.profile`.

And voilà! 🎩✨ Now, every time I fire up my terminal, my `hd` command is there, waiting to deploy my latest musings and tech adventures. Feel free to use this trick for your own blog. It's all about working smarter, not harder!


## Theme Time!

I started playing dress-up with my blog by messing around with themes:

- Poked around in the `themes` directory to make my own.
- Toyed with layout files like `index.ejs` and `post.ejs`.
- Jazzed things up with CSS and a dash of Sass.
- Sprinkled some JavaScript for that extra zing.

But you know what? There are so many awesome ready-made themes out there. I ended up picking the Next theme! It's pretty rad – check it out: [Next Theme](https://theme-next.js.org/).

`_config.yml:`
```yml
theme: next
```


## Bumps Along the Road

Not gonna lie, there were a few hiccups:

- Figuring out Hexo's maze of directories and config files was a bit of a brain teaser.
- Tweaking the theme was a tricky dance, especially when trying to layer global CSS styles.
- Ran into a few head-scratchers with the config, but hey, nothing Dr. Google couldn't fix!


That's a great idea! Acknowledging inspiration and sharing resources can add a lot of value to your post. Here's how you can include these credits and references in a friendly and appreciative manner:

## Wrapping Up

All in all, crafting this blog with Hexo has been a blast! It's a sweet spot where my geeky side meets my creative spirit. I can't wait to fill this space with cool tech stuff and maybe some beatbox beats. Because why not?


## References (Useful links)
- Set limit of post body on Home page - https://stackoverflow.com/a/45767005/11910691
- How to show "Read More"
  - https://orcmid.com/BlunderDome/wingnut/2017/12/01/Excerpt/
  - https://github.com/hexojs/hexo/issues/2524#issuecomment-2048231875
- https://github.com/TenviLi/awesome-hexo-plugins
- https://github.com/theme-next/theme-next-pjax
- https://github.com/hexojs/awesome-hexo?tab=readme-ov-file
- https://theme-next.js.org/plugins/
- https://hexo.io/themes/
- https://hexo.io/docs/configuration.html
- https://hexo.io/api/tag
- [The blog that taught me how to integrate Google Console](https://andrewliang25.github.io/2020/07/14/SEO-hexo-next/)
- https://hexo.io/news/2019/12/24/how-we-make-hexo-30-percent-faster/
- [How to add video in Hexo](https://github.com/hexojs/hexo-renderer-marked/issues/71)
- [How to add class in asset_img](https://stackoverflow.com/a/59564923/11910691)

---

Got questions or wanna chat? Drop me a text! Till next time, happy coding!
