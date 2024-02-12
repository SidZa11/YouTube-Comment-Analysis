import {
    chakra,
    Container,
    Stack,
    HStack,
    VStack,
    Flex,
    Text,
    Box
  } from "@chakra-ui/react"
import SearchBar from "./SearchBar";
  
  const overviewList = [
    {
      id: 1,
      label: "Open Youtube",
      subLabel: "Open in mobile or in computer."
    },
    {
      id: 2,
      label: "Select Video",
      subLabel: "Choose a perticular video for 'Comment Analysis'."
    },
    {
      id: 3,
      label: "Copy Video Link",
      subLabel:
        "Navigate to share button and copy the link."
    },
    {
      id: 4,
      label: "Paste Video Link Here",
      subLabel: "After paste link of the video click on the forward icon."
    }
  ]
  
  const StepToSearch = () => {
    return (
      <Container maxW="6xl" py={10}>
        <chakra.h2 fontSize="4xl" fontWeight="bold" textAlign="center" mb={2}>
          How it works?
        </chakra.h2>
        <Stack
          direction={{ base: "column", md: "row" }}
          spacing={{ base: 0, md: 10 }}
          justifyContent="center"
          alignItems="center"
        >
          <VStack
            spacing={4}
            alignItems="flex-start"
            mb={{ base: 5, md: 0 }}
            maxW="md"
          >
            {overviewList.map(data => (
              <Box key={data.id}>
                <HStack spacing={2}>
                  <Flex
                    fontWeight="bold"
                    boxShadow="md"
                    color="white"
                    bg="blue.400"
                    rounded="full"
                    justifyContent="center"
                    alignItems="center"
                    w={10}
                    h={10}
                  >
                    {data.id}
                  </Flex>
                  <Text fontSize="xl">{data.label}</Text>
                </HStack>
                <Text fontSize="md" color="gray.500" ml={12}>
                  {data.subLabel}
                </Text>
              </Box>
            ))}
          </VStack>
          <SearchBar />
        </Stack>
      </Container>
    )
  }
  
  export default StepToSearch;
  