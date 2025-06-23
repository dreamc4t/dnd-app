import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#121712',
        surface: '#2E362B',
        text: {
          primary: '#FFFFFF',
          secondary: '#A6B2A3',
          disabled: '6b7280',
        },

        primary: '#4B5953',
        accent: '#9CA3AF',
        textDisabled: '#6b7280',

        button: {
          default: '#D1D5DB',
          selected: '#4B5358',
          disabled: '#A3A8AF',
          hover: '#7A828C',
          active: '#2F3B44',
        },
      },
      fontFamily: {
        sans: ['var(--font-manrope)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
export default config
