---
title: "Improved integration of Hugo and Katex"
date: 2020-08-27T03:41:24+05:30
draft: false
emoji: ":call_me_hand:"
description: "Subheading or a short description."
slug: "improved-integration-of-hugo-and-katex"
url: "improved-integration-of-hugo-and-katex"
tags: ["test", "katex", "plotly"]
syndicate: "false"
math: true
graph: true
diagram: true
---
KaTeX can be used to generate complex math formulas server-side. 

$$
\phi = \frac{(1+\sqrt{5})}{2} = 1.6180339887\cdots
$$

Additional details can be found on [GitHub](https://github.com/Khan/KaTeX) or on the [Wiki](http://tiddlywiki.com/plugins/tiddlywiki/katex/).
<!--more-->

### Example 1

If the text between $$ contains newlines it will rendered in display mode:
```
$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$
```
$$
f(x) = \int_{-\infty}^\infty\hat f(\xi)\,e^{2 \pi i \xi x}\,d\xi
$$

### Example Graph

{{< plot "plot2" >}}

var trace1 = {
  x: [1, 2, 3, 4],
  y: [10, 15, 13, 17],
  type: 'scatter'
};

var trace2 = {
  x: [1, 2, 3, 4],
  y: [16, 5, 11, 9],
  type: 'scatter'
};

data = [trace1, trace2];
fig = {
  data: data,
  config: {
      responsive : true,
      displayModeBar: false
      },
}

{{</ plot >}}

{{<mermaid>}}
graph TD;
  A-->B;
  A-->C;
  B-->D;
  C-->D;
{{</mermaid>}}

{{<notice info >}}
A tip disclaimer
{{< /notice >}}


### Example 2
```
$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$
```
​​$$
\frac{1}{\Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{\frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {1+\frac{e^{-6\pi}} {1+\frac{e^{-8\pi}} {1+\cdots} } } }
$$
​​ 

### Example 3
```
$$
1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots = \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.
$$
```
$$
1 +  \frac{q^2}{(1-q)}+\frac{q^6}{(1-q)(1-q^2)}+\cdots = \prod_{j=0}^{\infty}\frac{1}{(1-q^{5j+2})(1-q^{5j+3})}, \quad\quad \text{for }\lvert q\rvert<1.
$$

### Problem

There's _no_ [custom $\KaTeX$ macro][1] in local preview since I've merged some
recent commits from the upstream of this blog's theme, in particular,
[Beautiful Hugo][8]'s pull requests [#246][9] and [#255][10], which allowed
_self-hosting the theme's static JS, CSS and font files_.  This self-hosted
option is particularly useful in case of _slow response from [Cloudflare][11]'s
CDN_.


Even they _do_ appear on the public GitLab site, the final rendered Markdown +
$\TeX$ code would be succumb to syntax errors due to their absence in the
preview process.

### Solution
#### General method

Searching "Hugo KaTeX", I've found
[Edwin Kofler's blog post about Hugo + $\KaTeX$][2] useful.

Just [choose Mmark][3], which is a fork of [Blackfriday][4], a popular Markdown
processor for [Go][5], as the post's Markdown parser by either

1. adding the option `markup: mmark` in the content's front matter; or
2. changing the content file's extension name to `.mmark`.

After that, Hugo recognised the inline and display math by a pair of surrounding
`$$`. It _wouldn't_ try to interpret the underscores `_` inside a pair of `$$`.
The difference between inline and display math is whether `$$` occupies one
entire line.

#### Difficulties
##### Repeated custom $\KaTeX$ delimiters

I've added [Showdown][6] for static comment preview in
`static/js/staticman-preview.js` in
[my _tweaked_ Beautiful Hugo theme][7].  This JS file also contains lines that
convert `$$ ... $$` into math expresions.

```js
$( document ).ready(function() {
  var myKaTeXOptions = {
    // LaTeX like math delimiters
    delimiters: [
    {left: "$$", right: "$$", display: true},
    {left: "\\[", right: "\\]", display: true},
    {left: "$", right: "$", display: false},
    {left: "\\(", right: "\\)", display: false}
    ],
    throwOnError: false
  };

  ...
});
```

##### My custom $\KaTeX$ macros _not_ recognised

I've created [some custom $\KaTeX$ macros][1] to simplify the math writing
process.  However, they _won't_ work _without_ the lines containing `$` in the
`delimiters` in `static/js/katex-macros.js`.  As a result, I have to put back
these two lines at [commit `9e640f21`][12].  In case of custom macros, I still
need to rely on those two lines and the surrounding `<div>` tag, but I can put
`markup: mmark` in the posts' front matter.

##### Existing $\TeX$ inline math markup

I prefer $\TeX$'s way of inline math markup `$ ... $` over its [Blackfriday][4]
counterpart `$$ ... $$`.  _Systematically_ replacing the former by the later
would be a formidable task.  I've given that up in favour of one _single_ line
`$` in `delimiters`.

##### Chores: Format the math

The `content/` changes at [commit `9e640f21`][12] can be categorized into:

- inline math: unescaped underscores `_`.

    ```
    Lorem ipsum $$ s_1 = a_2 \times p_3 $$.
    ```

- display math: surrounding `$$`'s and empty lines needed.  Unwrapped `<div>`
  for normal block equations.

    ```
    Lorem ipsum.

    $$
    s_1 = a_2 \times p_2
    $$
    ```

- _manual_ custom macro detection and review

#### Results

[My custom macros][1] have finally come back!


[1]: /post/2018-09-27-custom-katex-macros/
[2]: //eankeen.github.io/blog/render-latex-with-katex-in-hugo-blog/
[3]: //gohugo.io/content-management/formats/#use-mmark
[4]: //github.com/russross/blackfriday
[5]: //golang.org/
[6]: //demo.showdownjs.com/
[7]: //gitlab.com/VincentTam/beautifulhugo/
[8]: //github.com/halogenica/beautifulhugo/
[9]: //github.com/halogenica/beautifulhugo/pull/246
[10]: //github.com/halogenica/beautifulhugo/pull/255
[11]: //www.cloudflare.com/
[12]: //gitlab.com/VincentTam/vincenttam.gitlab.io/commit/9e640f21df6a7fa5724c52311d0751671e4a16db#794aa83d54c8ad0a76fb7f5b8a0b243c15940c33
