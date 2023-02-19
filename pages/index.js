import Head from 'next/head';
import Button from '@mui/material/Button';
import Header from '@/components/header';
import Projects from '@/components/projects';
import Company from '@/components/campony';
import Plan from '@/components/plan';
import People from '@/components/people';
import CloudD from '@/components/cloud';
import Footer from '@/components/footer';
import Categories from '@/components/categories';
import Zigzag from '@/components/zigzag';

export default function Home() {
  return (
    <>
      <Head>
        <title>capivo</title>
      </Head>
      <main>
        <Header />
        <Categories />
        <Zigzag />
        <Projects />
        <Company />
        <Plan />
        <People />
        <CloudD />
        <Footer />
      </main>
    </>
  );
}
