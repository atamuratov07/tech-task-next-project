import { providerMap } from '@/entities/session/auth.config'
import { SignInForm } from '@/features/auth/sign-in-form'

export default async function SignIn({}: {}) {
	return <SignInForm providers={providerMap} />
}
