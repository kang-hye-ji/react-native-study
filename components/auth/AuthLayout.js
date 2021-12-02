import { Box, Flex, Image } from 'native-base';
import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <Flex alignItems="center" justifyContent="center" flex="1">
      <Image
        source={require('../../assets/instagram_logo.png')}
        resizeMode="contain"
        maxW="50%"
        h="24"
        mb="5"
      ></Image>
      {children}
    </Flex>
  );
}
