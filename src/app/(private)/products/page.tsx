import { ProductsList } from '@/features/products-list/products-list'
import { Container } from '@mui/material'

export default async function Products(props: {
	searchParams?: Promise<{
		query?: string
		page?: string
	}>
}) {
	const searchParams = await props.searchParams
	const query = searchParams?.query ?? ''

	return (
		<Container>
			<ProductsList query={query} />
		</Container>
	)
}
