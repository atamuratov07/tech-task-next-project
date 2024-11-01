'use client'
import { CssBaseline, useColorScheme } from '@mui/material'
import {
	ThemeProvider as MUIThemeProvider,
	SupportedColorScheme,
	ThemeOptions,
	createTheme,
	responsiveFontSizes,
} from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
	weight: ['300', '400', '500', '700'],
	subsets: ['latin', 'cyrillic'],
	display: 'swap',
	variable: '--font-roboto',
})

const lightTheme = {
	palette: {
		primary: {
			main: 'hsl(222.2 47.4% 11.2%)',
			contrastText: 'hsl(210 40% 96.1%)',
		},
		secondary: {
			dark: 'hsl(222.2 47.4% 11.2%)',
			main: 'hsl(210 40% 96.1%)',
		},
		action: {
			hover: 'hsl(210 40% 96.1%)',
			focus: 'hsl(215 20.2% 65.1%)',
			active: 'hsl(222.2 47.4% 11.2%)',
		},
		text: {
			primary: 'hsl(0 100% 0%)',
		},

		background: { default: 'hsl(0 0% 100%)', paper: 'hsl(0 0% 100%)' },
	},
}
const darkTheme: ThemeOptions = {
	palette: {
		primary: {
			main: 'hsl(210 40% 98%)',
			light: 'hsl(222.2 47.4% 1.2%)',
			contrastText: 'hsl(210 40% 96.1%)',
		},
		secondary: {
			dark: 'hsl(210 40% 98%)',
			main: 'hsl(210 40% 96.1%)',
		},
		action: {
			hover: 'hsl(216 34% 17%)',
			focus: 'hsl(216 34% 17%)',
			active: 'hsl(216 34% 17%)',
		},
		text: {
			primary: 'hsl(0 100% 0%)',
		},

		background: { default: '224 71% 4%', paper: '224 71% 4%' },
	},
}

const theme = (colorScheme?: SupportedColorScheme) => {
	return responsiveFontSizes(
		createTheme({
			colorSchemes: {
				dark: true,
			},
			shape: { borderRadius: 8 },
			typography: {
				fontFamily: roboto.style.fontFamily,
			},
			...{
				dark: darkTheme,
				light: lightTheme,
			}[colorScheme || 'light'],
			components: {
				MuiCard: {
					styleOverrides: {
						root: {
							display: 'flex',
							flexDirection: 'column',
						},
					},
				},
				MuiCardContent: {
					styleOverrides: {
						root: {
							flexGrow: '1',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
						},
					},
				},
			},
		})
	)
}

export function ThemeProvider({ children }: { children?: React.ReactNode }) {
	const { colorScheme } = useColorScheme()
	return (
		<MUIThemeProvider theme={theme(colorScheme)}>
			<CssBaseline />
			{children}
		</MUIThemeProvider>
	)
}
