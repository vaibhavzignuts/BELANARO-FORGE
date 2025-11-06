// Design Tokens for BELANARO FORGE LLP
// These tokens work with Tailwind v4 CSS variables

export const designTokens = {
  // Color System
  colors: {
    brand: {
      primary: 'var(--color-brand-primary)',
      secondary: 'var(--color-brand-secondary)',
      accent: 'var(--color-brand-accent)',
      dark: 'var(--color-brand-dark)',
      light: 'var(--color-brand-light)',
    },
    forge: {
      50: 'var(--color-forge-50)',
      100: 'var(--color-forge-100)',
      200: 'var(--color-forge-200)',
      300: 'var(--color-forge-300)',
      400: 'var(--color-forge-400)',
      500: 'var(--color-forge-500)',
      600: 'var(--color-forge-600)',
      700: 'var(--color-forge-700)',
      800: 'var(--color-forge-800)',
      900: 'var(--color-forge-900)',
      950: 'var(--color-forge-950)',
    },
    steel: {
      50: 'var(--color-steel-50)',
      100: 'var(--color-steel-100)',
      200: 'var(--color-steel-200)',
      300: 'var(--color-steel-300)',
      400: 'var(--color-steel-400)',
      500: 'var(--color-steel-500)',
      600: 'var(--color-steel-600)',
      700: 'var(--color-steel-700)',
      800: 'var(--color-steel-800)',
      900: 'var(--color-steel-900)',
      950: 'var(--color-steel-950)',
    },
  },

  // Typography Scale
  typography: {
    fontFamily: {
      sans: 'var(--font-sans)',
      heading: 'var(--font-heading)',
      mono: 'var(--font-mono)',
    },
    fontSize: {
      xs: 'var(--font-size-xs)',
      sm: 'var(--font-size-sm)',
      base: 'var(--font-size-base)',
      lg: 'var(--font-size-lg)',
      xl: 'var(--font-size-xl)',
      '2xl': 'var(--font-size-2xl)',
      '3xl': 'var(--font-size-3xl)',
      '4xl': 'var(--font-size-4xl)',
      '5xl': 'var(--font-size-5xl)',
      '6xl': 'var(--font-size-6xl)',
      '7xl': 'var(--font-size-7xl)',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
      loose: 2,
    },
  },

  // Spacing System
  spacing: {
    xs: 'var(--spacing-xs)',
    sm: 'var(--spacing-sm)',
    md: 'var(--spacing-md)',
    lg: 'var(--spacing-lg)',
    xl: 'var(--spacing-xl)',
    '2xl': 'var(--spacing-2xl)',
    '3xl': 'var(--spacing-3xl)',
  },

  // Border Radius
  borderRadius: {
    sm: 'var(--radius-sm)',
    md: 'var(--radius-md)',
    lg: 'var(--radius-lg)',
    xl: 'var(--radius-xl)',
    '2xl': 'var(--radius-2xl)',
    full: 'var(--radius-full)',
  },

  // Shadows
  shadows: {
    sm: 'var(--shadow-sm)',
    md: 'var(--shadow-md)',
    lg: 'var(--shadow-lg)',
    xl: 'var(--shadow-xl)',
    glow: 'var(--shadow-glow)',
  },

  // Animation Durations
  animation: {
    duration: {
      fast: '150ms',
      normal: '300ms',
      slow: '500ms',
      slower: '800ms',
    },
    easing: {
      default: 'cubic-bezier(0.4, 0, 0.2, 1)',
      in: 'cubic-bezier(0.4, 0, 1, 1)',
      out: 'cubic-bezier(0, 0, 0.2, 1)',
      inOut: 'cubic-bezier(0.4, 0, 0.6, 1)',
    },
  },

  // Breakpoints (for reference)
  breakpoints: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },

  // Z-Index Scale
  zIndex: {
    base: 0,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modalBackdrop: 40,
    modal: 50,
    popover: 60,
    tooltip: 70,
  },

  // Container Sizes
  container: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  },
};

// Gradient Presets
export const gradients = {
  primary:
    'linear-gradient(135deg, var(--color-forge-500), var(--color-forge-600))',
  secondary:
    'linear-gradient(135deg, var(--color-brand-secondary), var(--color-forge-700))',
  hero: 'linear-gradient(135deg, var(--color-forge-600) 0%, var(--color-brand-secondary) 100%)',
  mesh: 'radial-gradient(at 27% 37%, hsl(215, 98%, 61%) 0px, transparent 50%), radial-gradient(at 97% 21%, hsl(125, 98%, 72%) 0px, transparent 50%), radial-gradient(at 52% 99%, hsl(354, 98%, 61%) 0px, transparent 50%)',
  dark: 'linear-gradient(180deg, var(--color-steel-950) 0%, var(--color-steel-900) 100%)',
};

// Component Variants
export const componentVariants = {
  button: {
    primary: 'btn btn-primary',
    secondary: 'btn btn-secondary',
    ghost: 'btn btn-ghost',
    link: 'btn btn-link',
  },
  card: {
    default: 'card',
    hover: 'card card-hover',
    bordered: 'card card-bordered',
  },
};

export default designTokens;
