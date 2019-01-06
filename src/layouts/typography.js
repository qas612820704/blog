import Typography from 'typography';
import stowLakeTheme from 'typography-theme-stow-lake';
import 'typeface-libre-baskerville';

const typography = new Typography({
  ...stowLakeTheme,
  headerFontFamily: ['Libre Baskerville', 'serif'],
  bodyFontFamily: ['Libre Baskerville', 'serif'],
  googleFonts: [],
});

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
