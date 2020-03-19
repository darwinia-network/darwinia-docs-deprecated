# How to contribute

Wiki content are written in GitHub Flavored Markdown (GFM), you can visit here to view [syntax reference](https://guides.github.com/features/mastering-markdown/).  You need some basic `git` skills to submit your contribution.

For light weight editing, you can use github's interface to edit existing article or create new article.  If you need more control over assets or write multiple articles and submit changes in bulk, you probably need to fork this repo and submit your contribution as PR (Pull Request).

To fork this repo and submit pull requests, please follow this [detailed guide](https://guides.github.com/activities/forking/).

Once you have forked this wiki and created a forked repo of your own, you can pull content from here

`git clone https://github.com/YOUR_GITHUB_USERNAME/REPO_NAME_YOU_CHOOSE`

This will create a folder `[REPO_NAME_YOU_CHOOSE]/` in your local directory.

Aricles and blogs are stored in `content/` folder.  Blog does not provide multi-lingual feature yet.  Articles supplort multi language and they are stored in each language folder.  

```
content # content root directory
├── blog  # blog articles goes herre
│   └── assets # blog artcile related static assets, eg images
├── en # wiki artciles, English version
└── zh-CN # wiki artciles, Simplified Chinese version
```

Go to content and edit your files.  While you are editing, you can start a local server to live preview your files

```
# go to local server folder
cd docusaorus/website

# install dependency to start local server
yarn

# start local server
yarn start

# a browser page will open, it will auto reflect your modification of articles/blogs in real time
# note: some modification might require restart the local server, to restart local server, press key
CTRL+C

# start again
yarn start
```

When you are done with your modification, add your changes and submit the commit as pull request.

```
# add changes within content/ folder to staging area
git add content/

# createa a commit message
git commit -m 'My arbitrary commit message'

# submit
git push origin master
```

# How to write article

## Blog

Blog articles should follow naming rules as `[YYYY-mm-dd-FILENAME].md`.  The `YYYY-mm-dd` is the publish datetime of this article, front end will use this info to order blog articles.

At the beginning of each blog article, you need to provide meta info of this article.  It looks like this:

```
---
title: This is a blog title
author: @author-twitter-handle
authorURL: http://twitter.com/author-twitter-handle
---
```

`---` is the seprator of meta header.  Don't ignore that.

By default, all blog content will be displayed in blog list view.  It might be desired or not.  If you only need to display a summary of blog article in the list view, you can use `truncate` syntax sugar to achieve that.

```
Blog sample texts goes here, all content above "<!--truncate-->" will be displayed in list view, and the content below it will be shown in detail view.

<!--truncate-->

Main content continues
```

Static assets should be placed in `content/blog/assets`, when referencing assets in your articles, use syntax and path like this:

```
![image alt text](assets/asset.png)
```

## Article

TODO

# How to translate

TODO