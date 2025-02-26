import React from 'react';
import IconList from '../IconList';
import Paragraph from '../Paragraph';
import Title from '../Title';
import Container from '../Container';

export default function LeftSide() {
  return (
    <Container>
      <Title />
      <IconList />
      <Paragraph />
    </Container>
  );
}
