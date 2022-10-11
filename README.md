## vanilla-style 🍦

css-in-js library - kinda like tailwind but with objects

```bash
yarn add @dusanjovanov/vanilla-style
```

[![npm](https://img.shields.io/npm/v/@dusanjovanov/vanilla-style?color=%236f42c1&style=for-the-badge)](https://www.npmjs.com/package/@dusanjovanov/vanilla-style)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/@dusanjovanov/vanilla-style?color=%236f42c1&style=for-the-badge)](https://bundlephobia.com/package/@dusanjovanov/vanilla-style@0.4.1)

### Usage

```tsx
import { createVanillaStyle, defaultTheme } from "@dusanjovanov/vanilla-style";

const { classes: c } = createVanillaStyle(defaultTheme);

// or merge your theme with the defaultTheme
// defaultTheme is more or less same as tailwind's
const { classes: c } = createVanillaStyle({
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
        c.borderRadius.all.md
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
const className = c.fontSize.custom(14);
// or
const className = c.fontSize.custom("20px");

// this works for any css property
```

There are pseudo selectors

```tsx
const className = c.dark.color.white; // only applied when inside a container with .dark class

const className = c.focus.boxShadow.md; // applied on focus
```

Custom selector function

```tsx
const className = c.selector("td,th").border.all.width[1]; // applied to child elements

// you can chain pseudo selectors as well
const className = c.selector("td,th").hover.border.right.style.solid; // this is applied when the child elements are hovered

// when the parent is hovered
const className = c.selector(":hover td,th").border.bottom.color.custom("red");
```

Media queries

```tsx
const className = c.screen.md.width.full;

const className = c.screen.lg.hover.color.red500;
```

Animations

There are a few built in animations (same as Tailwind).

```tsx
const { classes: c } = createVanillaStyle(defaultTheme);

// special animation shorthand method
// animation shothand doesn't have individual, ordered arguments like the border and outline shorthands
// it just accepts a string - css animation has too many properties :)
const className = c.animation.shorthand(
  `350ms ${c.animation.name.spin} linear infinite`
);

// or set everything individually
const className = cx(
  c.animation.duration[500],
  c.animation.name.spin,
  c.animation.timingFunction.linear
  c.animation.iterationCount.infinite,
);

// custom animation (not from the theme)
// animation name needs to the string that keyframes returns !
import { keyframes } from "@dusanjovanov/vanilla-style"; // reexported from @emotion/css

const bounce = keyframes({
  "from, 20%, 53%, 80%, to": {
    transform: "translate3d(0,0,0)",
  },
  "40%, 43%": {
    transform: "translate3d(0, -30px, 0)",
  },
  "70%": {
    transform: "translate3d(0, -15px, 0)",
  },
  "90%": {
    transform: "translate3d(0,-4px,0)",
  },
});

// shorthand
const className = c.animation.shorthand(`1s ${bounce} ease infinite`);

// individual property
const className = c.animation.name.custom(bounce);
```

About the library:

- Built with Typescript and has full type inference
- Framework agnostic (just has to be JS)
- 1 dependency: @emotion/css

🔔 There will be a docs site with more details and examples soon!

Also stable version coming soon!
