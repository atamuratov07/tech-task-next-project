import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

export default function Home() {
	return (
		<main>
			<Container>
				<Box>
					<Typography variant='h1'>Getting Started!</Typography>
					<Typography>Lorem ipsum dolor sit amet.</Typography>
				</Box>
				<Button variant='contained'>Click Here!</Button>
			</Container>
		</main>
	)
}
