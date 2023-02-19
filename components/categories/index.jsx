import { Box, Stack, Typography } from '@mui/material';
import CategoriesStyle from './categories.module.css';
export default function Categories() {
  const data = [
    { image: './assets/icon/computer.png', title: 'Web Design' },
    { image: './assets/icon/mobile-development.png', title: 'Mobile Apps' },
    { image: './assets/icon/website (2).png', title: 'UI&UX Design' },
    { image: './assets/icon/project-management (1).png', title: 'PMP' },
  ];
  return (
    <Stack
      alignItems='center'
      gap= {{xs: '18px', sm: '70px'}}
      width='100%'
      padding='0 30px'
      mt={{ sm: '110px' }}
    >
      <Typography
        sx={{ fontSize: { xs: '13px', sm: '20px' } }}
        className={CategoriesStyle.introParagraph}
      >
        Lorem Ipsum has been the industry's standard dummy text ever since the
        1500s
      </Typography>
      <Stack
        direction='row'
        justifyContent='center'
        width='100%'
        gap={{ sm: '50px', xs: '10px' }}
      >
        {data.map((item, i) => (
          <Stack
            key={i}
            className={CategoriesStyle.category}
            sx={{
              width: { xs: '84px', sm: '150px' },
              height: { xs: '84px', sm: '150px' },
            }}
            alignItems='center'
            justifyContent='center'
            gap={{ xs: 0.5, sm: 2 }}
          >
            <Box
              sx={{
                width: { xs: '30px', sm: '70px' },
                height: { xs: '30px', sm: '70px' },
              }}
            >
              <img src={item.image} />
            </Box>
            <Typography sx={{ fontSize: { xs: '7px', sm: '12px' } }}>
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
}
