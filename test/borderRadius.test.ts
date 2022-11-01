import { c, testCSS } from "./util";

test("borderRadius.all", () => {
  testCSS(c.borderRadius.all.md, `border-radius: 0.375rem;`);
});

test("borderRadius.all.custom", () => {
  testCSS(c.borderRadius.all.custom(23), `border-radius: 23px;`);
});

test("borderRadius.top", () => {
  testCSS(
    c.borderRadius.top.md,
    `border-top-right-radius: 0.375rem; border-top-left-radius: 0.375rem;`
  );
});

test("borderRadius.top.custom", () => {
  testCSS(
    c.borderRadius.top.custom(23),
    `border-top-left-radius: 23px; border-top-right-radius: 23px;`
  );
});

test("borderRadius.bottom", () => {
  testCSS(
    c.borderRadius.bottom.md,
    `border-bottom-right-radius: 0.375rem; border-bottom-left-radius: 0.375rem;`
  );
});

test("borderRadius.bottom.custom", () => {
  testCSS(
    c.borderRadius.bottom.custom(23),
    `border-bottom-left-radius: 23px; border-bottom-right-radius: 23px;`
  );
});

test("borderRadius.left", () => {
  testCSS(
    c.borderRadius.left.md,
    `border-top-left-radius: 0.375rem; border-bottom-left-radius: 0.375rem;`
  );
});

test("borderRadius.left.custom", () => {
  testCSS(
    c.borderRadius.left.custom(23),
    `border-top-left-radius: 23px; border-bottom-left-radius: 23px;`
  );
});

test("borderRadius.right", () => {
  testCSS(
    c.borderRadius.right.md,
    `border-top-right-radius: 0.375rem; border-bottom-right-radius: 0.375rem;`
  );
});

test("borderRadius.right.custom", () => {
  testCSS(
    c.borderRadius.right.custom(23),
    `border-top-right-radius: 23px; border-bottom-right-radius: 23px;`
  );
});

test("borderRadius.topRight", () => {
  testCSS(c.borderRadius.topRight.md, `border-top-right-radius: 0.375rem;`);
});

test("borderRadius.topRight.custom", () => {
  testCSS(c.borderRadius.topRight.custom(23), `border-top-right-radius: 23px;`);
});

test("borderRadius.topLeft", () => {
  testCSS(c.borderRadius.topLeft.md, `border-top-left-radius: 0.375rem;`);
});

test("borderRadius.topLeft.custom", () => {
  testCSS(c.borderRadius.topLeft.custom(23), `border-top-left-radius: 23px;`);
});

test("borderRadius.bottomRight", () => {
  testCSS(
    c.borderRadius.bottomRight.md,
    `border-bottom-right-radius: 0.375rem;`
  );
});

test("borderRadius.bottomRight.custom", () => {
  testCSS(
    c.borderRadius.bottomRight.custom(23),
    `border-bottom-right-radius: 23px;`
  );
});

test("borderRadius.bottomLeft", () => {
  testCSS(c.borderRadius.bottomLeft.md, `border-bottom-left-radius: 0.375rem;`);
});

test("borderRadius.bottomLeft.custom", () => {
  testCSS(
    c.borderRadius.bottomLeft.custom(23),
    `border-bottom-left-radius: 23px;`
  );
});
