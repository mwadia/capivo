import { Box, Stack, Typography } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import navStyle from './nav.module.css'
import MenuItems from './MenuItems'

export default function Nav() {
  return (
    <Stack
      p="17px 31px"
      direction={'row'}
      alignItems={'center'}
      justifyContent={'space-between'}
      position={'fixed'}
      // zIndex={50}
      sx={{ background: '#002646', width: '100%', zIndex: 50 }}
    >
      <Stack justifyContent={{sm:'space-between'}} gap="15px" direction={'row'}>
        <Box sx={{ width: '23px', display: { xs: 'block', sm: 'none' } }}>
          <img style={{ width: '100%',marginTop:'5px' }} src="./assets/Icon/menu.png" />
        </Box>
        <Box sx={{ width: {xs:'96px',sm:'120px'} }}>
          <img style={{ width: '100%',marginTop:'5px' }} src="./assets/Logo/Untitled-1.png" />
        </Box>
        <Stack sx={{display:{
          xs:'none',sm:'block'
        }}}>
          <MenuItems />
        </Stack>
      </Stack>
      <Typography sx={{fontSize:{sx:'14px',sm:'16px'}}} className={navStyle.lang}>العــربــيه</Typography>
    </Stack>
  )
}
