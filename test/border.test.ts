import { c, testCSS } from "./util";

// SHORTHAND

test("border.all.shorthand", () => {
  testCSS(
    c.border.all.shorthand(1, "solid", "black"),
    `border: 1px solid #000`
  );
});

test("border.top.shorthand", () => {
  testCSS(
    c.border.top.shorthand(1, "solid", "black"),
    `border-top: 1px solid #000`
  );
});

test("border.right.shorthand", () => {
  testCSS(
    c.border.right.shorthand(1, "solid", "black"),
    `border-right: 1px solid #000`
  );
});

test("border.left.shorthand", () => {
  testCSS(
    c.border.left.shorthand(1, "solid", "black"),
    `border-left: 1px solid #000`
  );
});

test("border.bottom.shorthand", () => {
  testCSS(
    c.border.bottom.shorthand(1, "solid", "black"),
    `border-bottom: 1px solid #000`
  );
});

test("border.topLeft.shorthand", () => {
  testCSS(
    c.border.topLeft.shorthand(1, "solid", "black"),
    `border-top: 1px solid #000; border-left: 1px solid #000;`
  );
});

test("border.topRight.shorthand", () => {
  testCSS(
    c.border.topRight.shorthand(1, "solid", "black"),
    `border-top: 1px solid #000; border-right: 1px solid #000;`
  );
});

test("border.bottomRight.shorthand", () => {
  testCSS(
    c.border.bottomRight.shorthand(1, "solid", "black"),
    `border-bottom: 1px solid #000; border-right: 1px solid #000;`
  );
});

test("border.bottomLeft.shorthand", () => {
  testCSS(
    c.border.bottomLeft.shorthand(1, "solid", "black"),
    `border-bottom: 1px solid #000; border-left: 1px solid #000;`
  );
});

// SHORTHAND CUSTOM

test("border.all.shorthandCustom", () => {
  testCSS(
    c.border.all.shorthandCustom("5px dashed gold"),
    `border: 5px dashed gold`
  );
});

test("border.top.shorthandCustom", () => {
  testCSS(
    c.border.top.shorthandCustom("5px dashed gold"),
    `border-top: 5px dashed gold`
  );
});

test("border.right.shorthandCustom", () => {
  testCSS(
    c.border.right.shorthandCustom("5px dashed gold"),
    `border-right: 5px dashed gold`
  );
});

test("border.left.shorthandCustom", () => {
  testCSS(
    c.border.left.shorthandCustom("5px dashed gold"),
    `border-left: 5px dashed gold`
  );
});

test("border.bottom.shorthandCustom", () => {
  testCSS(
    c.border.bottom.shorthandCustom("5px dashed gold"),
    `border-bottom: 5px dashed gold`
  );
});

test("border.topLeft.shorthandCustom", () => {
  testCSS(
    c.border.topLeft.shorthandCustom("5px dashed gold"),
    `border-top: 5px dashed gold; border-left: 5px dashed gold;`
  );
});

test("border.topRight.shorthandCustom", () => {
  testCSS(
    c.border.topRight.shorthandCustom("5px dashed gold"),
    `border-top: 5px dashed gold; border-right: 5px dashed gold;`
  );
});

test("border.bottomRight.shorthandCustom", () => {
  testCSS(
    c.border.bottomRight.shorthandCustom("5px dashed gold"),
    `border-bottom: 5px dashed gold; border-right: 5px dashed gold;`
  );
});

test("border.bottomLeft.shorthandCustom", () => {
  testCSS(
    c.border.bottomLeft.shorthandCustom("5px dashed gold"),
    `border-bottom: 5px dashed gold; border-left: 5px dashed gold;`
  );
});

// WIDTH

test("border.all.width", () => {
  testCSS(c.border.all.width[1], `border-width: 1px;`);
});

test("border.top.width", () => {
  testCSS(c.border.top.width[1], `border-top-width: 1px;`);
});

test("border.bottom.width", () => {
  testCSS(c.border.bottom.width[1], `border-bottom-width: 1px;`);
});

test("border.right.width", () => {
  testCSS(c.border.right.width[1], `border-right-width: 1px;`);
});

test("border.left.width", () => {
  testCSS(c.border.left.width[1], `border-left-width: 1px;`);
});

test("border.bottomLeft.width", () => {
  testCSS(
    c.border.bottomLeft.width[1],
    `border-bottom-width: 1px; border-left-width: 1px;`
  );
});

test("border.bottomRight.width", () => {
  testCSS(
    c.border.bottomRight.width[1],
    `border-bottom-width: 1px; border-right-width: 1px;`
  );
});

test("border.topRight.width", () => {
  testCSS(
    c.border.topRight.width[1],
    `border-top-width: 1px; border-right-width: 1px;`
  );
});

test("border.topLeft.width", () => {
  testCSS(
    c.border.topLeft.width[1],
    `border-top-width: 1px; border-left-width: 1px;`
  );
});

// WIDTH CUSTOM

test("border.all.width.custom", () => {
  testCSS(c.border.all.width.custom(23), `border-width: 23px;`);
});

test("border.top.width.custom", () => {
  testCSS(c.border.top.width.custom(23), `border-top-width: 23px;`);
});

test("border.bottom.width.custom", () => {
  testCSS(c.border.bottom.width.custom(23), `border-bottom-width: 23px;`);
});

test("border.right.width.custom", () => {
  testCSS(c.border.right.width.custom(23), `border-right-width: 23px;`);
});

test("border.left.width.custom", () => {
  testCSS(c.border.left.width.custom(23), `border-left-width: 23px;`);
});

test("border.topLeft.width.custom", () => {
  testCSS(
    c.border.topLeft.width.custom(23),
    `border-top-width: 23px; border-left-width: 23px;`
  );
});

test("border.topRight.width.custom", () => {
  testCSS(
    c.border.topRight.width.custom(23),
    `border-top-width: 23px; border-right-width: 23px;`
  );
});

test("border.bottomRight.width.custom", () => {
  testCSS(
    c.border.bottomRight.width.custom(23),
    `border-bottom-width: 23px; border-right-width: 23px;`
  );
});

test("border.bottomLeft.width.custom", () => {
  testCSS(
    c.border.bottomLeft.width.custom(23),
    `border-bottom-width: 23px; border-left-width: 23px;`
  );
});

// STYLE

test("border.all.style", () => {
  testCSS(c.border.all.style.solid, `border-style: solid;`);
});

test("border.top.style", () => {
  testCSS(c.border.top.style.solid, `border-top-style: solid;`);
});

test("border.bottom.style", () => {
  testCSS(c.border.bottom.style.solid, `border-bottom-style: solid;`);
});

test("border.right.style", () => {
  testCSS(c.border.right.style.solid, `border-right-style: solid;`);
});

test("border.left.style", () => {
  testCSS(c.border.left.style.solid, `border-left-style: solid;`);
});

test("border.topLeft.style", () => {
  testCSS(
    c.border.topLeft.style.solid,
    `border-top-style: solid; border-left-style: solid;`
  );
});

test("border.topRight.style", () => {
  testCSS(
    c.border.topRight.style.solid,
    `border-top-style: solid; border-right-style: solid;`
  );
});

test("border.bottomRight.style", () => {
  testCSS(
    c.border.bottomRight.style.solid,
    `border-bottom-style: solid; border-right-style: solid;`
  );
});

test("border.bottomLeft.style", () => {
  testCSS(
    c.border.bottomLeft.style.solid,
    `border-bottom-style: solid; border-left-style: solid;`
  );
});

// STYLE CUSTOM

test("border.all.style.custom", () => {
  testCSS(c.border.all.style.custom("dashed"), `border-style: dashed;`);
});

test("border.top.style.custom", () => {
  testCSS(c.border.top.style.custom("dashed"), `border-top-style: dashed;`);
});

test("border.bottom.style.custom", () => {
  testCSS(
    c.border.bottom.style.custom("dashed"),
    `border-bottom-style: dashed;`
  );
});

test("border.right.style.custom", () => {
  testCSS(c.border.right.style.custom("dashed"), `border-right-style: dashed;`);
});

test("border.left.style.custom", () => {
  testCSS(c.border.left.style.custom("dashed"), `border-left-style: dashed;`);
});

test("border.topLeft.style.custom", () => {
  testCSS(
    c.border.topLeft.style.custom("dashed"),
    `border-top-style: dashed; border-left-style: dashed;`
  );
});

test("border.topRight.style.custom", () => {
  testCSS(
    c.border.topRight.style.custom("dashed"),
    `border-top-style: dashed; border-right-style: dashed;`
  );
});

test("border.bottomRight.style.custom", () => {
  testCSS(
    c.border.bottomRight.style.custom("dashed"),
    `border-bottom-style: dashed; border-right-style: dashed;`
  );
});

test("border.bottomLeft.style.custom", () => {
  testCSS(
    c.border.bottomLeft.style.custom("dashed"),
    `border-bottom-style: dashed; border-left-style: dashed;`
  );
});

// COLOR

test("border.all.color", () => {
  testCSS(c.border.all.color.black, `border-color: #000;`);
});

test("border.top.color", () => {
  testCSS(c.border.top.color.black, `border-top-color: #000;`);
});

test("border.bottom.color", () => {
  testCSS(c.border.bottom.color.black, `border-bottom-color: #000;`);
});

test("border.right.color", () => {
  testCSS(c.border.right.color.black, `border-right-color: #000;`);
});

test("border.left.color", () => {
  testCSS(c.border.left.color.black, `border-left-color: #000;`);
});

test("border.topLeft.color", () => {
  testCSS(
    c.border.topLeft.color.black,
    `border-top-color: #000; border-left-color: #000;`
  );
});

test("border.topRight.color", () => {
  testCSS(
    c.border.topRight.color.black,
    `border-top-color: #000; border-right-color: #000;`
  );
});

test("border.bottomRight.color", () => {
  testCSS(
    c.border.bottomRight.color.black,
    `border-bottom-color: #000; border-right-color: #000;`
  );
});

test("border.bottomLeft.color", () => {
  testCSS(
    c.border.bottomLeft.color.black,
    `border-bottom-color: #000; border-left-color: #000;`
  );
});

// COLOR CUSTOM

test("border.all.color", () => {
  testCSS(c.border.all.color.custom("gold"), `border-color: gold;`);
});

test("border.top.color", () => {
  testCSS(c.border.top.color.custom("gold"), `border-top-color: gold;`);
});

test("border.bottom.color", () => {
  testCSS(c.border.bottom.color.custom("gold"), `border-bottom-color: gold;`);
});

test("border.right.color", () => {
  testCSS(c.border.right.color.custom("gold"), `border-right-color: gold;`);
});

test("border.left.color", () => {
  testCSS(c.border.left.color.custom("gold"), `border-left-color: gold;`);
});

test("border.topLeft.color", () => {
  testCSS(
    c.border.topLeft.color.custom("gold"),
    `border-top-color: gold; border-left-color: gold;`
  );
});

test("border.topRight.color", () => {
  testCSS(
    c.border.topRight.color.custom("gold"),
    `border-top-color: gold; border-right-color: gold;`
  );
});

test("border.bottomRight.color", () => {
  testCSS(
    c.border.bottomRight.color.custom("gold"),
    `border-bottom-color: gold; border-right-color: gold;`
  );
});

test("border.bottomLeft.color", () => {
  testCSS(
    c.border.bottomLeft.color.custom("gold"),
    `border-bottom-color: gold; border-left-color: gold;`
  );
});
