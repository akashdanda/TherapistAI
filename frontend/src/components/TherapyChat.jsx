import React, { useState } from 'react';
import SignOut from './SignOut';
import { getAuth } from 'firebase/auth';
import { Link } from "react-router-dom";
import '../styles/TherapyChat.css'

function TherapyChat() {
    const [messages, setMessages] = useState([
        { role: 'assistant', content: 'Hi, I’m here to support you. What’s on your mind?' }
    ]);


    const [input, setInput] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSend = async () => {
        const updatedMessages = [...messages, { role: 'user', content: input }];
        setMessages(updatedMessages);
        setInput('');
        setLoading(true);
        const auth = getAuth();
        const user = auth.currentUser;
        const idToken = user && await user.getIdToken();

        try {
            if (!idToken) {
                alert("Could not get ID token");
                setLoading(false);
                return;

            } else {
                console.log(idToken)
            }            
            const res = await fetch('http://localhost:3001/api/chat', {
                method: 'POST',
                headers: { 
                    'Content-Type': 'application/json', 
                    Authorization: `Bearer ${idToken}`
                },
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
        <div className="therapy-chat-container">
            <h1>Chat with Therapist</h1>
            
            <div className="message-box">
                {messages.map((msg, index) => (
                    <div key={index} className={`chat-message ${msg.role}`}>
                        <strong>{msg.role}:</strong> {msg.content}
                    </div>
                ))}
            </div>

            <div className="input-section">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    disabled={loading}
                />
                <button onClick={handleSend} disabled={loading || !input.trim()}>
                    {loading ? 'Sending...' : 'Send'}
                </button>
            </div>

            <div className="chat-controls">
                <Link to="/history">Chat History</Link>
                  <div className="signout-wrapper">
                    <SignOut />
                 </div>
            </div>
        </div>
    );
}

export default TherapyChat;
