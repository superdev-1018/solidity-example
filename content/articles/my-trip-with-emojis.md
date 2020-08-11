---
title: "My Trip with Emojis"
date: 2020-08-11T13:29:21+05:30
draft: false
description: "The mind is in a constant state of flux with various emotions just in search of a consistent emoji library."
slug: "my-trip-with-emojis"
url: "my-trip-with-emojis"
tags: ["Hugo", "Mac", "Emoji", "Python"]
syndicate: "false"
stage: first-stage
---


{{< emoji ":dab:" "60" >}}

## What is an emoji

Emoji is a word derived from the Japanese word `kanji` meaning `picture` and `character`, the word `emoji` is a contraction which can be roughly translated as `pictograph`.

## Shortcut I never knew before

Though I've used emojis before I never knew how to access emoji's on mac until I came across this article by [Harry Cresswell](https://harrycresswell.com/articles/emoji-mac/).

You only need to press `Command(⌘) + Control(⌃) + Spacebar` to bring up the emoji palette. Then search for your favourite emoji and select it. That seems super simple right.


## Markdown and Shortcode

As you might've seen most of my main sections have a unique emoji to visually communicate its purpose. I am obsessed with them and since I mostly developed this site using `MacOS` I wasn't aware of how it looked on `Windows` until I recently got to know that the emojis looked different on `Windows`.

This is where my 24 hour journey began, I had the following priorities in this brief endeavor

- **Priority 1**: The emoji should be universal across all platforms
- **Priority 2**: The emoji should appear in Hugo markdown too
- **Priority 3**: The emoji can be stated as `emoticons` or `:shortcode:`


## Javascript and Python to the Rescue

Since I needed a univesal emoji and I had over 15 emoji collections to choose from, see this how a [simple wave emoji](https://emojipedia.org/waving-hand/) appears in different platform. But since I was previously set on using apple emojis, I was on the lookout for apple emoji font but as it appears I couldn't find one online.

Next, I came up with the idea of scrapping the whole collection of [Apple Emoji from Emojipedia](https://emojipedia.org/apple/ios-13.3/) which consists of about 3175 PNGS.

The process goes like this which I got from this [Gist](https://gist.github.com/SMotaal/03e7eccb2a8beb5db5529130bee7ee6f) by Saleh Abdel Motaal,

First Step: Navigate to https://emojipedia.org/apple/ios-13.3/

Second Step: Generate the asset manifest by running this in the Inspect console

{{< highlight js >}}
copy(JSON.stringify(Object.fromEntries([...document.querySelector('ul.emoji-grid').querySelectorAll('img[title][src][srcset]')].map(({title, attributes}, index) => ([attributes.title.value, attributes.srcset.value.replace(/ +\dx$/, '')])))))
{{</ highlight >}}

Second Step: Clean up the Script

{{< highlight js >}}
[...document.querySelectorAll('script, link[rel=preload], link[rel=prefetch]')].forEach(element => element.remove());
{{</ highlight >}}

This gave me a pretty good `JSON` file to work with, but since am using `YAML` as the  data-serialization language for consistency I wrote a Python script to convert this JSON to `YAML` too. Here `ex.txt` is the `JSON` file we've scrapped,

{{< highlight python >}}
def convert_yaml():
  with open('ex.txt') as f1:
    with open('ios13.yaml', 'w') as f2:
      lines = f1.readlines()
      for i, line in enumerate(lines):
        yaml_line = line.replace('{', '\n')
        yaml_line = yaml_line.replace('}\n', '')
        yaml_line = yaml_line.replace(',', '')
        yaml_line = yaml_line.lstrip();

        if yaml_line:
          yaml_line = '- title: ' + yaml_line
          yaml_line = yaml_line.replace(': "https', '\n  link: https')
          yaml_line = yaml_line.replace('.png', '.png\n  shortcode: ":text:')
          f2.write(yaml_line)
{{</ highlight >}}

Then, download those images

{{< highlight python >}}
def download_img():
  base = "ios_emoji"
  i = 0
  with open('ex.txt') as f:
    urls = f.read()
    links = re.findall('"((http)s?://.*?)"', urls)
    for url in links:
        i = i+1
        print('Downloading... ' + str(i))
        context = ssl._create_unverified_context()
        img_url = url[0]
        path_url = img_url.replace('https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/60/apple/237/', '')
        path_url = os.path.join(base, path_url)
        ssl._create_default_https_context = ssl._create_unverified_context
        urllib.request.urlretrieve(img_url, path_url)
{{</ highlight >}}

Then, compress these pngs so that you can reduce their load time

{{< highlight python >}}
def resize():
  root_dir = "ios_emoji"
  out_dir = "resized"
  resize_ratio = 0.6  # where 0.5 is half size, 2 is double size
  
  i = 0
  for filename in glob.iglob(root_dir + '**/*.png', recursive=True):
      i = i + 1
      decimal_round = 3 # number of decimal points
      re_filename = os.path.join(out_dir, filename)
      im = Image.open(filename)

      new_image_height = int(im.size[0] / (1/resize_ratio))
      new_image_length = int(im.size[1] / (1/resize_ratio))  
      imResize = im.resize((new_image_height, new_image_length), Image.ANTIALIAS)

      with open(re_filename, 'w+') as f:
        # (re_filename, 'PNG', optimize=True, quality=85)
        imResize.save(re_filename, 'PNG', compress_level=9) # lossless compression algorithm
        print(
            'Converted... ' + str(i) + 
            ' dimesion: ' + str(imResize.size[0]) +  
            'px size: ' + 'from ' + str(round(os.path.getsize(filename)/1024, decimal_round)) + 'KB to ' 
            + str(round(os.path.getsize(re_filename)/1024, decimal_round)) + 'KB')
{{</ highlight >}}

Then, uplaod these files to the compressed file to you own image hosting platform, I use [Cloudinary](https://cloudinary.com/) to transform and manage my media contents.

## Shortcode with Hugo

Now for the emoji to appear in Hugo, as a shortcode we need to replace the appropriate shortcode in the `YAML` file manually. You could use either of these github repo stated in the resources to find their appropriate :shortcodes:.

Then will create a `Shortcode` in Hugo,

```
|-- your theme
|   |-- layouts
|   |  |-- shortcodes
|   |  |  |-- emoji.html
```

Then paste the following content inside `emoji.html`,

{{< highlight html >}}
{{ $shortcode := .Get 0 }}
{{ $size := .Get 1 }}
{{ $default_size := 24 }}
{{ range first 1 (where .Site.Data.emoji.ios13 "shortcode" "eq" $shortcode) }}
    <span class="emoji">
        <img 
            width="{{ $size | default $default_size }}" 
            height="{{ $size | default $default_size }}" 
            class="cld-responsive lazyload"  
            title="{{ .title }}" 
            src="{{ .link }}"/><!-- /.Emoji -->
    </span><!-- /.Emoji Wrapper -->
{{ end }}
{{</ highlight >}}

Alternatively, If you just need to convert the given shortcode without your own emoji collection,

{{< highlight html >}}
{{ .Get 0 | emojify }}
{{</ highlight >}}

## Let the magic happen

Now, in your markdown you can use the `shortcode` like

{{< highlight markdown >}}
{{ < emoji ":avocado:" > }} -> 🥑
{{</ highlight >}}

## Reflection

Though it was a fun journey to go through and I learned a lot from it, I revoke my initial stand and planning to go with the native implementation of emojis. There are couple of reasons for this;

One: I don't want to impose my views on aesthetics to my users
Two: Though I compressed each emojis to be less than `4KB` still there is a request sent to a blob storage to retrieve it, which could be eliminated.
Three: Pixelation - since the emojis are in raster format the inevitable pixelation will occur when you zoom in on them but I don't want to portray this to my readers.
Fourth: Updates - the version of Apple Emoji I scrapped is `v13.3` but I have to be on constant lookout for any new emojis and update them both in my `YAML` and cloud media while going through the whole process again.

Phew 💨 , for the reasons mentioned above I opted out of using a consistent emoji library and with that I rest my case.

## Postscript

Well, if you're still racking your brain out on how I got that dab emoji, well it's a custom emoji created by [André Gonçalves](https://dribbble.com/andre_goncalves), one of the custom emojis I added to the library I created with the same method mentioned above.

### Resources

- [Emoji Mac](https://harrycresswell.com/articles/emoji-mac/) by Harry Cresswell.
- [Emojipedia® Apple iOS 13.3](https://emojipedia.org/apple/ios-13.3/) by Emojipedia.
- [Emojipedia Scrapping](https://gist.github.com/SMotaal/03e7eccb2a8beb5db5529130bee7ee6f) by Saleh Abdel Motaal.
- [Emojis Shortcode](https://gohugohq.com/partials/emojis-shortcode-for-hugo/) by GoHugoHQ.
- [emoji-cheat-sheet](https://github.com/ikatyang/emoji-cheat-sheet) by Ika.
- [Dab Emoji](https://dribbble.com/shots/6134883-Dab-Emoji) by André Gonçalves.

{{< message >}}
You can find the scrapper from this article over on <a href="https://gist.github.com/murshidazher/652f40516f30bdd2b57613f40e4a1f46">Github.com</a>
{{< /message >}}
