import React from 'react';
import Container from '../Container';
import AppBar from '../AppBar';
import ServerList from '../ServerList';

export default function ServerListView() {
  return (
    <Container>
      <AppBar />
      <ServerList />
    </Container>
  );
}
