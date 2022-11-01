import { c, testCSS } from "./util";

test("display.flex", () => {
  testCSS(c.display.flex, `display: flex;`);
});

test("flex", () => {
  testCSS(c.flex[1], `flex: 1 1 0%;`);
});

test("flexGrow", () => {
  testCSS(c.flexGrow[1], `flex-grow: 1;`);
});

test("flexShrink", () => {
  testCSS(c.flexShrink[1], `flex-shrink: 1;`);
});

test("flexBasis", () => {
  testCSS(c.flexBasis[4], `flex-basis: 1rem;`);
});

test("flexWrap", () => {
  testCSS(c.flexWrap.wrap, `flex-wrap: wrap;`);
});

test("flexDirection", () => {
  testCSS(c.flexDirection.column, `flex-direction: column;`);
});

test("order", () => {
  testCSS(c.order[1], `order: 1;`);
});

test("gap", () => {
  testCSS(c.gap[4], `gap: 1rem;`);
});

test("alignItems", () => {
  testCSS(c.alignItems.center, `align-items: center;`);
});

test("alignContent", () => {
  testCSS(c.alignContent.center, `align-content: center;`);
});

test("justifyContent", () => {
  testCSS(c.justifyContent.center, `justify-content: center;`);
});

test("justifyItems", () => {
  testCSS(c.justifyItems.center, `justify-items: center;`);
});

test("alignSelf", () => {
  testCSS(c.alignSelf.center, `align-self: center;`);
});

test("justifySelf", () => {
  testCSS(c.justifySelf.center, `justify-self: center;`);
});
