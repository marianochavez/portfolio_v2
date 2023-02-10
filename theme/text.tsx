import { Major_Mono_Display, Space_Mono } from "@next/font/google";

const majorMono = Major_Mono_Display({
  subsets: ["latin"],
  weight: "400",
  display: "block",
  style: "normal",
});

export const spaceMono = Space_Mono({ weight: "400", subsets: ["latin"] });

export const fonts = {
  heading: majorMono.style.fontFamily,
  body: spaceMono.style.fontFamily,
};

const FONT_SCALE_BASE = 1;
const FONT_SCALE_MULTIPLIER = 1.5;

export const textStyles = {
  xs: {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** -1 + "rem",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0",
  },
  sm: {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 0 + "rem",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0",
  },
  md: {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 1 + "rem",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0",
  },
  lg: {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 2 + "rem",
    fontWeight: 400,
    lineHeight: "150%",
    letterSpacing: "0",
  },
  xl: {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 3 + "rem",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "0",
  },
  "2xl": {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 4 + "rem",
    fontWeight: 600,
    lineHeight: "120%",
    letterSpacing: "0",
  },
  "3xl": {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 5 + "rem",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "0",
  },
  "4xl": {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 6 + "rem",
    fontWeight: 600,
    lineHeight: "110%",
    letterSpacing: "0",
  },
  "5xl": {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 7 + "rem",
    fontWeight: 600,
    lineHeight: "100%",
    letterSpacing: "0",
  },
  "6xl": {
    fontSize: FONT_SCALE_BASE * FONT_SCALE_MULTIPLIER ** 8 + "rem",
    fontWeight: 600,
    lineHeight: "100%",
    letterSpacing: "0",
  },
};
