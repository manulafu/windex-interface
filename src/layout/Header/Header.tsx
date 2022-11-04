import { Menu } from '@mui/icons-material'
import { Avatar, Box, ButtonBase, Typography, useTheme } from '@mui/material'
import { ConnectKitButton } from 'connectkit'
import React from 'react'
import Settings from './Settings'

interface HeaderProps {
  handleLeftDrawerToggle: () => void
}
const Header: React.FC<HeaderProps> = ({ handleLeftDrawerToggle }) => {
  const theme = useTheme()
  return (
    <>
      {/* Logo and toggler button */}
      <Box
        sx={{
          width: 228,
          display: 'flex',
          alignItems: 'center',
          [theme.breakpoints.down('md')]: {
            width: 'auto',
          },
        }}
      >
        <Box
          component="span"
          sx={{ display: { xs: 'none', md: 'block' }, flexGrow: 1 }}
        >
          <Typography variant="h6">Windex</Typography>
        </Box>
        <ButtonBase sx={{ borderRadius: '12px', overflow: 'hidden' }}>
          <Avatar
            variant="rounded"
            sx={{
              transition: 'all .2s ease-in-out',
              background: theme.palette.background.paper,
              color: theme.palette.text.primary,
              '&:hover': {
                background: theme.palette.action.hover,
                color: theme.palette.text.secondary,
              },
            }}
            onClick={handleLeftDrawerToggle}
            color="inherit"
          >
            <Menu fontSize="medium" />
          </Avatar>
        </ButtonBase>
      </Box>

      <Box sx={{ flexGrow: 1 }} />

      {/* Account */}
      <ConnectKitButton showBalance mode={theme.palette.mode} />

      {/* settings */}
      <Settings />
    </>
  )
}

export default Header
