import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { TOOLKITS } from '../data';

export const metadata = { title: 'Toolkits | By Meg Wright', description: 'Research-backed, compassionately designed educational resources for people navigating chronic illness.' };

const ExtIcon = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 8v3.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 011 11.5v-7A1.5 1.5 0 012.5 3H6" /><polyline points="9,1 13,1 13,5" /><line x1="5.5" y1="8.5" x2="13" y2="1" /></svg>;

export default function Toolkits() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Libre Franklin', sans-serif", color: '#3B2A1F' }}>
      <Nav />
      <main className="fade-in" style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#3B2A1F', margin: '0 0 0.5rem' }}>Toolkits</h2>
          <p style={{ fontSize: '0.85rem', color: '#8A7B6B', maxWidth: 560, margin: '0 auto', lineHeight: 1.65 }}>Research-backed, compassionately designed educational resources for people navigating chronic illness. Each toolkit breaks down medical information into accessible language and provides practical tools for self-advocacy.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
          {TOOLKITS.map((tk, i) => (
            <div key={i} style={{ background: '#fff', border: '1px solid #E0D5C8', borderTop: `4px solid ${tk.color}`, borderRadius: 18, overflow: 'hidden', boxShadow: '0 4px 16px rgba(92,64,51,0.06)' }}>
              <div style={{ height: 280, overflow: 'hidden' }}>
                <img src={tk.cover} alt={tk.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '1.75rem' }}>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.15rem', fontWeight: 600, color: '#3B2A1F', margin: '0 0 0.75rem' }}>{tk.name}</h4>
                <p style={{ fontSize: '0.82rem', color: '#6B5D50', lineHeight: 1.75, margin: '0 0 1.25rem' }}>{tk.desc}</p>
                <a href={tk.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.6rem 1.25rem', borderRadius: 100, background: tk.color, color: '#fff', fontSize: '0.8rem', fontWeight: 600, textDecoration: 'none' }}>
                  View toolkit <ExtIcon />
                </a>
              </div>
            </div>
          ))}
        </div>

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
