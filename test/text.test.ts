import { c, testCSS } from "./util";

test("fontSize", () => {
  testCSS(c.fontSize.base, `font-size: 1rem;`);
});

test("fontSize.custom", () => {
  testCSS(c.fontSize.custom(23), `font-size: 23px;`);
});

test("fontSize.custom - string", () => {
  testCSS(c.fontSize.custom("5pt"), `font-size: 5pt;`);
});

test("fontWeight", () => {
  testCSS(c.fontWeight.bold, `font-weight: 700;`);
});

test("fontWeight.custom", () => {
  testCSS(c.fontWeight.custom(900), `font-weight: 900;`);
});

test("fontStyle", () => {
  testCSS(c.fontStyle.italic, `font-style: italic;`);
});

test("fontStyle.custom", () => {
  testCSS(c.fontStyle.custom("oblique"), `font-style: oblique;`);
});

test("fontFamily", () => {
  testCSS(
    c.fontFamily.serif,
    `font-family: ui-serif,Georgia,Cambria,"Times New Roman",Times,serif;`
  );
});

test("fontFamily.custom", () => {
  testCSS(c.fontFamily.custom("Roboto"), `font-family: Roboto;`);
});

test("color", () => {
  testCSS(c.color.black, `color: #000;`);
});

test("color.custom", () => {
  testCSS(c.color.custom("purple"), `color: purple;`);
});

test("lineHeight", () => {
  testCSS(c.lineHeight.normal, `line-height: 1.5;`);
});

test("lineHeight.custom", () => {
  testCSS(c.lineHeight.custom(3.2), `line-height: 3.2;`);
});
