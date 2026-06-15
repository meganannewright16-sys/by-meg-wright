'use client';
import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { WRITING } from '../data';

function ProseCard({ piece, onClick }) {
  const [h, setH] = useState(false);
  return (
    <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: h ? '#5C4033' : 'rgba(255,255,255,0.5)', border: h ? '1px solid #5C4033' : '1px solid #E0D5C8', borderRadius: 14, padding: '2rem', cursor: 'pointer', transition: 'all 0.4s ease', transform: h ? 'translateY(-4px)' : 'none', boxShadow: h ? '0 16px 32px rgba(92,64,51,0.12)' : '0 2px 8px rgba(92,64,51,0.04)' }}>
      <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: h ? '#D4B896' : '#A0845C', fontWeight: 600, transition: 'color 0.3s' }}>{piece.category}</span>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.3rem', fontWeight: 600, color: h ? '#FAF6F1' : '#3B2A1F', margin: '0.5rem 0', lineHeight: 1.3, transition: 'color 0.3s' }}>{piece.title}</h3>
      <p style={{ fontSize: '0.85rem', color: h ? '#C4B5A2' : '#7A6B5D', lineHeight: 1.7, margin: 0, transition: 'color 0.3s' }}>{piece.paragraphs[0].substring(0, 150)}...</p>
      <span style={{ fontSize: '0.72rem', color: '#B8A99A', marginTop: '0.75rem', display: 'block' }}>{piece.date}</span>
    </div>
  );
}

function ProseModal({ piece, onClose }) {
  if (!piece) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(59,42,31,0.55)', backdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#FAF6F1', borderRadius: 20, padding: '3rem 2.5rem', maxWidth: 640, width: '100%', maxHeight: '85vh', overflowY: 'auto', position: 'relative', boxShadow: '0 24px 48px rgba(59,42,31,0.2)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.4rem', color: '#A0937D', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A0845C' }}>{piece.category} · {piece.date}</span>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 700, color: '#3B2A1F', margin: '0.75rem 0 2rem' }}>{piece.title}</h2>
        {piece.paragraphs.map((p, i) => (
          <p key={i} style={{ fontSize: '0.95rem', color: '#4A3728', lineHeight: 1.85, margin: '0 0 1.25rem', whiteSpace: 'pre-line' }}>{p}</p>
        ))}
      </div>
    </div>
  );
}

export default function Prose() {
  const [selProse, setSelProse] = useState(null);
  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Libre Franklin', sans-serif", color: '#3B2A1F' }}>
      <Nav />
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#3B2A1F', margin: '0 0 0.5rem' }}>Prose</h2>
          <p style={{ fontSize: '0.85rem', color: '#8A7B6B', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>For when you want a glimpse into the conversations going on in my head when you catch me staring into the abyss.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.25rem' }}>
          {WRITING.map(w => <ProseCard key={w.id} piece={w} onClick={() => setSelProse(w)} />)}
        </div>
        <CTA />
      </main>
      <Footer />
      <ProseModal piece={selProse} onClose={() => setSelProse(null)} />
    </div>
  );
}
