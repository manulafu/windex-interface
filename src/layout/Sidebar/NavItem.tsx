import React, { useEffect } from 'react'
import {
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from '@mui/material'
import { FiberManualRecord } from '@mui/icons-material'
import { useDispatch, useSelector } from 'react-redux'
import { menuOpen } from '../../store/slices/customization'
import { Link } from 'react-router-dom'
import { FontSize, NavItemProps, View } from './types'
import { RootState } from '../../store/store'

const NavItem: React.FC<NavItemProps> = ({ item, level }) => {
  const theme = useTheme()
  const dispatch = useDispatch()
  const customization = useSelector((state: RootState) => state.customization)

  const Icon = item.icon
  const itemIcon = item.icon ? (
    <Icon fontSize="medium" />
  ) : (
    <FiberManualRecord
      sx={{
        width:
          customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
        height:
          customization.isOpen.findIndex((id) => id === item?.id) > -1 ? 8 : 6,
      }}
      fontSize={level > 0 ? 'inherit' : 'medium'}
    />
  )

  const itemHandler = (id: View) => dispatch(menuOpen({ id }))

  // active menu item on page load
  useEffect(() => {
    const currentIndex = document.location.pathname
      .toString()
      .split('/')
      .findIndex((id) => id === item.id)
    if (currentIndex > -1) {
      dispatch(menuOpen({ id: item.id }))
    }
    // eslint-disable-next-line
  }, [])

  return (
    <Link
      to={item.url}
      style={{ textDecoration: 'none', color: theme.palette.text.secondary }}
    >
      <ListItemButton
        sx={{
          borderRadius: `${customization.borderRadius}px`,
          mb: 0.5,
          alignItems: 'flex-start',
          backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
          py: level > 1 ? 1 : 1.25,
          pl: `${level * 24}px`,
        }}
        selected={customization.isOpen.findIndex((id) => id === item.id) > -1}
        onClick={() => itemHandler(item.id)}
      >
        <ListItemIcon sx={{ my: 'auto', minWidth: !item?.icon ? 18 : 36 }}>
          {itemIcon}
        </ListItemIcon>
        <ListItemText
          primary={
            <Typography variant="body1" color="inherit">
              {item.title}
            </Typography>
          }
        />
      </ListItemButton>
    </Link>
  )
}

export default NavItem
