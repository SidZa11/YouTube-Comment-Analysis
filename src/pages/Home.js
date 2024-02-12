import React from 'react'
import Layout from '../components/Layout'
import{
  Box
} from '@chakra-ui/react';
import Carousel from '../components/Carousel';
import CarouselData from '../data/CarouselData';
import Hero from '../components/Hero';

const Home = () => {
  
  return (
    <Layout>
      <Carousel 
          length = {CarouselData.length}
          slides = {CarouselData}
        />
        <Box m={'auto'} w='95vw' h='max-content' bgGradient='linear(to-l, gray.800, gray.300)'>
          <Hero />
        </Box> 
    </Layout>
  )
}

export default Home