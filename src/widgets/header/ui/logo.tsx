import { LogoIcon } from '@/shared/ui/logo-icon'
import Link from '@mui/material/Link'
import Typography from '@mui/material/Typography'
import NextLink from 'next/link'

export function Logo() {
	return (
		<Link
			component={NextLink}
			underline='none'
			href={'/'}
			sx={{ display: 'flex', alignItems: ' center', columnGap: 1 }}
		>
			<LogoIcon width={32} height={32} />
			<Typography
				variant='h6'
				component='span'
				color='primary'
				fontWeight='bold'
				display={{
					xs: 'none',
					sm: 'inline-block',
				}}
			>
				Sneakers Store
			</Typography>
		</Link>
	)
}
