import { c, testCSS } from "./util";

test("bg", () => {
  testCSS(c.bg.black, `background-color: #000;`);
});

test("bg.custom", () => {
  testCSS(c.bg.custom("purple"), `background-color: purple;`);
});
