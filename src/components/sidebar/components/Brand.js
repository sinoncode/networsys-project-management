import React from "react";

// Chakra imports
import { Flex, Image } from "@chakra-ui/react";

// Custom components
import NetworsysLogo from "components/logo/networsys-logo.png"
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode

  return (
    <Flex align='center' direction='column'>
      <Image
        src={NetworsysLogo}
        alt="Networsys Logo"
        mb="20px"
        maxW="150px" />
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
