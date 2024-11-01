import { NextAuthConfig } from 'next-auth'
import { Provider } from 'next-auth/providers'
import GoogleProvider from 'next-auth/providers/google'

const providers: Provider[] = [GoogleProvider]

export const providerMap = providers
	.map(provider => {
		if (typeof provider === 'function') {
			const providerData = provider()
			return { id: providerData.id, name: providerData.name }
		} else {
			return { id: provider.id, name: provider.name }
		}
	})
	.filter(provider => provider.id !== 'credentials')

export const authConfig = {
	pages: {
		signIn: '/auth/sign-in',
	},
	providers,
	callbacks: {
		authorized({ auth, request: { nextUrl } }) {
			const isLoggedIn = !!auth?.user
			const isOnProducts = nextUrl.pathname.startsWith('/products')
			if (isOnProducts) {
				if (isLoggedIn) return true
				return false // Redirect unauthenticated users to login page
			}

			return true
		},
	},
} satisfies NextAuthConfig
