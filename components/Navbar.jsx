
import { useState } from 'react';
import Link from 'next/link';
import { Flex, Box } from '@chakra-ui/react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <Flex
      as="nav"
      className="touch-navbar"
      px={{ base: 4, md: 8 }}
      py={4}
      align="center"
      justify="space-between"
      bg="#07111f"
      color="white"
      position="relative"
      zIndex={100}
      borderBottom="1px solid rgba(215, 173, 102, 0.3)"
    >
      <Box fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold">
        <Link href="/">
          <a className="touch-brand" onClick={closeMenu}>
            TOUCH <span>CO. LTD.</span>
          </a>
        </Link>
      </Box>

      <button
        type="button"
        className="touch-menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      <div className={`touch-nav-links ${menuOpen ? 'touch-nav-open' : ''}`}>
        <Link href="/">
          <a onClick={closeMenu}>Home</a>
        </Link>

        <Link href="/about">
          <a onClick={closeMenu}>About</a>
        </Link>

        <Link href="/properties">
          <a onClick={closeMenu}>Properties</a>
        </Link>

        <Link href="/contact">
          <a onClick={closeMenu}>Contact</a>
        </Link>

        <Link href="/contact">
          <a className="touch-enquire" onClick={closeMenu}>
            Enquire Now →
          </a>
        </Link>
      </div>
    </Flex>
  );
};

export default Navbar;
