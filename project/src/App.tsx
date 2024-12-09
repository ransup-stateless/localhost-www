import React from 'react';
import ProfileSection from './components/ProfileSection';
import SecureComm from './components/SecureComm';
import NostrFeed from './components/NostrFeed';

function App() {
  const nostrPubkey = "npub1r99saruemmvc24vdy6tw3d5t684np735780djpl7wvpqhz57cmys88765g";

  return (
    <div className="min-h-screen bg-black crt">
      <div className="scanline" />
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="text-center mb-8">
          <div className="inline-block border border-green-500 px-4 py-2 mb-4">
            <span className="text-sm tracking-[0.2em]">SECURE TRANSMISSION</span>
          </div>
        </div>
        <ProfileSection />
        <SecureComm />
        <NostrFeed pubkey={nostrPubkey} />
        
        <footer className="mt-16 text-center text-green-500/60 text-sm border-t border-green-500/20 pt-8">
          <p className="font-mono">[END_TRANSMISSION]</p>
          <p className="mt-2 text-xs tracking-wider">© {new Date().getFullYear()} ENCRYPTED_IDENTITY</p>
        </footer>
      </div>
    </div>
  );
}

export default App;