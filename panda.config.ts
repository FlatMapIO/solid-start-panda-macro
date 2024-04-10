import { defineConfig } from '@pandacss/dev'

export default defineConfig({
	preflight: true,
	jsxFramework: 'solid',
	jsxStyleProps: 'minimal',
	presets: [
		'@pandacss/preset-base',
	],
	include: ['./src/**/*.{ts,tsx}'],
	exclude: ['./src/{lib,fixtures}/**/*.*'],
	// Useful for theme customization
	theme: {
		extend: {},
	},
	outdir: 'src/styled-system',
	importMap: '~/styled-system',
})
