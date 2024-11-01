import { getProductsList } from '@/entities/products-list/queries'
import Grid from '@mui/material/Grid2'
import { Product } from './_model/types'
import { ProductItem } from './_ui/product-item'

export async function ProductsList({ query }: { query: string }) {
	const products = await getProductsList({ q: query })
	return (
		<Grid container spacing={2} alignItems={'stretch'}>
			{products.map((product: Product) => (
				<Grid key={product.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
					<ProductItem product={product} />
				</Grid>
			))}
		</Grid>
	)
}
