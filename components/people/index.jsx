import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function People() {
  return (
    <Stack
      mt={{ xs: '50vw', md: '45vw' }}
      sx={{
        width: '100%',
        height: '37vh',
        position: 'relative',
        zIndex: 10,
      }}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Box
        sx={{
          backgroundImage: 'url(./assets/Icon/semicolon.png)',
          width: '100%',
          height: '100%',
          backgroundSize: { xs: '100px', sm: '180px' },
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: { xs: '0', sm: '-10%' },
          backgroundPositionX: { xs: '40%', sm: '43%' },
          position: 'absolute',
          opacity: '0.2',
          paddingTop: { sm: '500px' },
          zIndex: 20,
        }}
      ></Box>
      <Box
        sx={{
          backgroundImage: 'url(./assets/Icon/semicolon.png)',
          width: '100%',
          height: '100%',
          backgroundSize: { xs: '250px', sm: '300px' },
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '20%',
          backgroundPositionX: '50%',
          position: 'absolute',
          transform: 'rotate(180deg)',
          opacity: '0.2',
        }}
      ></Box>
      <Stack>
        <Typography
          align="center"
          sx={{
            fontSize: { xs: '6px', sm: '18px' },
            fontWeight: { xs: '500' },
            lineHeight: { xs: '9px', sm: '25px' },
            color: '#686868',
            maxWidth: { xs: '208px', sm: '520px' },
          }}
        >
          We are a friendly company to work with & We provide useful advice to
          the customers on how to make their products better & compete with
          other products in the
          <br />
          <br />
          market Capivo design agency
        </Typography>
      </Stack>
      <Stack position={'absolute'} top={0} zIndex={5}>
        <Stack
          borderRadius={'50%'}
          border={'2px solid #00868E'}
          width={{ xs: '40px', sm: '80px' }}
          height={{ xs: '40px', sm: '80px' }}
          p={'1px'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'absolute'}
          top={{ xs: '70px', sm: '-10px' }}
          right={{ xs: '-17px', sm: '-47px' }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'fill',
              // border: '1px solid white',
            }}
            src="./assets/Pepole/3.jpg"
            alt=""
          />
        </Stack>
        <Stack
          borderRadius={'50%'}
          border={'2px solid #00868E'}
          width={{ xs: '30px', sm: '60px' }}
          height={{ xs: '30px', sm: '60px' }}
          p={'1px'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'absolute'}
          top={{ xs: '85px', sm: '20px' }}
          left={{ xs: '60px', sm: '120px' }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'fill',
              // border: '1px solid white',
            }}
            src="./assets/Pepole/6.jpg"
            alt=""
          />
        </Stack>
        <Stack
          borderRadius={'50%'}
          border={'2px solid #00868E'}
          width={{ xs: '30px', sm: '60px' }}
          height={{ xs: '30px', sm: '60px' }}
          p={'1px'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'absolute'}
          top={{ sm: '20px', xs: '85px' }}
          right={{ sm: '100px', xs: '50px' }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'fill',
              // border: '1px solid white',
            }}
            src="./assets/Pepole/7.jpg"
            alt=""
          />
        </Stack>
        <Stack
          borderRadius={'50%'}
          border={'2px solid #00868E'}
          width={{ xs: '30px', sm: '60px' }}
          height={{ xs: '30px', sm: '60px' }}
          p={'1px'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'absolute'}
          top={{ xs: '140px', sm: '110px' }}
          left={{ xs: '120px', sm: '270px' }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'fill',
              // border: '1px solid white',
            }}
            src="./assets/Pepole/5.jpg"
            alt=""
          />
        </Stack>
        <Stack
          borderRadius={'50%'}
          border={'2px solid #00868E'}
          width={{ xs: '30px', sm: '60px' }}
          height={{ xs: '30px', sm: '60px' }}
          p={'1px'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'absolute'}
          top={{ xs: '100px', sm: '100px' }}
          right={{ xs: '120px', sm: '270px' }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'fill',
              // border: '1px solid white',
            }}
            src="./assets/Pepole/4.jpg"
            alt=""
          />
        </Stack>

        <Stack
          borderRadius={'50%'}
          border={'2px solid #00868E'}
          width={{ xs: '30px', sm: '60px' }}
          height={{ xs: '30px', sm: '60px' }}
          p={'1px'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'absolute'}
          top={{ xs: '190px', sm: '200px' }}
          left={{ xs: '70px', sm: '170px' }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'fill',
              // border: '1px solid white',
            }}
            src="./assets/Pepole/2.jpg"
            alt=""
          />
        </Stack>
        <Stack
          borderRadius={'50%'}
          border={'2px solid #00868E'}
          width={{ xs: '30px', sm: '60px' }}
          height={{ xs: '30px', sm: '60px' }}
          p={'1px'}
          alignItems={'center'}
          justifyContent={'center'}
          position={'absolute'}
          top={{ xs: '190px', sm: '200px' }}
          right={{ xs: '90px', sm: '220px' }}
        >
          <img
            style={{
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              objectFit: 'fill',
              // border: '1px solid white',
            }}
            src="./assets/Pepole/1.jpg"
            alt=""
          />
        </Stack>
      </Stack>
    
    </Stack>
  )
}
