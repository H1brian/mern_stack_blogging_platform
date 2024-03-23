/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // tailwind CSS orgin
    "./index.html", 
    "./src/**/*.{js,ts,jsx,tsx}",
    // Flowbite react
    'node_modules/flowbite-react/lib/esm/**/*.js',
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

