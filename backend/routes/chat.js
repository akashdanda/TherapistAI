import express from 'express';
import authFirebaseUser from '../middleware/authFirebaseUser.js';
import  admin  from '../firebase/adminInit.js'
import { OpenAI } from 'openai';
import { db } from '../firebase/adminInit.js';
const router = express.Router();

const openai = new OpenAI({
    apiKey: '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'
});
// sending chat POST
router.post('/chat', authFirebaseUser, async (req, res) => {
    try {
        const userId = req.user.uid;
        const {messages} = req.body;
        const response = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: "system", content: "You are a supportive AI therapist. Respond in a calm, thoughtful, and encouraging tone." },
        ...messages,
            ],
            temperature: 0.7,
        });
        const reply = response.choices[0].message.content;
        const UserReply = messages[messages.length - 1].content;
        res.json({reply});

        const sessionRef = db.collection('sessions').doc(userId);
        const sessionSnap = await sessionRef.get();

        let fullMessages = [];
        if(sessionSnap.exists) {
            fullMessages = sessionSnap.data().messages || [];
        }

        const newMessages = [
            ...fullMessages,
            { role: 'user', content: UserReply },
            { role: 'assistant', content: reply }
        ];

        await sessionRef.set({
            messages: newMessages,
            lastUpdated: admin.firestore.FieldValue.serverTimestamp()
        });

        
    } catch (error) {
        console.error("OpenAI Call Error: ", error)
    }
});


//GET full chat history

router.get('/chat/history', authFirebaseUser, async(req, res) => {
    try {
        const userId = req.user.uid;
        const sessionRef = db.collection('sessions').doc(userId);
        const sessionSnap = await sessionRef.get();

        if (!sessionSnap) {
            return res.json({messages: []})
        }

        res.json({messages: sessionSnap.data().messages || [] });
    } catch (error) {
        console.error("Unable to fetch history: ", error)
        res.status(500).json({error: 'unable to fetch history'})
    }
})
export default router;
