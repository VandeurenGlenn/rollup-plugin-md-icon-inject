import materialSymbols from 'rollup-plugin-material-symbols';
import type {MaterialSymbolsOptions} from 'rollup-plugin-material-symbols/lib/types.js';

export const mdIconInline = (
  options: Omit<MaterialSymbolsOptions, 'elements'> = {},
) => materialSymbols({elements: ['md-icon'], ...options});

export default mdIconInline;
