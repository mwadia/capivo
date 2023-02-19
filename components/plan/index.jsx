import { Box, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import planStyle from './plan.module.css'

export default function Plan() {
  const data = [
    {
      title: 'Complete Project',
      num: '3500+',
    },
    {
      title: 'Available Country',
      num: '25',
    },
    {
      title: 'Worker',
      num: '250+',
    },
    {
      title: 'Worldwide User',
      num: '40M',
    },
  ]
  return (
    <Container maxWidth='500px'>
    <Stack
      // minHeight={{sx:'26vh',sm:"40vh"}}
      maxWidth={'1200px'}
      alignItems={'center'}
      pt={{ xs: '26px' }}
      position={'relative'}
      m={'auto'}
    >
      <Box
        sx={{
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          // height: '100%',
          position: 'absolute',
          width: '100%',
          top:'0',
          zIndex: 1,
          opacity:0.1
        }}
      >
        <img style={{width:"100%"}} src="./assets/Image/plan.png" alt="" />
      </Box>
      {/* <Box
        sx={{
          background: '#ffffffba',
          backgroundSize: '100%',
          backgroundRepeat: 'no-repeat',
          height: '100%',
          position: 'absolute',
          width: '100%',
          zIndex: 2,
        }}
      ></Box> */}
      <Stack alignItems={'center'} pt={{ xs: '26px',sm:"44px" }} gap={{xs:'34px',sm:'8vw'}} position={'absolute'} zIndex={3}>
        <Typography
          className={planStyle.text} align='center'
          sx={{ fontSize: { xs: '15px',sm:"22px" },fontWeight:{xs:600,sm:700}, maxWidth: { xs: '279px',sm:"417px" },lineHeight:{xs:'22px',sm:'32px'} }}
        >
          we completed 1500+ project yearly successfully & counting
        </Typography>
        <Stack direction={'row'} gap={{sx:'25px',sm:"8vw"}} justifyContent={'space-evenly'}  width={'100%'}>
          {data.map((e, i) => (
            <Stack alignItems={'center'} gap={{ xs: '10px',sm:"24px" }} key={i}>
                            <Typography sx={{fontSize:{xs:"14px",sm:"22px"}}} className={planStyle.num}>{e.num}</Typography>

              <Typography sx={{fontSize:{xs:"9px",minWidth:{xs:"250px"},sm:"16px"},fontWeight:{
                xs:600,sm:900
              }}} className={planStyle.title}>{e.title}</Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </Stack></Container>
  )
}
