import React from 'react'

export type FontSize = 'inherit' | 'large' | 'medium' | 'small'

export type View = 'arbitrage' | 'profile'

export interface Item {
  id: View
  title: string
  type: 'item' | 'group'
  icon: React.ElementType
  url: string
}

export interface NavItemProps {
  item: Item
  level: number
}

export interface SidebarProps {
  drawerOpen: boolean
  drawerToggle: () => void
}
