import React from 'react'
import { Box, Button, Stack, Typography } from '@mui/material'
import Pull1 from './pulls/pull1'
import Pull2 from './pulls/Pull2'
import navStyle from './nav.module.css'

export default function Welcome() {
  return (
    <Stack
      top={'63px'}
      sx={{
        minHeight: '43vh',
        width: '100%',
        position: 'relative',
      }}
    >
      <img
        style={{ objectFit: 'contain' }}
        src="./assets/new/New Projectnnn.png"
        alt=""
      />
      <Stack p={{sm:'0 3rem',xs:'0 20px'}} mt={{md:'8%',sm:'5%',xs:'5%'}} gap={{md:'45px',sm:'25px',xs:'10px'}} position="absolute" width={'100%'} height={'100%'}>
        <Typography
          sx={{
            fontSize: {
              md: '1.5rem',sm:'1.2rem',xs:'10px'
            },
            lineHeight: '30px',
            fontWeight: '600',
            letterSpacing: '0.25px',
            color: '#00D3FF',
          }}
        >
          Lorem Ipsum
        </Typography>
        <Stack gap={'10px'}>
          <Typography
            sx={{
              
              fontSize: {
                md: '1.6rem',sm:"1.4rem",xs:'12px'
              },
              lineHeight:{sm: '35px',xs:'15px'},
              fontWeight: '600',
              letterSpacing: '0.25px',
              color: '#FFFFFF',
            }}
          >
            Is simply unknown text
          </Typography>
          <Typography
            sx={{maxWidth:{sm:'250px',xs:'170px'},
              fontSize: {
                md: '1rem',sm:'0.9rem',xs:'8px'
              },
              lineHeight:{sm: '30px',xs:'15px'},
              // fontWeight: '600',
              letterSpacing: '0.25px',
              color: '#CECECE',
            }}
          >
            when an unknown printer took a galley of type and scrambled it to
            make a type specimen book.
          </Typography>
        </Stack>
        <Button  sx={{width:{md:'150px',sm:'90px',xs:'70px'},padding:{sm:"8px",xs:"5px"},background:"white",color:'#002646',fontSize:{sm:'10px',xs:"7px"}}} variant="contained">contact us</Button>
      </Stack>
    </Stack>
  )
}
