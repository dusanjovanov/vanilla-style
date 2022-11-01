import { c, testCSS } from "./util";

test("margin.all", () => {
  testCSS(c.m[4], `margin: 1rem;`);
});

test("margin.all.custom", () => {
  testCSS(c.m.custom(23), `margin: 23px;`);
});

test("margin.x", () => {
  testCSS(c.mx[4], `margin-left: 1rem; margin-right: 1rem;`);
});

test("margin.x.custom", () => {
  testCSS(c.mx.custom(23), `margin-left: 23px; margin-right: 23px;`);
});

test("margin.y", () => {
  testCSS(c.my[4], `margin-top: 1rem; margin-bottom: 1rem;`);
});

test("margin.y.custom", () => {
  testCSS(c.my.custom(23), `margin-top: 23px; margin-bottom: 23px;`);
});

test("margin.top", () => {
  testCSS(c.mt[4], `margin-top: 1rem;`);
});

test("margin.top.custom", () => {
  testCSS(c.mt.custom(23), `margin-top: 23px;`);
});

test("margin.bottom", () => {
  testCSS(c.mb[4], `margin-bottom: 1rem;`);
});

test("margin.bottom.custom", () => {
  testCSS(c.mb.custom(23), `margin-bottom: 23px;`);
});

test("margin.left", () => {
  testCSS(c.ml[4], `margin-left: 1rem;`);
});

test("margin.left.custom", () => {
  testCSS(c.ml.custom(23), `margin-left: 23px;`);
});

test("margin.right", () => {
  testCSS(c.mr[4], `margin-right: 1rem;`);
});

test("margin.right.custom", () => {
  testCSS(c.mr.custom(23), `margin-right: 23px;`);
});
