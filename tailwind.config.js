/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './public/index.html',
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors here
        primary: '#007BFF',
        secondary: '#6C757D',
      },
      fontFamily: {
        // Add custom fonts here
        custom: ['CustomFont', 'sans'],
      },
      spacing: {
        // Add custom spacing here
        '1/2': '50%',
      },
    },
  },
  plugins: [
    // Add Tailwind CSS plugins here
    require('@tailwindcss/forms'), // Example: Tailwind Forms plugin
  ],
}
