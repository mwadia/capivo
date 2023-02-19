import { Button, Stack } from '@mui/material'
import React from 'react'
import navStyle from './nav.module.css'

export default function MenuItems() {
  return (
    <Stack ml={'15%'} gap={'15px'} width={'350px'}   className={navStyle.menuItems} direction={{ xs: 'column', sm: 'row' }}>
      <a href="#">Home</a>
      <a href="#">Web Design</a>
      <a href="#">Mobile App </a>
      <a href="#">PMP </a>
    </Stack>
  )
}
