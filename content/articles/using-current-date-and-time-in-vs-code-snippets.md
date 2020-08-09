+++
title = "Using Current Date and Time In VS Code Snippets"
date = "2020-08-09T 04:07:00Z"
description = "Subheading or a short description."
slug = "using-current-date-and-time-in-vs-code-snippets"
url = "using-current-date-and-time-in-vs-code-snippets"
tags = ["Hugo", "VSCode", "Snippets"]
draft = "false"
+++

```json
{
  "Markdown Blog Front-matter": {
    "prefix": ".fm",
    "body": ["+++",
    "title = \"$0${1:${CLIPBOARD}}\"",
    "emoji = \"${2::call_me_hand:}\"",
    "date = \"${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}T ${CURRENT_HOUR}:${CURRENT_MINUTE}:${CURRENT_SECOND}Z\"",
    "description = \"${3:Subheading or a short description.}\"",
    "slug = \"${4:${CLIPBOARD/[' ']/-/gi}}\"",
    "url = \"${4:${CLIPBOARD/[' ']/-/gi}}\"",
    "+++"
    ],
    "description": "Generate Blog front-matter"
  }
}
```

```json
{
  "Markdown Blog Front-matter Extensive": {
    "prefix": ".fmf",
    "body": ["+++",
    "title = \"$0${1:${CLIPBOARD}}\"",
    "emoji = \"${2::call_me_hand:}\"",
    "date = \"${CURRENT_YEAR}-${CURRENT_MONTH}-${CURRENT_DATE}T ${CURRENT_HOUR}:${CURRENT_MINUTE}:${CURRENT_SECOND}Z\"",
    "description = \"${3:Subheading or a short description.}\"",
    "slug = \"${4:${CLIPBOARD/[' ']/-/gi}}\"",
    "url = \"${4:${CLIPBOARD/[' ']/-/gi}}\"",
    "draft = ${6:false}",
    "tags = [\"${7:tag}\"]",
    "syndicate = \"${8:false}\"",
    "+++"
    ],
    "description": "Generate Blog extensive front-matter"
  }
}
```

{{< message >}}
You can find all the code from this article over on <a href="https://github.com/murshidazher/design-tokens-eleventy">Github.com</a>
{{< /message >}}
