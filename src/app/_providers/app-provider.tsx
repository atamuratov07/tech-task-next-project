'use client'

import { ThemeProvider } from '@/features/theme/theme-provider'
import { ComposeChildren } from '@/shared/lib/react-std'
import { ReactNode } from 'react'

export function AppProvider({ children }: { children: ReactNode }) {
	return (
		<ComposeChildren>
			<ThemeProvider />
			{children}
		</ComposeChildren>
	)
}
