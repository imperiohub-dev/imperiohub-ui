/**
 * Theme Configuration Types - Advanced Theming System v0.3.0
 */

/**
 * Brand colors for primary branding elements
 */
export interface BrandColors {
  primary: string;
  secondary: string;
  accent: string;
}

/**
 * Semantic colors for UI states
 */
export interface SemanticColors {
  success: string;
  error: string;
  warning: string;
  info: string;
}

/**
 * Neutral color scale (50-900)
 */
export interface NeutralColors {
  50: string;
  100: string;
  200: string;
  300: string;
  400: string;
  500: string;
  600: string;
  700: string;
  800: string;
  900: string;
}

/**
 * Surface colors for backgrounds and UI elements
 */
export interface SurfaceColors {
  background: string;
  foreground: string;
  card: string;
  border: string;
  input: string;
  disabled: string;
}

/**
 * Text colors for typography
 */
export interface TextColors {
  primary: string;
  secondary: string;
  muted: string;
  inverse: string;
  disabled: string;
}

/**
 * Overlay colors for modals and backdrops
 */
export interface OverlayColors {
  light: string;
  dark: string;
}

/**
 * Complete color system
 */
export interface ThemeColors {
  brand: BrandColors;
  semantic: SemanticColors;
  neutral: NeutralColors;
  surface: SurfaceColors;
  text: TextColors;
  overlay: OverlayColors;
}

/**
 * Font family configuration
 */
export interface FontFamily {
  heading: string;
  body: string;
  mono: string;
}

/**
 * Font size scale
 */
export interface FontSize {
  xs: string;
  sm: string;
  base: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
  '5xl': string;
  '6xl': string;
}

/**
 * Font weight scale
 */
export interface FontWeight {
  thin: number;
  extralight: number;
  light: number;
  normal: number;
  medium: number;
  semibold: number;
  bold: number;
  extrabold: number;
  black: number;
}

/**
 * Line height scale
 */
export interface LineHeight {
  tight: number;
  normal: number;
  relaxed: number;
  loose: number;
}

/**
 * Letter spacing scale
 */
export interface LetterSpacing {
  tight: string;
  normal: string;
  wide: string;
  wider: string;
}

/**
 * Typography configuration
 */
export interface ThemeTypography {
  fontFamily: FontFamily;
  fontSize: FontSize;
  fontWeight: FontWeight;
  lineHeight: LineHeight;
  letterSpacing: LetterSpacing;
}

/**
 * Spacing scale
 */
export interface ThemeSpacing {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  '4xl': string;
}

/**
 * Border radius scale
 */
export interface ThemeBorderRadius {
  none: string;
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  '3xl': string;
  full: string;
}

/**
 * Shadow scale
 */
export interface ThemeShadows {
  sm: string;
  base: string;
  md: string;
  lg: string;
  xl: string;
  '2xl': string;
  inner: string;
}

/**
 * Animation duration scale
 */
export interface AnimationDuration {
  fast: string;
  base: string;
  slow: string;
  slower: string;
}

/**
 * Animation easing functions
 */
export interface AnimationEasing {
  linear: string;
  in: string;
  out: string;
  inOut: string;
}

/**
 * Animation configuration
 */
export interface ThemeAnimations {
  duration: AnimationDuration;
  easing: AnimationEasing;
}

/**
 * Theme metadata
 */
export interface ThemeMetadata {
  name: string;
  version: string;
  author: string;
  description: string;
}

/**
 * Complete theme tokens interface
 * This is the main interface for creating custom themes
 */
export interface ThemeTokens {
  colors: ThemeColors;
  typography: ThemeTypography;
  spacing: ThemeSpacing;
  borderRadius: ThemeBorderRadius;
  shadows: ThemeShadows;
  animations: ThemeAnimations;
  metadata: ThemeMetadata;
}

/**
 * Legacy ThemeConfig for backward compatibility
 * @deprecated Use ThemeTokens instead
 */
export interface ThemeConfig {
  colors: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    surface: string;
    text: {
      primary: string;
      secondary: string;
      disabled: string;
    };
    error: string;
    warning: string;
    success: string;
    info: string;
  };
  typography: {
    fontFamily: {
      heading: string;
      body: string;
      mono?: string;
    };
    fontSize: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
      '4xl': string;
    };
    fontWeight: {
      light: number;
      normal: number;
      medium: number;
      semibold: number;
      bold: number;
    };
    lineHeight: {
      tight: number;
      normal: number;
      relaxed: number;
    };
  };
  spacing: ThemeSpacing;
  borderRadius: {
    none: string;
    sm: string;
    md: string;
    lg: string;
    xl: string;
    full: string;
  };
  breakpoints: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
    '2xl': string;
  };
}
