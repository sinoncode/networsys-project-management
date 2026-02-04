// Chakra imports
import { Avatar, Box, Flex, Text, Icon, Button, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import React from "react";
import {
  SiPhp,
  SiLaravel,
  SiReact,
  SiJavascript,
  SiFigma,
  SiWordpress,
  SiHtml5,
  SiCss3,
  
} from "react-icons/si";
import { FiMoreHorizontal } from "react-icons/fi";
import { Link } from "react-router-dom";
export default function Banner(props) {
  const { banner, avatar, name, job, phone, email, techIcons = [] } = props;
const techIconMap = {
    php: SiPhp,
  laravel: SiLaravel,
  react: SiReact,
  js: SiJavascript,

  figma: SiFigma,
  wordpress: SiWordpress,
  html: SiHtml5,
  css: SiCss3
};

const techColorMap = {
  php: "purple.500",
  laravel: "red.500",
  react: "blue.400",
  js: "yellow.400",

  figma: "pink.400",
  wordpress: "blue.600",
  html: "orange.500",
  css: "blue.500"
};

  // Chakra Color Mode
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );
  return (
    <Card mb={{ base: "0px", lg: "20px" }} align='center'>
      <Avatar
        mx='auto'
        src={avatar}
        h='87px'
        w='87px'
        border='4px solid'
        borderColor={borderColor}
      />
      <Text color={textColorPrimary} fontWeight='bold' fontSize='xl' mt='10px'>
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize='sm'>
        {job}
      </Text>
   <Flex w="max-content" mx="auto" mt="26px" gap="20px">
  {techIcons.map((tech, index) => {
    const TechIcon = techIconMap[tech];
    if (!TechIcon) return null;

    return (
      <Icon
        key={index}
        as={TechIcon}
        boxSize="24px"
        color={techColorMap[tech]}
        cursor="pointer"
      />
    );
  })}

  <Icon
    as={FiMoreHorizontal}
    boxSize="26px"
    color={textColorSecondary}
    cursor="pointer"
  />
</Flex>


       {/* Contact Info */}
      <Flex justify='space-between' direction={{ base: "column", lg: "column" }} mt="20px" gap="10px">
        <Flex align="center" gap="5px">
          <Icon as={PhoneIcon} color={textColorSecondary} />
          <Text color={textColorPrimary} fontSize="sm">
            {phone}
          </Text>
        </Flex>

        <Flex align="center" gap="5px">
          <Icon as={EmailIcon} color={textColorSecondary} />
          <Text color={textColorPrimary} fontSize="sm">
            {email}
          </Text>
        </Flex>
      </Flex>

      {/* Action Buttons */}
      <Flex mt="25px" gap="15px" justify="space-between" >
        <Button colorScheme="brand" size="sm">
          Edit Profile
        </Button>
        <Link to="/admin/team/teamprofile">
        <Button variant="outline" size="sm">
          View Profile
        </Button>
        </Link>
      </Flex>
    </Card>
  );
}
