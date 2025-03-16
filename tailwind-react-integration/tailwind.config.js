module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",  // Ensure this covers all files where Tailwind classes might be used
    "./public/index.html",         // Include the HTML file
  ],
  darkMode: 'media',  // Or 'class' if you want to toggle dark mode manually
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
