---
title: "Using Current Date and Time In VS Code Snippets"
date: 2020-08-09T21:48:48+05:30
draft: false
description: "How to add dates, title, custom attributes to Markdown front-matter."
slug: "using-current-date-and-time-in-vs-code-snippets"
url: "using-current-date-and-time-in-vs-code-snippets"
tags: ["Hugo", "VSCode", "Snippets"]
syndicate: "false"
---

I write my blog post thorough markdowns using the super awesome text editor [Visual Studio Code](https://code.visualstudio.com/). But previously, when I want to generate a new blog post, I had to go through couple of steps before I can successfully generate the front-matter, they are:

- **Determining the date and time**
- **Converting them into an `ISO 8601` date format so its universal**
- **Then copying the same title some time and converting them into lowercase for `slug` and `url`**

So..., Hey \*hold on\*, What is a front-matter ? {{< emoji ":thumbsup:" "20" >}}

## What is a front-matter

Front-matter is the primary section of your blog-post which contains meta-data about your blog post. This can contain anything you wish to pass down as `Params`, but a general blog post would usually consist of `title`, `date`, `description`, `url`.

Phew {{< emoji ":thumbsup:" "20" >}}, since that out of the way lets continue.

## User Snippets in Visual Studio Code

As aforementioned, since I am using Visual Studio Code, I could leverage Visual Studio's User Snippet feature. User snippet are a quick way to scaffold out some code or a text, and you might have come across this if you have used any extensions which lets you zen coding like snippets for any language. These extensions are made using a feature similar to what I'm going to demonstrate below.

## Create a User Snippet

If you're an `OSX` user, then User Snippet is under `Code` > `Preferences` > `User Snippets` else if you're a `Windows` user, then its under `File` > `Preferences` > `User Snippets`.

This would prompt the command palette of Visual Studio Code stating to select the type of language this scaffolding would come into play. ou can either chose `global` or a specific language or extension based upon your needs. Since, I would only need this code snippet for markdowns I would select `markdown.json (Markdown)`.

Next we need to give write our markdown as a `json` file. I would suggest you first writing out how your snippet should appear first in an empty file then transcribing it into `json`.

So, now will first construct a typical front-matter in an empty file first, let's recreate the front-matter for this blog post

```
---
title: "Using Current Date and Time In VS Code Snippets"
date: 2020-08-09T21:48:48+05:30
draft: false
description: "How to add dates, title, custom attributes to Markdown front-matter."
slug: "using-current-date-and-time-in-vs-code-snippets"
url: "using-current-date-and-time-in-vs-code-snippets"
tags: ["Hugo", "VSCode", "Snippets"]
syndicate: "false"
---
```

Now, that we've the blueprint on how the end scaffolding should appear will move on to `markdown.json` and will create the user snippet. But before that we need to know the structure of a snippet,

First, comes the title of the snippet and it has to be `unique` in that file since its the key, then comes the `prefix` which is the shortcode/alias which will trigger the creation of this snippet in the appropriate file. I usually prefer to prefix a snippet with a `.` so Visual Studio Code would list out all the available snippet for me using `Intellisense` but the prefix could be anything you desire. You can also press `Ctrl` + `Space` bring up Intellisense.

```json
{
  "Hugo Markdown Blog Front-matter": {
    "prefix": ".fm",
    "body": ["---",
      "title: \"$0${1:${CLIPBOARD}}\"",
      "date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}T${CURRENT_HOUR}:${CURRENT_MINUTE}:${CURRENT_SECOND}+05:30",
      "draft: ${6:false}",
      "emoji: \"${2::call_me_hand:}\"",
      "description: \"${3:Subheading or a short description.}\"",
      "slug: \"${4:${CLIPBOARD/[' ']/-/gi}}\"",
      "url: \"${4:${CLIPBOARD/[' ']/-/gi}}\"",
      "tags: [\"${7:tag}\"]",
      "syndicate: \"${8:false}\"",
      "---"
    ],
    "description": "Generate Blog Front-matter"
  }
}
```

Second, comes the `body` it contains the text which should appear when you type the `prefix`. Now what you will do is you will break down the previously created file into individual lines and create strings inside the body. You can also use `$1` - `$n` to define tab stops which a user can use to easy navigate by pressing tabs and `${1:label}`, `${2:another}` for placeholders. Now you might ask what about `$0`, well, its reserved the final cursor position where the cursor should start.

Now, to tackle the great concern of tackling the issue of date generation, as of [v1.20](https://code.visualstudio.com/updates/v1_20#_more-snippet-variables) snippets have access to the current date and time with one of the following variables.

- `CURRENT_YEAR`
- `CURRENT_YEAR_SHORT`
- `CURRENT_MONTH`
- `CURRENT_DATE`
- `CURRENT_HOUR`
- `CURRENT_MINUTE`
- `CURRENT_SECOND`

Now If I want the front matter to have a format such as this `2020-08-09T21:48:48+05:30`, I would add the following snippet,

```json
"date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}T${CURRENT_HOUR}:${CURRENT_MINUTE}:${CURRENT_SECOND}+05:30",
      "draft: ${6:false}",
```

Finally, these are additional snippet variables provided by Microsoft to make the creation of scaffolding easier, like for example, the `CLIPBOARD`used above is such a variable which would allow a user to generate the `title`, `slug` and `url` from the text in the clipboard.

## Useful Snippet Variable

Below mentioned are some of the most useful variables when you proceed in your journey in creating your own front-matter

- `CLIPBOARD` The content of your clipboard
- `TM_CURRENT_LINE` The content of the current line
- `TM_CURRENT_WORD` The content of the word under cursor or the empty string
- `TM_DIRECTORY` The directory of the current document
- `TM_FILENAME` The filename of the current document
- `TM_FILENAME_BASE` The filename of the current document without its extensions
- `TM_FILEPATH` The full file path of the current document
- `TM_LINE_INDEX` The zero-index based line number
- `TM_LINE_NUMBER` The one-index based line number
- `TM_SELECTED_TEXT` The currently selected text or the empty string

### Resources

- [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets) by Microsoft.
- [Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference) by Microsoft.

{{< message >}}
You can find snippet from this article over on <a href="https://gist.github.com/murshidazher/652f40516f30bdd2b57613f40e4a1f46">Github.com</a>
{{< /message >}}
