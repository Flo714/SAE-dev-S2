module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "marron": "#B45309",
        "jaune": "#FBBF24"
      },
      "fontFamily": {
        "gabo-drive": "Gabo Drive",
        "roboto": "Roboto"
      },




    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
