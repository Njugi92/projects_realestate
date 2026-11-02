
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Flex,
  Text,
  Heading,
  Badge,
  Button,
  List,
  ListItem,
} from '@chakra-ui/react';

import sampleProperties from '../../utils/sampleProperties';

const PropertyDetails = ({ property }) => {
  if (!property) {
    return (
      <Box p={10} textAlign="center">
        <Heading>Plot not found</Heading>
        <Text mt={3}>This plot may no longer be available.</Text>
        <Link href="/" passHref>
          <Button as="a" mt={5} colorScheme="blue">
            Back to Plots
          </Button>
        </Link>
      </Box>
    );
  }

  const imageUrl =
    property.image ||
    property.coverPhoto?.url ||
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80';

  const location =
    property.locationText ||
    property.location?.[0]?.name ||
    'Kenya';

  const amenities = property.amenities || [];

  return (
    <Box minH="100vh" bg="gray.50" p={{ base: 3, md: 8 }}>
      <Box maxW="1400px" mx="auto">
        <Link href="/" passHref>
          <Button as="a" mb={6} variant="outline" colorScheme="blue">
            ← Back to All Plots
          </Button>
        </Link>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          bg="white"
          borderRadius="xl"
          overflow="hidden"
          boxShadow="xl"
          minH={{ lg: '75vh' }}
        >
          {/* Large plot image */}
          <Box
            position="relative"
            width={{ base: '100%', lg: '50%' }}
            minH={{ base: '300px', md: '450px', lg: '75vh' }}
          >
            <Image
              src={imageUrl}
              alt={property.title}
              layout="fill"
              objectFit="cover"
              priority
            />
          </Box>

          {/* Plot information */}
          <Box
            width={{ base: '100%', lg: '50%' }}
            p={{ base: 5, md: 10 }}
          >
            <Badge colorScheme="green" mb={4}>
              PLOT FOR SALE
            </Badge>

            <Heading size="xl" mb={3}>
              {property.title}
            </Heading>

            <Text color="gray.600" fontSize="lg" mb={4}>
              📍 {location}
            </Text>

            <Heading size="lg" color="blue.700" mb={4}>
              KSh {Number(property.price).toLocaleString('en-KE')}
            </Heading>

            <Flex wrap="wrap" gap={3} mb={6}>
              <Badge p={2} colorScheme="blue">
                Size: {property.plotSize || `${property.area} sq ft`}
              </Badge>

              <Badge p={2} colorScheme="purple">
                {property.type || 'Residential Plot'}
              </Badge>
            </Flex>

            <Heading size="md" mb={3}>
              About This Plot
            </Heading>

            <Text color="gray.700" lineHeight="tall" mb={6}>
              {property.description}
            </Text>

            <Heading size="md" mb={3}>
              Utilities and Amenities
            </Heading>

            {amenities.length > 0 ? (
              <List spacing={3} mb={8}>
                {amenities.map((amenity, index) => (
                  <ListItem key={`${amenity}-${index}`}>
                    <Text as="span" color="green.500" fontWeight="bold">
                      ✓
                    </Text>{' '}
                    {amenity}
                  </ListItem>
                ))}
              </List>
            ) : (
              <Text color="gray.600" mb={6}>
                Contact us to confirm available utilities and access roads.
              </Text>
            )}

            <Button
  as="a"
  href={`https://wa.me/254722300705?text=${encodeURIComponent(
    `Hello, I am interested in ${property.title} in ${location}, priced at KSh ${Number(property.price).toLocaleString('en-KE')}. Please share more details.`
  )}`}
  target="_blank"
  rel="noopener noreferrer"
  colorScheme="green"
  size="lg"
  width="100%"
  mb={3}
>
  Inquire on WhatsApp
</Button>

            <Text fontSize="sm" color="gray.500" mt={3}>
              Please confirm title deed details, utilities, access roads, and
              availability before making payment.
            </Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export async function getServerSideProps({ params }) {
  const property = sampleProperties.find(
    (item) => String(item.id) === String(params.id)
  );

  return {
    props: {
      property: property || null,
    },
  };
}

export default PropertyDetails;
