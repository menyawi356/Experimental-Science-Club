import React, { useState } from 'react';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './components/pages/Home.jsx';
import About from './components/pages/About.jsx';
import Competitions from './components/pages/Competitions.jsx';
import Publishing from './components/pages/Publishing.jsx';
import ChatHub from './components/pages/ChatHub.jsx';
import Partners from './components/pages/Partners.jsx';
import Contact from './components/pages/Contact.jsx';
import JoinClubModal from './components/JoinClubModal.jsx';

export default function App() {
  const [page, setPage] = useState('home');
  const [joinOpen, setJoinOpen] = useState(false);

  const navigate = (id) => {
    setPage(id);
    window.scrollTo(0, 0);
  };

  return (
    <>
      <Header page={page} navigate={navigate} onJoinClick={() => setJoinOpen(true)} />

      <Home active={page === 'home'} navigate={navigate} />
      <About active={page === 'about'} />
      <Competitions active={page === 'competitions'} />
      <Publishing active={page === 'publishing'} />
      <ChatHub active={page === 'chat'} />
      <Partners active={page === 'partners'} />
      <Contact active={page === 'contact'} />

      <Footer />

      {joinOpen && <JoinClubModal onClose={() => setJoinOpen(false)} />}
    </>
  );
}
