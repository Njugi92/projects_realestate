
import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  List,
  ListItem,
  FormControl,
  FormLabel,
  VStack,
  HStack,
} from '@chakra-ui/react';

const WHATSAPP_NUMBER = '254722300705';

const properties = {
  kithimani: {
    name: 'Kithimani Plots for Sale',
    size: '50 × 100 ft',
    price: 'KSh 200,000',
    image: '/assets/images/kithimani.jpg',
    description:
      'Affordable plots in Kithimani with water and electricity available.',
    benefits: [
      'Water and electricity available in the area.',
      'Affordable land investment with room for future growth.',
      'Contact our team to confirm title details and payment options.',
    ],
  },

  'konza-city': {
    name: 'Konza City Plots for Sale',
    size: '100 × 100 ft',
    price: 'KSh 1,000,000',
    image: '/assets/images/konza.jpg',
    description:
      'Spacious plots in the Konza City area for your future home or investment.',
    benefits: [
      'Generous 100 × 100 ft plot size.',
      'Explore the area’s development potential before investing.',
      'Confirm access, utilities, title details and payment options with our team.',
    ],
  },

  'nakuru-bahati': {
    name: 'Nakuru Bahati Plots for Sale',
    size: '100 × 100 ft',
    price: 'KSh 650,000',
    image: '/assets/images/bahati.jpg',
    description:
      'Spacious plots in Bahati, Nakuru, suitable for a planned home or land investment.',
    benefits: [
      'Generous 100 × 100 ft plot size.',
      'Consider the surrounding neighbourhood and access when planning your investment.',
      'Confirm utilities, title details and payment options with our team.',
    ],
  },

  'thika-greens': {
    name: 'Thika Greens Golf Estate',
    size: '100 × 100 ft',
    price: 'KSh 20,000,000',
    image: '/assets/images/thikagre.jpg',
    description:
      'Premium plots at Thika Greens Golf Estate, featuring good roads.',
    benefits: [
      'Good roads within the estate.',
      'Premium land offering for buyers seeking an upscale location.',
      'Confirm utilities, title details and payment options with our team.',
    ],
  },

  'ruiru-murera': {
    name: 'Ruiru Murera Plots for Sale',
    size: '100 × 100 ft',
    price: 'KSh 2,000,000',
    image: '/assets/images/kithimani.jpg',
    description:
      'Spacious 100 × 100 ft plots in Ruiru Murera, suitable for buyers planning a home or a long-term land investment.',
    benefits: [
      'Generous 100 × 100 ft plot size.',
      'Explore the surrounding neighbourhood and access to local amenities.',
      'Contact our team to confirm location, title details, utilities and payment options.',
    ],
  },

  'ruiru-kimbo': {
    name: 'Ruiru Kimbo Plots for Sale',
    size: '100 × 100 ft',
    price: 'KSh 6,500,000',
    image: '/assets/images/konza.jpg',
    description:
      'A 100 × 100 ft land opportunity in Ruiru Kimbo for buyers considering residential development or property investment.',
    benefits: [
      'Generous 100 × 100 ft plot size.',
      'Assess road access, nearby amenities and the surrounding development.',
      'Contact our team to confirm ownership documents, utilities and payment options.',
    ],
  },

  makuyu: {
    name: 'Makuyu Plots for Sale',
    size: '100 × 100 ft',
    price: 'KSh 950,000',
    image: '/assets/images/kithimani.jpg',
    description:
      'Affordable 100 × 100 ft plots in Makuyu for buyers looking to plan a future home or invest in land.',
    benefits: [
      'Spacious 100 × 100 ft plot size.',
      'An option for buyers seeking land at a more accessible price point.',
      'Confirm the precise location, access, title details and available utilities with our team.',
    ],
  },

  kenol: {
    name: 'Kenol Plots for Sale',
    size: '100 × 100 ft',
    price: 'KSh 1,200,000',
    image: '/assets/images/konza.jpg',
    description:
      '100 × 100 ft plots in Kenol for buyers exploring land for residential use or future investment.',
    benefits: [
      'Generous 100 × 100 ft plot size.',
      'Explore the surrounding area and access to local amenities.',
      'Contact our team to verify title documents, utilities and payment arrangements.',
    ],
  },

  kabati: {
    name: 'Kabati Plots for Sale',
    size: '100 × 100 ft',
    price: 'KSh 850,000',
    image: '/assets/images/kithimani.jpg',
    description:
      'Affordable 100 × 100 ft plots in Kabati for people planning a future home or looking for a land investment opportunity.',
    benefits: [
      'Spacious 100 × 100 ft plot size.',
      'A competitively priced option for land buyers.',
      'Confirm the exact location, road access, title documents and utilities with our team.',
    ],
  },
};

export default function PropertyDetails() {
  const router = useRouter();
  const { slug } = router.query;

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  if (!router.isReady) {
    return <Box p={10}>Loading property...</Box>;
  }

  const property = properties[slug];

  if (!property) {
    return (
      <Box p={10} textAlign="center">
        <Heading>Property not found</Heading>
        <Text mt={3}>Please select a property from our listings.</Text>
        <Button as="a" href="/properties" mt={5} colorScheme="green">
          View Properties
        </Button>
      </Box>
    );
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      'LAND ENQUIRY - TOUCH CO LTD',
      '',
      `Property: ${property.name}`,
      `Plot size: ${property.size}`,
      `Listed price: ${property.price}`,
      '',
      `Full name: ${form.name}`,
      `Email address: ${form.email}`,
      `Contact number: ${form.phone}`,
      '',
      'Additional information:',
      form.message || 'No additional information provided.',
    ].join('\n');

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <Box bg="#07111f" color="white" minH="100vh" py={{ base: 6, md: 12 }}>
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }}>
        <Text color="#d7ad66" mb={6}>
          <Link href="/properties">
            <a>Properties</a>
          </Link>
          {' / '}
          {property.name}
        </Text>

        <Flex
          direction={{ base: 'column', lg: 'row' }}
          align="flex-start"
          gap={{ base: 10, lg: 12 }}
        >
          {/* LEFT: Property image and investment benefits */}
          <Box flex="1.15" minW="0" w="100%">
            <Box
              position="relative"
              width="100%"
              height={{ base: '280px', md: '450px' }}
              overflow="hidden"
              borderRadius="xl"
            >
              <Image
                src={property.image}
                alt={property.name}
                layout="fill"
                objectFit="cover"
                priority
              />
            </Box>

            <Heading mt={5} size="lg">
              {property.name}
            </Heading>

            <Text color="#d7ad66" fontSize="lg" mt={2}>
              {property.size} · {property.price}
            </Text>

            <Text color="gray.300" lineHeight="1.9" mt={4}>
              {property.description}
            </Text>

            <Heading size="lg" mt={8} mb={5}>
              Why invest in this property
            </Heading>

            <List spacing={5}>
              {property.benefits.map((benefit, index) => (
                <ListItem key={index}>
                  <HStack align="flex-start" spacing={3}>
                    <Text color="#d7ad66" fontSize="xl">
                      ✓
                    </Text>
                    <Text lineHeight="1.8" color="gray.200">
                      {benefit}
                    </Text>
                  </HStack>
                </ListItem>
              ))}
            </List>
          </Box>

          {/* RIGHT: Official land enquiry form */}
          <Box
            flex="0.85"
            minW="0"
            w="100%"
            bg="#101e30"
            border="1px solid"
            borderColor="whiteAlpha.200"
            borderRadius="xl"
            p={{ base: 5, md: 8 }}
          >
            <Text
              color="#d7ad66"
              textTransform="uppercase"
              letterSpacing="2px"
              fontWeight="bold"
              fontSize="sm"
            >
              Official Land Enquiry
            </Text>

            <Heading size="xl" mt={3} lineHeight="1.35">
              Enquire About {property.size} Plots
            </Heading>

            <Text color="gray.300" mt={3} mb={7} lineHeight="1.8">
              Complete the form below and send your enquiry directly to our
              team through WhatsApp.
            </Text>

            <Box as="form" onSubmit={handleSubmit}>
              <VStack spacing={5} align="stretch">
                <FormControl isRequired>
                  <FormLabel>Full name</FormLabel>
                  <Input
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter your full name"
                    autoComplete="name"
                    required
                    focusBorderColor="#d7ad66"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    autoComplete="email"
                    required
                    focusBorderColor="#d7ad66"
                  />
                </FormControl>

                <FormControl isRequired>
                  <FormLabel>Contact number</FormLabel>
                  <Input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Enter your phone number"
                    autoComplete="tel"
                    required
                    focusBorderColor="#d7ad66"
                  />
                </FormControl>

                <FormControl>
                  <FormLabel>Additional information</FormLabel>
                  <Textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Ask about location, site visits, title documents or payment options..."
                    rows={6}
                    focusBorderColor="#d7ad66"
                    resize="vertical"
                  />
                </FormControl>

                <Button
                  type="submit"
                  width="100%"
                  minH="54px"
                  bg="#d7ad66"
                  color="#07111f"
                  fontWeight="bold"
                  _hover={{ bg: '#e8c487' }}
                >
                  Enquire on WhatsApp
                </Button>

                <Text fontSize="xs" color="gray.400" textAlign="center">
                  Your enquiry will open WhatsApp so you can review and send
                  your message.
                </Text>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}
