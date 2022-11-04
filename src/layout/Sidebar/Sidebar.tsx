import { Box, Drawer, Typography, useMediaQuery, useTheme } from '@mui/material'
import React from 'react'
import { BrowserView, MobileView } from 'react-device-detect'
import MenuList from './MenuList'
import { SidebarProps } from './types'

const Sidebar: React.FC<SidebarProps> = ({ drawerOpen, drawerToggle }) => {
  const theme = useTheme()
  const matchUpMd = useMediaQuery(theme.breakpoints.up('md'))

  const drawer = (
    <>
      <Box sx={{ display: { xs: 'block', md: 'none' } }}>
        <Box sx={{ display: 'flex', p: 2, mx: 'auto' }}>
          <Typography variant="subtitle1">WINDEX</Typography>
        </Box>
      </Box>
      <BrowserView>
        <MenuList />
      </BrowserView>
      <MobileView>
        <Box sx={{ px: 2 }}>
          <MenuList />
        </Box>
      </MobileView>
    </>
  )

  return (
    <Box
      component="nav"
      sx={{ flexShrink: { md: 0 }, width: matchUpMd ? 295 : 'auto' }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant={matchUpMd ? 'persistent' : 'temporary'}
        anchor="left"
        open={drawerOpen}
        onClose={drawerToggle}
        sx={{
          '& .MuiDrawer-paper': {
            width: 280,
            background: theme.palette.background.default,
            color: theme.palette.text.primary,
            borderRight: 'none',
            [theme.breakpoints.up('md')]: {
              top: '70px',
              width: 280,
              margin: '0 5px',
              transition: theme.transitions.easing.easeInOut,
            },
          },
        }}
        ModalProps={{ keepMounted: true }}
        color="inherit"
      >
        {drawer}
      </Drawer>
    </Box>
  )
}

export default Sidebar
