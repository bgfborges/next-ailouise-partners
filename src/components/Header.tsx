import { Flex, Text, Box, Image } from "@chakra-ui/react";
import Logo from '../../public/logo.svg'

export default function Header() {
    return(
        <Flex w="100%" as="header" maxW={1480} h="20" mx="auto" py="4" px="10" align="center">
            <Box w="100%">
                {/* <Image src={Logo} alt="aiLouise Logo" /> */}
                <Text fontSize="xl" mt="8" mb="4" fontWeight="bold">AILOUISE</Text>
            </Box>
            <Text w="20">Gabriel B.</Text>
        </Flex>
    )
}