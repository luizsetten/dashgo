import { Flex, Box, Text, Avatar} from '@chakra-ui/react';

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData }: ProfileProps) {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Luiz Setten</Text>
          <Text color="gray.300" fontSize="small">luizgustavosetten@gmail.com</Text>
        </Box>
      )}

      <Avatar size="md" name="Luiz Setten" src="https://github.com/luizsetten.png"/>
    </Flex>
  );
}