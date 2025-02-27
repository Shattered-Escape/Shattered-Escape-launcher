import React from 'react';
import IconList from '../../components/IconList';
import Title from '../../components/Title';
import Container from '../../components/Container';

export default function PatchNotesPage() {
  return (
    <Container>
      <Title />
      <IconList />
      <p className="bg-zinc-900/50 backdrop-blur-lg rounded-md border overflow-y-auto border-gray-600 p-1 grow text-zinc-50">
        Shattered Escape Launcher first alpha is Officialy Out!
        <br />
        <br />
        There will be Several Updates in the Future, well as Fixes and Improvements, but it is already usable.
        <br />
        <br />
        Special Thanks to JT_MAOCI and Kovacs.
        <br />
        <br />
        There will be Updates related to the Server more often than the Launcher itself, so stay tuned!
        <br />
        <br />
        If you have any suggestions, feel free to contact us.
        <br />
        <br />
        Enjoy! - Shattered Escape Team
      </p>
    </Container>
  );
}
