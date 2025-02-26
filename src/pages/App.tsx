import React from 'react';
import ApplicationView from '../components/ApplicationView';
import AppBar from '../components/AppBar';
import Container from '../components/Container';
import ServerList from '../components/ServerList';
import IconList from '../components/IconList';
import Title from '../components/Title';
import Paragraph from '../components/Paragraph';

export default function App() {
  return (
    <ApplicationView>
      <Container>
        <Title />
        <IconList />
        <Paragraph />
      </Container>
      <Container>
        <AppBar />
        <ServerList />
      </Container>
    </ApplicationView>
  );
}
