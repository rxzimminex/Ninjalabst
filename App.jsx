import { Github, Link, Mail } from "lucide-react";

export default function App() {
  return (
    <main style={{
      minHeight: '100vh',
      background: 'linear-gradient(to bottom, #000, #111)',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '2rem',
      fontFamily: 'sans-serif'
    }}>
      <div style={{ textAlign: 'center', marginTop: '3rem' }}>
        <img 
          src="https://avatars.githubusercontent.com/u/9919?s=200&v=4" 
          alt="NinjaLabs Logo" 
          style={{ width: 96, height: 96, borderRadius: '50%', border: '4px solid white', marginBottom: '1rem' }}
        />
        <h1 style={{ fontSize: '2rem', fontWeight: 'bold' }}>NinjaLabs</h1>
        <p style={{ color: '#ccc' }}>Welcome to your all-in-one smart link hub.</p>
      </div>

      <div style={{ marginTop: '2rem', width: '100%', maxWidth: 480 }}>
        {[
          { label: 'GitHub', url: 'https://github.com/', icon: <Github size={16} /> },
          { label: 'Portfolio', url: 'https://yourportfolio.com', icon: <Link size={16} /> },
          { label: 'Contact', url: 'mailto:you@example.com', icon: <Mail size={16} /> }
        ].map(({ label, url, icon }) => (
          <div key={label} style={{
            backgroundColor: '#1e1e1e',
            padding: '1rem',
            marginBottom: '1rem',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: '0.5rem'
          }}>
            <span>{label}</span>
            <a href={url} target="_blank" rel="noopener noreferrer" style={{
              backgroundColor: 'white',
              color: 'black',
              padding: '0.5rem 1rem',
              borderRadius: '0.375rem',
              textDecoration: 'none',
              display: 'flex',
              alignItems: 'center',
              gap: '0.25rem'
            }}>
              {icon} Visit
            </a>
          </div>
        ))}
      </div>

      <footer style={{ marginTop: '4rem', fontSize: '0.875rem', color: '#777' }}>
        © 2025 NinjaLabs
      </footer>
    </main>
  );
}