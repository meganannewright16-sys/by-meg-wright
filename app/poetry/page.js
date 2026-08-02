'use client';
import { useState } from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { POEMS, BOOKING_URL, EMAIL } from '../data';

const LANG_COLORS = { English: '#A0845C', Afrikaans: '#6B8A5E', German: '#8B7060' };

function PoemCard({ poem, onClick }) {
  const [h, setH] = useState(false);
  const c = LANG_COLORS[poem.lang] || '#A0845C';
  return (
    <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ background: h ? '#5C4033' : 'rgba(255,255,255,0.5)', border: h ? '1px solid #5C4033' : '1px solid #E0D5C8', borderRadius: 14, padding: '1.75rem', cursor: 'pointer', transition: 'all 0.4s cubic-bezier(0.25,0.46,0.45,0.94)', transform: h ? 'translateY(-4px)' : 'none', boxShadow: h ? '0 16px 32px rgba(92,64,51,0.12)' : '0 2px 8px rgba(92,64,51,0.04)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
        <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: h ? '#D4B896' : c, fontWeight: 600, background: h ? 'rgba(212,184,150,0.15)' : `${c}15`, padding: '0.2rem 0.6rem', borderRadius: 100, transition: 'all 0.3s' }}>{poem.lang}</span>
        <span style={{ fontSize: '0.7rem', color: '#B8A99A' }}>{poem.date}</span>
      </div>
      <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.3rem', fontWeight: 600, color: h ? '#FAF6F1' : '#3B2A1F', margin: '0 0 0.75rem', transition: 'color 0.3s' }}>{poem.title}</h3>
      <p style={{ fontSize: '0.82rem', color: h ? '#C4B5A2' : '#7A6B5D', lineHeight: 1.7, margin: 0, transition: 'color 0.3s' }}>{poem.lines.filter(l => l).slice(0, 3).join(' / ')}...</p>
    </div>
  );
}

function PoemModal({ poem, onClose }) {
  if (!poem) return null;
  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(59,42,31,0.55)', backdropFilter: 'blur(8px)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div onClick={e => e.stopPropagation()} style={{ background: '#FAF6F1', borderRadius: 20, padding: '3rem 2.5rem', maxWidth: 560, width: '100%', maxHeight: '85vh', overflowY: 'auto', position: 'relative', boxShadow: '0 24px 48px rgba(59,42,31,0.2)' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1.25rem', right: '1.5rem', background: 'none', border: 'none', fontSize: '1.4rem', color: '#A0937D', cursor: 'pointer', lineHeight: 1 }}>&times;</button>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: '#A0845C' }}>{poem.lang} · {poem.date}</span>
        <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: '2rem', fontWeight: 700, color: '#3B2A1F', margin: '0.75rem 0 2rem' }}>{poem.title}</h2>
        {poem.lines.map((line, i) => (
          <p key={i} style={{ fontSize: '0.95rem', color: '#4A3728', lineHeight: 1.4, margin: line === '' ? '1.25rem 0' : '0.6rem 0', paddingLeft: line.startsWith('  ') ? '1.5rem' : 0, borderLeft: line.startsWith('  ') ? '2px solid #D4B896' : 'none' }}>{line || '\u00A0'}</p>
        ))}
      </div>
    </div>
  );
}

export default function Poetry() {
  const [lf, setLf] = useState('All');
  const [selPoem, setSelPoem] = useState(null);
  const fp = lf === 'All' ? POEMS : POEMS.filter(p => p.lang === lf);
  const pillColors = { All: '#5C4033', English: '#A0845C', Afrikaans: '#6B8A5E', German: '#8B7060' };

  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Raleway', sans-serif", color: '#3B2A1F' }}>
      <Nav />
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#3B2A1F', margin: '0 0 0.5rem' }}>Poetry</h2>
          <p style={{ fontSize: '0.85rem', color: '#8A7B6B', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>Poems in English, Afrikaans, and German. I write in different languages because each one allows for a more meaningful expression of specific emotions. Some feelings only land right in Afrikaans. Others need the weight of German compound words. And sometimes English is the only way to keep things light enough to say at all.</p>
        </div>

        <div style={{ display: 'flex', gap: '0.5rem', justifyContent: 'center', marginBottom: '2rem', flexWrap: 'wrap' }}>
          {['All', 'English', 'Afrikaans', 'German'].map(l => (
            <button key={l} onClick={() => setLf(l)} style={{ fontSize: '0.78rem', padding: '0.45rem 1.15rem', borderRadius: 100, border: '1px solid', cursor: 'pointer', transition: 'all 0.3s', borderColor: lf === l ? pillColors[l] : '#D9CFC2', background: lf === l ? pillColors[l] : 'rgba(255,255,255,0.45)', color: lf === l ? '#FAF6F1' : '#6B5D50', fontWeight: lf === l ? 600 : 400 }}>{l}</button>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.25rem' }}>
          {fp.map(p => <PoemCard key={p.id} poem={p} onClick={() => setSelPoem(p)} />)}
        </div>

        <CTA />
      </main>
      <Footer />
      <PoemModal poem={selPoem} onClose={() => setSelPoem(null)} />
    </div>
  );
}
