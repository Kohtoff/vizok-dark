/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        fade: {
          "0%":{
            opacity: .3

          },
          "100%":{
            opacity: 1
          }
        },
        enterDown: {
          "0%":{
            transform: "translateY(100vh)",

          },
          "100%":{
            transform: "translateY(0px)",
          }
        },
        loader: {
          '0%': {
            opacity: 1,
            transform: 'rotate(0deg)',
            boxShadow: `0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
            0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor,
            0 0 0 -0.5em currentcolor, 0 0 0 -0.5em currentcolor`,
          },
          '100%': {
            opacity: 0,
            transform: 'rotate(180deg)',
            boxShadow: `-1em -1em 0 -0.35em currentcolor, 0 -1.5em 0 -0.35em currentcolor,
            1em -1em 0 -0.35em currentcolor, -1.5em 0 0 -0.35em currentcolor,
            1.5em -0 0 -0.35em currentcolor, -1em 1em 0 -0.35em currentcolor,
            0 1.5em 0 -0.35em currentcolor, 1em 1em 0 -0.35em currentcolor`,
          },
        },
      },
      animation: {
        loader: '1s loader ease-out infinite',
        enterDown : '.4s enterDown  ease-out',
        fade : '.4s fade  ease-out'
      }
    },
    colors: {
      black: '#1C1C1C',
      white: '#FFF',
      currentColor: 'currentColor',
      transparent: "#00000000",
      gray: "#767676",
      lightGray: "#B5B5B5",
      darkGray: "#303030",
      red: "#B5373F",
      deepBlack: '#000',
      blue: '#415A77'
    },
    fontFamily: {
      default: 'Poppins',
      logo: 'DM Serif Display'
    },
    fontSize: {
      h1: "2.125rem",
      h2: "1.688rem",
      h3: "1.375rem",
      body: '1.313rem',
      body2: '1.063rem',
      small: '0.875rem',
      base: "1rem",
    }
  },
  plugins: [],
};
