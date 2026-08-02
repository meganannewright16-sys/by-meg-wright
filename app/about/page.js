import Nav from '../components/Nav';
import Footer from '../components/Footer';
import CTA from '../components/CTA';

export const metadata = { title: 'About | By Meg Wright', description: 'Freelance marketing specialist and writer with a Master\'s in Psycholinguistics from Stellenbosch University.' };

export default function About() {
  return (
    <div style={{ minHeight: '100vh', fontFamily: "'Raleway', sans-serif", color: '#3B2A1F' }}>
      <Nav />
      <main className="fade-in" style={{ maxWidth: 660, margin: '0 auto', padding: '3rem 1.5rem 4rem' }}>
        <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
          <h2 style={{ fontFamily: "'Crimson Pro', serif", fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 700, color: '#3B2A1F', margin: 0 }}>About</h2>
        </div>

        <div style={{ fontSize: '0.95rem', lineHeight: 1.85, color: '#5C4D40' }}>
          <p>Language shapes behaviour. That's where my work begins.</p>
          <p style={{ marginTop: '1.25rem' }}>From research-backed long-form content to conversion-focused emails and performance-driven social campaigns, I build messaging systems designed to move people from curiosity to action.</p>
          <p style={{ marginTop: '1.25rem' }}>My interest in digital marketing grew out of my Master's in Psycholinguistics at Stellenbosch University (cum laude), where I explored how language, identity, and perception influence decision-making online. That behavioural lens now underpins everything I create: positioning, funnels, lifecycle campaigns, and launch strategy.</p>
          <p style={{ marginTop: '1.25rem' }}>After starting in agency copywriting, I went on to build my own freelance practice, leading end-to-end marketing strategy for B2B and B2C brands. I partner closely with clients to clarify their message, design high-converting campaigns, and turn audience attention into measurable growth.</p>
          <p style={{ marginTop: '1.25rem', fontFamily: "'Crimson Pro', serif", fontSize: '1.1rem', color: '#4A3728', fontWeight: 600 }}>I don't just write content. I engineer communication that performs.</p>
        </div>

        <div style={{ marginTop: '2.5rem', padding: '1.75rem', background: 'rgba(255,255,255,0.55)', borderRadius: 16, border: '1px solid #E0D5C8' }}>
          <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.15rem', fontWeight: 600, color: '#5C4033', marginBottom: '1rem' }}>Education</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', fontSize: '0.85rem', color: '#6B5D50' }}>
            <div><strong style={{ color: '#4A3728' }}>MA Psycholinguistics</strong> · Stellenbosch University, 2022 (cum laude)</div>
            <div><strong style={{ color: '#4A3728' }}>BA Hons General Linguistics</strong> · Stellenbosch University, 2021 (cum laude)</div>
            <div><strong style={{ color: '#4A3728' }}>BA Humanities</strong> · Stellenbosch University, 2020</div>
          </div>
        </div>

        <div style={{ marginTop: '1.25rem', padding: '1.75rem', background: 'rgba(255,255,255,0.55)', borderRadius: 16, border: '1px solid #E0D5C8' }}>
          <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.15rem', fontWeight: 600, color: '#5C4033', marginBottom: '1rem' }}>Tools & Platforms</h3>
          <p style={{ fontSize: '0.85rem', color: '#6B5D50', lineHeight: 1.7, margin: 0 }}>Canva, Notion, WordPress, Wix, Flodesk, Mighty Networks, Insightly CRM, HTML/CSS, SEO, organic & paid social media, email marketing platforms.</p>
        </div>

        <div style={{ marginTop: '1.25rem', padding: '1.75rem', background: 'linear-gradient(135deg, rgba(107,138,94,0.06), rgba(140,168,128,0.06))', borderRadius: 16, border: '1px solid #E0D5C8', borderLeft: '3px solid #6B8A5E' }}>
          <h3 style={{ fontFamily: "'Crimson Pro', serif", fontSize: '1.15rem', fontWeight: 600, color: '#5C4033', marginBottom: '1rem' }}>Beyond the work</h3>
          <p style={{ fontSize: '0.85rem', color: '#6B5D50', lineHeight: 1.7, margin: 0 }}>Outside of client work, I write poetry in three languages, create educational health toolkits born from lived experience, and am always in search of coffee and cats. I love baking (especially peanut butter cookies) and hiking whenever the weather cooperates.</p>
        </div>

        <CTA title="Let's work together" sub="Whether you need a landing page, email funnel, or full marketing strategy, I'd love to hear from you." />
      </main>
      <Footer />
    </div>
  );
}
