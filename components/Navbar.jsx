
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
      {/* Company branding */}
      <Box fontSize={{ base: 'lg', md: '2xl' }} fontWeight="bold">
        <Link
          href="/"
          className="touch-brand"
          onClick={closeMenu}
        >
          TOUCH <span>CO. LTD.</span>
        </Link>
      </Box>

      {/* Mobile menu button */}
      <button
        type="button"
        className="touch-menu-toggle"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={
          menuOpen ? 'Close navigation menu' : 'Open navigation menu'
        }
        aria-expanded={menuOpen}
      >
        {menuOpen ? '✕' : '☰'}
      </button>

      {/* Navigation links */}
      <div className={`touch-nav-links ${menuOpen ? 'touch-nav-open' : ''}`}>
        <Link href="/" onClick={closeMenu}>
          Home
        </Link>

        <Link href="/about" onClick={closeMenu}>
          About
        </Link>

        <Link href="/properties" onClick={closeMenu}>
          Properties
        </Link>

        <Link href="/contact" onClick={closeMenu}>
          Contact
        </Link>

        <Link
          href="/contact"
          className="touch-enquire"
          onClick={closeMenu}
        >
          Enquire Now →
        </Link>
      </div>
    </Flex>
  );
};

export default Navbar;
