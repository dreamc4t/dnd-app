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
        primary: '#4B5953',
        secondary: '#2D3748',
        accent: '#9CA3AF',
        background: '#1F2937',
        textPrimary: '#E5E7EB',
        textSecondary: '#A1A1AA',
        button: {
          default: '#E5E7EB', // Light gray for default buttons (neutral background).
          selected: '#4B5563', // Strong dark gray for selected/active state (high contrast).
          disabled: '#D1D5DB', // Soft, muted gray for disabled buttons (subtle and clear).
          hover: '#6B7280', // Medium gray for hover (indicates interactivity without being overwhelming).
          active: '#374151', // Darker gray for active state (reinforces interaction).
        },
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
