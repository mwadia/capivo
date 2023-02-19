import { Stack, Typography, Button, Box } from '@mui/material';
import ZigzagStyles from './Zigzag.module.css';

export default function Zigzag() {
  return (
    <Stack
      className={ZigzagStyles.allRow}
      gap={8}
      width='100%'
      mt={{ sm: '30px' }}
    >
      <Stack
        className={ZigzagStyles.rowOne}
        direction='row'
        sx={{ justifyContent: 'space-between' }}
      >
        <Stack className={ZigzagStyles.content} gap={1}>
          <Typography className={ZigzagStyles.title}>Lorem Ipsum</Typography>
          <Typography className={ZigzagStyles.description}>
            Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Typography>
          <Button
            sx={{
              backgroundColor: '#002646',
              letterSpacing: '1.2px',
              fontSize: { xs: '10px', sm: '20px' },
              fontWeight: '500',
              fontStyle: 'normal',
              width: { xs: '116px', sm: '232px' },
              height: { xs: '33px', sm: '66px' },
              borderRadius: '5px',
              textTransform: 'capitalize',
            }}
            variant='contained'
          >
            Lorim Ipsum
          </Button>
        </Stack>
        <Stack sx={{ position: 'relative' }}>
          <Stack
            sx={{
              width: { xs: '163.32px', sm: '300px' },
              height: { xs: '171.28px', sm: '300px' },
            }}
            className={ZigzagStyles.imgContainer}
          >
            <Box
              sx={{
                width: { xs: '105.12px', sm: '210px' },
                height: { xs: '149.37px', sm: '284px' },
                position: 'absolute',
                right: { xs: '18px', sm: '2px' },
                bottom: { xs: 0, sm: '-10px' },
              }}
            >
              <img
                style={{ width: '100%', height: '100%' }}
                className={ZigzagStyles.hand}
                src='./assets/Mockups/mockuuups-female-hand-holding-iphone-14-pro-mockup.png'
              />
            </Box>
            <img
              className={ZigzagStyles.elements}
              src='./assets/background/Group121.png'
            />
          </Stack>
          <Stack
            sx={{
              width: { xs: '200.29px', sm: '320px' },
              height: { xs: '174.09px', sm: '320px' },
              left: { xs: '43px', sm: '20px' },
            }}
            className={ZigzagStyles.shadow}
          ></Stack>
        </Stack>
      </Stack>
      <Stack
        className={ZigzagStyles.rowTow}
        direction='row'
        sx={{ justifyContent: 'space-between' }}
      >
        <Stack sx={{ position: 'relative' }}>
          <Stack
            sx={{
              width: { xs: '170px', sm: '300px' },
              height: { xs: '176.28px', sm: '312px' },
            }}
            className={ZigzagStyles.imgContainerTow}
          >
            <Box
              sx={{
                width: { xs: '145.97px', sm: '290px' },
                height: { xs: '84.57px', sm: '170px' },
                position: 'absolute',
                right: { xs: '18px', sm: '20px' },
                bottom: { xs: '50px', sm: '70px' },
              }}
            >
              <img
                style={{ width: '100%', height: '100%' }}
                className={ZigzagStyles.labtop}
                src='./assets/Mockups/MacBook ProDD 16.png'
              />
            </Box>
            <img
              className={ZigzagStyles.elementsTow}
              src='./assets/background/Group122.png'
            />
          </Stack>
          <Stack
            sx={{
              width: { xs: '200.29px', sm: '320px' },
              height: { xs: '174.09px', sm: '320px' },
              left: { xs: '-43px', sm: '-15px' },
              top: { xs: '10px', sm: '5px' },
            }}
            className={ZigzagStyles.shadowTow}
          ></Stack>
        </Stack>
        <Stack className={ZigzagStyles.contentTow} gap={1}>
          <Typography className={ZigzagStyles.title}>Lorem Ipsum</Typography>
          <Typography className={ZigzagStyles.description}>
            Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Typography>
          <Button
            sx={{
              backgroundColor: '#002646',
              letterSpacing: '1.2px',
              fontSize: '10px',
              fontWeight: '500',
              fontStyle: 'normal',
              width: '116px',
              height: '33px',
              borderRadius: '5px',
              textTransform: 'capitalize',
            }}
            variant='contained'
          >
            Lorim Ipsum
          </Button>
        </Stack>
      </Stack>
      <Stack
        className={ZigzagStyles.rowThree}
        direction='row'
        sx={{ justifyContent: 'space-between' }}
      >
        <Stack className={ZigzagStyles.content} gap={1}>
          <Typography className={ZigzagStyles.title}>Lorem Ipsum</Typography>
          <Typography className={ZigzagStyles.description}>
            Lorem Ipsum Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries
          </Typography>
          <Button
            sx={{
              backgroundColor: '#002646',
              letterSpacing: '1.2px',
              fontSize: { xs: '10px', sm: '20px' },
              fontWeight: '500',
              fontStyle: 'normal',
              width: { xs: '116px', sm: '232px' },
              height: { xs: '33px', sm: '66px' },
              borderRadius: '5px',
              textTransform: 'capitalize',
            }}
            variant='contained'
          >
            Lorim Ipsum
          </Button>
        </Stack>
        <Stack sx={{ position: 'relative' }}>
          <Stack
            sx={{
              width: { xs: '163.32px', sm: '300px' },
              height: { xs: '171.28px', sm: '300px' },
            }}
            className={ZigzagStyles.imgContainerThree}
          >
            <Box
              sx={{
                width: { xs: '105.12px', sm: '210px' },
                height: { xs: '122.37px', sm: '244px' },
                position: 'absolute',
                right: { xs: '36px', sm: '50px' },
                bottom: { xs: '17px', sm: '13px' },
              }}
            >
              <img
                style={{ width: '100%', height: '100%' }}
                src='./assets/Mockups/iPhone 113 Pro.png'
              />
            </Box>
            <img
              className={ZigzagStyles.elements}
              src='./assets/background/Group123.png'
            />
          </Stack>
          <Stack
            sx={{
              width: { xs: '200.29px', sm: '320px' },
              height: { xs: '174.09px', sm: '320px' },
              left: { xs: '43px', sm: '20px' },
            }}
            className={ZigzagStyles.shadow}
          ></Stack>
        </Stack>
      </Stack>
    </Stack>
  );
}
