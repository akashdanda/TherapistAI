import React, { useEffect, useState } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

function ChatHistory() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const auth = getAuth();

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        console.warn("No user signed in");
        return;
      }

      try {
        const idToken = await user.getIdToken();
        const res = await fetch('http://localhost:3001/api/chat/history', {
          headers: {
            Authorization: `Bearer ${idToken}`,
          },
        });

        const data = await res.json();
        console.log("Data received from server:", data);

        if (data && Array.isArray(data.messages)) {
          setMessages(data.messages);
          console.log("Messages set:", data.messages);
        } else {
          console.warn("No messages found in response");
        }
      } catch (err) {
        console.error('Error fetching history:', err);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Chat History</h2>
      {messages.length === 0 ? (
        <p>No previous messages.</p>
      ) : (
        messages.map((msg, index) => {
          const content =
            typeof msg.content === 'string'
              ? msg.content
              : msg.content?.text ?? JSON.stringify(msg.content);

          return (
            <p key={index}>
              <strong>{msg.role}:</strong> {content}
            </p>
          );
        })
      )}
    </div>
  );
}

export default ChatHistory;
