import { createVanillaStyle, defaultTheme } from "../src";

export const { classes: c } = createVanillaStyle(defaultTheme);

export const testCSS = (
  className: string,
  css: string,
  tagName: string = "div"
) => {
  const element = document.createElement(tagName);
  element.className = className;
  expect(className).not.toBe(undefined);
  expect(element).toHaveStyle(css);
};
