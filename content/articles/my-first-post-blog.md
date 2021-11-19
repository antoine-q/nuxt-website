---
title: My first Blog Post
description: Learning how to use @nuxt/content to create a blog post
img: v2.png
alt: My first blog Post
date: 2021-11-19T15:43:11.096Z
author: Antoine Queru
---

## My first blog post

Welcome to my first blog post using content module

## This is a heading

This is some more info


### This is a sub heading

This is some more info

### This is another sub heading

This is some more info

## This is another heading

This is some more info

<div class="p-4 mb-4 text-white bg-blue-500">
  This is HTML inside markdown that has a class of note
</div>

<info-box>
  <template #info-box>
    This is a vue component inside markdown using slots
  </template>
</info-box>

```js [filename.md]
export default {
  nuxt: 'is the best'
}
```
```html
<p>code styling is easy</p>
```
