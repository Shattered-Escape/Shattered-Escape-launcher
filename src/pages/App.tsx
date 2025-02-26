import React from 'react';
import ApplicationView from '../components/ApplicationView';
import AppBar from '../components/AppBar';
import Slogan from '../components/Slogan';
import Container from '../components/Container';
import ServerList from '../components/ServerList';
import IconList from '../components/IconList';

export default function App() {
  return (
    <ApplicationView>
      <Container>
        <Slogan />
        <IconList />
        <p className="bg-zinc-900 rounded-md border border-gray-600 p-1 grow text-zinc-50">
          Thanks for Making this Possible!
          <br />
          <br />
          There will be Several Updates in the Future, well as Fixes and Improvements.
          <br />
          <br />
          Never let the Fire Die Out!
        </p>
      </Container>
      <Container>
        <AppBar />
        <ServerList />
      </Container>
    </ApplicationView>
  );
}
