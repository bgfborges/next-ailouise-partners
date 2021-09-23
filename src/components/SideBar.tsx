import { Box, Stack, Text, Link as ChakraLink, Icon, Image } from "@chakra-ui/react";
import Link from 'next/link';
import { RiDashboardLine, RiHeartPulseFill, RiPagesLine, RiTeamLine } from 'react-icons/ri';
import { GiBoxUnpacking, GiPoliceOfficerHead } from 'react-icons/gi';
import { MdRecordVoiceOver } from 'react-icons/md';
import { SiHackaday } from 'react-icons/si';
import { CgWebsite } from 'react-icons/cg';

export default function Home() {
    return (
        <Box w="52" px="4" as="aside">
            <Stack spacing="8" align="flex-start">
                <Box>
                    <Text fontWeight="bold" color="gray.300" fontSize="x-small">GENERAL</Text>
                    <Stack spacing="1" mt="8" align="stretch">
                        <Link href='/' passHref>
                            <ChakraLink display="flex" p="2" align="center"
                            sx={{
                                transition: 'border-radius 300ms',
                                borderRadius: '40%'
                            }}
                            _hover={{
                                textDecoration: 'none',
                                background: '#8176ff',
                                borderRadius: '5px'
                            }}>
                                <Icon as={RiDashboardLine} fontSize="20" />
                                <Text ml="4" fontWeight="small" fontSize="small">Dashboard</Text>
                            </ChakraLink>
                        </Link>
                        <Link href='/ailouise' passHref>
                            <ChakraLink display="flex" p="2" align="center" 
                            sx={{
                                transition: 'border-radius 300ms',
                                borderRadius: '40%'
                            }}
                            _hover={{
                                textDecoration: 'none',
                                background: '#8176ff',
                                borderRadius: '5px'
                            }}>
                                <Icon as={RiHeartPulseFill} fontSize="20" />
                                <Text ml="4" fontWeight="small" fontSize="small">Louise</Text>
                            </ChakraLink>
                        </Link>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.300" fontSize="x-small">REVOLUTION</Text>
                    <Stack spacing="1" mt="8" align="stretch">
                        <ChakraLink display="flex" p="2" align="center" sx={{
                            transition: 'border-radius 300ms',
                            borderRadius: '40%'
                        }}
                        _hover={{
                            textDecoration: 'none',
                            background: '#8176ff',
                            borderRadius: '5px'
                        }}>
                            <Icon as={RiTeamLine} fontSize="20" />
                            <Text ml="4" fontWeight="medium" fontSize="small">Células</Text>
                        </ChakraLink>
                        <ChakraLink display="flex" p="2" align="center" sx={{
                            transition: 'border-radius 300ms',
                            borderRadius: '40%'
                        }}
                        _hover={{
                            textDecoration: 'none',
                            background: '#8176ff',
                            borderRadius: '5px'
                        }}>
                            <Icon as={GiPoliceOfficerHead} fontSize="20" />
                            <Text ml="4" fontWeight="medium" fontSize="small">Comandante</Text>
                        </ChakraLink>
                        <ChakraLink display="flex" p="2" align="center" sx={{
                            transition: 'border-radius 300ms',
                            borderRadius: '40%'
                        }}
                        _hover={{
                            textDecoration: 'none',
                            background: '#8176ff',
                            borderRadius: '5px'
                        }}>
                            <Icon as={SiHackaday} fontSize="20" />
                            <Text ml="4" fontWeight="medium" fontSize="small">Agentes</Text>
                        </ChakraLink>
                        <ChakraLink display="flex" p="2" align="center" sx={{
                            transition: 'border-radius 300ms',
                            borderRadius: '40%'
                        }}
                        _hover={{
                            textDecoration: 'none',
                            background: '#8176ff',
                            borderRadius: '5px'
                        }}>
                            <Icon as={MdRecordVoiceOver} fontSize="20" />
                            <Text ml="4" fontWeight="medium" fontSize="small">Mensageiros</Text>
                        </ChakraLink>
                    </Stack>
                </Box>
                <Box>
                    <Text fontWeight="bold" color="gray.300" fontSize="x-small">AUTOMATION</Text>
                    <Stack spacing="1" mt="8" align="stretch">
                    <ChakraLink display="flex" p="2" align="center" sx={{
                            transition: 'border-radius 300ms',
                            borderRadius: '40%'
                        }}
                        _hover={{
                            textDecoration: 'none',
                            background: '#8176ff',
                            borderRadius: '5px'
                        }}>
                        <Icon as={CgWebsite} fontSize="20" />
                        <Text ml="4" fontWeight="medium" fontSize="small">Institucional</Text>
                    </ChakraLink>
                    <ChakraLink display="flex" p="2" align="center" sx={{
                            transition: 'border-radius 300ms',
                            borderRadius: '40%'
                        }}
                        _hover={{
                            textDecoration: 'none',
                            background: '#8176ff',
                            borderRadius: '5px'
                        }}>
                        <Icon as={GiBoxUnpacking} fontSize="20" />
                        <Text ml="4" fontWeight="medium" fontSize="small">Shop</Text>
                    </ChakraLink>
                    <ChakraLink display="flex" p="2" align="center" sx={{
                            transition: 'border-radius 300ms',
                            borderRadius: '40%'
                        }}
                        _hover={{
                            textDecoration: 'none',
                            background: '#8176ff',
                            borderRadius: '5px'
                        }}>
                        <Icon as={RiPagesLine} fontSize="20" />
                        <Text ml="4" fontWeight="medium" fontSize="small">Landing P.</Text>
                    </ChakraLink>
                    </Stack>
                </Box>
            </Stack>
        </Box>
    );
}
