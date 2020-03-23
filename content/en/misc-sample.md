---
id: misc-sample
title: Sample Article
sidebar_label: Sample Article
---

This wiki is powered by [docusaorus](https://docusaurus.io/) uses [GitHub Flavored Markdown (GFM)](https://guides.github.com/features/mastering-markdown/). Find out more about Docusaurus-specific fields when writing Markdown.

## Metadata

### Articles

Articles use the following markdown header fields that are enclosed by a line `---` on either side:

- `id`: A unique document id. If this field is not present, the document's `id` will default to its file name (without the extension).
- `title`: The title of your document. If this field is not present, the document's `title` will default to its `id`.
- `hide_title`: Whether to hide the title at the top of the doc.
- `description`: The description of your document which will become the `<meta name="description" content="..."/>` and `<meta property="og:description" content="..."/>` in `<head>`, used by search engines. If this field is not present, it will default to the first line of the contents.
- `sidebar_label`: The text shown in the document sidebar and in the next/previous button for this document. If this field is not present, the document's `sidebar_label` will default to its `title`.

For example:

```yaml
---
id: doc1
title: My Document
sidebar_label: Document
---

```

`custom_edit_url`: The URL for editing this document. If this field is not present, the document's edit URL will fall back to `editUrl` from global site config. 

For example:

```yaml
---
id: doc-markdown
title: Markdown Features
custom_edit_url: https://github.com/facebook/docusaurus/edit/master/docs/api-doc-markdown.md
---

```

### Blog Posts

Blog posts use the following markdown header fields that are enclosed by a line `---` on either side:

`title`: The title of this blog post.

`author`: The author of this blog post. If this field is omitted, no author name will be shown.

`authorURL`: A page to link to when a site user clicks the author's name. If this field is omitted, the author's name will not link to anything.

`authorFBID`: The author's Facebook id, used only to get the author's profile picture to display with the blog post. If this field is omitted, no author picture will be shown for the blog post.

For example:

```yaml
---
title: My First Blog Post
author: Frank Li
authorURL: http://twitter.com/franchementli
authorFBID: 100002976521003
---

```

## Extra Features

Docusaurus supports some extra features when writing documentation in markdown.

### Table of Contents

When composing, header lines marked as `h2` and `h3` will be extracted to construct a table of content and shown at the top right side of the article or blog post.

Example:

```
## Header 2
### Header 3
```

### Linking other Documents

You can use relative URLs to other documentation files which will automatically get converted to the corresponding HTML links when they get rendered.

Example:

```md
[link to wiki index page](wiki-home.md)
```

This markdown will automatically get converted into a [link to wiki index page](wiki-home.md) to `/docs/wiki-home.html` (or the appropriately translated/versioned link) once it gets rendered.  

This can help when you want to navigate through docs on GitHub since the links there will be functional links to other documents (still on GitHub), but the documents will have the correct HTML links when they get rendered.

[Link to blog](../../blog)

### Linking to Images and Other Assets

Static assets can be linked to in the same way that documents are, using relative URLs. Static assets used in documents of different language should go into `assets` folder under that same folder when your content resides, respectively. The markdown will get converted into correct link paths so that these paths will work for documents of all languages and versions.  Note: all language articles are sharing the same directory to store static assets such as images, make sure your image doesn't conflict with others' name.

Example:

![Darwinia Logo](assets/darwinia-logo.png)

```md
![alt-text](assets/darwinia-logo.png)
```

### Language-specific Code Tabs

Display code in multiple programming languages using code tabs. First, mark the start and end of a code tabs group, by using `<!-- DOCUSAURUS_CODE_TABS -->` and `<!-- END_DOCUSAURUS_CODE_TABS -->` respectively in your markdown. Then start each tab with `<!--[TAB_TITLE]-->`.

Adding the following code to your Markdown file:

<script src="https://gist.github.com/yangshun/d36d04f383c40beb3f31dd2a16666f6c.js"></script>

produces this:

<!--DOCUSAURUS_CODE_TABS-->

<!--JavaScript-->

```js
console.log('Hello, world!');
```

<!--Python-->

```py
print('Hello, world!')
```

<!--C-->

```C
#include <stdio.h>

int main() {
  printf("Hello World!");
  return 0;
}
```

<!--Pascal-->

```Pascal
program HelloWorld;
begin
  WriteLn('Hello, world!');
end.
```

<!--END_DOCUSAURUS_CODE_TABS-->