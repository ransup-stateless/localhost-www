import React from 'react';
import { QRCodeSVG } from 'qrcode.react';
import { Shield, Key, Lock, Zap } from 'lucide-react';

export default function SecureComm() {
  const simplexInvite = "https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2F0YuTwO05YJWS8rkjn9eLJDjQhFKvIYd8d4xG8X1blIU%3D%40smp8.simplex.im%2FUDe3Rb4nJXd2vP8irww84YHKxpQ_9x7x%23%2F%3Fv%3D1-3%26dh%3DMCowBQYDK2VuAyEAHnU_1HKlPjVu-uP6AUurIkbL0FzEqEO0l-0HKFUNfwY%253D%26srv%3Dbeccx4yfxxbvyhqypaavemqurytl6hozr47wfc7uuecacjqdvwpw2xid.onion";
  const lightningAddress = "4thrte@getalby.com";

  return (
    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
      <div className="terminal-window">
        <div className="flex items-center mb-4">
          <Shield className="w-5 h-5 mr-2" />
          <h2 className="text-xl tracking-wider">SECURE_CHANNEL::SIMPLEX</h2>
        </div>
        <div className="border border-green-500/30 p-4 mb-4">
          <p className="text-green-500/80 text-sm mb-4 font-mono">
            &gt; SCANNING QR INITIATES P2P ENCRYPTED COMMUNICATION_
          </p>
          <div className="flex justify-center p-4 bg-black/50">
            <img 
              src="https://cdn.discordapp.com/attachments/971473796701773864/1315555618643247144/signal-2024-12-08-214245.png?ex=6757d625&is=675684a5&hm=be710fa971a3151cba7fc044cbeeb8f3cbb2d41d1b578b6c52be29dc4c63e0ed"
              alt="Simplex QR Code"
              className="w-48 h-48 object-contain"
              style={{
                filter: 'invert(1) hue-rotate(180deg) brightness(1.5) contrast(1.2)'
              }}
            />
          </div>
        </div>
      </div>

      <div className="terminal-window">
        <div className="flex items-center mb-4">
          <Key className="w-5 h-5 mr-2" />
          <h2 className="text-xl tracking-wider">SECURE_CHANNELS::ACCESS</h2>
        </div>
        <div className="space-y-4">
          <div className="border border-green-500/30 p-4">
            <div className="flex items-center mb-2">
              <Zap className="w-4 h-4 mr-2" />
              <h3 className="font-bold tracking-wider">LIGHTNING_ADDRESS</h3>
            </div>
            <div className="bg-black/50 p-4 rounded border border-green-500/20">
              <QRCodeSVG 
                value={`lightning:${lightningAddress}`}
                size={120}
                level="H"
                className="mb-3 mx-auto"
                style={{
                  filter: 'drop-shadow(0 0 8px rgba(0, 255, 0, 0.4))'
                }}
              />
              <p className="text-center text-xs font-mono break-all">
                {lightningAddress}
              </p>
            </div>
          </div>
          <div className="border border-green-500/30 p-4">
            <div className="flex items-center mb-2">
              <Lock className="w-4 h-4 mr-2" />
              <h3 className="font-bold tracking-wider">NOSTR_ID</h3>
            </div>
            <p className="text-xs font-mono bg-black/50 p-3 rounded break-all border border-green-500/20">
              npub1r99saruemmvc24vdy6tw3d5t684np735780djpl7wvpqhz57cmys88765g
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}