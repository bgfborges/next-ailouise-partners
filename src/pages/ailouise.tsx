import { Flex, Heading, Box, Input, Text, Button, Stack } from '@chakra-ui/react';
import Lottie from 'react-lottie';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import * as louiseAnimationData from '../assets/louise-animation.json';
import { FaLocationArrow } from 'react-icons/fa';

export default function Ailouise() {

    const louiseAnimationDefaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: louiseAnimationData,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
        <Flex direction="column" maxH="100vh">
            <Header />

            <Flex w="100%" my="6" maxW={1480} mx="auto" px="6">
                <SideBar />
                <Flex flex="1">
                    <Flex flex='1' direction='column' align='center' justify='center'>
                        <Box w={350}>
                            <Lottie
                                options={louiseAnimationDefaultOptions}
                                width="100%"
                            />
                        </Box>
                        <Flex p='4' direction='column'>
                            <Flex direction='column'>
                                <Heading as="h1" size="3xl" isTruncated>
                                    Sou a Louise.
                                </Heading>
                                <Text fontSize="2xl">E quem é você? 🤔</Text>
                            </Flex>
                            <Flex py='4' direction='row'>
                                <Input maxW={400} variant="unstyled" bg='gray.800' p='4' placeholder="Primeiro Nome" size="lg" />
                                <Flex
                                    as='button'
                                    w={60}
                                    h={59}
                                    borderRadius='full'
                                    ml='2'
                                    bg='dkpurple.900'
                                    type="submit"
                                    align='center'
                                    justify='center'
                                    color='gray.200'
                                >
                                    <FaLocationArrow />
                                </Flex>
                            </Flex>
                        </Flex>
                    </Flex>
                </Flex>

            </Flex>
        </Flex>
    )
}