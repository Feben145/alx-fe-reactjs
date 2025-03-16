module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',   // Scan JavaScript and TypeScript files in the src folder
    './public/index.html',          // Scan the HTML file for Tailwind classes
  ],
  darkMode: 'media',  // Optional: Use 'media' for automatic dark mode based on system preference
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
