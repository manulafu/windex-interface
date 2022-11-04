import React from 'react'

import {
  AppBar,
  Box,
  CssBaseline,
  Toolbar,
  useTheme,
  styled,
  Theme,
} from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { setMenu } from '../store/slices/customization'
import Header from './Header/Header'
import Sidebar from './Sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
import NavigationScroll from './NavigationScroll'
import { RootState } from '../store/store'

interface MainProps {
  theme: Theme
  open: boolean
}

const drawerWidth = 300
// styles
const Main = styled('main', {
  shouldForwardProp: (prop) => prop !== 'open',
})<MainProps>(({ theme, open }) => ({
  height: '150vh',
  marginTop: `74px`,
  backgroundColor: theme.palette.background.default,
  flexGrow: 1,
  padding: theme.spacing(6),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth - 15}px`,
  marginRight: '15px',
  [theme.breakpoints.down('md')]: {
    marginLeft: '15px',
  },
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

const MainLayout: React.FC = () => {
  const theme = useTheme()

  // Handle left drawer
  const leftDrawerOpened = useSelector(
    (state: RootState) => state.customization.opened
  )
  const dispatch = useDispatch()
  const handleLeftDrawerToggle = () => {
    dispatch(setMenu({ opened: !leftDrawerOpened }))
  }

  return (
    <NavigationScroll>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        {/* header */}
        <AppBar
          enableColorOnDark
          position="fixed"
          color="inherit"
          elevation={1}
          sx={{
            backgroundColor: theme.palette.background.paper,
            padding: '0 24px',
          }}
        >
          <Toolbar>
            <Header handleLeftDrawerToggle={handleLeftDrawerToggle} />
          </Toolbar>
        </AppBar>

        {/* sidebar */}
        <Sidebar
          drawerOpen={leftDrawerOpened}
          drawerToggle={handleLeftDrawerToggle}
        />

        {/* main content */}
        <Main theme={theme} open={leftDrawerOpened}>
          <Outlet />
        </Main>
      </Box>
    </NavigationScroll>
  )
}
export default MainLayout
