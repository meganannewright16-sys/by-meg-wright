export default function Footer() {
  return (
    <footer style={{ textAlign: 'center', padding: '2rem 1.5rem 2.5rem', fontSize: '0.75rem', color: '#B8A99A', borderTop: '1px solid #E0D5C8', maxWidth: 1000, margin: '0 auto' }}>
      <span style={{ fontFamily: "'Crimson Pro', serif", fontSize: '0.95rem', color: '#8A7B6B' }}>
        by <span style={{ fontWeight: 700 }}>meg wright</span>
      </span>
      <br />
      &copy; 2026 &middot;{' '}
      <a href="https://www.linkedin.com/in/megan-wright-638887201/" target="_blank" rel="noopener noreferrer" style={{ color: '#A0845C', textDecoration: 'none' }}>LinkedIn</a>
    </footer>
  );
}
