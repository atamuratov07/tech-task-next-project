import { Footer } from '@/shared/ui/footer'
import { Header } from '@/widgets/header/header'
import { Container } from '@mui/material'
import { ReactNode } from 'react'

export default async function Layout({ children }: { children: ReactNode }) {
	return (
		<>
			<Header variant='private' />
			<Container sx={{ my: '10vh' }} component={'main'}>
				{children}
			</Container>
			<Footer />
		</>
	)
}
