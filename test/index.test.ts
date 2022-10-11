import { createVanillaStyle, defaultTheme } from "../src";
import "@testing-library/jest-dom";

const { classes: c } = createVanillaStyle(defaultTheme);

const createTest = (className: string, css: string) => {
  const container = document.createElement("div");
  const element = document.createElement("div");
  element.dataset.testid = "div";
  element.className = className;
  container.appendChild(element);
  expect(element).toHaveStyle(css);
};

test("test1", () => {
  createTest(
    c.border.topRight.style.solid,
    `border-top-style: solid; border-right-style: solid;`
  );
  createTest(
    c.border.all.shorthand(1, "solid", "black"),
    `border-width: 1px; border-style: solid; border-color: #000`
  );

  createTest(c.borderRadius.all.md, `border-radius: 0.375rem;`);

  createTest(c.borderRadius.topRight.md, `border-top-right-radius: 0.375rem;`);
  createTest(c.borderRadius.topLeft.md, `border-top-left-radius: 0.375rem;`);
  createTest(
    c.borderRadius.bottomLeft.md,
    `border-bottom-left-radius: 0.375rem;`
  );
  createTest(
    c.borderRadius.bottomRight.md,
    `border-bottom-right-radius: 0.375rem;`
  );

  createTest(
    c.outline.shorthand(1, "solid", "black", 1),
    `outline-width: 1px; outline-style: solid; outline-color: #000;`
  );

  createTest(c.outline.color.black, `outline-color: #000;`);
});
