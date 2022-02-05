module.exports = {
   purge: [
      './pages/**/*.{js,ts,jsx,tsx}', 
      './Components/**/*.{js,ts,jsx,tsx}',
      './context/**/*.{js,ts,jsx,tsx}',
      './utils/**/*.{js,ts,jsx,tsx}',
    ],
  media: false, // or 'media' or 'class'
  theme: {
      screens: {
      sm: '620px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
    },
    fontFamily: {
      sans: [
        // 'Oxygen',
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: ['Oxygen','ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
      mono: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },

      extend: {
      screens: {
        'xxs': '320px',
        'xs': '500px',
      },
    fontFamily: {
        Ubuntu : ['Ubuntu'],
        Oxygen : ['Oxygen'],
    }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
