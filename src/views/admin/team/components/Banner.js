// Chakra imports
import { Avatar, Icon, Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import AnimatedCounter from "views/admin/team/components/AnimatedCounter"
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import React, { useState, useEffect } from "react";

export default function Banner(props, value) {
  const { banner, avatar, name, job, posts, email, phone, followers, following } = props;
  // Chakra Color Modeuse
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );

   const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1000; // total animation time
    const stepTime = Math.abs(Math.floor(duration / value));

    const interval = setInterval(() => {
      start += 1;
      setCount(start);

      if (start === value) {
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [value]);


  return (
    <Card >
      <Flex justify='center' alignItems='center'>
        <Avatar
        mx='1rem'
        src={avatar}
        h='150px'
        w='150px'
        border='4px solid'
        borderColor={borderColor}
        borderRadius='5px'
      />
      <Box mx='2rem'>
        <Text color={textColorPrimary} fontWeight='bold' fontSize='3xl' mt='10px'>
        {name}
      </Text>
      <Text color={textColorSecondary} fontSize='xl'>
        {job}
      </Text>
      </Box>
      
      </Flex>
      <Flex justify='center' mt="20px" gap="10px">
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
      
      <Flex w='max-content' mx='auto' mt='26px'>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            <AnimatedCounter value={100} />
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Projects Cosmpleted
          </Text>
        </Flex>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {followers}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Years Of Experience
          </Text>
        </Flex>
        <Flex mx='auto' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            {following}
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Current Projects
          </Text>
        </Flex>
      </Flex>
    </Card>
  );
}
