import React, { useState } from 'react';
import SignOut from './SignOut';

function TherapyChat() {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hi, I’m here to support you. What’s on your mind?' }
    ]);

    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false); // changed from '' to false for correct boolean logic

    const handleSend = async () => {
        const updatedMessages = [...messages, { role: 'user', content: input }];
        setMessages(updatedMessages);
        setInput('');
        setLoading(true);

        try {
            const res = await fetch('http://localhost:3001/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: updatedMessages })
            });

            const data = await res.json();
            setMessages([...updatedMessages, { role: 'assistant', content: data.reply }]);
        } catch (err) {
            alert("Error");
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <div>
              <h1>Chat with Therapist</h1>
                {messages.map((msg, index) => (
                    <p key={index}><strong>{msg.role}:</strong> {msg.content}</p>
                ))}
            </div>

            <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={handleSend} disabled={loading}>
                {loading ? 'Sending...' : 'Send'}
            </button>
            <SignOut />
        </div>
    );
}

export default TherapyChat;
