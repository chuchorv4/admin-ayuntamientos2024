import type { Config } from "tailwindcss"
import daisyui from "daisyui"
import tailwindTypography from "@tailwindcss/typography"

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [tailwindTypography, daisyui],
  daisyui: {
    themes: ["aqua", "emerald"],
  },
}
export default config
