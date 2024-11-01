import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Stack from '@mui/material/Stack'
import { grey } from '@mui/material/colors'
import { ReactNode } from 'react'

export function Layout({
	logo,
	actions,
	profile,
}: {
	logo: ReactNode
	profile: ReactNode
	actions: ReactNode
}) {
	return (
		<AppBar
			position='static'
			sx={{
				bgcolor: 'background.default',
				boxShadow: 'none',
				borderBottom: `1px solid ${grey[300]}`,
			}}
		>
			<Container
				sx={{
					display: 'flex',
					height: { xs: '50px', sm: '70px' },
					alignItems: 'center',
				}}
			>
				<Box sx={{ display: 'flex' }}>{logo}</Box>
				<Stack
					direction='row'
					sx={{
						display: 'flex',
						flex: '1 1 auto',
						alignItems: 'center',
						columnGap: 2,
						justifyContent: 'flex-end',
					}}
				>
					{actions}
					{profile}
				</Stack>
			</Container>
		</AppBar>
	)
}
