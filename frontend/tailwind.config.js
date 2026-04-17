/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'inverse-on-surface': '#eef1f5',
        'tertiary-container': '#7b5d1c',
        'secondary-container': '#e4e2e1',
        'surface': '#f7fafd',
        'surface-bright': '#f7fafd',
        'surface-container-highest': '#e0e3e7',
        'on-tertiary-fixed-variant': '#5d4201',
        'outline': '#8f6f6e',
        'primary-fixed-dim': '#ffb3b0',
        'on-tertiary-fixed': '#261900',
        'surface-container-high': '#e5e8ec',
        'surface-container-low': '#f1f4f8',
        'on-secondary-container': '#656464',
        'background': '#f7fafd',
        'on-primary-fixed-variant': '#930019',
        'surface-variant': '#e0e3e7',
        'secondary': '#5f5e5e',
        'on-surface-variant': '#5b403f',
        'secondary-fixed': '#e4e2e1',
        'primary-fixed': '#ffdad8',
        'on-error-container': '#93000a',
        'on-primary-fixed': '#410006',
        'on-secondary-fixed-variant': '#474747',
        'tertiary': '#614504',
        'error-container': '#ffdad6',
        'primary': '#98001b',
        'primary-container': '#be1e2d',
        'surface-tint': '#b91a2a',
        'surface-container-lowest': '#ffffff',
        'tertiary-fixed-dim': '#e9c176',
        'secondary-fixed-dim': '#c8c6c5',
        'inverse-surface': '#2d3134',
        'on-error': '#ffffff',
        'on-surface': '#181c1f',
        'error': '#ba1a1a',
        'on-primary': '#ffffff',
        'surface-dim': '#d7dade',
        'inverse-primary': '#ffb3b0',
        'on-secondary': '#ffffff',
        'on-tertiary': '#ffffff',
        'tertiary-fixed': '#ffdea5',
        'on-background': '#181c1f',
        'outline-variant': '#e3bebb',
        'on-primary-container': '#ffd3d1',
        'on-tertiary-container': '#ffd993',
        'on-secondary-fixed': '#1b1c1c',
        'surface-container': '#ebeef2',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      fontFamily: {
        headline: ['Manrope'],
        body: ['Inter'],
        label: ['Inter'],
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export const tailwindConfig = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "inverse-on-surface": "#eef1f5",
        "tertiary-container": "#7b5d1c",
        "secondary-container": "#e4e2e1",
        surface: "#f7fafd",
        "surface-bright": "#f7fafd",
        "surface-container-highest": "#e0e3e7",
        "on-tertiary-fixed-variant": "#5d4201",
        outline: "#8f6f6e",
        "primary-fixed-dim": "#ffb3b0",
        "on-tertiary-fixed": "#261900",
        "surface-container-high": "#e5e8ec",
        "surface-container-low": "#f1f4f8",
        "on-secondary-container": "#656464",
        background: "#f7fafd",
        "on-primary-fixed-variant": "#930019",
        "surface-variant": "#e0e3e7",
        secondary: "#5f5e5e",
        "on-surface-variant": "#5b403f",
        "secondary-fixed": "#e4e2e1",
        "primary-fixed": "#ffdad8",
        "on-error-container": "#93000a",
        "on-primary-fixed": "#410006",
        "on-secondary-fixed-variant": "#474747",
        tertiary: "#614504",
        "error-container": "#ffdad6",
        primary: "#98001b",
        "primary-container": "#be1e2d",
        "surface-tint": "#b91a2a",
        "surface-container-lowest": "#ffffff",
        "tertiary-fixed-dim": "#e9c176",
        "secondary-fixed-dim": "#c8c6c5",
        "inverse-surface": "#2d3134",
        "on-error": "#ffffff",
        "on-surface": "#181c1f",
        error: "#ba1a1a",
        "on-primary": "#ffffff",
        "surface-dim": "#d7dade",
        "inverse-primary": "#ffb3b0",
        "on-secondary": "#ffffff",
        "on-tertiary": "#ffffff",
        "tertiary-fixed": "#ffdea5",
        "on-background": "#181c1f",
        "outline-variant": "#e3bebb",
        "on-primary-container": "#ffd3d1",
        "on-tertiary-container": "#ffd993",
        "on-secondary-fixed": "#1b1c1c",
        "surface-container": "#ebeef2"
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "0.75rem"
      },
      fontFamily: {
        headline: ["Manrope"],
        body: ["Inter"],
        label: ["Inter"]
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-12px)" }
        }
      },
      animation: {
        float: "float 3s ease-in-out infinite"
      }
    }
  }
}
