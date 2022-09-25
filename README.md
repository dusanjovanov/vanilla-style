## vanilla-style 🍦

css-in-js library - kinda like tailwind but with objects 

```bash
yarn add @dusanjovanov/vanilla-style
```

### Usage

Basically:

```tsx
import { createVanillaStyle, defaultTheme } from "@dusanjovanov/vanilla-style";

const c = createVanillaStyle(defaultTheme);

// or merge your theme with the defaultTheme
// defaultTheme is more or less same as tailwind's 
const c = createVanillaStyle({
  ...defaultTheme,
  backgroundColor: {
    ...defaultTheme.backgroundColor,
    brandColor: "dodgerblue",
  },
});

const element = document.createElement("div");

element.className = c.bg.blue500; // blue background

// or if you use React
import { cx } from "@dusanjovanov/vanilla-style";

const Button = () => {
  return (
    <button
      className={cx(
        c.bg.blue500,
        c.hover.bg.blue700,
        c.color.white,
        c.rounded.md
      )}
    >
      Button
    </button>
  );
};

// if you need multiple classes (and you will most of the time),
// use 'cx' function (reexported from @emotion/css)
```

If you need a custom (fixed) value, you can do this:

```tsx
const className = c.fontSize(14);
// or
const className = c.fontSize("20px");

// this works for any css property
```

There are pseudo selectors

```tsx
const className = c.dark.color.white; // only applied when inside a container with .dark class

const className = c.focus.boxShadow.md; // applied on focus
```

Custom selector function

```tsx
const className = c.selector("td,th").border[1]; // applied to child elements

// you can chain pseudo selectors as well
const className = c.selector("td,th").hover.border[1];
```

About the library: 
- Built with Typescript and has full type inference
- Framework agnostic (just has to be JS)
- 1 dependency: @emotion/css

🔔 There will be a docs site with more details and examples soon!