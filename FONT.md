`_abstracts.typography.scss`
// Fonts
$font-suisse-rg: "SuisseIntl-Regular-WebTrial",sans-serif;
$font-suisse-md: "SuisseIntl-Medium-WebTrial",sans-serif;
\$font-suisse-mn: "SuisseIntlMono-Regular-WebTrial",sans-serif;

`_abstracts.fonts.scss`
/_------------------------------------_\
 #ABSTRACTS: FONTS
\*------------------------------------\*/

// Import Suisse Regular
@font-face {
font-family: 'SuisseIntl-Regular-WebTrial';
src: url('../../fonts/SuisseIntl-Regular-WebTrial.eot'); /_ IE9 Compat Modes _/
src: url('../../fonts/SuisseIntl-Regular-WebTrial.eot?#iefix') format('embedded-opentype'), /_ IE6-IE8 _/
url('../../fonts/SuisseIntl-Regular-WebTrial.woff2') format('woff2'), /_ Super Modern Browsers _/
url('../../fonts/SuisseIntl-Regular-WebTrial.woff') format('woff'), /_ Pretty Modern Browsers _/
url('../../fonts/SuisseIntl-Regular-WebTrial.ttf') format('truetype'), /_ Safari, Android, iOS _/
url('../../fonts/SuisseIntl-Regular-WebTrial.svg#svgFontName') format('svg'); /_ Legacy iOS _/
}

// Import Suisse Medium
@font-face {
font-family: 'SuisseIntl-Medium-WebTrial';
src: url('../../fonts/SuisseIntl-Medium-WebTrial.eot'); /_ IE9 Compat Modes _/
src: url('../../fonts/SuisseIntl-Medium-WebTrial.eot?#iefix') format('embedded-opentype'), /_ IE6-IE8 _/
url('../../fonts/SuisseIntl-Medium-WebTrial.woff2') format('woff2'), /_ Super Modern Browsers _/
url('../../fonts/SuisseIntl-Medium-WebTrial.woff') format('woff'), /_ Pretty Modern Browsers _/
url('../../fonts/SuisseIntl-Medium-WebTrial.ttf') format('truetype'), /_ Safari, Android, iOS _/
url('../../fonts/SuisseIntl-Medium-WebTrial.svg#svgFontName') format('svg'); /_ Legacy iOS _/
}

// Import Suisse Mono
@font-face {
font-family: 'SuisseIntlMono-Regular-WebTrial';
src: url('../../fonts/SuisseIntlMono-Regular-WebTrial.eot'); /_ IE9 Compat Modes _/
src: url('../../fonts/SuisseIntlMono-Regular-WebTrial.eot?#iefix') format('embedded-opentype'), /_ IE6-IE8 _/
url('../../fonts/SuisseIntlMono-Regular-WebTrial.woff2') format('woff2'), /_ Super Modern Browsers _/
url('../../fonts/SuisseIntlMono-Regular-WebTrial.woff') format('woff'), /_ Pretty Modern Browsers _/
url('../../fonts/SuisseIntlMono-Regular-WebTrial.ttf') format('truetype'), /_ Safari, Android, iOS _/
url('../../fonts/SuisseIntlMono-Regular-WebTrial.svg#svgFontName') format('svg'); /_ Legacy iOS _/
}

`assets > fonts`

`_components.header.scss`

/_------------------------------------_\
 #COMPONENTS: HEADER
\*------------------------------------\*/

/\*\*

- Component Block
  \*/

.Header {
text-align: right;
right: 7%;
z-index: 999;
}

@include breakpoint(md) {
.Header {
position: fixed;
}
}

.Header-title {
@include margin-bottom(1);
}

.Header-link {
display: block;
}
