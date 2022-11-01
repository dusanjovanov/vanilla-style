import { c, testCSS } from "./util";

// SHORTHAND

test("outline.shorthand", () => {
  testCSS(c.outline.shorthand(1, "solid", "black"), `outline: 1px solid #000`);
});

test("outline.shorthandCustom", () => {
  testCSS(
    c.outline.shorthandCustom("5px dashed gold"),
    `outline: 5px dashed gold;`
  );
});

test("outline.width", () => {
  testCSS(c.outline.width[1], `outline-width: 1px;`);
});

test("outline.style", () => {
  testCSS(c.outline.style.solid, `outline-style: solid;`);
});

test("outline.color", () => {
  testCSS(c.outline.color.black, `outline-color: #000;`);
});

test("outline.offset", () => {
  testCSS(c.outline.offset[1], `outline-offset: 1px;`);
});
