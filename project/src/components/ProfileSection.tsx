import React from 'react';
import { Terminal, Shield, Network } from 'lucide-react';

export default function ProfileSection() {
  return (
    <div className="terminal-window mb-12">
      <div className="flex items-center justify-center mb-6">
        <div className="relative">
          <div className="w-32 h-32 border-2 border-green-500 relative overflow-hidden">
            <img
              src="https://cdn.discordapp.com/attachments/971473796701773864/1308600435426463834/download_1.png?ex=67579520&is=675643a0&hm=fcb6059812b0d620951c16543acf35a7439ca2bf37b60f6d997571bbd9b59074"
              alt="Profile"
              className="w-full h-full object-cover mix-blend-screen grayscale"
            />
            <div className="absolute inset-0 bg-green-500/20"></div>
          </div>
          <div className="absolute -inset-1 border border-green-500/50 animate-pulse"></div>
        </div>
      </div>

      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-2 tracking-wider">LOCALHOST</h1>
        <p className="text-green-500/80 mb-4 tracking-[0.2em]">CRYPTOANARCHIST // CYPHERPUNK</p>
        <div className="max-w-2xl mx-auto text-green-400/70 mb-6 font-mono text-sm leading-relaxed">
          <p className="typing-effect">
            &gt; EXECUTING SECURE COMMUNICATION PROTOCOLS_
          </p>
          <p className="mt-2">
            &gt; SPECIALIZATION: CRYPTOGRAPHY | PRIVACY | RESISTANCE
          </p>
        </div>
      </div>

      <div className="flex justify-center space-x-6">
        {['Terminal', 'Shield', 'Network'].map((icon, index) => (
          <a
            key={index}
            href="#"
            className="group relative"
          >
            <div className="w-10 h-10 border border-green-500 flex items-center justify-center hover:bg-green-500/20 transition-all duration-300">
              {icon === 'Terminal' && <Terminal className="w-5 h-5" />}
              {icon === 'Shield' && <Shield className="w-5 h-5" />}
              {icon === 'Network' && <Network className="w-5 h-5" />}
            </div>
            <div className="absolute -inset-px bg-green-500/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </a>
        ))}
      </div>
    </div>
  );
}