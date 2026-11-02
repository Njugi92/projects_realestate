
import Link from 'next/link';

export default function Header() {
  return (
    <header className="site-header">
      {/* Brand Logo */}
      <Link href="/" className="brand">
        <span className="brand-icon">◆</span>
        <span>
          <strong>
            Touch <em>Co.</em>
          </strong>
          <small>Real Estate | Investment | Your Future</small>
        </span>
      </Link>

      {/* Navigation */}
      <nav className="navigation">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/properties">Properties</Link>
        <Link href="/contact">Contact</Link>
      </nav>

      {/* WhatsApp Contact */}
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
