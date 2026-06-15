import { BOOKING_URL, EMAIL } from '../data';

export default function CTA({ title = "Let's talk about your project", sub = "Book a free consultation call and let's figure out how to get your message in front of the right people." }) {
  return (
    <div style={{ marginTop: '3rem', background: 'linear-gradient(135deg, #5C4033, #3B2A1F)', borderRadius: 18, padding: '2.5rem', textAlign: 'center' }}>
      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.35rem', fontWeight: 700, color: '#F5EDE3', margin: '0 0 0.75rem' }}>{title}</h3>
      <p style={{ fontSize: '0.85rem', color: '#C4B5A2', marginBottom: '1.5rem', lineHeight: 1.7 }}>{sub}</p>
      <a href={BOOKING_URL} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', padding: '0.8rem 2rem', borderRadius: 100, background: '#C4715B', color: '#FBF8F4', fontSize: '0.85rem', fontWeight: 600, textDecoration: 'none' }}>
        Book a consultation
      </a>
      <p style={{ fontSize: '0.8rem', color: '#C4B5A2', marginTop: '1rem' }}>
        A bit camera shy?{' '}
        <a href={`mailto:${EMAIL}`} style={{ color: '#E8A88F', textDecoration: 'underline' }}>Pop me an email here</a>
      </p>
    </div>
  );
}
