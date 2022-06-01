module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "marron": "#B45309",
        "marron+": "#6B2E00",
        "jaune": "#FBBF24",
        "hover": "#DC7700",
        "fond":"var(--couleur-fond)",
        "Dark-marron": "var(--couleur-interactive)",
      },
      "fontFamily": {
        "gabo-drive": "Gabo Drive",
        "roboto": "Roboto"
      },
      "boxShadow": {
        "card": "5.901639461517334px 7.2131147384643555px 2.622950792312622px 0px rgba(0,0,0,0.25)"
      },
      backgroundImage: {
        'hexa': "url('/public/icon_svg/Polygon.svg')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
