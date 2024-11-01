import { Stack, Typography } from '@mui/material'
import Box from '@mui/material/Box'
import Divider from '@mui/material/Divider'
import { ProviderButton } from './_ui/provider-button'
import { Card } from './_ui/sign-in-form-card'
import { SignInContainer } from './_ui/sign-in-form-container'
import { Suspense } from 'react'

export function SignInForm({
	providers,
}: {
	providers: { id: string; name: string }[]
}) {
	return (
		<SignInContainer>
			<Card variant='outlined'>
				<Typography
					component='h1'
					variant='h4'
					sx={{ width: '100%', fontSize: 'clamp(2rem, 10vw, 2.15rem)' }}
				>
					Sign in
				</Typography>
				<Box component='form'>
					<Divider textAlign='center' sx={{ py: 2 }}>
						or
					</Divider>
					<Stack direction={'column'} spacing={1}>
						{providers.map(provider => (
							<Suspense key={provider.id}>
								<ProviderButton provider={provider} />
							</Suspense>
						))}
					</Stack>
				</Box>
			</Card>
		</SignInContainer>
	)
}
