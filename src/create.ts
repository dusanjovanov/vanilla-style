import { css, CSSObject, keyframes as emotionKeyframes } from "@emotion/css";
import { defaultTheme } from "./defaultTheme";

type GenericTheme = {
  [slot in keyof typeof defaultTheme]: Record<string | number | symbol, any>;
};

type CustomFn = (arg: string | number) => string;

type Utils<Theme extends GenericTheme> = {
  truncate: string;
  spaceBetweenX: (value: keyof Theme["spacing"]) => string;
  spaceBetweenY: (value: keyof Theme["spacing"]) => string;
  spaceBetweenXCustom: (value: string) => string;
  spaceBetweenYCustom: (value: string) => string;
};

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
      ) as Utils<Theme>;

      const spaceBetweenFn =
        (cssProp: string) => (value: keyof Theme["spacing"]) => {
          if (this.#selector) {
            return css({
              [`${this.#selector} > * + *`]: this.#getStyleObject(
                cssProp,
                value
              ),
            });
          }
          return css({
            "> * + *": this.#getStyleObject(cssProp, value),
          });
        };
      this.utils.spaceBetweenX = spaceBetweenFn("marginLeft");
      this.utils.spaceBetweenY = spaceBetweenFn("marginTop");
    }
    #selector?: any;
    utils = {} as Utils<Theme>;

    #custom = (cssProps: string | string[]) => {
      return {
        custom: (value: any) => {
          return css(this.#getCssObject(cssProps, value));
        },
      };
    };

    #p = <ThemeSlot extends keyof GenericTheme>(
      themeSlot: ThemeSlot,
      cssProps?: string | string[],
      getValue?: (name: string) => any
    ) => {
      const obj = this.#custom(cssProps ?? (themeSlot as string));
      const themeObj: any = theme[themeSlot];
      const inst = this;
      for (const name of Object.keys(themeObj as {})) {
        Object.defineProperty(obj, name, {
          get() {
            return css(
              inst.#getCssObject(
                cssProps ?? (themeSlot as string),
                typeof getValue === "function" ? getValue(name) : themeObj[name]
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

    #getCssObject = (cssProps: string | string[], value: any) => {
      if (this.#selector) {
        return {
          [this.#selector]: this.#getStyleObject(cssProps, value),
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
      const cssObject = {
        [`${cssProp}Width`]: w,
        [`${cssProp}Style`]: s,
        [`${cssProp}Color`]: c,
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

    #borderShorthand =
      (cssProps: string | string[]) =>
      <
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
      };

    // special border shorthand methods
    border = {
      all: this.#borderShorthand("border"),
      custom: this.#borderAndOutlineCustom("border"),
      top: this.#borderShorthand("borderTop"),
      topCustom: this.#borderAndOutlineCustom("borderTop"),
      bottom: this.#borderShorthand("borderBottom"),
      bottomCustom: this.#borderAndOutlineCustom("borderBottom"),
      left: this.#borderShorthand("borderLeft"),
      leftCustom: this.#borderAndOutlineCustom("borderLeft"),
      right: this.#borderShorthand("borderRight"),
      rightCustom: this.#borderAndOutlineCustom("borderRight"),
      x: this.#borderShorthand(["borderLeft", "borderRight"]),
      y: this.#borderShorthand(["borderTop", "borderBottom"]),
      xCustom: this.#borderAndOutlineCustom(["borderLeft", "borderRight"]),
      yCustom: this.#borderAndOutlineCustom(["borderTop", "borderBottom"]),
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

    // special outline shorthand methods
    outline = {
      all: this.#outlineShorthand("outline"),
      custom: this.#borderAndOutlineCustom("outline"),
    };

    // special animation methods
    animation = (value: string) => {
      return css(this.#getCssObject("animation", value));
    };

    animationName = this.#p(
      "keyframes",
      "animationName",
      (name) => _keyframes[name]
    );

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
    borderRadius = this.#p("borderRadius");
    borderTopRadius = this.#p("borderRadius", [
      "borderTopLeftRadius",
      "borderTopRightRadius",
    ]);
    borderBottomRadius = this.#p("borderRadius", [
      "borderBottomLeftRadius",
      "borderBottomRightRadius",
    ]);
    borderRightRadius = this.#p("borderRadius", [
      "borderTopRightRadius",
      "borderBottomRightRadius",
    ]);
    borderLeftRadius = this.#p("borderRadius", [
      "borderTopLeftRadius",
      "borderBottomLeftRadius",
    ]);
    borderTopRightRadius = this.#p("borderRadius", "borderTopRightRadius");
    borderTopLeftRadius = this.#p("borderRadius", "borderTopLeftRadius");
    borderBottomRightRadius = this.#p(
      "borderRadius",
      "borderBottomRightRadius"
    );
    borderBottomLeftRadius = this.#p("borderRadius", "borderBottomLeftRadius");
    borderWidth = this.#p("borderWidth");
    borderStyle = this.#p("borderStyle");
    borderColor = this.#p("borderColor");
    borderTopWidth = this.#p("borderWidth", "borderTopWidth");
    borderBottomWidth = this.#p("borderWidth", "borderBottomWidth");
    borderLeftWidth = this.#p("borderWidth", "borderLeftWidth");
    borderRightWidth = this.#p("borderWidth", "borderRightWidth");
    borderTopStyle = this.#p("borderStyle", "borderTopStyle");
    borderBottomStyle = this.#p("borderStyle", "borderBottomStyle");
    borderLeftStyle = this.#p("borderStyle", "borderLeftStyle");
    borderRightStyle = this.#p("borderStyle", "borderRightStyle");
    borderTopColor = this.#p("borderColor", "borderTopColor");
    borderBottomColor = this.#p("borderColor", "borderBottomColor");
    borderLeftColor = this.#p("borderColor", "borderLeftColor");
    borderRightColor = this.#p("borderColor", "borderRightColor");
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
    animationDirection = this.#p("animationDirection");
    animationDelay = this.#p("animationDelay");
    animationTimingFunction = this.#p("animationTimingFunction");
    animationPlayState = this.#p("animationPlayState");
    animationIterationCount = this.#p("animationIterationCount");
    animationFillMode = this.#p("animationFillMode");
    animationDuration = this.#p("animationDuration");
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
    justifySelf = this.#p("alignSelf");
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
    outlineWidth = this.#p("outlineWidth");
    outlineColor = this.#p("outlineColor");
    outlineStyle = this.#p("outlineStyle");
    outlineOffset = this.#p("outlineOffset");
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

    hover: Base;
    active: Base;
    focus: Base;
    disabled: Base;
    after: Base;
    before: Base;
  }

  class Selector extends PseudoSelectors {
    selector = (selector: string) => {
      if (selectorCache[selector]) {
        return selectorCache[selector] as PseudoSelectors;
      }
      selectorCache[selector] = new PseudoSelectors(selector);
      return selectorCache[selector] as PseudoSelectors;
    };
  }

  class Dark extends Selector {
    constructor(selector?: string) {
      super(selector);
      this.dark = new Selector(`${selector ?? ""} .dark &`);
    }

    dark: Selector;
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
    animationNames: _keyframes,
  };
}
