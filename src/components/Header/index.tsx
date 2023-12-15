import React from 'react';
import { Container, Logo } from './styles';
import { Image } from 'react-native';

import logoImg from '@assets/logo.png';

export function Header() {
  return (
    <Container>
      <Logo source={logoImg} /> 
    </Container>
  );
}
