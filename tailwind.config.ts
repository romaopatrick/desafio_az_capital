import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgb(240,11,81)',
        secondary: 'rgb(120, 0, 97)',
        background: 'rgb(0,0,0)',
        accent: "rgb(240,11,81)"
      },
      fontFamily: {
        'title': ['Title', 'Roboto', 'sans-serif'],
        'text': ['Text', 'Poppins', 'sans-serif']
      },
      backgroundImage: {
        default: 'black'
      },

      boxShadow: {
        'slider-1': '0  2px 10px #0110',
        'slider-2': '0  0 0 #AAAA',
      },

      animation: {}
    },
  },
  plugins: [],
};
export default config;
