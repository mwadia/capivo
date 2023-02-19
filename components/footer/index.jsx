import { Box, Stack, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
  const data = [
    {
      link: '#',
      img: './assets/Icon/face.png',
    },
    {
      link: '#',
      img: './assets/Icon/insta.png',
    },
    {
      link: '#',
      img: './assets/Icon/linked.png',
    },
    {
      link: '#',
      img: './assets/Icon/twitter.png',
    },
  ]
  const infoData=[{
    title:'Lorem Ipsum',
    description: 'Borem ipsum dolor sit amet, consectetur adipiscing elit Borem ipsum dolor sit amet,'
  },
  {
    title:'Lorem Ipsum',
    description: 'Borem ipsum dolor sit amet, consectetur adipiscing elit Borem ipsum dolor sit amet,'
  },
  {
    title:'Lorem Ipsum',
    description: 'Borem ipsum dolor sit amet, consectetur adipiscing elit Borem ipsum dolor sit amet,'
  },
  {
    title:'Lorem Ipsum',
    description: 'Borem ipsum dolor sit amet, consectetur adipiscing elit Borem ipsum dolor sit amet,'
  }]
  return (
    <Stack
      p={{ xs: '48px 45px 20px 45px',sm:"80px 80px 20px 80px" }}
      sx={{
        backgroundImage: 'url(./assets/footer/footer.png)',
        backgroundSize: '100% 100%'
      }}
    >
      <Box  width={{xs:'86px',sm:"150px"}}>
        <img
          style={{ width: '100%', height: '100%' }}
          src="./assets/Logo/Untitled-1.png"
          alt=""
        />
      </Box>
      <Stack mt={{sm:'30px',sm :'80px'}} alignItems={'center'} gap={{xs:'40px',sm:'80px'}} direction={'row'}>
        <Stack  direction={'row'} gap={{xs:'13px',sm:"25px"}}>
          {data.map((e, i) => (
            <Stack width={{ xs: '11px',sm:'20px' }} key={i}>
              <a style={{ width: '100%' }} href={e.link}>
                <img style={{ width: '100%' }} src={e.img} alt="" />
              </a>
            </Stack>
          ))}
        </Stack>
        <Stack>
          <Typography
            sx={{
              fontWeight: '600',
              fontSize: {xs:'7px',sm:"18px"},
              letterSpacing: '0.25px',
              color: 'white',
            }}
          >
            Have questions? Call 123456789 or email sales@capivo.com
          </Typography>{' '}
          <Typography
            sx={{
              fontWeight: '400',
              fontSize: {xs:'5px',sm:"15px"},
              letterSpacing: '0.25px',
              color: 'white',
            }}
          >
            Our sales team is available Monday to Friday from 8 a.m. to 8 p.m{' '}
          </Typography>
        </Stack>
      </Stack>
            <Stack mt={{xs:"18px"}} direction={'row'} justifyContent={'space-between'}>
              {
                infoData.map((e,i)=><Stack gap={'8px'}>
                  <Typography sx={{fontWeight:'500',fontSize:{sm:'22px',xs:"7px"},lineHeight:{sm:'38px',xs:"12px"},color:'white'}}>
                    {e.title}
                  </Typography>
                  <Typography maxWidth={{xs:"40px",sm:'146px'}} sx={{fontWeight:'400',fontSize:{sm:'18px',xs:"5px"},lineHeight:{sm:'27px',xs:"8px"},color:'#BBBBBB'}}>
                    {e.description}
                  </Typography>
                </Stack>)
              }
            </Stack>
            <Typography mt={5} align='center' sx={{fontWeight:'400',fontSize:{sm:'20px',xs:"5px"},lineHeight:{sm:'30px',xs:"8px"},color:'#FFFFFF'}}>
            © 2008 - 2023 Themis Solutions Inc. (Clio) | 300 - 4611 Canada Way, Burnaby, BC V5G 4X3
            </Typography>
    </Stack>
  )
}
