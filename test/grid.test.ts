import { c, testCSS } from "./util";

test("display.grid", () => {
  testCSS(c.display.grid, `display: grid;`);
});

test("gap", () => {
  testCSS(c.gap[4], `gap: 1rem;`);
});
