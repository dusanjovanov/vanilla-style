import { css } from "@emotion/css";
import { defaultTheme } from "./defaultTheme";

type GenericTheme = {
  [slot in keyof typeof defaultTheme]: Record<string | number | symbol, any>;
};

type CssFn = (arg: string | number) => string;

export function createVanillaStyle<Theme extends GenericTheme>(theme: Theme) {
  class ProxyOne {
    constructor(selector?: string) {
      this.#selector = selector;
    }
    #selector?: any;

    #p = <ThemeSlot extends keyof Theme>(
      themeSlot: ThemeSlot,
      cssProps?: string | string[],
      selector?: string
    ) => {
      const themeObj: any = theme[themeSlot];
      const fn = (value: any) => {
        return css(
          this.#getCssObject(cssProps ?? (themeSlot as string), value, selector)
        );
      };
      const inst = this;
      for (const name of Object.keys(themeObj as {})) {
        Object.defineProperty(fn, name, {
          get() {
            return css(
              inst.#getCssObject(
                cssProps ?? (themeSlot as string),
                themeObj[name],
                selector
              )
            );
          },
        });
      }
      return fn as CssFn & {
        [varName in keyof Theme[ThemeSlot]]: string;
      };
    };

    bg = this.#p("backgroundColor");
    color = this.#p("color");
    borderColor = this.#p("borderColor");
    p = this.#p("padding");
    px = this.#p("padding", ["paddingLeft", "paddingRight"]);
    py = this.#p("padding", ["paddingTop", "paddingBottom"]);
    pl = this.#p("padding", "paddingLeft");
    pr = this.#p("padding", "paddingRight");
    pt = this.#p("padding", "paddingTop");
    pb = this.#p("padding", "paddingBottom");
    m = this.#p("margin");
    mx = this.#p("margin", ["marginLeft", "marginRight"]);
    my = this.#p("margin", ["marginTop", "marginBottom"]);
    ml = this.#p("margin", "marginLeft");
    mr = this.#p("margin", "marginRight");
    mt = this.#p("margin", "marginTop");
    mb = this.#p("margin", "marginBottom");
    fontSize = this.#p("fontSize");
    borderRadius = this.#p("borderRadius");
    border = this.#p("borderWidth");
    width = this.#p("width");
    height = this.#p("height");
    lineHeight = this.#p("lineHeight");
    gap = this.#p("gap", "gap");
    borderTop = this.#p("borderWidth", "borderTopWidth");
    borderBottom = this.#p("borderWidth", "borderBottomWidth");
    boxShadow = this.#p("boxShadow");
    boxShadowColor = this.#p("colors", "--shadow-color");
    zIndex = this.#p("zIndex");
    spaceBetweenX = this.#p("spacing", "margin-left", "> * + *");
    spaceBetweenY = this.#p("spacing", "margin-top", "> * + *");
    minHeight = this.#p("minHeight");
    minWidth = this.#p("minWidth");
    maxHeight = this.#p("maxHeight");
    maxWidth = this.#p("maxWidth");
    fontFamily = this.#p("fontFamily");
    fontWeight = this.#p("fontWeight");
    listStyleType = this.#p("listStyleType");
    borderSpacing = this.#p("borderSpacing");
    textDecorationThickness = this.#p("textDecorationThickness");
    textDecorationColor = this.#p("textDecorationColor");
    textUnderlineOffset = this.#p("textUnderlineOffset");
    textIndent = this.#p("textIndent");
    transitionDuration = this.#p("transitionDuration");
    transitionProperty = this.#p("transitionProperty");
    transitionTimingFunction = this.#p("transitionTimingFunction");
    display = this.#p("display");
    flexWrap = this.#p("flexWrap");
    flexGrow = this.#p("flexGrow");
    flexShrink = this.#p("flexShrink");
    borderCollapse = this.#p("borderCollapse");
    textAlign = this.#p("textAlign");
    flex = this.#p("flex");
    visibility = this.#p("visibility");
    fontStyle = this.#p("fontStyle");
    textDecoration = this.#p("textDecoration");
    textDecorationStyle = this.#p("textDecorationStyle");
    textTransform = this.#p("textTransform");
    textOverflow = this.#p("textOverflow");
    verticalAlign = this.#p("verticalAlign");
    tableLayout = this.#p("tableLayout");
    alignItems = this.#p("alignItems");
    justifyContent = this.#p("justifyContent");
    borderStyle = this.#p("borderStyle");
    fontSmoothing = this.#p("fontSmoothing", [
      "-webkit-font-smoothing",
      "-moz-osx-font-smoothing",
    ]);

    #getCssObject = (
      cssProps: string | string[],
      value: any,
      selector?: string
    ) => {
      if (this.#selector || selector) {
        return {
          [[this.#selector, selector].filter(Boolean).join(" ")]:
            this.#getStyleObject(cssProps, value),
        };
      }
      return this.#getStyleObject(cssProps, value);
    };

    #getStyleObject = (cssProps: string | string[], value: any) => {
      const styleObj = {} as any;
      if (typeof value === "object") {
        for (const cssProp of Object.keys(value)) {
          styleObj[cssProp] = value[cssProp];
        }
        return styleObj;
      }
      if (Array.isArray(cssProps)) {
        for (const cssProp of cssProps) {
          styleObj[cssProp] =
            typeof value === "function" ? value(cssProp) : value;
        }
        return styleObj;
      }
      return { [cssProps]: value };
    };
  }

  class ProxyTwo extends ProxyOne {
    constructor(selector?: string) {
      super(selector);

      const s = (_selector: string) => {
        return new ProxyOne(`${selector ?? ""}${_selector}`);
      };

      this.hover = s(":hover");
      this.active = s(":active");
      this.focus = s(":focus");
      this.focusWithin = s(":focus-within");
      this.dark = new ProxyOne(`.dark & ${selector ?? ""}`);
      this.visited = s(":visited");
      this.disabled = s(":disabled");
      this.enabled = s(":enabled");
      this.focusVisible = s(":focus-visible");
      this.target = s(":target");
      this.firstChild = s(":first-child");
      this.lastChild = s(":last-child");
      this.onlyChild = s(":only-child");
      this.empty = s(":empty");
      this.checked = s(":checked");
      this.indeterminate = s(":indeterminate");
      this.default = s(":default");
      this.required = s(":required");
      this.valid = s(":valid");
      this.invalid = s(":invalid");
    }

    hover: ProxyOne;
    active: ProxyOne;
    focus: ProxyOne;
    dark: ProxyOne;
    focusWithin: ProxyOne;
    visited: ProxyOne;
    disabled: ProxyOne;
    enabled: ProxyOne;
    focusVisible: ProxyOne;
    target: ProxyOne;
    firstChild: ProxyOne;
    lastChild: ProxyOne;
    onlyChild: ProxyOne;
    empty: ProxyOne;
    checked: ProxyOne;
    indeterminate: ProxyOne;
    default: ProxyOne;
    required: ProxyOne;
    valid: ProxyOne;
    invalid: ProxyOne;
  }

  class ProxyThree extends ProxyTwo {
    constructor() {
      super();

      this.screen = {} as Record<keyof typeof theme["screens"], ProxyTwo>;

      for (const bp of Object.keys(
        theme.screens
      ) as (keyof typeof theme["screens"])[]) {
        this.screen[bp] = new ProxyTwo(
          `@media (min-width: ${theme.screens[bp]})`
        );
      }
    }

    #selectorProxies = {} as Record<string, ProxyTwo>;

    selector = (selector: string) => {
      if (this.#selectorProxies[selector])
        return this.#selectorProxies[selector];
      this.#selectorProxies[selector] = new ProxyTwo(selector);
      return this.#selectorProxies[selector];
    };

    screen: Record<keyof typeof theme["screens"], ProxyTwo>;
  }

  return new ProxyThree();
}
