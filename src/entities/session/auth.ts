import { prisma } from '@/shared/lib/db-prisma'
import NextAuth from 'next-auth'
import { authConfig } from './auth.config'

import { PrismaAdapter } from '@auth/prisma-adapter'
export const { auth, signIn, signOut, handlers } = NextAuth({
	adapter: PrismaAdapter(prisma),
	session: { strategy: 'jwt' },
	...authConfig,
})
