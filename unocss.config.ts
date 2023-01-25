import {
  defineConfig,
  presetIcons,
  presetTypography,
  presetWebFonts,
  presetWind,
  transformerDirectives,
  transformerVariantGroup,
} from "unocss"

export default defineConfig({
  presets: [
    presetWind({
      dark: "class",
    }),
    presetIcons(),
    presetTypography(),
    presetWebFonts({
      provider: "google",
      fonts: {
        sans: "Montserrat",
      },
    }),
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
      },
    },
  },
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: "prose prose-sm m-auto text-left text-l text-xl text-2xl".split(
    " "
  ),
})
