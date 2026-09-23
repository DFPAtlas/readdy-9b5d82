/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* surfaces */
        paper: "var(--paper)",
        surface: {
          DEFAULT: "var(--surface)",
          alt: "var(--surface-alt)",
        },
        line: {
          DEFAULT: "var(--line)",
          strong: "var(--line-strong)",
        },

        /* text */
        ink: {
          DEFAULT: "var(--ink)",
          2: "var(--ink-2)",
          3: "var(--ink-3)",
        },

        /* brand */
        accent: {
          DEFAULT: "var(--accent)",
          hover: "var(--accent-hover)",
          soft: "var(--accent-soft)",
          ink: "var(--accent-ink)",
        },

        /* status */
        warn: {
          bg: "var(--warn-bg)",
          ink: "var(--warn-ink)",
          line: "var(--warn-line)",
        },
        good: {
          bg: "var(--good-bg)",
          ink: "var(--good-ink)",
        },
        info: {
          bg: "var(--info-bg)",
          ink: "var(--info-ink)",
        },
        bad: {
          bg: "var(--bad-bg)",
          ink: "var(--bad-ink)",
        },
        poor: {
          bg: "var(--poor-bg)",
          ink: "var(--poor-ink)",
        },

        /* subject tags */
        "subj-maths": {
          DEFAULT: "var(--subj-maths-bg)",
          ink: "var(--subj-maths-ink)",
        },
        "subj-english": {
          DEFAULT: "var(--subj-english-bg)",
          ink: "var(--subj-english-ink)",
        },
        "subj-science": {
          DEFAULT: "var(--subj-science-bg)",
          ink: "var(--subj-science-ink)",
        },
        "subj-french": {
          DEFAULT: "var(--subj-french-bg)",
          ink: "var(--subj-french-ink)",
        },
        "subj-history": {
          DEFAULT: "var(--subj-history-bg)",
          ink: "var(--subj-history-ink)",
        },
        "subj-geography": {
          DEFAULT: "var(--subj-geography-bg)",
          ink: "var(--subj-geography-ink)",
        },
        "subj-other": {
          DEFAULT: "var(--subj-other-bg)",
          ink: "var(--subj-other-ink)",
        },
      },

      borderRadius: {
        sm: "var(--r-sm)",
        md: "var(--r-md)",
        lg: "var(--r-lg)",
        xl: "var(--r-xl)",
        "2xl": "var(--r-2xl)",
      },

      fontFamily: {
        display: ["var(--font-display)", "Georgia", "serif"],
        body: ["var(--font-body)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
}