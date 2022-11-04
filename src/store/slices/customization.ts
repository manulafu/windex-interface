import { createSelector, createSlice } from '@reduxjs/toolkit'

export interface Customization {
  isOpen: string[]
  fontFamily: string
  borderRadius: 12
  opened: boolean
}

const initialCustomization: Customization = {
  isOpen: ['arbitrage'],
  fontFamily: `'Roboto', sans-serif`,
  borderRadius: 12,
  opened: true,
}

export const customizationSlice = createSlice({
  name: 'customization',
  initialState: initialCustomization,
  reducers: {
    setMenu(slice, { payload }) {
      slice.opened = payload.opened
    },
    menuOpen(slice, { payload }) {
      slice.isOpen = [payload.id]
    },
    setFontFamily(slice, { payload }) {
      slice.fontFamily = payload.fontFamily
    },
    setBorderRadius(slice, { payload }) {
      slice.borderRadius = payload.borderRadius
    },
  },
})

export const { setMenu, menuOpen, setBorderRadius, setFontFamily } =
  customizationSlice.actions

export default customizationSlice.reducer
