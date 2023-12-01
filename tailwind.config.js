/** @type {import('tailwindcss').Config} */
export default {
  content: [
	'./src/**/*.{js,jsx,ts,tsx}',
	'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      'sm': '412px',
      'md': '600px',
      'lg': '850px',
      'xl': '1024px',
      '2xl': '1366px'
    }
  },
  plugins: [
	require('flowbite/plugin')
  ],
}

