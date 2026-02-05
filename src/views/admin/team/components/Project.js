// Chakra imports
import {
  Box,
  Flex,
  Icon,
  Image,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
// Custom components
import Card from "components/card/Card.js";
import React from "react";
// Assets
import { MdEdit } from "react-icons/md";

export default function Project(props) {
  const { title, description, ranking, link, image, ...rest } = props;
  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const brandColor = useColorModeValue("brand.500", "white");
  const bg = useColorModeValue("white", "navy.700");
  return (
    <Card bg={bg} {...rest} p='14px'>
      <Flex align='center' direction={{ base: "column", md: "row" }}>
        <Image h='80px' w='80px' src={image} borderRadius='8px' me='20px' />
        <Box mt={{ base: "10px", md: "0" }}>
          <Text
            color={textColorPrimary}
            fontWeight='500'
            fontSize='md'
            mb='4px'>
            {title}
          </Text>
           <Text
            color={textColorPrimary}
            fontWeight='400'
            fontSize='sm'
            mb='4px'>
            {description}
          </Text>
          <Text
            fontWeight='500'
            color={textColorSecondary}
            fontSize='sm'
            me='4px'>
            Project #{ranking} •{" "}
            <Link fontWeight='500' color={brandColor} href={link} fontSize='sm'>
              See project details
            </Link>
          </Text>
        </Box>
        <Link
  href={link}
  ml="16px"
  mr="auto"
  p="0"
>
  <Icon as={MdEdit} h="25px" w="25px" color="secondaryGray.500" _hover={{ color: "blue.500" }} />
</Link>

      </Flex>
    </Card>
  );
}
