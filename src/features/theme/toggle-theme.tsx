'use client'

import { DarkMode, LightMode, SettingsBrightness } from '@mui/icons-material'
import { styled, useColorScheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import { useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

const toggleThemeIcons: Record<ThemeMode, React.ReactNode> = {
	dark: <DarkMode />,
	light: <LightMode />,
	system: <SettingsBrightness />,
}

export function ToggleTheme() {
	const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

	const open = Boolean(anchorEl)
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget)
	}
	const handleClose = () => setAnchorEl(null)

	const handleMenuItemClick = (selectedMode: ThemeMode) => {
		setMode(selectedMode)
		setAnchorEl(null)
	}

	const { mode, setMode } = useColorScheme()

	if (!mode) return null

	return (
		<>
			<Tooltip title='Toggle Theme'>
				<IconButton
					onClick={handleClick}
					size='small'
					sx={{ ml: 2 }}
					aria-controls={open ? 'toggle-theme-menu' : undefined}
					aria-haspopup='true'
					aria-expanded={open ? 'true' : undefined}
				>
					{toggleThemeIcons[mode]}
				</IconButton>
			</Tooltip>
			<ToggleThemeMenu
				anchorEl={anchorEl}
				currentMode={mode}
				onClick={handleClose}
				onItemClick={handleMenuItemClick}
			/>
		</>
	)
}

function ToggleThemeMenu({
	anchorEl,
	onClick,
	onItemClick,
	currentMode,
}: {
	currentMode: ThemeMode
	anchorEl: null | HTMLElement
	onClick: (event: React.MouseEvent<HTMLElement>) => void
	onItemClick: (mode: ThemeMode) => void
}) {
	const open = !!anchorEl
	return (
		<Menu
			anchorEl={anchorEl}
			id='toggle-theme-menu'
			open={open}
			onClick={onClick}
			slotProps={{
				paper: {
					elevation: 0,
					sx: {
						px: 1,
						boxShadow:
							'0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
						minWidth: 150,
					},
				},
			}}
			transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		>
			<ToggleThemeMenuItem
				selected={currentMode === 'system'}
				onClick={() => onItemClick('system')}
			>
				{toggleThemeIcons['system']} System
			</ToggleThemeMenuItem>
			<ToggleThemeMenuItem
				selected={currentMode === 'light'}
				onClick={() => onItemClick('light')}
			>
				{toggleThemeIcons['light']} Light
			</ToggleThemeMenuItem>
			<ToggleThemeMenuItem
				selected={currentMode === 'dark'}
				onClick={() => onItemClick('dark')}
			>
				{toggleThemeIcons['dark']} Dark
			</ToggleThemeMenuItem>
		</Menu>
	)
}

const ToggleThemeMenuItem = styled(MenuItem)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	columnGap: 10,
	borderRadius: 5,
}))
