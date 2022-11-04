import React, { useContext } from 'react'
import { useTheme, Box, IconButton } from '@mui/material'
import { Brightness7, Brightness4 } from '@mui/icons-material'

import ColorModeContext from '../../context/ColorModeContext'

const Settings = () => {
  const theme = useTheme()
  const colorMode = useContext(ColorModeContext)

  return (
    <Box sx={{ ml: theme.spacing(1), borderRadius: '50%' }}>
      <IconButton onClick={colorMode.toggleColorMode} color="inherit">
        {theme.palette.mode === 'dark' ? <Brightness7 /> : <Brightness4 />}
      </IconButton>
    </Box>
  )
}

export default Settings
