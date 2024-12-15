module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        lavender: {
          light: '#E6E6FA',
          DEFAULT: '#9D8EC7',
          dark: '#7B68EE',
        },
        dark: {
          lighter: '#2D2D3A',
          DEFAULT: '#1A1A2E',
          darker: '#15152D',
        }
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': {
            'background-size': '200% 200%',
            'background-position': 'left center'
          },
          '50%': {
            'background-size': '200% 200%',
            'background-position': 'right center'
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
