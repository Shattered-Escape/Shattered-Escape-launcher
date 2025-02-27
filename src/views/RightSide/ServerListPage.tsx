import React from 'react';
import Container from '../../components/Container';
import ServerList from '../../components/ServerList';
import NavigationBar from '../../components/NavigationBar';

export default function ServerListPage() {
  return (
    <Container>
      <NavigationBar title="Available Servers" />
      <ServerList />
    </Container>
  );
}
