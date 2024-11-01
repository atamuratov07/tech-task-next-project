'use client'

import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

import { OpenInNew } from '@mui/icons-material'
import MuiLink from '@mui/material/Link'
import MuiBox from '@mui/material/Box'
import Container from '@mui/material/Container'
import { grey } from '@mui/material/colors'
import Link from 'next/link'

const Box = styled(MuiBox)(({ theme }) => ({
	border: '3px solid grey',
	bgcolor: grey[900],
	boxShadow: '0 25px 50px -12px rgb(0 0 0 / 0.25)',
	...theme.applyStyles('dark', {
		bgcolor: grey[900],
		boxShadow: '0 25px 50px -12px rgb(0 0 0)',
	}),
}))

export function Hero() {
	return (
		<main>
			<Container>
				<Box
					sx={{
						borderRadius: '30px',
						color: 'text',
						mt: '10vh',
						p: 5,
					}}
				>
					<Typography
						component={'h1'}
						sx={{
							fontSize: { xs: '32px', sm: '48px', md: '64px' },
						}}
					>
						Sneakers Store <br />
						Technical Project <br />
						Next.js + MaterialUI
					</Typography>
					<MuiLink
						component={Link}
						href={'/products'}
						sx={{
							display: 'flex',
							alignItems: 'center',
							rowGap: 1,
						}}
					>
						View Products Page{' '}
						<OpenInNew sx={{ width: '20px', height: '20px' }} />
					</MuiLink>
				</Box>
			</Container>
		</main>
	)
}
