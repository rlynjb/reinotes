import type { Config } from "tailwindcss";
import daisyui from "daisyui"

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/features/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/ui/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/utils/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  safelist: [
    {pattern: /bg-./},
    {pattern: /text-./},
    {pattern: /border-./},
    {pattern: /grid-./},
    {pattern: /col-span-./},
    {pattern: /grid/},
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [
    daisyui
  ],
  daisyui: {
    themes: ["dark"],
  },
};
export default config;
