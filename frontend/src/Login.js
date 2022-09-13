import { Box, Heading, Text, VStack, HStack } from "@chakra-ui/layout";
import {
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

function Login() {
  return (
    <Box
      w={["full", "md"]}
      p={[8, 10]}
      mt={[20, "10vh"]}
      mx="auto"
      border={["none", "1px"]}
      borderColor={["", "gray.300"]}
      borderRadius={10}
    >
      <VStack spacing={4} align="flex-start" w="full">
        <VStack spacing={1} align={["flex-start", "center"]} w="full">
          <Heading> Login</Heading>
          <Text>Enter Your Email and Password to login</Text>
        </VStack>

        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input rounded="none" variant="filled"></Input>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input rounded="none" variant="filled" type="password" />
        </FormControl>

        <HStack w="full" justify="space-between">
          <Checkbox>Remember me</Checkbox>
          <Button variant="link" colorScheme="blue">
            Forgot Password?
          </Button>
        </HStack>
        <Button rounded="none" colorScheme="blue" w="auto">
          Login
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
