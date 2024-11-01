import { Product as DbProduct, Cart as DbCart } from '@prisma/client'

export type Product = Omit<DbProduct, 'id' | 'updatedAt' | 'createdAt'>
