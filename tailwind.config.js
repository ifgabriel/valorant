/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'tungsten',
        sans: 'dintnext',
      },
      container: {
        padding: {
          DEFAULT: '16rem',
        },
      },
      colors: {
        primary: {
          50: '#ff4655',
        },
        secondary: {
          50: '#0f1923',
        },
        tertiary: {
          50: '#ece8e1',
          100: '#dbd8d2',
        },
        gray: {
          50: '#768079',
        },
      },
      boxShadow: {
        button: 'inset 0px 0px 0px 1px green',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
