import { Header } from '@/widgets/header/header'

export default function Layout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<>
			<Header variant='public' />
			{children}
		</>
	)
}
