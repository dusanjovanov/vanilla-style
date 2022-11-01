import { c, testCSS } from "./util";

test("padding.all", () => {
  testCSS(c.p[4], `padding: 1rem;`);
});

test("padding.all.custom", () => {
  testCSS(c.p.custom(23), `padding: 23px;`);
});

test("padding.x", () => {
  testCSS(c.px[4], `padding-left: 1rem; padding-right: 1rem;`);
});

test("padding.x.custom", () => {
  testCSS(c.px.custom(23), `padding-left: 23px; padding-right: 23px;`);
});

test("padding.y", () => {
  testCSS(c.py[4], `padding-top: 1rem; padding-bottom: 1rem;`);
});

test("padding.y.custom", () => {
  testCSS(c.py.custom(23), `padding-top: 23px; padding-bottom: 23px;`);
});

test("padding.top", () => {
  testCSS(c.pt[4], `padding-top: 1rem;`);
});

test("padding.top.custom", () => {
  testCSS(c.pt.custom(23), `padding-top: 23px;`);
});

test("padding.bottom", () => {
  testCSS(c.pb[4], `padding-bottom: 1rem;`);
});

test("padding.bottom.custom", () => {
  testCSS(c.pb.custom(23), `padding-bottom: 23px;`);
});

test("padding.left", () => {
  testCSS(c.pl[4], `padding-left: 1rem;`);
});

test("padding.left.custom", () => {
  testCSS(c.pl.custom(23), `padding-left: 23px;`);
});

test("padding.right", () => {
  testCSS(c.pr[4], `padding-right: 1rem;`);
});

test("padding.right.custom", () => {
  testCSS(c.pr.custom(23), `padding-right: 23px;`);
});
