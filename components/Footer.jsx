
import Link from 'next/link';
import { Box, Flex, Text, VStack } from '@chakra-ui/react';

const Footer = () => (
  <Box
    as="footer"
    bg="#041827"
    color="white"
    px={{ base: 5, md: 10 }}
    pt={8}
    pb={5}
    width="100%"
  >
    <Flex
      maxW="1400px"
      mx="auto"
      justify="space-between"
      align={{ base: 'flex-start', md: 'center' }}
      direction={{ base: 'column', md: 'row' }}
      gap={7}
    >
      {/* Company branding */}
      <Box>
        <Text fontSize="2xl" fontWeight="bold">
          Touch <Box as="span" color="#9cdb42">Co.</Box>
        </Text>

        <Text fontSize="sm" color="gray.300" mt={1}>
          Invest today for a better tomorrow.
        </Text>
      </Box>

      {/* Navigation */}
      <Flex gap={5} wrap="wrap" fontSize="sm">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/properties">Properties</Link>
        <Link href="/contact">Contact</Link>
      </Flex>

      {/* Contact details */}
      <VStack align="flex-start" spacing={3} fontSize="sm">
        <a href="tel:+254722300705">
          ☎ 0722 300 705
        </a>

        <a
          href="https://wa.me/254722300705"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: '#08b967',
            color: '#ffffff',
            padding: '11px 20px',
            borderRadius: '25px',
            textAlign: 'center',
            fontWeight: 'bold',
            display: 'inline-block',
            textDecoration: 'none',
          }}
        >
          WhatsApp Us
        </a>
      </VStack>
    </Flex>

    {/* Copyright */}
    <Box
      maxW="1400px"
      mx="auto"
      mt={7}
      pt={5}
      borderTop="1px solid #294052"
      textAlign="center"
    >
      <Text fontSize="sm" color="gray.400">
        © {new Date().getFullYear()} Touch Co. Ltd. All rights reserved.
      </Text>
    </Box>
  </Box>
);

export default Footer;
