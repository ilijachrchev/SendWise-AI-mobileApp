// tailwind.config.js
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./maincomponents/**/*.{js,jsx,ts,tsx}",   // ← add this
    // add any other folders where you use className:
    // "./components/**/*.{js,jsx,ts,tsx}",
    // "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: { extend: {
    fontFamily: {
      tektur:['Tektur_400Regular'],
      tekturbold:['Tektur_700Bold'],
    },

    },
  },
  plugins: [],
};
