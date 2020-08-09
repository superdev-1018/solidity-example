---
title: "Using Current Date and Time In VS Code Snippets"
date: 2020-08-09T21:48:48+05:30
draft: false
description: "Generate frontmatter for a markdown on the fly using custom snippets."
slug: "using-current-date-and-time-in-vs-code-snippets"
url: "using-current-date-and-time-in-vs-code-snippets"
tags: ["Hugo", "VSCode", "Snippets"]
syndicate: "false"
---
> Automation does not need to be our enemy. I think machines can make life easier for men, if men do not let the machines dominate them.

I write my blog post through markdowns using the super awesome text editor [Visual Studio Code](https://code.visualstudio.com/). But previously, when I want to generate a new blog post, I had to go through a couple of steps before I can successfully generate the front-matter, they are:

- **Step 1:**  Determining the date and time
- **Step 2:** Converting them into an `ISO 8601` date format so it's universal
- **Step 3:** Then most of time copying the same title and converting them into lowercase for `slug` and `url`

Hey ✋ , What is a front-matter?

## What is a front-matter

Front-matter is the primary section of your blog-post which contains meta-data about your blog post. This can contain anything you wish to pass down as `Params`, but a general blog post would usually consist of  `title`, `date`, `description`, `url`.

Phew 😌 , since that's out of the way lets continue.

## User Snippets in Visual Studio Code

As aforementioned, since I am using the Visual Studio Code, I could leverage Visual Studio’s User Snippet feature. User snippets are a quick way to scaffold out some code or a text, and you might have come across this if you have used any extensions which lets you generate code snippets for any language on the go. These extensions are made using a feature similar to what I’m going to demonstrate.

## Create a User Snippet

If you're an `OSX` user, then User Snippet is under `Code` > `Preferences` > `User Snippets` else if you're a `Windows` user, then it's under `File` > `Preferences` > `User Snippets`.

This would prompt the command palette of Visual Studio Code stating to select the type of language this scaffolding would come into play. You can either choose `global` or a specific language based upon your needs. Since, I would only need this code snippet for markdowns; I would select `markdown.json (Markdown)`.

Next we need to give write our markdown as a `json` file. I would suggest you first writing out how your snippet should appear first in an empty file then transcribing it into `json`.

So, now will construct a typical front-matter in an empty file first, let’s recreate the front-matter for this blog post.

{{< highlight md >}}
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
{{</ highlight >}}

Now, that we've the blueprint on how the end scaffolding should appear will move on to `markdown.json` and will create the user snippet. But before that we need to know the structure of a snippet,

First, comes the title of the snippet and it has to be `unique` in that file since it's the key, then comes the `prefix` which is the shortcode/alias which will trigger the creation of this snippet in the appropriate file. I usually prefer to prefix a snippet with a `.` so Visual Studio Code would list out all the available snippet for me using `Intellisense` but the prefix could be anything you desire. You can also press `Ctrl` + `Space` bring up Intellisense.

{{< highlight json >}}
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
{{</ highlight >}}

Second, comes the `body` it contains the text which should appear when you type the `prefix`. Now what you will do is you will break down the previously created file into individual lines and create strings inside the body. You can also use `$1` - `$n` to define tab stops which a user can use to easy navigate by pressing tabs and `${1:label}`, `${2:another}` for placeholders. Now you might ask what about `$0`, well, it's reserved the final cursor position where the cursor should start.

Now, to tackle the great concern of tackling the issue of date generation, as of [v1.20](https://code.visualstudio.com/updates/v1_20#_more-snippet-variables) snippets have access to the current date and time with one of the following variables.

- `CURRENT_YEAR`
- `CURRENT_YEAR_SHORT`
- `CURRENT_MONTH`
- `CURRENT_DATE`
- `CURRENT_HOUR`
- `CURRENT_MINUTE`
- `CURRENT_SECOND`

If I want the front matter to have a format such as this `2020-08-09T21:48:48+05:30`, I would add the following snippet,

{{< highlight json >}}
"date: ${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}T${CURRENT_HOUR}:${CURRENT_MINUTE}:${CURRENT_SECOND}+05:30",
      "draft: ${6:false}",
{{</ highlight >}}

Finally, these are additional snippet variables provided by Microsoft to make the creation of scaffolding easier, like for example, the `CLIPBOARD`used above is such a variable which would allow a user to generate the `title`, `slug` and `url` from the text in the clipboard.

## Useful Snippet Variable

Below mentioned are some of the most useful variables when you proceed in your journey in creating your snippet.

- `CLIPBOARD` the **contents of your clipboard**
- `TM_CURRENT_LINE` the **contents of the current line**
- `TM_CURRENT_WORD` the **word under cursor** or **the empty string**
- `TM_DIRECTORY` the **name of directory** of the current document
- `TM_FILENAME` the **filename** of the current document
- `TM_FILENAME_BASE` the **filename** of the current document *without its extensions*
- `TM_FILEPATH` the **full file path** of the current document
- `TM_LINE_INDEX` *zero-index* based **line number**
- `TM_LINE_NUMBER` *one-index* based **line number**
- `TM_SELECTED_TEXT` the **currently selected text** or the **empty string**
   
### Resources

- [Snippets in Visual Studio Code](https://code.visualstudio.com/docs/editor/userdefinedsnippets) by Microsoft.
- [Variables Reference](https://code.visualstudio.com/docs/editor/variables-reference) by Microsoft.

{{< message >}}
You can find snippet from this article over on <a href="https://gist.github.com/murshidazher/652f40516f30bdd2b57613f40e4a1f46">Github.com</a>
{{< /message >}}
