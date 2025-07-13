/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ✅ Add this line
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#4F46E5",
          light: "#6366F1",
          dark: "#4338CA",
        },
        secondary: {
          DEFAULT: "#F59E0B",
          light: "#FBBF24",
          dark: "#D97706",
        },
        accent: "#10B981",
        danger: "#EF4444",
        success: "#22C55E",
        warning: "#F97316",
        info: "#3B82F6",
        dark: "#1F2937",
        light: "#F3F4F6",
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.5rem'],
      lg: ['1.125rem', '1.75rem'],
      xl: ['1.25rem', '1.75rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.25rem'],
      '4xl': ['2.25rem', '2.5rem'],
      '5xl': ['3rem', '1'],
    },
  },
  plugins: [],
};
