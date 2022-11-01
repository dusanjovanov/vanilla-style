import { c, testCSS } from "./util";

test("borderSpacing", () => {
  testCSS(c.borderSpacing[4], `border-spacing: 1rem;`, "table");
});

test("borderSpacing.custom", () => {
  testCSS(c.borderSpacing.custom(23), `border-spacing: 23px;`, "table");
});

test("borderCollapse", () => {
  testCSS(c.borderCollapse.collapse, `border-collapse: collapse;`, "table");
});

test("borderCollapse.custom", () => {
  testCSS(
    c.borderCollapse.custom("inherit"),
    `border-collapse: inherit;`,
    "table"
  );
});

test("tableLayout", () => {
  testCSS(c.tableLayout.fixed, `table-layout: fixed;`, "table");
});

test("tableLayout.custom", () => {
  testCSS(c.tableLayout.custom("inherit"), `table-layout: inherit;`, "table");
});
