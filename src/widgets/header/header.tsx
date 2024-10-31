import { ToggleTheme } from '@/features/theme/toggle-theme'
import { Layout } from './ui/layout'
import { Logo } from './ui/logo'
import { Profile } from './ui/profile'

export function Header({
	variant,
}: {
	variant: 'auth' | 'private' | 'public'
}) {
	const isProfile = variant !== 'auth'
	return (
		<Layout
			logo={<Logo />}
			actions={<ToggleTheme />}
			profile={isProfile && <Profile />}
		></Layout>
	)
}
