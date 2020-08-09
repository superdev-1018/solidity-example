---
title: "Using Current Date and Time In VS Code Snippets"
date: 2020-08-09T21:48:48+05:30
draft: false
description: "Subheading or a short description."
slug: "using-current-date-and-time-in-vs-code-snippets"
url: "using-current-date-and-time-in-vs-code-snippets"
tags: ["Hugo", "VSCode", "Snippets"]
syndicate: "false"
---

```json
{
  "Markdown Blog Front-matter": {
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
    "description": "Generate Blog front-matter"
  }
}
```


{{< message >}}
You can find snippet from this article over on <a href="https://gist.github.com/murshidazher/652f40516f30bdd2b57613f40e4a1f46">Github.com</a>
{{< /message >}}
