import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CTA from '../components/CTA';
import { SERVICES_DATA, CASES } from '../data';

export const metadata = { title: 'Services | By Meg Wright', description: 'From landing pages to lifecycle campaigns. Communication engineered to perform.' };

const Icons = {
  landingPage: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#A0845C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="4" width="24" height="24" rx="3" /><line x1="4" y1="10" x2="28" y2="10" /><rect x="8" y="14" width="16" height="4" rx="1" /><line x1="12" y1="22" x2="20" y2="22" /></svg>,
  social: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#A0845C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="16" cy="10" r="3" /><circle cx="8" cy="22" r="3" /><circle cx="24" cy="22" r="3" /><line x1="14" y1="12.5" x2="9.5" y2="19.5" /><line x1="18" y1="12.5" x2="22.5" y2="19.5" /></svg>,
  email: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#A0845C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="4" y="7" width="24" height="18" rx="3" /><polyline points="4,7 16,18 28,7" /></svg>,
  resource: <svg width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="#A0845C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 4h14l6 6v18a2 2 0 01-2 2H6a2 2 0 01-2-2V6a2 2 0 012-2z" /><polyline points="20,4 20,10 26,10" /><line x1="10" y1="16" x2="22" y2="16" /><line x1="10" y1="20" x2="22" y2="20" /><line x1="10" y1="24" x2="16" y2="24" /></svg>,
};

const ExtIcon = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 8v3.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 011 11.5v-7A1.5 1.5 0 012.5 3H6" /><polyline points="9,1 13,1 13,5" /><line x1="5.5" y1="8.5" x2="13" y2="1" /></svg>;

export default function Services() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Raleway', sans-serif", color: '#3B2A1F' }}>
      <Nav />
      <main className="fade-in" style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#3B2A1F', margin: '0 0 0.5rem' }}>Services</h2>
          <p style={{ fontSize: '0.85rem', color: '#8A7B6B', maxWidth: 520, margin: '0 auto', lineHeight: 1.65 }}>From landing pages to lifecycle campaigns. Communication engineered to perform.</p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(210px, 1fr))', gap: '1rem', marginBottom: '3.5rem' }}>
          {SERVICES_DATA.map((s, i) => (
            <div key={i} style={{ background: 'rgba(255,255,255,0.55)', border: '1px solid #E0D5C8', borderRadius: 14, padding: '1.75rem', textAlign: 'center' }}>
              <div style={{ marginBottom: '0.75rem', display: 'flex', justifyContent: 'center' }}>{Icons[s.icon]}</div>
              <h4 style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.05rem', fontWeight: 600, color: '#3B2A1F', margin: '0 0 0.5rem' }}>{s.name}</h4>
              <p style={{ fontSize: '0.8rem', color: '#7A6B5D', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>

        <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.5rem', fontWeight: 700, color: '#3B2A1F', marginBottom: '1.25rem' }}>Selected Projects</h3>
        {CASES.map((cs, i) => (
          <div key={i} style={{ background: 'linear-gradient(135deg, #5C4033, #3B2A1F)', borderRadius: 16, padding: '2rem 2.25rem', marginBottom: '1.25rem', color: '#F5EDE3' }}>
            <span style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: '#D4B896' }}>{cs.type}</span>
            <h4 style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.35rem', fontWeight: 600, margin: '0.5rem 0 0.75rem', color: '#FAF6F1' }}>{cs.title}</h4>
            <p style={{ fontSize: '0.88rem', lineHeight: 1.75, color: '#C4B5A2', margin: '0 0 1rem' }}>{cs.desc}</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <span style={{ background: 'rgba(196,113,91,0.2)', borderRadius: 100, padding: '0.4rem 1rem', fontSize: '0.78rem', color: '#E8A88F', fontWeight: 500 }}>{cs.result}</span>
              <a href={cs.link} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', color: '#D4B896', fontSize: '0.78rem', fontWeight: 500, textDecoration: 'none' }}>View project <ExtIcon /></a>
            </div>
          </div>
        ))}

        <CTA />
      </main>
      <Footer />
    </div>
  );
}
