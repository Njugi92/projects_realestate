
import Head from 'next/head';
import { Box } from '@chakra-ui/react';

import Footer from './Footer';
import Navbar from './Navbar';

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <title>Touch Co. Ltd. | Real Estate</title>
        <meta
          name="description"
          content="Discover land and property investment opportunities with Touch Co. Ltd."
        />
      </Head>

      <Box minH="100vh" display="flex" flexDirection="column">
        <header>
          <Navbar />
        </header>

        <Box as="main" flex="1" width="100%">
          {children}
        </Box>

        <Footer />
      </Box>
    </>
  );
}
