import Link from 'next/link';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { BOOKING_URL, EMAIL } from './data';

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="8" x2="13" y2="8" /><polyline points="9,4 13,8 9,12" />
  </svg>
);

const NAV_CARDS = [
  { label: 'See my client work', href: '/services' },
  { label: 'Browse my toolkits', href: '/toolkits' },
  { label: 'Read my poetry', href: '/poetry' },
  { label: 'Read my prose', href: '/prose' },
];

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Libre Franklin', sans-serif", color: '#3B2A1F' }}>
      <Nav />
      <main style={{ maxWidth: 1000, margin: '0 auto', padding: '0 1.5rem 4rem' }}>

        {/* Hero */}
        <section className="fade-in" style={{ textAlign: 'center', padding: '4.5rem 0 2.5rem' }}>
          <p style={{ fontSize: '0.7rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: '#A0845C', marginBottom: '1.5rem', fontWeight: 500 }}>
            Growth marketing · Research · Creative writing
          </p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 'clamp(1.8rem, 4.5vw, 2.8rem)', fontWeight: 700, color: '#3B2A1F', lineHeight: 1.25, maxWidth: 640, margin: '0 auto' }}>
            Words that move people.<br />Strategy that moves needles.
          </h2>
          <p style={{ fontSize: '0.92rem', color: '#6B5D50', lineHeight: 1.8, maxWidth: 540, margin: '1.5rem auto 0' }}>
            I'm Meg, a freelance marketing specialist with a Master's in Psycholinguistics. I design messaging systems that turn curiosity into action, built on the science of how language actually moves people.
          </p>
        </section>

        {/* Nav cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem', marginBottom: '3.5rem' }}>
          {NAV_CARDS.map(({ label, href }) => (
            <Link key={href} href={href} style={{
              background: 'rgba(255,255,255,0.55)', border: '1px solid #E0D5C8', borderRadius: 12,
              padding: '1.25rem 1.5rem', textAlign: 'left', fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '0.88rem', color: '#4A3728', fontWeight: 500, textDecoration: 'none',
              display: 'flex', justifyContent: 'space-between', alignItems: 'center',
              transition: 'all 0.3s ease',
            }}>
              {label} <span style={{ color: '#A0845C' }}><ArrowIcon /></span>
            </Link>
          ))}
        </div>

        {/* About block */}
        <div style={{ display: 'flex', gap: '2.5rem', alignItems: 'center', background: 'rgba(255,255,255,0.5)', border: '1px solid #E0D5C8', borderRadius: 18, padding: '2.5rem', marginBottom: '3.5rem', flexWrap: 'wrap' }}>
          <div style={{ width: 140, height: 140, borderRadius: '50%', flexShrink: 0, overflow: 'hidden', margin: '0 auto' }}>
            <img src="/MA_WRIGHT.png" alt="Meg Wright" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </div>
          <div style={{ flex: 1, minWidth: 250 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#3B2A1F', margin: '0 0 0.75rem' }}>Hi, I'm Meg</h3>
            <p style={{ fontSize: '0.88rem', color: '#6B5D50', lineHeight: 1.75, margin: '0 0 1rem' }}>
              Linguist turned marketer. Every brand has a story and every founder has a voice. My job is to help you find both, so you can tell your story in your own voice, to the people who need to hear it.
            </p>
            <Link href="/about" style={{ color: '#A0845C', fontFamily: "'Libre Franklin', sans-serif", fontSize: '0.82rem', fontWeight: 600, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              More about me <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: 'linear-gradient(135deg, #5C4033, #3B2A1F)', borderRadius: 18, padding: '3rem 2.5rem', textAlign: 'center' }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 700, color: '#F5EDE3', margin: '0 0 0.75rem' }}>Let's talk about your project</h3>
          <p style={{ fontSize: '0.88rem', color: '#C4B5A2', lineHeight: 1.7, maxWidth: 440, margin: '0 auto 1.75rem' }}>
            Book a free consultation call and let's figure out how to get your message in front of the right people.
          </p>
          <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.85rem 2.25rem', borderRadius: 100, background: '#C4715B', color: '#FBF8F4', fontSize: '0.88rem', fontWeight: 600, textDecoration: 'none', letterSpacing: '0.03em' }}>
            Book a consultation
          </a>
          <p style={{ fontSize: '0.8rem', color: '#C4B5A2', marginTop: '1rem' }}>
            A bit camera shy? <a href={`mailto:${EMAIL}`} style={{ color: '#E8A88F', textDecoration: 'underline' }}>Pop me an email here</a>
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
