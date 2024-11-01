import { prisma } from '@/shared/lib/db-prisma'

export async function getProductsList({ q }: { q?: string }) {
	try {
		const products = await prisma.product.findMany()

		return products ?? []
	} catch (error) {
		console.error('Database Error:', error)
		throw new Error('Failed to fetch invoices.')
	}
}
