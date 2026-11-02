
import { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Textarea,
  Button,
  VStack,
  HStack,
  Icon,
  Divider,
  useToast,
} from '@chakra-ui/react';

import {
  FaTint,
  FaShieldAlt,
  FaFileContract,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa';

const WHATSAPP_NUMBER = '254722300705';

const benefits = [
  {
    icon: FaTint,
    title: 'Prime 100 × 100 ft serviced plots',
    description:
      'With water, power, and paved roads ready on site.',
  },
  {
    icon: FaShieldAlt,
    title: 'Secure gated community',
    description:
      'With controlled access, perimeter walling, and 24/7 security patrol.',
  },
  {
    icon: FaFileContract,
    title: 'Clean titles',
    description:
      'With transparent ownership, flexible financing and instalment payment options.',
  },
  {
    icon: FaMapMarkerAlt,
    title: 'Convenient location',
    description:
      "Just 45 minutes from Nairobi via Thika Superhighway on Old Murang'a Road.",
  },
];

export default function ThikaGreens() {
  const toast = useToast();

  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    enquiry: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const message = [
      'OFFICIAL LAND ENQUIRY',
      'Property: Thika Greens Golf Estate',
      'Plot size: 100 × 100 ft',
      '',
      `Full names: ${form.fullName}`,
      `Phone number: ${form.phone}`,
      `Email: ${form.email || 'Not provided'}`,
      `Additional enquiry: ${form.enquiry}`,
      '',
      'Please share plot layout, pricing, payment arrangements, and available site visit dates.',
    ].join('\n');

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Head>
        <title>Thika Greens Golf Estate | Touch Co.</title>
        <meta
          name="description"
          content="Enquire about premium 100 by 100 ft plots at Thika Greens Golf Estate. Request pricing, plot layouts and a site visit through WhatsApp."
        />
      </Head>

      <Box
        minH="100vh"
        bg="#0b1924"
        color="white"
        py={{ base: 5, md: 7 }}
        px={{ base: 4, md: 6, lg: 9 }}
      >
        <Flex
          maxW="1500px"
          mx="auto"
          align="flex-start"
          gap={{ base: 8, lg: 7 }}
          direction={{ base: 'column', lg: 'row' }}
        >
          {/* LEFT: Property image and investment benefits */}

          <Box flex="1.9" minW="0" w="100%">

            {/* Property image */}
            <Box
              position="relative"
              width="100%"
              height={{ base: '250px', md: '450px' }}
              overflow="hidden"
              borderRadius="xl"
              mb={8}
            >
              <Image
                src="/assets/images/thikagre.jpg"
                alt="Thika Greens Golf Estate plots for sale"
                fill
                priority
                sizes="(max-width: 768px) 100vw, 65vw"
                style={{ objectFit: 'cover' }}
              />

              <Box
                position="absolute"
                bottom={4}
                left={4}
                bg="green.500"
                px={4}
                py={2}
                borderRadius="full"
              >
                <HStack spacing={2}>
                  <Icon as={FaMapMarkerAlt} />
                  <Text fontSize="sm" fontWeight="semibold">
                    Thika Greens Golf Estate
                  </Text>
                </HStack>
              </Box>
            </Box>

            {/* Investment heading */}
            <Heading
              fontSize={{ base: '2xl', md: '4xl' }}
              lineHeight="1.2"
              mb={7}
            >
              Why Invest at{' '}
              <Text as="span" color="green.400">
                Thika Greens Golf Estate?
              </Text>
            </Heading>

            {/* Investment benefits */}
            <VStack align="stretch" spacing={6}>
              {benefits.map((benefit) => (
                <HStack
                  key={benefit.title}
                  align="flex-start"
                  spacing={5}
                >
                  <Flex
                    flexShrink={0}
                    w="66px"
                    h="66px"
                    borderRadius="full"
                    bg="green.500"
                    align="center"
                    justify="center"
                  >
                    <Icon as={benefit.icon} boxSize={7} color="white" />
                  </Flex>

                  <Box pt={1}>
                    <Text
                      fontWeight="bold"
                      fontSize={{ base: 'md', md: 'xl' }}
                      mb={1}
                    >
                      {benefit.title}
                    </Text>

                    <Text
                      color="gray.300"
                      fontSize={{ base: 'sm', md: 'md' }}
                      lineHeight="1.8"
                    >
                      {benefit.description}
                    </Text>
                  </Box>
                </HStack>
              ))}
            </VStack>
          </Box>

          {/* RIGHT: Official land enquiry form */}

          <Box
            flex="1"
            w="100%"
            maxW={{ base: '100%', lg: '490px' }}
            border="1px solid"
            borderColor="blue.700"
            borderRadius="xl"
            overflow="hidden"
          >
            <Box p={{ base: 5, md: 7 }}>
              <HStack spacing={3} mb={5}>
                <Flex
                  w="58px"
                  h="58px"
                  borderRadius="full"
                  bg="green.600"
                  align="center"
                  justify="center"
                  flexShrink={0}
                >
                  <Icon as={FaFileContract} boxSize={7} />
                </Flex>

                <Heading fontSize={{ base: 'xl', md: '3xl' }}>
                  Official Land Enquiry
                </Heading>
              </HStack>

              <Heading
                fontSize="lg"
                color="green.400"
                mb={4}
              >
                Enquire About Premium 100 × 100 ft Plots
              </Heading>

              <Text color="gray.300" lineHeight="1.8" mb={6}>
                Fill in your details below to receive plot layout,
                pricing, and arrangements for a private site visit
                at Thika Greens Golf Estate.
              </Text>

              <Box as="form" onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <Input
                    name="fullName"
                    value={form.fullName}
                    onChange={handleChange}
                    placeholder="Full Names *"
                    aria-label="Full names"
                    autoComplete="name"
                    required
                    minLength={2}
                    color="white"
                    borderColor="blue.700"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ borderColor: 'green.400' }}
                    _focus={{ borderColor: 'green.400' }}
                    h="58px"
                  />

                  <Input
                    name="phone"
                    type="tel"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Phone Number *"
                    aria-label="Phone number"
                    autoComplete="tel"
                    required
                    color="white"
                    borderColor="blue.700"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ borderColor: 'green.400' }}
                    h="58px"
                  />

                  <Input
                    name="email"
                    type="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="Email Address (optional)"
                    aria-label="Email address"
                    autoComplete="email"
                    color="white"
                    borderColor="blue.700"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ borderColor: 'green.400' }}
                    h="58px"
                  />

                  <Textarea
                    name="enquiry"
                    value={form.enquiry}
                    onChange={handleChange}
                    placeholder="Additional Enquiry Information *"
                    aria-label="Additional enquiry information"
                    required
                    minLength={3}
                    rows={4}
                    color="white"
                    borderColor="blue.700"
                    _placeholder={{ color: 'gray.400' }}
                    _hover={{ borderColor: 'green.400' }}
                    _focus={{ borderColor: 'green.400' }}
                  />

                  <Button
                    type="submit"
                    w="100%"
                    minH="72px"
                    whiteSpace="normal"
                    bg="green.500"
                    color="white"
                    leftIcon={<FaWhatsapp />}
                    _hover={{ bg: 'green.400' }}
                    fontSize="md"
                    borderRadius="lg"
                  >
                    <Box textAlign="left">
                      <Text>Send via WhatsApp</Text>
                      <Text fontSize="sm">0722300705</Text>
                    </Box>
                  </Button>
                </VStack>
              </Box>
            </Box>

            <Divider borderColor="blue.900" />

            <Box p={6}>
              <HStack align="flex-start" spacing={4}>
                <Icon
                  as={FaWhatsapp}
                  boxSize={9}
                  color="green.400"
                  mt={1}
                />

                <Box>
                  <Text color="gray.300" fontSize="sm">
                    You can also contact us directly on
                  </Text>

                  <Text fontWeight="bold" fontSize="xl">
                    0722300705
                  </Text>

                  <Text color="gray.400" fontSize="sm" mt={3}>
                    We are here to help you explore your investment
                    options at Thika Greens Golf Estate.
                  </Text>
                </Box>
              </HStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
