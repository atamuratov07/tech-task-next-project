import AddRoundedIcon from '@mui/icons-material/AddRounded'
import {
	Box,
	CardActions,
	CardContent,
	CardMedia,
	IconButton,
	Typography,
} from '@mui/material'
import { grey } from '@mui/material/colors'
import { Product } from '../_model/types'
import { StyledCard } from './product-item-card'

export function ProductItem({ product }: { product: Product }) {
	return (
		<StyledCard>
			<ProductCard product={product} />
		</StyledCard>
	)
}

function ProductCard({ product }: { product: Product }) {
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
