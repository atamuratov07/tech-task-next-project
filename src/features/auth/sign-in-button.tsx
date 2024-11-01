import { Login } from '@mui/icons-material'
import Button from '@mui/material/Button'
import { signIn } from 'next-auth/react'

export function SignInButton() {
	const handleSignIn = () => signIn()

	return (
		<Button
			variant='outlined'
			onClick={handleSignIn}
			startIcon={<Login width={16} height={16} />}
		>
			Sign In
		</Button>
	)
}
