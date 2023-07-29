import materialSymbols from 'rollup-plugin-material-symbols'

export const mdIconInject = (options) => materialSymbols({elements: ['md-icon'], ...options})

export default mdIconInject