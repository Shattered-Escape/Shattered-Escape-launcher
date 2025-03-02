import React from 'react';
import Container from '../../components/Container';
import NavigationBar from '../../components/NavigationBar';

export default function LoginPage() {
  return (
    <Container>
      <NavigationBar backButton title="Login" />
      <div className="rounded-md overflow-y-auto bg-zinc-900/50 backdrop-blur-lg h-full w-full border border-zinc-600 flex flex-col justify-center items-center">
        <h1 className="text-2xl">Login to shattered.net</h1>
        <div className="pt-8 flex flex-col gap-4">
          <input type="email" className="bg-zinc-600 border border-zinc-400 p-2 rounded-md" placeholder="Email" />
          <input type="password" className="bg-zinc-600 border border-zinc-400 p-2 rounded-md" placeholder="Password" />
          <button className="hover:bg-green-800 hover:border-green-600 bg-green-600 border border-green-400 p-1 rounded-md">
            Login
          </button>
        </div>
      </div>
    </Container>
  );
}
