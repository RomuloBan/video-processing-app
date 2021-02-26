import React from 'react'
import { Flex, Heading } from "@chakra-ui/react";

const Header = () => (
    <Flex as="nav" align="center" mr={5}>
        <Heading as="h1" size="lg" letterSpacing={'-.1rem'}>
            Video Processing App
        </Heading>
    </Flex>
)

export default Header