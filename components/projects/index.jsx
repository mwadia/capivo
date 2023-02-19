import { Box, Button, Container, Stack, Typography } from '@mui/material'
import React from 'react'
import productsStyle from './products.module.css'
import Product from './Product'

export default function Projects() {
  const data = [
    {
      _id: 1,
      logo: 'https://theconscience.org/wp-content/uploads/2019/09/the-project-logo.jpg',
      text1: 'Designing and Developing Elroda Mobile app',
      text2: 'Lorem ipsum is simply when an unknown printing',
      image: './assets/MockUps/iPhone 113 Pro.png',
    },
    {
      _id: 1,
      logo: 'https://theconscience.org/wp-content/uploads/2019/09/the-project-logo.jpg',
      text1: 'Designing and Developing Elroda Mobile app',
      text2: 'Lorem ipsum is simply when an unknown printing',
      image: './assets/MockUps/iPhone 113 Pro.png',
    },
    {
      _id: 1,
      logo: 'https://theconscience.org/wp-content/uploads/2019/09/the-project-logo.jpg',
      text1: 'Designing and Developing Elroda Mobile app',
      text2: 'Lorem ipsum is simply when an unknown printing',
      image: './assets/MockUps/iPhone 113 Pro.png',
    },
    {
      _id: 1,
      logo: 'https://theconscience.org/wp-content/uploads/2019/09/the-project-logo.jpg',
      text1: 'Designing and Developing Elroda Mobile app',
      text2: 'Lorem ipsum is simply when an unknown printing',
      image: './assets/MockUps/iPhone 113 Pro.png',
    },
  ]
  return (
    <Stack p={{xs:'30px',sm:"80px"}}>
      <Box
        pb={'20px'}
        display={'flex'}
        flexDirection={'column'}
        width={{xs:"171px",sm:"250px"}}
      
      >
        <Typography mb={{xs:"0",sm:"15px"}} sx={{fontSize:{xs:"20px",sm:"27px"}}} className={productsStyle.ourPortfolio}>
          Our Portfolio
        </Typography>
        <Typography sx={{fontSize:{xs:"20px",sm:"27px"}}} className={productsStyle.ourProjects}>
          Our Latest Project
        </Typography>
        <Box mt={{xs:'0',sm:"10px"}}>
          <img style={{width:"100%"}} src="./assets/Icon/Vector7.png" alt="" />
        </Box>
      </Box>
      <Typography sx={{fontSize:{xs:"10px",sm:"20px"},lineHeight:{xs:"16px",sm:"25px"},fontWeight:{sm:500,xs:400},maxWidth:"600px"}} className={productsStyle.textProducts}>
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only
      </Typography>
      <Stack m={{sm:'0 46px',xs:'0'}}>
        <Stack
          mt="40px"
          justifyContent={{sm:'center',xs:"space-evenly"}}
          gap={'20px'}
          direction={'row'}
          flexWrap={'wrap'}
        >
          {data.map((e, i) => (
            <Product item={e} key={i} />
          ))}
        </Stack>
        <Stack alignItems={'flex-end'} mt="49px" p={{xs:"0 20px",sm:'0 30px'}}>
          <Button className={productsStyle.button}>View more</Button>
        </Stack>
       

    
      </Stack>
    </Stack>
  )
}
