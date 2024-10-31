'use client'

import { DarkMode, LightMode, SettingsBrightness } from '@mui/icons-material'
import { useColorScheme } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Tooltip from '@mui/material/Tooltip'
import { ReactNode, useState } from 'react'

type ThemeMode = 'light' | 'dark' | 'system'

const toggleThemeIcons: Record<ThemeMode, ReactNode> = {
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
						minWidth: 150,
					},
				},
			}}
			transformOrigin={{ horizontal: 'right', vertical: 'top' }}
			anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
		>
			<MenuItem
				sx={{
					display: 'flex',
					alignItems: 'center',
					columnGap: 1,
				}}
				selected={currentMode === 'system'}
				onClick={() => onItemClick('system')}
			>
				{toggleThemeIcons['system']} System
			</MenuItem>
			<MenuItem
				sx={{
					display: 'flex',
					alignItems: 'center',
					columnGap: 1,
				}}
				selected={currentMode === 'light'}
				onClick={() => onItemClick('light')}
			>
				{toggleThemeIcons['light']} Light
			</MenuItem>
			<MenuItem
				sx={{
					display: 'flex',
					alignItems: 'center',
					columnGap: 1,
				}}
				selected={currentMode === 'dark'}
				onClick={() => onItemClick('dark')}
			>
				{toggleThemeIcons['dark']} Dark
			</MenuItem>
		</Menu>
	)
}
function ToggleThemeButton() {}
