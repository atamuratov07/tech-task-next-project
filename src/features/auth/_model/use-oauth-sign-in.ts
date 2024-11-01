'use client'

import { useMutation } from '@tanstack/react-query'
import { signIn } from 'next-auth/react'
import { useSearchParams } from 'next/navigation'
import { ProviderData } from './types'

export function useOAuthSignIn(provider: ProviderData) {
	const searchParams = useSearchParams()
	const callbackUrl = searchParams.get('callbackUrl')
	const oauthSignInMutation = useMutation({
		mutationFn: () =>
			signIn(provider.id, {
				redirectTo: callbackUrl ?? '',
			}),
	})

	return {
		isPending: oauthSignInMutation.isPending,
		signIn: oauthSignInMutation.mutate,
	}
}
