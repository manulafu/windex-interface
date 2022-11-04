import React from 'react'

import NavItem from './NavItem'

import { SwapHoriz, Person } from '@mui/icons-material'
import { Item } from './types'

const items: Item[] = [
  {
    id: 'arbitrage',
    title: 'Arbitrage',
    type: 'item',
    icon: SwapHoriz,
    url: '/',
  },
  {
    id: 'profile',
    title: 'Profile',
    type: 'item',
    icon: Person,
    url: 'profile',
  },
]

// ==============================|| SIDEBAR MENU LIST ||============================== //

const MenuList = () => {
  const navItems = items.map((item) => (
    <NavItem key={item.id} item={item} level={1} />
  ))

  return <>{navItems}</>
}

export default MenuList
