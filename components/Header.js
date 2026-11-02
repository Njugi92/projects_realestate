
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/">
        <a className="brand">
          <span className="brand-icon">◆</span>
          <span>
            <strong>Touch <em>Co.</em></strong>
            <small>Real Estate | Investment | Your Future</small>
          </span>
        </a>
      </Link>

      <nav className="navigation">
        <Link href="/"><a>Home</a></Link>
        <Link href="/about"><a>About</a></Link>
        <Link href="/properties"><a>Properties</a></Link>
        <Link href="/contact"><a>Contact</a></Link>
      </nav>

      <a
        className="whatsapp-button"
        href="https://wa.me/254722300705"
        target="_blank"
        rel="noopener noreferrer"
      >
        WhatsApp Us
      </a>
    </header>
  );
}
