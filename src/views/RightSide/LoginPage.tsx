import React from 'react';
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';

export default function LoginPage() {
  return (
    <Container>
      <NavigationBar backButton title="Login" />
      <div className="rounded-md overflow-y-auto bg-zinc-900/50 backdrop-blur-lg h-full w-full border border-zinc-600 flex flex-col justify-center items-center">
        <h1 className="text-2xl text-zinc-50">Login to shattered.net</h1>
        <div className="flex flex-col gap-1">
          <input type="email" className="bg-red-400 p-2 rounded-lg" />
          <input type="password" className="bg-red-400 p-2 rounded-lg" />
        </div>
      </div>
    </Container>
  );
}
