import { Box, Stack } from '@mui/material'
import React from 'react'

function CloudD() {
  return (
    <Stack mt={'70px'} direction={'row'} justifyContent={'center'} gap={'25px'}>
      <Box width={{ xs: '70px', sm: '200px' }}>
        <img style={{ width: '100%' }} src="./assets/Image/1.png" alt="" />
      </Box>{' '}
      <Box width={{ xs: '70px', sm: '200px' }}>
        <img style={{ width: '100%' }} src="./assets/Image/1.png" alt="" />
      </Box>{' '}
      <Box width={{ xs: '70px', sm: '200px' }}>
        <img style={{ width: '100%' }} src="./assets/Image/1.png" alt="" />
      </Box>
    </Stack>
  )
}

export default CloudD
