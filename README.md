# Fitter Happier Text

Performant, fully fluid headings

---

# Usage

Include `dist/fitter-happier-text.js` in your project or install from NPM:

```
npm install fitter-happier-text
```

(or download it https://github.com/jxnblk/fitter-happier-text/archive/0.0.1.zip)

Pass it a nodelist.

```js
var nodes = document.querySelectorAll('[data-fitter-happier-text]');
fitterHappierText(nodes);
```

Fitter Happier Text replaces each node with an SVG text node and sets the `viewBox` attribute based on its width and height.

To adjust for different fonts, use the `baseline` and `paddingY` options. `paddingY` can be set to a negative value to reduce the height of the SVG container.

```js
fitterHappierText(nodes, { baseline: 14, paddingY: 2 });
```

<!--
## Usage with Gulpjs

To avoid client-side rendering, use a build tool like Gulpjs to replace HTML elements with SVG.

_Example TK_

-->

---

### Browser support:

http://caniuse.com/#feat=svg

Please note: I do not plan on adding any SVG polyfills to handle old browsers.

---

MIT License

