// Chakra imports
import { Avatar, Box, Flex, SimpleGrid, Text, useColorModeValue } from "@chakra-ui/react";
import Card from "components/card/Card.js";
import AnimatedCounter from "views/admin/team/components/AnimatedCounter"
import Information from "views/admin/team/components/Information";

import React from "react";

export default function Banner(props) {
  const { avatar, name, job, email, phone, } = props;
  // Chakra Color Modeuse
  const textColorPrimary = useColorModeValue("secondaryGray.900", "white");
  const textColorSecondary = "gray.400";
  const borderColor = useColorModeValue(
    "white !important",
    "#111C44 !important"
  );

  const cardShadow = useColorModeValue(
      "0px 18px 40px rgba(112, 144, 176, 0.12)",
      "unset"
    );
  return (
    <Card >
      <Flex justify='center' alignItems='center'>
        <Avatar
        mx='1rem'
        src={avatar}
        h='100px'
        w='100px'
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
     
      <Flex w='max-content' mx='auto' mt='26px'>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
            <AnimatedCounter value={100} />
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Projects Completed
          </Text>
        </Flex>
        <Flex mx='auto' me='60px' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
           <AnimatedCounter value={5} />
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Years Of Experience
          </Text>
        </Flex>
        <Flex mx='auto' align='center' direction='column'>
          <Text color={textColorPrimary} fontSize='2xl' fontWeight='700'>
           <AnimatedCounter value={3} />
          </Text>
          <Text color={textColorSecondary} fontSize='sm' fontWeight='400'>
            Ongoing Projects
          </Text>
        </Flex>
      </Flex>
       <SimpleGrid columns='2' gap='20px'>
         <Information
          boxShadow={cardShadow}
          title='Employee code'
          value='Net-656562'
        />
      </SimpleGrid>
          <SimpleGrid columns='2' gap='20px' mt='20px' mb='20px'>
        <Information
          boxShadow={cardShadow}
          title='Email'
          value='example@networsys.com'
        />
        <Information
          boxShadow={cardShadow}
          title='Phone'
          value='+91 87455582'
        />
      </SimpleGrid>
      <SimpleGrid>
         <Information
          boxShadow={cardShadow}
          title='Address'
          value='House number - 201, Noida Sector 324, Uttar Pradesh, India'
        />
      </SimpleGrid>
    </Card>
  );
}
