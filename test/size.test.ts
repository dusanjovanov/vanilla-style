import { c, testCSS } from "./util";

test("width", () => {
  testCSS(c.width.half, `width: 50%;`);
});

test("width.custom", () => {
  testCSS(c.width.custom(23), `width: 23px;`);
});

test("height", () => {
  testCSS(c.height.half, `height: 50%;`);
});

test("height.custom", () => {
  testCSS(c.height.custom(23), `height: 23px;`);
});
