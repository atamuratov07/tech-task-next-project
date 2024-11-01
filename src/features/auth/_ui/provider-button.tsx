'use client'

import { Google } from '@mui/icons-material'
import { Button, CircularProgress } from '@mui/material'
import { ProviderData } from '../_model/types'
import { useOAuthSignIn } from '../_model/use-oauth-sign-in'

export function ProviderButton({ provider }: { provider: ProviderData }) {
	const { signIn, isPending: isSignInPending } = useOAuthSignIn(provider)

	const getIcon = (provider: ProviderData) => {
		switch (provider.id) {
			case 'google':
				return <Google />

			default:
				return null
		}
	}

	return (
		<Button
			variant='outlined'
			type='button'
			disabled={isSignInPending}
			onClick={() => signIn()}
			sx={{
				py: 1,
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'center',
				borderWidth: '2px',
				':disabled': {
					borderWidth: '2px',
				},
			}}
		>
			{isSignInPending ? <CircularProgress size={24} /> : getIcon(provider)}
		</Button>
	)
}
