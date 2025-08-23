// tailwind.config.js
module.exports = {
  content: [
    "./*.html", // Scans your HTML files in the root
    "./src/**/*.html", // Scans HTML files in the src folder
    "./node_modules/flowbite/**/*.js", // <-- ADD THIS LINE
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require("flowbite/plugin"), // This line will now work
  ],
};
