const screensTheme = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px",
  "2xl": "1536px",
} as const;

const colorsTheme = {
  blue100: "rgb(207, 226, 255)",
  blue200: "rgb(158, 197, 254)",
  blue300: "rgb(110, 168, 254)",
  blue400: "rgb(61, 139, 253)",
  blue500: "rgb(13, 110, 253)",
  blue600: "rgb(10, 88, 202)",
  blue700: "rgb(8, 66, 152)",
  blue800: "rgb(5, 44, 101)",
  blue900: "rgb(3, 22, 51)",
  indigo100: "rgb(224, 207, 252)",
  indigo200: "rgb(194, 159, 250)",
  indigo300: "rgb(163, 112, 247)",
  indigo400: "rgb(133, 64, 245)",
  indigo500: "rgb(102, 16, 242)",
  indigo600: "rgb(82, 13, 194)",
  indigo700: "rgb(61, 10, 145)",
  indigo800: "rgb(41, 6, 97)",
  indigo900: "rgb(20, 3, 48)",
  purple100: "rgb(226, 217, 243)",
  purple200: "rgb(197, 179, 230)",
  purple300: "rgb(169, 142, 218)",
  purple400: "rgb(140, 104, 205)",
  purple500: "rgb(111, 66, 193)",
  purple600: "rgb(89, 53, 154)",
  purple700: "rgb(67, 40, 116)",
  purple800: "rgb(44, 26, 77)",
  purple900: "rgb(22, 13, 39)",
  pink100: "rgb(247, 214, 230)",
  pink200: "rgb(239, 173, 206)",
  pink300: "rgb(230, 133, 181)",
  pink400: "rgb(222, 92, 157)",
  pink500: "rgb(214, 51, 132)",
  pink600: "rgb(171, 41, 106)",
  pink700: "rgb(128, 31, 79)",
  pink800: "rgb(86, 20, 53)",
  pink900: "rgb(43, 10, 26)",
  red100: "rgb(248, 215, 218)",
  red200: "rgb(241, 174, 181)",
  red300: "rgb(234, 134, 143)",
  red400: "rgb(227, 93, 106)",
  red500: "rgb(220, 53, 69)",
  red600: "rgb(176, 42, 55)",
  red700: "rgb(132, 32, 41)",
  red800: "rgb(88, 21, 28)",
  red900: "rgb(44, 11, 14)",
  orange100: "rgb(255, 229, 208)",
  orange200: "rgb(254, 203, 161)",
  orange300: "rgb(254, 178, 114)",
  orange400: "rgb(253, 152, 67)",
  orange500: "rgb(253, 126, 20)",
  orange600: "rgb(202, 101, 16)",
  orange700: "rgb(152, 76, 12)",
  orange800: "rgb(101, 50, 8)",
  orange900: "rgb(51, 25, 4)",
  yellow100: "rgb(255, 243, 205)",
  yellow200: "rgb(255, 230, 156)",
  yellow300: "rgb(255, 218, 106)",
  yellow400: "rgb(255, 205, 57)",
  yellow500: "rgb(255, 193, 7)",
  yellow600: "rgb(204, 154, 6)",
  yellow700: "rgb(153, 116, 4)",
  yellow800: "rgb(102, 77, 3)",
  yellow900: "rgb(51, 39, 1)",
  green100: "rgb(209, 231, 221)",
  green200: "rgb(163, 207, 187)",
  green300: "rgb(117, 183, 152)",
  green400: "rgb(71, 159, 118)",
  green500: "rgb(25, 135, 84)",
  green600: "rgb(20, 108, 67)",
  green700: "rgb(15, 81, 50)",
  green800: "rgb(10, 54, 34)",
  green900: "rgb(5, 27, 17)",
  teal100: "rgb(210, 244, 234)",
  teal200: "rgb(166, 233, 213)",
  teal300: "rgb(121, 223, 193)",
  teal400: "rgb(77, 212, 172)",
  teal500: "rgb(32, 201, 151)",
  teal600: "rgb(26, 161, 121)",
  teal700: "rgb(19, 121, 91)",
  teal800: "rgb(13, 80, 60)",
  teal900: "rgb(6, 40, 30)",
  cyan100: "rgb(207, 244, 252)",
  cyan200: "rgb(158, 234, 249)",
  cyan300: "rgb(110, 223, 246)",
  cyan400: "rgb(61, 213, 243)",
  cyan500: "rgb(13, 202, 240)",
  cyan600: "rgb(10, 162, 192)",
  cyan700: "rgb(8, 121, 144)",
  cyan800: "rgb(5, 81, 96)",
  cyan900: "rgb(3, 40, 48)",
  gray100: "rgb(248, 249, 250)",
  gray200: "rgb(233, 236, 239)",
  gray300: "rgb(222, 226, 230)",
  gray400: "rgb(206, 212, 218)",
  gray500: "rgb(173, 181, 189)",
  gray600: "rgb(108, 117, 125)",
  gray700: "rgb(73, 80, 87)",
  gray800: "rgb(52, 58, 64)",
  gray900: "rgb(33, 37, 41)",
  white: "#fff",
  black: "#000",
} as const;

const flexAlignmentTheme = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
  baseline: "baseline",
  stretch: "stretch",
} as const;

const spacingTheme = {
  px: "1px",
  0: "0px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  11: "2.75rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem",
} as const;

export const defaultTheme = {
  screens: screensTheme,
  colors: colorsTheme,
  spacing: spacingTheme,
  backgroundColor: colorsTheme,
  color: colorsTheme,
  borderColor: colorsTheme,
  textDecorationColor: colorsTheme,
  gap: spacingTheme,
  borderWidth: {
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  fontSize: {
    xs: "0.75rem",
    sm: "0.875rem",
    base: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem",
  },
  borderRadius: {
    none: "0px",
    xs: "0.125rem",
    sm: "0.25rem",
    md: "0.375rem",
    lg: "0.5rem",
    xl: "0.75rem",
    "2xl": "1rem",
    "3xl": "1.5rem",
    full: "9999px",
  },
  lineHeight: {
    none: "1",
    tight: "1.25",
    snug: "1.375",
    normal: "1.5",
    relaxed: "1.625",
    loose: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem",
  },
  width: {
    ...spacingTheme,
    auto: "auto",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    "1/12": "8.333333%",
    "2/12": "16.666667%",
    "3/12": "25%",
    "4/12": "33.333333%",
    "5/12": "41.666667%",
    "6/12": "50%",
    "7/12": "58.333333%",
    "8/12": "66.666667%",
    "9/12": "75%",
    "10/12": "83.333333%",
    "11/12": "91.666667%",
    full: "100%",
    screen: "100vw",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  height: {
    ...spacingTheme,
    auto: "auto",
    "1/2": "50%",
    "1/3": "33.333333%",
    "2/3": "66.666667%",
    "1/4": "25%",
    "2/4": "50%",
    "3/4": "75%",
    "1/5": "20%",
    "2/5": "40%",
    "3/5": "60%",
    "4/5": "80%",
    "1/6": "16.666667%",
    "2/6": "33.333333%",
    "3/6": "50%",
    "4/6": "66.666667%",
    "5/6": "83.333333%",
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  boxShadow: {
    sm: "0 1px 2px 0 var(--shadow-color, rgb(0 0 0 / 0.05))",
    default:
      "0 1px 3px 0 var(--shadow-color, rgb(0 0 0 / 0.1)), 0 1px 2px -1px var(--shadow-color, rgb(0 0 0 / 0.1))",
    md: "0 4px 6px -1px var(--shadow-color, rgb(0 0 0 / 0.1)), 0 2px 4px -2px var(--shadow-color, rgb(0 0 0 / 0.1))",
    lg: "0 10px 15px -3px var(--shadow-color, rgb(0 0 0 / 0.1)), 0 4px 6px -4px var(--shadow-color, rgb(0 0 0 / 0.1))",
    xl: "0 20px 25px -5px var(--shadow-color, rgb(0 0 0 / 0.1)), 0 8px 10px -6px var(--shadow-color, rgb(0 0 0 / 0.1))",
    "2xl": "0 25px 50px -12px var(--shadow-color, rgb(0 0 0 / 0.25))",
    inner: "inset 0 2px 4px 0 var(--shadow-color, rgb(0 0 0 / 0.05))",
    none: "none",
  },
  zIndex: {
    auto: "auto",
    0: "0",
    10: "10",
    20: "20",
    30: "30",
    40: "40",
    50: "50",
  },
  padding: {
    ...spacingTheme,
    auto: "auto",
  },
  margin: {
    auto: "auto",
    ...spacingTheme,
  },
  minHeight: {
    0: "0px",
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  minWidth: {
    0: "0px",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  maxHeight: {
    ...spacingTheme,
    full: "100%",
    screen: "100vh",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
  },
  maxWidth: {
    none: "none",
    0: "0rem",
    xs: "20rem",
    sm: "24rem",
    md: "28rem",
    lg: "32rem",
    xl: "36rem",
    "2xl": "42rem",
    "3xl": "48rem",
    "4xl": "56rem",
    "5xl": "64rem",
    "6xl": "72rem",
    "7xl": "80rem",
    full: "100%",
    min: "min-content",
    max: "max-content",
    fit: "fit-content",
    prose: "65ch",
    screenSm: screensTheme.sm,
    screenMd: screensTheme.md,
    screenLg: screensTheme.lg,
    screenXl: screensTheme.xl,
    screen2Xl: screensTheme["2xl"],
  },
  fontFamily: {
    sans: `ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";`,
    serif: `ui-serif, Georgia, Cambria, "Times New Roman", Times, serif;`,
    mono: `ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;`,
  },
  fontWeight: {
    thin: "100",
    extralight: "200",
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
    black: "900",
  },
  listStyleType: {
    none: "none",
    disc: "disc",
    decimal: "decimal",
  },
  textDecorationThickness: {
    auto: "auto",
    "from-font": "from-font",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  textUnderlineOffset: {
    auto: "auto",
    0: "0px",
    1: "1px",
    2: "2px",
    4: "4px",
    8: "8px",
  },
  textIndent: spacingTheme,
  borderSpacing: spacingTheme,
  transitionDuration: {
    75: "75ms",
    100: "100ms",
    150: "150ms",
    200: "200ms",
    300: "300ms",
    500: "500ms",
    700: "700ms",
    1000: "1000ms",
    1500: "1500ms",
    2000: "2000ms",
  },
  transitionProperty: {
    none: "none",
    all: "all",
    default:
      "color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter",
    colors:
      "color, background-color, border-color, text-decoration-color, fill, stroke",
    opacity: "opacity",
    shadow: "box-shadow",
    transform: "transform",
  },
  transitionTimingFunction: {
    ease: "ease",
    easeIn: "ease-in",
    easeOut: "ease-out",
    easeInOut: "ease-in-out",
    linear: "linear",
    stepStart: "step-start",
    stepEnd: "step-end",
  },
  keyframes: {
    spin: {
      to: {
        transform: "rotate(360deg)",
      },
    },
    ping: {
      "75%, 100%": {
        transform: "scale(2)",
        opacity: "0",
      },
    },
    pulse: {
      "50%": {
        opacity: ".5",
      },
    },
    bounce: {
      "0%, 100%": {
        transform: "translateY(-25%)",
        animationTimingFunction: "cubic-bezier(0.8,0,1,1)",
      },
      "50%": {
        transform: "none",
        animationTimingFunction: "cubic-bezier(0,0,0.2,1)",
      },
    },
  },
  animation: {
    none: "none",
    spin: (k: any) => `${k.spin} 1s linear infinite`,
    ping: (k: any) => `${k.ping} 1s cubic-bezier(0, 0, 0.2, 1) infinite`,
    pulse: (k: any) => `${k.pulse} 2s cubic-bezier(0.4, 0, 0.6, 1) infinite`,
    bounce: (k: any) => `${k.bounce} 1s infinite,`,
  },
  display: {
    flex: "flex",
    inline: "inline",
    inlineFlex: "inline-flex",
    block: "block",
    inlineBlock: "inline-block",
    grid: "grid",
    inlineGrid: "inline-grid",
    table: "table",
    inlineTable: "inline-table",
    tableCaption: "table-caption",
    tableCell: "table-cell",
    tableColumn: "table-column",
    tableColumnGroup: "table-column-group",
    tableFooterGroup: "table-footer-group",
    tableHeaderGroup: "table-header-group",
    tableRowGroup: "table-row-group",
    tableRow: "table-row",
    flowRoot: "flow-root",
    contents: "contents",
    listItem: "list-item",
    hidden: "hidden",
  },
  flexWrap: {
    wrap: "wrap",
    wrapReverse: "wrap-reverse",
    noWrap: "nowrap",
  },
  flexGrow: {
    0: 0,
    1: 1,
  },
  flexShrink: {
    0: 0,
    1: 1,
  },
  borderCollapse: {
    collapse: "collapse",
    separate: "separate",
  },
  textAlign: {
    left: "left",
    center: "center",
    right: "right",
    justify: "justify",
    start: "start",
    end: "end",
    inherit: "inherit",
  },
  flex: {
    1: "1 1 0%",
    auto: "1 1 auto",
    initial: "0 1 auto",
    none: "none",
  },
  visibility: {
    visible: "visible",
    hidden: "hidden",
  },
  fontStyle: {
    italic: "italic",
    normal: "normal",
  },
  textDecoration: {
    underline: "underline",
    overline: "overline",
    lineThrough: "line-through",
    none: "none",
  },
  textDecorationStyle: {
    solid: "solid",
    double: "double",
    dotted: "dotted",
    dashed: "dashed",
    wavy: "wavy",
  },
  textTransform: {
    uppercase: "uppercase",
    lowercase: "lowercase",
    capitalize: "capitalize",
    none: "none",
  },
  textOverflow: {
    truncate: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
    },
    ellipsis: "ellipsis",
    clip: "clip",
  },
  verticalAlign: {
    baseline: "baseline",
    top: "top",
    middle: "middle",
    bottom: "bottom",
    textTop: "text-top",
    textBottom: "text-bottom",
    sub: "sub",
    super: "super",
  },
  tableLayout: {
    auto: "auto",
    fixed: "fixed",
  },
  borderStyle: {
    solid: "solid",
    dashed: "dashed",
    dotted: "dotted",
    double: "double",
    hidden: "hidden",
    none: "none",
  },
  fontSmoothing: {
    antialiased: (cssProp: string) => {
      if (cssProp === "-webkit-font-smoothing") return "antialiased";
      else return "grayscale";
    },
    subpixelAntialiased: "auto",
  },
  alignItems: {
    ...flexAlignmentTheme,
  },
  justifyContent: {
    ...flexAlignmentTheme,
  },
};
