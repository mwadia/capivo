import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import productsStyle from './products.module.css'

export default function Product({ item }) {
  return (
    <Stack
      alignItems={'center'}
      justifyContent={'center'}
      sx={{
        background:
          ' linear-gradient(180deg, #147DD3 0%, #0052F1 65.1%, #004CBE 100%);',
        /* effect */
        width: { xs: '158px', sm: '200px' },
        height: { xs: '158px', sm: '200px' },
        boxShadow: '0px 10px 15px rgba(0, 0, 0, 0.25);',
        borderRadius: '20px;',
        position: 'relative',
      }}
    >
      <Box sx={{width:{xs:'71px',sm:"80px"}}}>
      <img
        style={{ width: '100%', marginBottom: '10px' }}
        src={item.image}
        alt=""
      />
      </Box>
      
      <Typography mb={{xs:"5px",sm:"8px"}} sx={{fontSize:{xs:"5px",sm:"8px"}}} className={productsStyle.text1}>{item.text1}</Typography>
      <Typography sx={{fontSize:{xs:"4px",sm:"8px"}}} className={productsStyle.text2}> {item.text1}</Typography>

      <img
        style={{
          width: '25px',
          position: 'absolute',
          left: '10px',
          top: '10px',
        }}
        src={item.logo}
        alt=""
      />
    </Stack>
  )
}
