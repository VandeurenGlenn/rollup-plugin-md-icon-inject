import materialSymbols from 'rollup-plugin-material-symbols';

export const mdIconInline = (options) =>
	materialSymbols({elements: ['md-icon'], ...options});

export default mdIconInline;
