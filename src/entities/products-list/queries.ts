export async function getProductsList({
	q,
	orderBy,
}: {
	q?: string
	orderBy?: { [key in 'price' | 'title']: 'asc' | 'desc' }
}) {
	try {
		const products = await prisma?.product.findMany({
			// orderBy: {
			// 	price: orderBy.price || 'asc',
			// 	title: orderBy.title || 'asc',
			// },
			where: { title: { contains: q } },
		})

		return products ?? []
	} catch (error) {
		console.error('Database Error:', error)
		throw new Error('Failed to fetch invoices.')
	}
}
