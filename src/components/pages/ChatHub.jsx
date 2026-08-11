import React, { useEffect, useRef, useState } from 'react';
import { useLanguage } from '../../LanguageContext.jsx';
import BackgroundStage from '../BackgroundStage.jsx';
import { ChatSymbol } from '../Symbols.jsx';

const ROOM_KEYS = ['physics', 'chemistry', 'biology', 'astronomy', 'math_cs'];

const ROOM_ONLINE = {
  physics: 18, chemistry: 12, biology: 15, astronomy: 22, math_cs: 11,
};

const ROOM_BOT_REPLY = {
  physics: 'In quantum mechanics, particle behavior depends heavily on state measurement!',
  chemistry: 'Reaction kinetics depend directly on activation energy and thermal collisions.',
  biology: 'CRISPR-Cas9 enables precise gene modifications at specific DNA sequences.',
  astronomy: 'Gravitational lensing allows us to observe distant galaxies obscured by massive clusters.',
  math_cs: 'Graph theory algorithms like Dijkstra optimize routing across complex network structures.',
};

const SEED_MESSAGES = {
  physics: [
    { author: 'E. Fermi', text: 'Has anyone verified the latest superconductivity parameters at 120K?', type: 'incoming', time: '10:14 AM' },
    { author: 'Dr. Hassan', text: 'Yes, we observed zero resistance in the YBCO ceramic compound under liquid nitrogen cooling.', type: 'incoming', time: '10:16 AM' },
  ],
  chemistry: [
    { author: 'ChemX Lead', text: 'Reminder: ChemX submission deadline for the reaction kinetics paper is fast approaching!', type: 'incoming', time: '09:30 AM' },
    { author: 'S. Malik', text: 'Does anyone have the molar absorption coefficients for the cobalt chloride experiment?', type: 'incoming', time: '09:42 AM' },
  ],
  biology: [
    { author: 'BioLab_Student', text: 'We successfully isolated plasmid DNA using standard alkaline lysis methods today.', type: 'incoming', time: '11:05 AM' },
    { author: 'Elena R.', text: 'Awesome! What was your gel electrophoresis recovery percentage?', type: 'incoming', time: '11:12 AM' },
  ],
  astronomy: [
    { author: 'CosmoObserver', text: 'The new orbital spectral data from James Webb shows clear water vapor signatures!', type: 'incoming', time: '08:20 AM' },
    { author: 'Astro_Ahmad', text: 'Incredible, is that targeting exoplanet K2-18b?', type: 'incoming', time: '08:25 AM' },
  ],
  math_cs: [
    { author: 'AlgoGeek', text: 'Is O(N log N) the theoretical lower bound for comparison-based sorting algorithms?', type: 'incoming', time: '01:15 PM' },
    { author: 'Prof. Turing', text: 'Correct, proved by decision tree height lower bounds.', type: 'incoming', time: '01:22 PM' },
  ],
};

export default function ChatHub({ active }) {
  const { t } = useLanguage();
  const c = t.chat;
  const [room, setRoom] = useState('physics');
  const [messages, setMessages] = useState(() => JSON.parse(JSON.stringify(SEED_MESSAGES)));
  const [input, setInput] = useState('');
  const scrollRef = useRef(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages, room]);

  const send = () => {
    const val = input.trim();
    if (!val) return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prev) => ({
      ...prev,
      [room]: [...prev[room], { author: c.you, text: val, type: 'outgoing', time: now }],
    }));
    setInput('');

    setTimeout(() => {
      const replyTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      setMessages((prev) => ({
        ...prev,
        [room]: [...prev[room], { author: c.bot, text: `${c.insight} "${val}": ${ROOM_BOT_REPLY[room]}`, type: 'incoming', time: replyTime }],
      }));
    }, 1000);
  };

  return (
    <main className={`page-view${active ? ' active' : ''}`}>
      <div className="wrap">
        <div className="left-content-zone">
          <div className="sec-head">
            <h2>{c.title}</h2>
            <p className="lede">{c.lede}</p>
          </div>

          <div className="sub-tabs">
            {ROOM_KEYS.map((key) => (
              <button key={key} className={`tab-btn${room === key ? ' active' : ''}`} onClick={() => setRoom(key)}>
                {c.rooms[key]}
              </button>
            ))}
          </div>

          <div className="chat-box-container">
            <div className="chat-header">
              <div className="chat-title">{c.rooms[room]}</div>
              <div className="chat-status">{ROOM_ONLINE[room]} {c.online}</div>
            </div>

            <div className="chat-messages" ref={scrollRef}>
              {messages[room].map((msg, i) => (
                <div className={`chat-msg ${msg.type}`} key={i}>
                  <div className="msg-author">{msg.author} • {msg.time}</div>
                  <div className="msg-bubble">{msg.text}</div>
                </div>
              ))}
            </div>

            <div className="chat-input-row">
              <input
                type="text"
                placeholder={c.inputPlaceholder}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => { if (e.key === 'Enter') send(); }}
              />
              <button className="btn btn-primary" style={{ padding: '8px 18px' }} onClick={send}>{c.send}</button>
            </div>
          </div>
        </div>
      </div>

      <BackgroundStage symbolKey="chat">
        <ChatSymbol />
      </BackgroundStage>
    </main>
  );
}
