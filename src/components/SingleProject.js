import {
  Box,
  Card,
  CardBody,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

const SingleProject = ({ singleProj }) => {
  return (
    <Box>
      <Link
        as={RouterLink}
        to={singleProj.link}
        style={{ textDecoration: "none" }}
      >
        <Card
          direction={{ base: "column", sm: "row" }}
          overflow="hidden"
          variant="outline"
          maxHeight="250px"
          cursor="pointer"
          border="none"
          _hover={{
            bg: "blackAlpha.300",
            textColor: "white",
            transition: "all .2s ease-in-out",
          }}
        >
          <Flex direction={{ base: "column", sm: "row" }} height="100%">
            <Image
              objectFit="cover"
              // width={{ base: "100%", sm: "200px" }}
              className="w-1/2 md:w-1/4 lg:w-1/2"
              minHeight="250px"
              src={`${
                singleProj.images[0].src !== "none"
                  ? singleProj.images[0].src
                  : "https://static.vecteezy.com/system/resources/thumbnails/004/141/669/small_2x/no-photo-or-blank-image-icon-loading-images-or-missing-image-mark-image-not-available-or-image-coming-soon-sign-simple-nature-silhouette-in-frame-isolated-illustration-vector.jpg"
              }`}
              alt={singleProj.name}
            />

            <Stack
              flex="1"
              justify="center"
              align="center"
              className="w-1/2 md:w-3/4 lg:w-1/2"
            >
              <CardBody height="50%" className="md:text-sm">
                <Heading size="md">{singleProj.name}</Heading>
                <Text py="2" flex="1" height="80%">
                  {singleProj.description}
                </Text>
              </CardBody>
            </Stack>
          </Flex>
        </Card>
      </Link>
      <Flex
        gap={2}
        bg="whiteAlpha.50"
        rounded="md"
        py={2}
        px={8}
        justifyContent="center"
      >
        {singleProj.technologies.map((technology, index) => (
          <Box
            key={index}
            borderRadius="full"
            overflow="hidden"
            className="w-[50px] md:w-[40px]"
          >
            <Image
              boxSize="100%"
              objectFit="cover"
              src={technology.logo}
              alt={technology.name}
            />
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default SingleProject;
