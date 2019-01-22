import Typography from 'typography';
import stowLakeTheme from 'typography-theme-stow-lake';
import 'typeface-libre-baskerville';
import 'typeface-merriweather';

const typography = new Typography({
  ...stowLakeTheme,
  headerFontFamily: ['Libre Baskerville', 'serif'],
  bodyFontFamily: ['Merriweather', 'serif'],
  googleFonts: [],
});

export default typography;
export const rhythm = typography.rhythm;
export const scale = typography.scale;
