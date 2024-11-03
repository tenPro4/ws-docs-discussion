import type { Config } from 'tailwindcss'

const twConfig: Config = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: ['class', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        background: 'var(--ifm-color-primary)',
        secondary: 'var(--ifm-color-secondary)',
        primary: 'var(--ifm-color-primary)',
        border: 'var(--ifm-border-color)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

export default twConfig
