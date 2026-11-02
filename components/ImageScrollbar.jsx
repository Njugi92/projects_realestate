
import { useContext } from 'react';
import Image from 'next/image';

import { Box, Icon, Flex } from '@chakra-ui/react';

import {
  ScrollMenu,
  VisibilityContext,
} from 'react-horizontal-scrolling-menu';

import {
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from 'react-icons/fa';

// LEFT SCROLL ARROW
const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      marginRight="1"
    >
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
        aria-label="Scroll images left"
        display={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

// RIGHT SCROLL ARROW
const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      marginLeft="1"
    >
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
        aria-label="Scroll images right"
        display={['none', 'none', 'none', 'block']}
      />
    </Flex>
  );
};

// PROPERTY IMAGE SCROLLBAR
export default function ImageScrollbar({ data = [] }) {
  const images = Array.isArray(data) ? data : [];

  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: 'hidden' }}
    >
      {images.map((item, index) => {
        // Support both image URLs and image objects.
        const imageUrl =
          typeof item === 'string'
            ? item
            : item?.url || item?.image || item?.src;

        const itemKey =
          typeof item === 'object' && item?.id != null
            ? item.id
            : imageUrl || index;

        if (!imageUrl) return null;

        return (
          <Box
            key={itemKey}
            itemId={String(itemKey)}
            width={{ base: '280px', sm: '420px', md: '700px', lg: '910px' }}
            flexShrink={0}
            overflow="hidden"
            p={1}
          >
            <Image
              src={imageUrl}
              alt={
                typeof item === 'object' && item?.alt
                  ? item.alt
                  : `Property image ${index + 1}`
              }
              width={1000}
              height={600}
              objectFit="cover"
            />
          </Box>
        );
      })}
    </ScrollMenu>
  );
}
