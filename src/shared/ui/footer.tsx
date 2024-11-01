import { Box, Typography } from '@mui/material'

export function Footer() {
	return (
		<Box
			component={'footer'}
			sx={{ width: '100%', height: '20vh', bgcolor: 'primary.main' }}
		>
			<Typography
				variant='h2'
				align='center'
				sx={{ pt: 4, fontWeight: 'bold', color: 'text.secondary' }}
			>
				Footer
			</Typography>
		</Box>
	)
}
