'use client'

import { Logout } from '@mui/icons-material'
import { Typography } from '@mui/material'
import Avatar from '@mui/material/Avatar'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Menu, { MenuProps } from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import { useState } from 'react'

export function Profile() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => {
		setAnchorEl(null)
	}
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
					<Avatar
						sx={{
							bgcolor: 'grey.200',
							color: 'grey.600',
						}}
					>
						AD
					</Avatar>
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
					Atamauratov Damir
				</Typography>
				<Divider />
				<MenuItem
					onClick={() => {
						handleClose()
					}}
				>
					<Logout sx={{ mr: 1, height: 20, width: 20 }} />
					Sign Out
				</MenuItem>
			</StyledMenu>
		</>
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
