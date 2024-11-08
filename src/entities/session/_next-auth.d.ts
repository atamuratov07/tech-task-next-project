import NextAuth from 'next-auth/next'

declare module 'next-auth' {
	interface Session {
		user: {
			name?: string
			email: string
			image?: string
		}
	}
	interface User {
		user: {
			id: string
			email: string
			name?: string
			image?: string
		}
	}
}
