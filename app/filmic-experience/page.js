import Nav from '../components/Nav';
import Footer from '../components/Footer';
import { notFound } from 'next/navigation';
import { SHOW_FILMIC_EXPERIENCE } from '../lib/features';

export const metadata = {
  title: 'Filmic Experience | By Meg Wright',
  description: 'The Wide Awake Watching Experience: build your tolerance for truth through film.',
  // Secret page: keep it out of search results.
  robots: { index: false, follow: false },
};

const FORM_URL = 'https://docs.google.com/forms/d/e/1FAIpQLScXcIQI0fxkw1fvL1Ueff34kF4_PqR-T5a6jhGHm4KvgOiaPA/viewform';

const ExtIcon = () => <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M11 8v3.5a1.5 1.5 0 01-1.5 1.5h-7A1.5 1.5 0 011 11.5v-7A1.5 1.5 0 012.5 3H6" /><polyline points="9,1 13,1 13,5" /><line x1="5.5" y1="8.5" x2="13" y2="1" /></svg>;

export default function FilmicExperience() {
  if (!SHOW_FILMIC_EXPERIENCE) notFound();
  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Raleway', sans-serif", color: '#3B2A1F' }}>
      <Nav />
      <main className="fade-in" style={{ maxWidth: 1000, margin: '0 auto', padding: '3rem 1.5rem 4rem', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#3B2A1F', margin: '0 0 1rem' }}>Filmic Experience</h2>
        <blockquote style={{ margin: '0 auto 1.75rem', maxWidth: 560 }}>
          <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.25rem', fontStyle: 'italic', color: '#4A3728', lineHeight: 1.5, margin: '0 0 0.5rem' }}>
            “Nietzsche said that a man’s worth was determined by how much truth he could tolerate”
          </p>
          <footer style={{ fontSize: '0.8rem', color: '#A0845C', letterSpacing: '0.05em' }}>– Jordan Peterson</footer>
        </blockquote>
        <p style={{ fontSize: '0.85rem', color: '#8A7B6B', maxWidth: 560, margin: '0 auto 1rem', lineHeight: 1.65 }}>
          Every film introduces the nuance of truth through a camera lens. To experience storytelling through film is to build this tolerance. And that's why I have introduced the Wide Awake Watching Experience.
        </p>
        <p style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.15rem', fontWeight: 600, color: '#3B2A1F', margin: '0 auto 2rem' }}>
          Ready to enhance your worth?
        </p>
        <a href={FORM_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.4rem', padding: '0.8rem 2rem', borderRadius: 100, background: '#C4715B', color: '#FBF8F4', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
          Let's do it <ExtIcon />
        </a>
      </main>
      <Footer />
    </div>
  );
}
