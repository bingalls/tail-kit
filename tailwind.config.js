module.exports = {
  important: true,
  darkMode: 'class',
  i18n: { locales: ['en-US'], defaultLocale: 'en-US' },
  purge: { content: ['./pages/**/*.tsx', './components/**/*.tsx'] },
  theme: {
    extend: {
      backgroundImage: (theme) => ({
        check: "url('/icons/check.svg')",
        landscape: "url('/images/landscape/2.jpg')",
      }),
    },
  },
  variants: {
    extend: { backgroundColor: ['checked'], borderColor: ['checked'], inset: ['checked'], zIndex: ['hover', 'active'] },
  },
  future: { purgeLayersByDefault: true },
}
