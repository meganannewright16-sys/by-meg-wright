'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Nav() {
  const pathname = usePathname();
  const items = [
    ['/', 'Home'],
    ['/services', 'Services'],
    ['/toolkits', 'Toolkits'],
    ['/poetry', 'Poetry'],
    ['/prose', 'Prose'],
    ['/about', 'About'],
  ];

  return (
    <header style={{ maxWidth: 1000, margin: '0 auto', padding: '1.75rem 1.5rem 0', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 10, flexWrap: 'wrap', gap: '0.75rem' }}>
      <Link href="/" style={{ textDecoration: 'none' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.5rem', fontWeight: 400, color: '#4A3728', margin: 0 }}>
          by <span style={{ fontWeight: 700 }}>meg wright</span>
        </h1>
      </Link>
      <nav style={{ display: 'flex', gap: '1.5rem', alignItems: 'center', flexWrap: 'wrap' }}>
        {items.map(([href, label]) => {
          const active = pathname === href;
          return (
            <Link key={href} href={href} style={{
              fontFamily: "'Libre Franklin', sans-serif",
              fontSize: '0.8rem',
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: active ? '#4A3728' : '#A89888',
              textDecoration: 'none',
              padding: '0.25rem 0',
              borderBottom: active ? '2px solid #C4715B' : '2px solid transparent',
              transition: 'all 0.3s ease',
              fontWeight: active ? 600 : 400,
            }}>{label}</Link>
          );
        })}
        <a href="https://calendar.app.google/hDrsCpixdVSpDzsa6" target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'Libre Franklin', sans-serif", fontSize: '0.8rem', letterSpacing: '0.05em', fontWeight: 600, color: '#FBF8F4', background: '#3B2A1F', padding: '0.55rem 1.25rem', borderRadius: 100, textDecoration: 'none', transition: 'all 0.3s ease' }}>
          Let's chat
        </a>
      </nav>
    </header>
  );
}
