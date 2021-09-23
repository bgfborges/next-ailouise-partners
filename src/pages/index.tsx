import { useCallback, useRef, useState } from "react";
import { Flex, SimpleGrid, Box, Text, theme, Heading, Icon, CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import Router from 'next/router';
import dynamic from 'next/dynamic';
import Lottie from 'react-lottie';
import * as dashAnimationData from '../assets/back-dashboard.json';
import * as explosionAnimationData from '../assets/explosion.json';
import * as exterminorAnimationData from '../assets/exterminor.json';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
const Chart = dynamic(() => import('react-apexcharts'), {
  ssr: false
});
import { GiChemicalArrow } from 'react-icons/gi';

const options = {
  chart: {
    toolbar: {
      show: false
    },
    zoom: {
      enabled: false,
    },
    foreColor: theme.colors.gray[300],
  },
  grid: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  tooltip: {
    enabled: false,
  },
  xaxis: {
    type: 'datetime' as 'datetime',
    axisBorder: {
      color: theme.colors.gray[300]
    },
    axisTicks: {
      color: theme.colors.gray[300]
    },
    categories: [
      '2021-09-12T00:00:00.000Z',
      '2021-09-13T00:00:00.000Z',
      '2021-09-14T00:00:00.000Z',
      '2021-09-15T00:00:00.000Z',
      '2021-09-16T00:00:00.000Z',
      '2021-09-17T00:00:00.000Z',
    ],
  }
};

const series = [
  {
    name: 'series1',
    data: [0, 10, 6, 15, 10, 25]
  }
];

export default function Home() {

  const [explostion, setExplosion] = useState<boolean>(false);

  const buttonNextPageRef = useRef<HTMLDivElement>(null);
  const explosionAlienRef = useRef<HTMLDivElement>(null);
  const exterminorAnimationRef = useRef<HTMLDivElement>(null);

  const DashAnimationDefaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: dashAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  
  const explosionAnimationDefaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: explosionAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  const showExplosion = useCallback(() => {
    if( explosionAlienRef.current.style.visibility === 'visible'){
      explosionAlienRef.current.style.visibility = 'hidden';
    } else {
      explosionAlienRef.current.style.visibility = 'visible';
    }
  }, []);

  const showExterminor = useCallback(() => {
    exterminorAnimationRef.current.style.left = '110%';
  }, []);

  const alienAnimationShow = useCallback(() => {
    if( buttonNextPageRef ){
      showExplosion();
      setTimeout( function () { showExplosion() }, 1500);
      setTimeout( function () { showExterminor() }, 2000);
      setTimeout( function () { Router.push('/ailouise') }, 2000 );
    }
  }, [showExplosion, showExterminor]);

  const exterminorAnimationDefaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: exterminorAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <Flex direction="column" maxH="100vh">
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
        <SideBar />

        <Flex flex="1" direction="column" px="12" position="relative">
          
          <Flex direction="row" flex="1" align="center" justify="center" h={320} position="relative">

            <Flex flex="1" z-index="10" direction="column">
              <Text fontSize="xl" mb="8" fontWeight="bold" color="green.900">aiLouise Partners</Text>
              <Heading as="h1" size="4xl" isTruncated>
                Is it CyberPunk?
              </Heading>
              <Text fontSize="2xl" mt="8" mb="4">No mundo de hoje, quem cria sites está fadado a Matrix. Embarque com seus clientes numa experiência CyberPunk.</Text>
            </Flex>

            <Flex direction="column" position="relative" width={400}>
              <Flex position="absolute" z-index="100" top={-40}>
                <Lottie
                  options={DashAnimationDefaultOptions}
                  width="100%"
                />
              </Flex>
            </Flex>
          </Flex>

          <Flex>

            <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
              <Box p="8" bg="dkpurple.900" borderRadius="2xl" h={290}>
                <Text px="4" fontWeight="bold">Novas Células</Text>
                <Chart options={options} series={series} type="area" height={190} />
              </Box>
              
              <Box p="8" bg="dkpurple.900" borderRadius="2xl" h={290}>
                <Text px="4" fontWeight="bold">Valores Gerados</Text>
                <Chart options={options} series={series} type="area" height={190} />
              </Box>
            </SimpleGrid>

            <Flex direction="column" align="center" justify="center" p="8">

            <CircularProgress value={10} trackColor="gray.800" color="green.900" size="120px" thickness="8px">
              <CircularProgressLabel
                display="flex"
                bg="gray.800"
                w={100}
                h={100}
                borderRadius="full"
                p={0.5}
                color="green.900"
                sx={{
                  transition: 'background 100ms',
                }}
                _hover={{ background: 'green.900', color: 'gray.50' }}
                onClick={alienAnimationShow}
              >
                <Flex 
                  cursor="pointer" 
                  flex="1" 
                  borderRadius="full" 
                  align="center" 
                  justify="center"
                >
                  <Icon as={ GiChemicalArrow } fontSize={30} alignSelf="center" sx={{ transform: 'rotate(-46deg)' }} />
                </Flex>
              </CircularProgressLabel>
            </CircularProgress>
            </Flex>

          </Flex>

        </Flex>

      </Flex>
        
        <Flex 
          position="absolute" 
          left={-150}
          bottom={0} 
          w={300} 
          h={300} 
          justify='flex-start'
          ref={explosionAlienRef}
          sx={{
            visibility: 'hidden'
          }}
        >
          <Lottie
            options={explosionAnimationDefaultOptions}
            width="100%"
            isStopped={explostion}
          />
        </Flex>
        
        <Flex 
          position="absolute" 
          left={-810}
          bottom={0} 
          w={800}
          h={500} 
          justify='flex-start'
          ref={exterminorAnimationRef}
          sx={{
            transition: 'left 4s ease',
          }}
        >
          <Lottie
            options={exterminorAnimationDefaultOptions}
            width="100%"
            isStopped={explostion}
          />
        </Flex>
      
    </Flex>
  )
}
