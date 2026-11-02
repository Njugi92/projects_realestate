
import { useState } from 'react';
import { useRouter } from 'next/router';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';

import Property from '../components/Property';
import SearchFilters from '../components/SearchFilters';

const sampleProperties = [
  {
    id: 'home-1',
    title: 'Modern Family Home',
    price: 12500000,
    rooms: 4,
    baths: 3,
    area: 2400,
    purpose: 'for-sale',
    isVerified: false,
    externalID: 'home-1',
    location: [{ name: 'Nairobi, Kenya' }],
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80',
    },
  },
  {
    id: 'home-2',
    title: 'Spacious Family House',
    price: 8500000,
    rooms: 3,
    baths: 2,
    area: 1800,
    purpose: 'for-sale',
    isVerified: false,
    externalID: 'home-2',
    location: [{ name: 'Nakuru, Kenya' }],
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1000&q=80',
    },
  },
  {
    id: 'home-3',
    title: 'Contemporary Townhouse',
    price: 15000000,
    rooms: 4,
    baths: 3,
    area: 2200,
    purpose: 'for-sale',
    isVerified: false,
    externalID: 'home-3',
    location: [{ name: 'Thika, Kenya' }],
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80',
    },
  },
  {
    id: 'rent-1',
    title: 'Modern Apartment',
    price: 65000,
    rooms: 3,
    baths: 2,
    area: 1200,
    purpose: 'for-rent',
    isVerified: false,
    externalID: 'rent-1',
    location: [{ name: 'Thika, Kenya' }],
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
    },
  },
  {
    id: 'rent-2',
    title: 'Elegant City Apartment',
    price: 45000,
    rooms: 2,
    baths: 2,
    area: 950,
    purpose: 'for-rent',
    isVerified: false,
    externalID: 'rent-2',
    location: [{ name: 'Nairobi, Kenya' }],
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1000&q=80',
    },
  },
  {
    id: 'rent-3',
    title: 'Family Rental Home',
    price: 55000,
    rooms: 3,
    baths: 2,
    area: 1400,
    purpose: 'for-rent',
    isVerified: false,
    externalID: 'rent-3',
    location: [{ name: 'Nakuru, Kenya' }],
    coverPhoto: {
      url: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1000&q=80',
    },
  },
];

const Search = () => {
  const [searchFilters, setSearchFilters] = useState(false);
  const router = useRouter();

  const purpose = router.query.purpose || 'for-rent';

  const properties = sampleProperties.filter(
    (property) => property.purpose === purpose
  );

  return (
    <Box>
      <Flex
        onClick={() => setSearchFilters(!searchFilters)}
        cursor="pointer"
        bg="gray.100"
        borderBottom="1px"
        borderColor="gray.200"
        p="2"
        fontWeight="black"
        fontSize="lg"
        justifyContent="center"
        alignItems="center"
      >
        <Text>Search Property By Filters</Text>
        <Icon paddingLeft="2" w="7" as={BsFilter} />
      </Flex>

      {searchFilters && <SearchFilters />}

      <Text fontSize="2xl" p="4" fontWeight="bold">
        Properties {purpose === 'for-sale' ? 'For Sale' : 'For Rent'}
      </Text>

      <Flex flexWrap="wrap" justifyContent="center">
        {properties.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>

      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDir="column"
          my="5"
        >
          <Text fontSize="xl" mt="3">
            No properties found.
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export default Search;
