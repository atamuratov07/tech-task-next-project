'use client'

import { SignInButton } from '@/features/auth/sign-in-button'
import { useSignOut } from '@/features/auth/use-sign-out'
import { Logout } from '@mui/icons-material'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Skeleton from '@mui/material/Skeleton'
import Tooltip from '@mui/material/Tooltip'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { useSession } from 'next-auth/react'
import React, { useState } from 'react'

export function Profile() {
	const session = useSession()
	const { isPending: isLoadingSignOut, signOut } = useSignOut()

	if (session.status === 'unauthenticated') {
		return <SignInButton />
	}

	if (session.status === 'loading') {
		return (
			<Skeleton
				variant='circular'
				sx={{
					m: '5px',
					ml: '21px',
				}}
				width={40}
				height={40}
				animation={'wave'}
			/>
		)
	}

	const logoutHandler = () => {
		signOut()
	}
	return (
		<ProfileMenu
			profile={{
				avatar: (
					<Avatar
						src={session.data?.user.image}
						alt={session.data?.user.name}
						sx={{
							bgcolor: 'grey.200',
							color: 'grey.600',
						}}
					>
						{session.data?.user.name?.slice(0, 2)}
					</Avatar>
				),
				name: session.data?.user.name ?? '',
			}}
			logoutHandler={logoutHandler}
			isLoadingSignOut={isLoadingSignOut}
		/>
	)
}

const StyledMenu = styled((props: MenuProps) => (
	<Menu
		elevation={0}
		anchorOrigin={{
			vertical: 'bottom',
			horizontal: 'right',
		}}
		transformOrigin={{
			vertical: 'top',
			horizontal: 'right',
		}}
		{...props}
	/>
))(({ theme }) => ({
	'& .MuiPaper-root': {
		borderRadius: 6,
		marginTop: theme.spacing(1),
		minWidth: 250,
		boxShadow:
			'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 5px 10px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
		'& .MuiMenu-list': {
			padding: '4px 0',
		},
		'& .MuiMenuItem-root': {
			'& .MuiSvgIcon-root': {
				fontSize: 18,
				color: theme.palette.text.primary,
				marginRight: theme.spacing(1.5),
			},
		},
		...theme.applyStyles('dark', {
			color: theme.palette.grey[100],
		}),
	},
}))

function ProfileMenu({
	profile,
	logoutHandler,
	isLoadingSignOut,
}: {
	profile: { name: string; avatar: React.ReactNode }
	logoutHandler: () => void
	isLoadingSignOut: boolean
}) {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => setAnchorEl(null)

	return (
		<>
			<Tooltip title='Profile Settings'>
				<IconButton
					onClick={handleClick}
					size='small'
					sx={{ ml: 2 }}
					aria-controls={open ? 'account-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
				>
					{profile.avatar}
				</IconButton>
			</Tooltip>
			<StyledMenu
				anchorEl={anchorEl}
				open={open}
				onClick={handleClose}
				onClose={handleClose}
				id='account-menu'
			>
				<Typography
					component='span'
					sx={{ p: 2, fontWeight: 'bold', color: 'primary' }}
				>
					{profile.name}
				</Typography>
				<Divider />
				<MenuItem
					onClick={() => {
						handleClose()
						logoutHandler()
					}}
					disabled={isLoadingSignOut}
				>
					<Logout sx={{ mr: 1, height: 20, width: 20 }} />
					Sign Out
				</MenuItem>
			</StyledMenu>
		</>
	)
}
