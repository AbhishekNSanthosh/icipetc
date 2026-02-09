/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/common/**/*.{js,ts,jsx,tsx}",
    "./src/widgets/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
        'poppins': ['var(--font-poppins)', 'sans-serif'],
        'fugaz': ['Fugaz One', 'sans-serif'],
        'rubik': ['Rubik Wet Paint', 'sans-serif'],
      },
      colors: {
        conference: {
          primary: "#1f75fe", // Original Primary 600
          secondary: "#0b55ea", // Original Primary 700
          accent: "#1f75fe", // Original Primary 600
          highlight: "#298eff", // Original Primary 500
        },
        slk: { // Keeping for backward compatibility if needed, but we should migrate
          regular: "#133c25",
          light: "#239254",
          dark: "#d5e6dc",
          black: {
            100: "#161617",
            200: "#151515",
            300: "#0B0B0C"
          },
        },
        primary: {
          50: '#edf7ff',
          100: '#d8edff',
          200: '#b9dfff',
          300: '#89cdff',
          400: '#51b0ff',
          500: '#298eff',
          600: '#1f75fe',
          700: '#0b55ea',
          800: '#1046bd',
          900: '#143e94',
          950: '#11275a',
        },
        grayFont: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
          950: '#020617',
        },
      },
    },
  },
  plugins: [],
};
