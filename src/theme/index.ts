const colors = {
  dark: "#1c1917",
  white: "#f1f5f9",
  slate: "#64748b",
  slateMedium: "#475569",
  slateSemiDark: "#334155",
  slateDark: "#1e293b",

  gray: "#9ca3af",
  grayLight: "#d1d5db",
  grayMedium: "#6b7280",
  graySemiDark: "#374151",
  greyDark: "#1f2937",

  green: "#34d399",
  greenLight: "#6ee7b7",

  red: "#b91c1c",
};

//background with opacity
const transparentBackground = {
  extraLight: "rgba(209, 213, 219, .1)",
  light: "rgba(209, 213, 219, .3)",
  medium: "rgba(209, 213, 219, .4)",
};

const spacing = {
  xxs: "4px",
  xs: "8px",
  sm: "12px",
  s: "15px",
  md: "20px",
  lg: "32px",
  xl: "52px",
  xxl: "84px",
};

const fonts = {
  xxxs: "6px",
  xxs: "8px",
  xs: "10px",
  s: "12px",
  sm: "15px",
  P0: "16px",
  P1: "18px",
  P2: "20px",
  P3: "24px",
  P4: "36px",
  P5: "48px",
  P6: "60px",
};

const borderRadius = {
  round: "5px",
  extraRound: "15px",
  circle: "50%",
};
const shadows = {
  subtle: "0px -6px 8px -2px rgba(0, 0, 0, 0.1)",
  medium: "-8px 8px 20px 0px rgb(0 0 0 / 20%) inset",
  strong: "0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset",
  orangeHighLight: "0 0 8px 0 rgb(255 154 35 / 100%)",
};

const weights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
  heavy: 800,
};

const blur = {
  extraLight: "blur(1px)",
  light: "blur(3px)",
  medium: "blur(5px)",
  strong: "blur(10px)",
};

export const theme = {
  colors,
  fonts,
  borderRadius,
  shadows,
  weights,
  spacing,
  blur,
  transparentBackground,
};
