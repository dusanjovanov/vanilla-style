import { css, CSSObject, keyframes as emotionKeyframes } from "@emotion/css";
import { defaultTheme } from "./defaultTheme";

type GenericTheme = {
  [slot in keyof typeof defaultTheme]: Record<string | number | symbol, any>;
};

type CustomFn = (arg: string | number) => string;

type Utils = {
  truncate: string;
};

const sides = ["top", "right", "bottom", "left"];

const borderCssProps = {} as any;

const capitalize = (s: string) => {
  return s.charAt(0).toUpperCase() + s.slice(1);
};

for (const side of sides) {
  borderCssProps[`except${capitalize(side)}`] = sides
    .filter((s) => s !== side)
    .map((s) => `border${capitalize(s)}`);
  borderCssProps[side] = `border${capitalize(side)}`;
}

export function createVanillaStyle<Theme extends GenericTheme>(theme: Theme) {
  const _keyframes = {} as any;

  for (const [name, keyframe] of Object.entries(theme.keyframes)) {
    _keyframes[name] = emotionKeyframes(keyframe);
  }

  class Base {
    constructor(selector?: string) {
      this.#selector = selector;

      const inst = this;
      this.utils = Object.defineProperties(
        {},
        {
          truncate: {
            get() {
              return css(
                inst.#getCssObject(
                  ["overflow", "textOverflow", "whiteSpace"],
                  ["hidden", "ellipsis", "nowrap"]
                )
              );
            },
          },
        }
      ) as Utils;
    }
    #selector?: any;
    utils = {} as Utils;

    #custom = (cssProps: string | string[]) => {
      return {
        custom: (value: string | number) => {
          return css(this.#getCssObject(cssProps, value));
        },
      };
    };

    #p = <ThemeSlot extends keyof GenericTheme>(
      themeSlot: ThemeSlot,
      cssProps?: string | string[],
      other?: { getValue?: (name: string) => any; customSelector?: string }
    ) => {
      const obj = this.#custom(cssProps ?? (themeSlot as string));
      const themeObj: any = theme[themeSlot];
      const inst = this;
      const { getValue, customSelector } = other ?? {};
      for (const name of Object.keys(themeObj as {})) {
        Object.defineProperty(obj, name, {
          get() {
            return css(
              inst.#getCssObject(
                cssProps ?? (themeSlot as string),
                typeof getValue === "function"
                  ? getValue(name)
                  : themeObj[name],
                customSelector
              )
            );
          },
        });
      }
      return obj as {
        custom: CustomFn;
      } & {
        [varName in keyof Theme[ThemeSlot]]: string;
      };
    };

    #getCssObject = (
      cssProps: string | string[],
      value: any,
      customSelector?: string
    ) => {
      if (this.#selector) {
        return {
          [this.#selector + (customSelector ? `${customSelector}` : "")]:
            this.#getStyleObject(cssProps, value),
        };
      }
      return this.#getStyleObject(cssProps, value);
    };

    #getStyleObject = (cssProps: string | string[], value: any) => {
      const styleObj = {} as any;
      if (Array.isArray(cssProps)) {
        for (let i = 0; i < cssProps.length; i++) {
          const cssProp = cssProps[i];
          styleObj[cssProp] = Array.isArray(value) ? value[i] : value;
        }
        return styleObj;
      }
      return { [cssProps]: value };
    };

    css = (cssObject: CSSObject) => {
      if (this.#selector) {
        return css({
          [this.#selector]: cssObject,
        });
      }
      return css(cssObject);
    };

    #getBorderValues = (cssProp: string, w: any, s: any, c: any, o: any) => {
      let value = "";
      if (w) value += w;
      if (s) value += " " + s;
      if (c) value += " " + c;
      const cssObject = {
        [`${cssProp}`]: value,
      };
      if (o) {
        cssObject[`${cssProp}Offset`] = o;
      }

      return cssObject;
    };

    #borderAndOutlineShorthand = (
      prop: "border" | "outline",
      cssProps: string | string[],
      values: any[]
    ) => {
      let cssObject: any;

      if (Array.isArray(cssProps)) {
        cssObject = {};
        for (const cssProp of cssProps) {
          cssObject = {
            ...cssObject,
            ...this.#getBorderValues(
              cssProp,
              theme[`${prop}Width`][values[0]],
              theme[`${prop}Style`][values[1]],
              theme[`${prop}Color`][values[2]],
              prop === "outline" ? theme[`${prop}Offset`][values[3]] : undefined
            ),
          };
        }
      } else {
        cssObject = {
          ...this.#getBorderValues(
            cssProps,
            theme[`${prop}Width`][values[0]],
            theme[`${prop}Style`][values[1]],
            theme[`${prop}Color`][values[2]],
            prop === "outline" ? theme[`${prop}Offset`][values[3]] : undefined
          ),
        };
      }

      if (this.#selector) {
        return css({
          [this.#selector]: css(cssObject),
        });
      }
      return css(cssObject);
    };

    #borderAndOutlineCustom =
      (cssProp: string | string[]) => (border: string) => {
        return css(this.#getCssObject(cssProp, border));
      };

    #borderShorthand = (cssProps: string | string[]) => {
      return {
        width: this.#p(
          "borderWidth",
          Array.isArray(cssProps)
            ? cssProps.map((p) => `${p}Width`)
            : `${cssProps}Width`
        ),
        style: this.#p(
          "borderStyle",
          Array.isArray(cssProps)
            ? cssProps.map((p) => `${p}Style`)
            : `${cssProps}Style`
        ),
        color: this.#p("borderColor", cssProps),
        shorthand: <
          BW extends keyof Theme["borderWidth"],
          BS extends keyof Theme["borderStyle"],
          BC extends keyof Theme["borderColor"]
        >(
          borderWidth: BW,
          borderStyle?: BS,
          borderColor?: BC
        ) => {
          return this.#borderAndOutlineShorthand("border", cssProps, [
            borderWidth,
            borderStyle,
            borderColor,
          ]);
        },
        shorthandCustom: this.#borderAndOutlineCustom(cssProps),
      };
    };

    // special border shorthand methods
    border = {
      all: this.#borderShorthand("border"),
      top: this.#borderShorthand(borderCssProps.top),
      bottom: this.#borderShorthand(borderCssProps.bottom),
      left: this.#borderShorthand(borderCssProps.left),
      right: this.#borderShorthand(borderCssProps.right),
      x: this.#borderShorthand([borderCssProps.left, borderCssProps.right]),
      y: this.#borderShorthand([borderCssProps.top, borderCssProps.bottom]),
      topRight: this.#borderShorthand([
        borderCssProps.top,
        borderCssProps.right,
      ]),
      bottomRight: this.#borderShorthand([
        borderCssProps.bottom,
        borderCssProps.right,
      ]),
      topLeft: this.#borderShorthand([borderCssProps.top, borderCssProps.left]),
      bottomLeft: this.#borderShorthand([
        borderCssProps.bottom,
        borderCssProps.left,
      ]),
      allExceptTop: this.#borderShorthand(borderCssProps.exceptTop),
      allExceptBottom: this.#borderShorthand(borderCssProps.exceptBottom),
      allExceptLeft: this.#borderShorthand(borderCssProps.exceptLeft),
      allExceptRight: this.#borderShorthand(borderCssProps.exceptRight),
    };

    #borderRadiusProp = (cssProps: string | string[]) => {
      return this.#p("borderRadius", cssProps);
    };

    // special borderRadius properties per side
    borderRadius = {
      all: this.#borderRadiusProp("borderRadius"),
      custom: this.#custom("borderRadius"),
      right: this.#borderRadiusProp([
        "borderTopRightRadius",
        "borderBottomRightRadius",
      ]),
      left: this.#borderRadiusProp([
        "borderTopLeftRadius",
        "borderBottomLeftRadius",
      ]),
      bottom: this.#borderRadiusProp([
        "borderBottomLeftRadius",
        "borderBottomRightRadius",
      ]),
      top: this.#borderRadiusProp([
        "borderTopLeftRadius",
        "borderTopRightRadius",
      ]),
      topRight: this.#borderRadiusProp("borderTopRightRadius"),
      bottomRight: this.#borderRadiusProp("borderBottomRightRadius"),
      topLeft: this.#borderRadiusProp("borderTopLeftRadius"),
      bottomLeft: this.#borderRadiusProp("borderBottomLeftRadius"),
      rightCustom: this.#custom("borderRightRadius"),
      leftCustom: this.#custom("borderLeftRadius"),
      topCustom: this.#custom("borderTopRadius"),
      bottomCustom: this.#custom("borderBottomRadius"),
    };

    #outlineShorthand =
      (cssProps: string | string[]) =>
      <
        OW extends keyof Theme["outlineWidth"],
        OS extends keyof Theme["outlineStyle"],
        OC extends keyof Theme["outlineColor"],
        OO extends keyof Theme["outlineOffset"]
      >(
        outlineWidth: OW,
        outlineStyle?: OS,
        outlineColor?: OC,
        outlineOffset?: OO
      ) => {
        return this.#borderAndOutlineShorthand("outline", cssProps, [
          outlineWidth,
          outlineStyle,
          outlineColor,
          outlineOffset,
        ]);
      };

    // special outline single property and shorthand methods
    outline = {
      shorthand: this.#outlineShorthand("outline"),
      shorthandCustom: this.#borderAndOutlineCustom("outline"),
      width: this.#p("outlineWidth"),
      style: this.#p("outlineStyle"),
      color: this.#p("outlineColor"),
      offset: this.#p("outlineOffset"),
    };

    // special animation single property and shorthand method
    animation = {
      shorthand: (value: string) => {
        return css(this.#getCssObject("animation", value));
      },
      name: this.#p("keyframes", "animationName", {
        getValue: (name) => _keyframes[name],
      }),
      duration: this.#p("animationDuration"),
      direction: this.#p("animationDirection"),
      timingFunction: this.#p("animationTimingFunction"),
      playState: this.#p("animationPlayState"),
      iterationCount: this.#p("animationIterationCount"),
      fillMode: this.#p("animationFillMode"),
      delay: this.#p("animationDelay"),
    };

    // special utility? properties, but like regular properties
    spaceBetweenX = this.#p("spacing", "marginLeft", {
      customSelector: "> * + *",
    });
    spaceBetweenY = this.#p("spacing", "marginTop", {
      customSelector: "> * + *",
    });

    // single value -> single or multiple related properties
    bg = this.#p("backgroundColor");
    color = this.#p("color");
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
    width = this.#p("width");
    height = this.#p("height");
    lineHeight = this.#p("lineHeight");
    gap = this.#p("gap", "gap");
    boxShadow = this.#p("boxShadow");
    boxShadowColor = this.#p("colors", "--shadow-color");
    zIndex = this.#p("zIndex");
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
    transitionDelay = this.#p("transitionDelay");
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
    overflow = this.#p("overflow");
    overflowX = this.#p("overflow", "overflowX");
    overflowY = this.#p("overflow", "overflowY");
    verticalAlign = this.#p("verticalAlign");
    tableLayout = this.#p("tableLayout");
    alignItems = this.#p("alignItems");
    alignContent = this.#p("alignContent");
    alignSelf = this.#p("alignSelf");
    justifyItems = this.#p("justifyItems");
    justifyContent = this.#p("justifyContent");
    justifySelf = this.#p("justifySelf");
    position = this.#p("position");
    gridTemplateColumns = this.#p("gridTemplateColumns");
    gridTemplateRows = this.#p("gridTemplateRows");
    gridColumn = this.#p("gridColumn");
    gridColumnStart = this.#p("gridColumnStart");
    gridColumnEnd = this.#p("gridColumnEnd");
    gridRow = this.#p("gridRow");
    gridRowStart = this.#p("gridRowStart");
    gridRowEnd = this.#p("gridRowEnd");
    order = this.#p("order");
    flexDirection = this.#p("flexDirection");
    flexBasis = this.#p("flexBasis");
    letterSpacing = this.#p("letterSpacing");
    fill = this.#p("fill");
    strokeColor = this.#p("strokeColor", "stroke");
    strokeWidth = this.#p("strokeWidth");
    cursor = this.#p("cursor");
    userSelect = this.#p("userSelect");
    opacity = this.#p("opacity");
    wordBreak = this.#p("wordBreak");
    whiteSpace = this.#p("whiteSpace");
    content = this.#p("content");
  }

  const selectorCache = {} as Record<string, any>;

  class PseudoSelectors extends Base {
    constructor(selector?: string) {
      super(selector);

      const s = (_selector: string) => {
        return new Base(`${selector ?? ""}${_selector}`);
      };

      this.hover = s(":hover");
      this.active = s(":active");
      this.focus = s(":focus");
      this.disabled = s(":disabled");
      this.after = s("::after");
      this.before = s("::before");
    }

    selector = (selector: string) => {
      if (selectorCache[selector]) {
        return selectorCache[selector] as Base;
      }
      selectorCache[selector] = new Base(selector);
      return selectorCache[selector] as Base;
    };

    hover: Base;
    active: Base;
    focus: Base;
    disabled: Base;
    after: Base;
    before: Base;
  }

  class Dark extends PseudoSelectors {
    constructor(selector?: string) {
      super(selector);
      this.dark = new PseudoSelectors(`${selector ?? ""} .dark &`);
    }

    dark: PseudoSelectors;
  }

  class Breakpoints extends Dark {
    constructor(selector?: string) {
      super(selector);

      this.screen = {} as Record<keyof typeof theme["screens"], Dark>;

      for (const bp of Object.keys(
        theme.screens
      ) as (keyof typeof theme["screens"])[]) {
        this.screen[bp] = new Dark(`@media (min-width: ${theme.screens[bp]})`);
      }
    }
    screen: Record<keyof typeof theme["screens"], Dark>;
  }

  return {
    classes: new Breakpoints(),
  };
}
