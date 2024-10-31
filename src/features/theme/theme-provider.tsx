'use client'
import { CssBaseline, useColorScheme } from '@mui/material'
import {
	ThemeProvider as MUIThemeProvider,
	createTheme,
} from '@mui/material/styles'
import { Roboto } from 'next/font/google'
import { ReactNode } from 'react'

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-roboto',
})
const lightTheme = createTheme({
	colorSchemes: {
		dark: true,
	},
	shape: { borderRadius: 8 },
	// palette: {
	// 	primary: {
	// 		main: 'hsl(222.2 47.4% 11.2%)',
	// 		contrastText: 'hsl(210 40% 96.1%)',
	// 	},
	// 	text: {
	// 		// primary: 'hsl(222.2 47.4% 11.2%)',
	// 		disabled: 'hsl(210 40% 96.1%)',
	// 	},

	// 	background: { default: 'hsl(0 0% 100%)', paper: 'hsl(0 0% 100%)' },
	// },
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
})

const darkTheme = createTheme({
	colorSchemes: {
		dark: true,
	},
	palette: {
		mode: 'dark',
		primary: {
			light: '#f1f1f1',
			main: '#f5f5f5',
			contrastText: '#000000',
		},
		text: {
			primary: '#f5f5f5',
			secondary: '#f1f1f1',
		},
		background: { default: '#111' },
	},
	typography: {
		fontFamily: roboto.style.fontFamily,
	},
})

export function ThemeProvider({ children }: { children?: ReactNode }) {
	const { colorScheme } = useColorScheme()
	return (
		<MUIThemeProvider theme={lightTheme}>
			<CssBaseline />
			{children}
		</MUIThemeProvider>
	)
}
