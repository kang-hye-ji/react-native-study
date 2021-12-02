import { Button, Text, Box } from 'native-base';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AuthButton({ onPress, disabled, text }) {
  return (
    <Button isDisabled={disabled}>
      <TouchableOpacity onPress={onPress}>
        <Box bgColor="primary.600" px="10" py="3" borderRadius="6" mt="64">
          <Text bold color="primary.50">
            {text}
          </Text>
        </Box>
      </TouchableOpacity>
    </Button>
  );
}
