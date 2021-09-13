import { Flex, Box, Text, Avatar} from '@chakra-ui/react';

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Luiz Setten</Text>
        <Text color="gray.300" fontSize="small">luizgustavosetten@gmail.com</Text>
      </Box>

      <Avatar size="md" name="Luiz Setten" src="https://github.com/luizsetten.png"/>
    </Flex>
  );
}