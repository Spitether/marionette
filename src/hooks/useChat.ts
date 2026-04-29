'use client';

import { useState, useEffect } from 'react';

export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    // WebSocket or polling logic here
    setIsConnected(true);
    return () => setIsConnected(false);
  }, []);

  const sendMessage = (message) => {
    // Send logic
  };

  return { messages, sendMessage, isConnected };
}

