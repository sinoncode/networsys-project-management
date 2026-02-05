import React from "react";
import { NavLink } from "react-router-dom";

// Chakra imports
import {
  Box,
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";

// Layout
import DefaultAuth from "layouts/auth/Default";

// Assets
import illustration from "assets/img/auth/auth.png";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { RiEyeCloseLine } from "react-icons/ri";

function SignUp() {
  // Chakra color mode
  const textColor = useColorModeValue("navy.700", "white");
  const textColorSecondary = "gray.400";
  const textColorBrand = useColorModeValue("brand.500", "white");
  const brandStars = useColorModeValue("brand.500", "brand.400");

  // Show/Hide Password
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);

  // ✅ Plan + Team Size State (Correct Place)
  const [selectedPlan, setSelectedPlan] = React.useState("Standard");
  const [selectedTeam, setSelectedTeam] = React.useState("");

  // ✅ Auto Plan Logic
  const handleTeamSelect = (value) => {
    setSelectedTeam(value);

    if (value === "10-200" || value === "200-500") {
      setSelectedPlan("Pro");
    } else if (value === "500-2000" || value === "2000+") {
      setSelectedPlan("Enterprise");
    } else {
      setSelectedPlan("Standard");
    }
  };

  return (
    <DefaultAuth h='100%' illustrationBackground={illustration} image={illustration}>
      <Flex
        maxW={{ base: "100%", md: "max-content" }}
        w="100%"
        mx={{ base: "auto", lg: "0px" }}
        me="auto"
        h="100%"
        alignItems="start"
        justifyContent="center"
        mb={{ base: "30px", md: "60px" }}
        px={{ base: "25px", md: "0px" }}
        mt={{ base: "40px", md: "14vh" }}
        flexDirection="column"
      >
        {/* Header */}
        <Box me="auto">
          <Heading color={textColor} fontSize="36px" mb="10px">
            Sign Up
          </Heading>
          <Text
            mb="36px"
            ms="4px"
            color={textColorSecondary}
            fontWeight="400"
            fontSize="md"
          >
            Enter your details to get started!
          </Text>
        </Box>

        {/* Form Box */}
        <Flex
          zIndex="2"
          direction="column"
          w={{ base: "100%", md: "420px" }}
          maxW="100%"
          background="transparent"
          borderRadius="15px"
          mx={{ base: "auto", lg: "unset" }}
          me="auto"
          mb={{ base: "20px", md: "auto" }}
        >
          <FormControl>
            {/* First + Last Name */}
            <Flex gap="20px">
              <Box w="100%">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  First Name<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired
                  variant="auth"
                  fontSize="sm"
                  type="text"
                  placeholder="John"
                  mb="24px"
                  size="lg"
                />
              </Box>

              <Box w="100%">
                <FormLabel
                  display="flex"
                  ms="4px"
                  fontSize="sm"
                  fontWeight="500"
                  color={textColor}
                  mb="8px"
                >
                  Last Name<Text color={brandStars}>*</Text>
                </FormLabel>
                <Input
                  isRequired
                  variant="auth"
                  fontSize="sm"
                  type="text"
                  placeholder="Doe"
                  mb="24px"
                  size="lg"
                />
              </Box>
            </Flex>

            {/* Work Email */}
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Work Email<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired
              variant="auth"
              fontSize="sm"
              type="email"
              placeholder="mail@company.com"
              mb="24px"
              size="lg"
            />

          
            {/* Workspace Name */}
            <FormLabel
              display="flex"
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="8px"
            >
              Company / Workspace Name<Text color={brandStars}>*</Text>
            </FormLabel>
            <Input
              isRequired
              variant="auth"
              fontSize="sm"
              type="text"
              placeholder="Networsys Pvt Ltd"
              mb="24px"
              size="lg"
            />

            {/* Plan Selection */}
            <FormLabel
            display='flex'
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="10px"
            >
              Select Plan<Text color={brandStars}>*</Text>
            </FormLabel>

            <Flex gap="20px" mb="24px">
              {["Standard", "Pro", "Enterprise"].map((plan) => (
                <Checkbox
                  key={plan}
                  isChecked={selectedPlan === plan}
                  onChange={() => setSelectedPlan(plan)}
                  colorScheme="brandScheme"
                >
                  {plan}
                </Checkbox>
              ))}
            </Flex>

            {/* Team Size */}
            <FormLabel
              ms="4px"
              display='flex'
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              mb="10px"
            >
              Team Size<Text color={brandStars}>*</Text>
            </FormLabel>

            <Flex flexDirection="row" flexWrap='wrap' gap="10px" mb="24px">
              {["0-10", "10-200", "200-500", "500-2000", "2000+"].map(
                (size) => (
                  <Checkbox
                    key={size}
                    isChecked={selectedTeam === size}
                    onChange={() => handleTeamSelect(size)}
                    colorScheme="brandScheme"
                  >
                    {size} Members
                  </Checkbox>
                )
              )}
            </Flex>


                {/* Password */}
<Flex gap='10px'>
                <Box>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Password<Text color={brandStars}>*</Text>
            </FormLabel>

            <InputGroup size="md">
              <Input
                isRequired
                fontSize="sm"
                placeholder="Min. 8 characters"
                mb="24px"
                size="lg"
                type={show ? "text" : "password"}
                variant="auth"
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
</Box>
            {/* Confirm Password */}
            <Box>
            <FormLabel
              ms="4px"
              fontSize="sm"
              fontWeight="500"
              color={textColor}
              display="flex"
            >
              Confirm Password<Text color={brandStars}>*</Text>
            </FormLabel>

            <InputGroup size="md">
              <Input
                isRequired
                fontSize="sm"
                placeholder="Confirm Password"
                mb="24px"
                size="lg"
                type={show ? "text" : "password"}
                variant="auth"
              />
              <InputRightElement display="flex" alignItems="center" mt="4px">
                <Icon
                  color={textColorSecondary}
                  _hover={{ cursor: "pointer" }}
                  as={show ? RiEyeCloseLine : MdOutlineRemoveRedEye}
                  onClick={handleClick}
                />
              </InputRightElement>
            </InputGroup>
</Box>
</Flex>
            {/* Keep Logged In */}
           

            {/* Submit */}
            <Button
              fontSize="sm"
              variant="brand"
              fontWeight="500"
              w="100%"
              h="50"
              mb="24px"
            >
              Sign Up
            </Button>

            {/* Already Customer */}
            <NavLink to="/auth/sign-in">
              <Text
                color={textColorBrand}
                fontSize="sm"
                fontWeight="500"
                textAlign="center"
              >
                Already a customer? Sign In
              </Text>
            </NavLink>
          </FormControl>
        </Flex>
      </Flex>
    </DefaultAuth>
  );
}

export default SignUp;
