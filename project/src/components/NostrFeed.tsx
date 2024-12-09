import React, { useEffect, useState, useCallback } from 'react';
import { SimplePool, nip19 } from 'nostr-tools';
import { formatDistanceToNow } from 'date-fns';
import { MessageSquare, Repeat, Heart, Share2, RefreshCw } from 'lucide-react';

interface NostrEvent {
  id: string;
  pubkey: string;
  created_at: number;
  content: string;
  tags: string[][];
}

export default function NostrFeed({ pubkey }: { pubkey: string }) {
  const [events, setEvents] = useState<NostrEvent[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const fetchEvents = useCallback(async () => {
    const pool = new SimplePool();
    const relays = [
      'wss://relay.damus.io',
      'wss://nos.lol',
      'wss://relay.nostr.band'
    ];

    try {
      setRefreshing(true);
      const decodedPubkey = pubkey.startsWith('npub') ? nip19.decode(pubkey).data : pubkey;
      
      const sub = pool.sub(relays, [{
        kinds: [1],
        authors: [decodedPubkey as string],
        limit: 10
      }]);

      const newEvents: NostrEvent[] = [];

      sub.on('event', (event: NostrEvent) => {
        newEvents.push(event);
      });

      await new Promise<void>((resolve) => {
        sub.on('eose', () => {
          setEvents(newEvents.sort((a, b) => b.created_at - a.created_at));
          setLoading(false);
          setRefreshing(false);
          resolve();
        });
      });

      sub.unsub();
      pool.close(relays);
    } catch (error) {
      console.error('Error fetching Nostr events:', error);
      setLoading(false);
      setRefreshing(false);
    }
  }, [pubkey]);

  useEffect(() => {
    fetchEvents();
  }, [fetchEvents]);

  return (
    <div className="terminal-window mt-12">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center">
          <MessageSquare className="w-5 h-5 mr-2" />
          <h2 className="text-xl tracking-wider">NOSTR::TRANSMISSIONS</h2>
        </div>
        <button
          onClick={fetchEvents}
          disabled={loading || refreshing}
          className="border border-green-500 p-2 hover:bg-green-500/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          title="Refresh feed"
        >
          <RefreshCw className={`w-4 h-4 ${refreshing ? 'animate-spin' : ''}`} />
        </button>
      </div>

      {loading ? (
        <div className="text-center p-8">
          <div className="inline-block border border-green-500 px-4 py-2 animate-pulse">
            RETRIEVING_TRANSMISSIONS...
          </div>
        </div>
      ) : events.length === 0 ? (
        <div className="text-center p-8 border border-green-500/30">
          <p className="text-green-500/70">NO_TRANSMISSIONS_FOUND</p>
        </div>
      ) : (
        <div className="space-y-4">
          {events.map((event) => (
            <div key={event.id} className="border border-green-500/30 p-4 hover:border-green-500/50 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <div className="font-mono text-xs text-green-500/70">
                  &gt; {formatDistanceToNow(event.created_at * 1000)} ago
                </div>
                <div className="flex space-x-4">
                  {[Heart, Repeat, Share2].map((Icon, i) => (
                    <button key={i} className="hover:text-green-400 transition-colors">
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
              </div>
              <p className="text-sm whitespace-pre-wrap break-words font-mono">
                {event.content}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}