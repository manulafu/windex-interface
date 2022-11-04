import { useState, useMemo } from 'react'
import {
  createTheme,
  CssBaseline,
  PaletteMode,
  StyledEngineProvider,
  ThemeProvider,
} from '@mui/material'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import ColorModeContext from './context/ColorModeContext'
import themeOptions from './theme/theme'
import MainLayout from './layout/MainLayout'
import Arbitrage from './views/Arbitrage'
import Profile from './views/Profile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: '/', element: <Arbitrage /> },
      { path: '/profile', element: <Profile /> },
    ],
  },
])

function App() {
  const [mode, setMode] = useState<PaletteMode>('dark')
  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
      },
    }),
    []
  )

  const theme = useMemo(() => createTheme(themeOptions(mode)), [mode])
  return (
    <ColorModeContext.Provider value={colorMode}>
      <StyledEngineProvider injectFirst>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <RouterProvider router={router} />
        </ThemeProvider>
      </StyledEngineProvider>
    </ColorModeContext.Provider>
  )
}

export default App
