/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        "brand-colors-brand-neutral-100-duplicate":
          "var(--brand-colors-brand-neutral-100-duplicate)",
        "brand-colors-brand-neutral-200-duplicate":
          "var(--brand-colors-brand-neutral-200-duplicate)",
        "brand-colors-brand-neutral-300":
          "var(--brand-colors-brand-neutral-300)",
        "brand-colors-brand-neutral-400":
          "var(--brand-colors-brand-neutral-400)",
        "brand-colors-brand-neutral-600-duplicate":
          "var(--brand-colors-brand-neutral-600-duplicate)",
        "brand-colors-brand-neutral-700":
          "var(--brand-colors-brand-neutral-700)",
        "brand-colors-brand-neutral-700-duplicate":
          "var(--brand-colors-brand-neutral-700-duplicate)",
        "brand-colors-brand-neutral-800":
          "var(--brand-colors-brand-neutral-800)",
        "brand-colors-brand-neutral-900":
          "var(--brand-colors-brand-neutral-900)",
        "brand-colors-brand-neutral-900-duplicate":
          "var(--brand-colors-brand-neutral-900-duplicate)",
        "brand-colors-electric-violet-100-duplicate":
          "var(--brand-colors-electric-violet-100-duplicate)",
        "brand-colors-electric-violet-200":
          "var(--brand-colors-electric-violet-200)",
        "brand-colors-electric-violet-200-duplicate":
          "var(--brand-colors-electric-violet-200-duplicate)",
        "brand-colors-electric-violet-400":
          "var(--brand-colors-electric-violet-400)",
        "brand-colors-electric-violet-800":
          "var(--brand-colors-electric-violet-800)",
        "brand-colors-electric-violet-800-duplicate":
          "var(--brand-colors-electric-violet-800-duplicate)",
        "brand-colors-electric-violet-900":
          "var(--brand-colors-electric-violet-900)",
        "brand-colors-electric-violet-950":
          "var(--brand-colors-electric-violet-950)",
        "brand-colors-fern-100": "var(--brand-colors-fern-100)",
        "brand-colors-fern-200": "var(--brand-colors-fern-200)",
        "brand-colors-fern-300": "var(--brand-colors-fern-300)",
        "brand-colors-fern-600": "var(--brand-colors-fern-600)",
        "brand-colors-fern-700": "var(--brand-colors-fern-700)",
        "brand-colors-fern-800": "var(--brand-colors-fern-800)",
        "brand-colors-fern-900": "var(--brand-colors-fern-900)",
        "brand-colors-lavender-rose-200":
          "var(--brand-colors-lavender-rose-200)",
        "brand-colors-lavender-rose-300":
          "var(--brand-colors-lavender-rose-300)",
        "brand-colors-lavender-rose-400":
          "var(--brand-colors-lavender-rose-400)",
        "brand-colors-lavender-rose-50": "var(--brand-colors-lavender-rose-50)",
        "brand-colors-lavender-rose-500":
          "var(--brand-colors-lavender-rose-500)",
        "brand-colors-lavender-rose-600":
          "var(--brand-colors-lavender-rose-600)",
        "brand-colors-lavender-rose-700":
          "var(--brand-colors-lavender-rose-700)",
        "brand-colors-lavender-rose-900":
          "var(--brand-colors-lavender-rose-900)",
        "brand-colors-lavender-rose-950":
          "var(--brand-colors-lavender-rose-950)",
        "brand-colors-mustard-100": "var(--brand-colors-mustard-100)",
        "brand-colors-mustard-100-duplicate":
          "var(--brand-colors-mustard-100-duplicate)",
        "brand-colors-mustard-50": "var(--brand-colors-mustard-50)",
        "brand-colors-mustard-500": "var(--brand-colors-mustard-500)",
        "brand-colors-mustard-600": "var(--brand-colors-mustard-600)",
        "brand-colors-mustard-700": "var(--brand-colors-mustard-700)",
        "brand-colors-mustard-800": "var(--brand-colors-mustard-800)",
        "brand-colors-mustard-900": "var(--brand-colors-mustard-900)",
        "brand-colors-red-100": "var(--brand-colors-red-100)",
        "brand-colors-red-300": "var(--brand-colors-red-300)",
        "brand-colors-red-400": "var(--brand-colors-red-400)",
        "fern-100": "var(--fern-100)",
        "lavender-100": "var(--lavender-100)",
        "lavender-50": "var(--lavender-50)",
        "neutral-50": "var(--neutral-50)",
        "neutral-950": "var(--neutral-950)",
        "tokens-bg-elevated": "var(--tokens-bg-elevated)",
        "tokens-bg-idea-card-fern-bg": "var(--tokens-bg-idea-card-fern-bg)",
        "tokens-bg-idea-card-fern-text": "var(--tokens-bg-idea-card-fern-text)",
        "tokens-bg-idea-card-mustard-text":
          "var(--tokens-bg-idea-card-mustard-text)",
        "tokens-bg-idea-card-rose-bg": "var(--tokens-bg-idea-card-rose-bg)",
        "tokens-bg-idea-card-rose-text": "var(--tokens-bg-idea-card-rose-text)",
        "tokens-bg-idea-card-violet-text":
          "var(--tokens-bg-idea-card-violet-text)",
        "tokens-bg-page": "var(--tokens-bg-page)",
        "tokens-bg-surface": "var(--tokens-bg-surface)",
        "tokens-bg-transparent": "var(--tokens-bg-transparent)",
        "tokens-border-default": "var(--tokens-border-default)",
        "tokens-border-strong": "var(--tokens-border-strong)",
        "tokens-brand-primary": "var(--tokens-brand-primary)",
        "tokens-brand-primary-border": "var(--tokens-brand-primary-border)",
        "tokens-brand-primary-hover": "var(--tokens-brand-primary-hover)",
        "tokens-brand-primary-subtle": "var(--tokens-brand-primary-subtle)",
        "tokens-brand-secondary": "var(--tokens-brand-secondary)",
        "tokens-brand-secondary-border": "var(--tokens-brand-secondary-border)",
        "tokens-brand-secondary-subtle": "var(--tokens-brand-secondary-subtle)",
        "tokens-status-error": "var(--tokens-status-error)",
        "tokens-status-error-subtle": "var(--tokens-status-error-subtle)",
        "tokens-status-success": "var(--tokens-status-success)",
        "tokens-status-success-subtle": "var(--tokens-status-success-subtle)",
        "tokens-text-on-primary": "var(--tokens-text-on-primary)",
        "tokens-text-on-secondary": "var(--tokens-text-on-secondary)",
        "tokens-text-secondary": "var(--tokens-text-secondary)",
        white: "var(--white)",
      },
      fontFamily: {
        "body-body-m": "var(--body-body-m-font-family)",
        "body-body-s": "var(--body-body-s-font-family)",
        "headings-display-l": "var(--headings-display-l-font-family)",
        "headings-display-m": "var(--headings-display-m-font-family)",
        "headings-h2": "var(--headings-h2-font-family)",
        "headings-h4": "var(--headings-h4-font-family)",
        "label-label-m": "var(--label-label-m-font-family)",
        "label-label-s": "var(--label-label-s-font-family)",
        "label-label-XS": "var(--label-label-XS-font-family)",
        "mobile-body-LG": "var(--mobile-body-LG-font-family)",
        "mobile-body-MD": "var(--mobile-body-MD-font-family)",
        "mobile-body-SM": "var(--mobile-body-SM-font-family)",
        "mobile-display-LG": "var(--mobile-display-LG-font-family)",
        "mobile-display-MD": "var(--mobile-display-MD-font-family)",
        "mobile-heading-h2": "var(--mobile-heading-h2-font-family)",
        "mobile-heading-h3": "var(--mobile-heading-h3-font-family)",
        "mobile-label-LG": "var(--mobile-label-LG-font-family)",
        "mobile-label-MD": "var(--mobile-label-MD-font-family)",
        "mobile-label-MD-italic": "var(--mobile-label-MD-italic-font-family)",
        "mobile-label-SM": "var(--mobile-label-SM-font-family)",
        "mobile-label-SM-italic": "var(--mobile-label-SM-italic-font-family)",
        "mobile-label-XS": "var(--mobile-label-XS-font-family)",
        "web-body-LG": "var(--web-body-LG-font-family)",
        "web-body-MD": "var(--web-body-MD-font-family)",
        "web-body-SM": "var(--web-body-SM-font-family)",
        "web-display-LG": "var(--web-display-LG-font-family)",
        "web-display-MD": "var(--web-display-MD-font-family)",
        "web-display-XL": "var(--web-display-XL-font-family)",
        "web-heading-h2": "var(--web-heading-h2-font-family)",
        "web-heading-h3": "var(--web-heading-h3-font-family)",
        "web-heading-h4": "var(--web-heading-h4-font-family)",
        "web-label-MD": "var(--web-label-MD-font-family)",
        "web-label-SM": "var(--web-label-SM-font-family)",
        "web-label-XS": "var(--web-label-XS-font-family)",
      },
    },
  },
  plugins: [],
};
