
import Link from 'next/link';
import Image from 'next/image';
import { Box, Text, Button, Flex, Badge } from '@chakra-ui/react';

const Property = ({ property }) => {
  const imageUrl =
    property.image ||
    property.coverPhoto?.url ||
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80';

  const location =
    property.locationText ||
    property.location?.[0]?.name ||
    'Kenya';

  const propertyLink = `/property/${property.id}`;

  return (
    <Box
      maxW="350px"
      width="100%"
      m={3}
      bg="white"
      borderRadius="xl"
      overflow="hidden"
      boxShadow="lg"
      transition="transform 0.2s"
      _hover={{ transform: 'translateY(-5px)', boxShadow: 'xl' }}
    >
      {/* Property image and information */}
      <Link href={propertyLink} style={{ display: 'block', textDecoration: 'none' }}>
        <Box cursor="pointer">
          <Box position="relative" height="220px" width="100%">
            <Image
              src={imageUrl}
              alt={property.title || 'Property for sale'}
              fill
              style={{ objectFit: 'cover' }}
              sizes="(max-width: 350px) 100vw, 350px"
            />
          </Box>

          <Box p={5}>
            <Badge colorScheme="green" mb={2}>
              PLOT FOR SALE
            </Badge>

            <Text fontSize="xl" fontWeight="bold" color="blue.700">
              KSh {Number(property.price).toLocaleString('en-KE')}
            </Text>

            <Text fontSize="lg" fontWeight="semibold" mt={2}>
              {property.title}
            </Text>

            <Text color="gray.600" mt={1}>
              {location}
            </Text>

            <Text color="gray.600" mt={2}>
              Plot size: {property.plotSize || property.area}
              {typeof property.area === 'number' ? ' sq ft' : ''}
            </Text>

            <Text color="gray.700" mt={3} noOfLines={2}>
              {property.description}
            </Text>
          </Box>
        </Box>
      </Link>

      {/* View details button */}
      <Flex px={5} pb={5}>
        <Button
          as={Link}
          href={propertyLink}
          colorScheme="blue"
          width="100%"
        >
          View Plot Details
        </Button>
      </Flex>
    </Box>
  );
};

export default Property;
