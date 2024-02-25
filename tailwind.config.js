/**
 * Contains the configuration for the Tailwind CSS framework, used only for the Aceternity UI components.
 */

/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-unused-vars */
import defaultTheme from "tailwindcss/defaultTheme";

import colors from "tailwindcss/colors";
import { default as flattenColorPalette } from "tailwindcss/lib/util/flattenColorPalette";

/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{ts,tsx}"];
export const darkMode = "class";
export const theme = {
  // rest of the code
};
export const plugins = [
  require("@tailwindcss/aspect-ratio"),
  addVariablesForColors,
];

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val]),
  );

  addBase({
    ":root": newVars,
  });
}
