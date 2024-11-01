'use client'

import { Product } from '@/features/products-list/_model/types'
import AddRoundedIcon from '@mui/icons-material/AddRounded'
import {
	Box,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
	styled,
} from '@mui/material'
import { grey } from '@mui/material/colors'

export const StyledCard = styled(
	Card,
	{}
)(({ theme }) => ({
	borderRadius: '30px',
	border: `1px solid ${theme.palette.grey[200]}`,
	boxShadow: 'none',
	width: '100%',
	height: '100%',
	transition: 'all .3s ease',
	':hover': {
		boxShadow:
			' 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)',
		transform: 'scale(1.05)',
	},
	...theme.applyStyles('dark', {
		border: `1px solid ${theme.palette.grey[800]}`,
	}),
}))

export function ProductItemCard({ product }: { product: Product }) {
	return (
		<>
			<CardMedia
				component={'img'}
				image={product.imageUrl}
				alt={product.title}
				sx={{ mb: 'auto' }}
			/>
			<CardContent
				sx={{
					px: '30px',
					pb: '30px',
				}}
			>
				<Typography component='div' sx={{ fontSize: '20px' }}>
					{product.title}
				</Typography>
				<CardActions sx={{ justifyContent: 'space-between' }}>
					<Box
						sx={{
							display: 'flex',
							flexDirection: 'column',
						}}
					>
						<Typography
							sx={{
								color: 'gray',
								textTransform: 'uppercase',
								fontSize: '14px',
							}}
						>
							Price:
						</Typography>
						<Typography sx={{ fontWeight: 'bold', fontSize: '20px' }}>
							$ {product.price}
						</Typography>
					</Box>
					<IconButton
						sx={{
							border: `1px solid ${grey[300]}`,
							borderRadius: '10px',
						}}
					>
						<AddRoundedIcon sx={{ fill: grey[500] }} />
					</IconButton>
				</CardActions>
			</CardContent>
		</>
	)
}
