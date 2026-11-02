
import { useEffect, useState } from 'react';
import Link from 'next/link';

const slides = [
  {
    slug: 'thika-greens',
    title: 'Thika Greens Golf Estate',
    subtitle: 'PREMIUM PLOTS FOR SALE',
    description: 'Discover premium 100 × 100 ft plots in an estate with good roads.',
    image: '/assets/images/thikagre.jpg',
    price: 'KSh 20,000,000',
    location: 'Thika',
    size: '100 × 100 ft',
  },
  {
    slug: 'kithimani',
    title: 'Kithimani Plots',
    subtitle: 'AFFORDABLE LAND OWNERSHIP',
    description: 'Own a 50 × 100 ft plot with water and electricity available.',
    image: '/assets/images/kithimani.jpg',
    price: 'KSh 250,000',
    location: 'Kithimani',
    size: '50 × 100 ft',
  },
  {
    slug: 'konza-city',
    title: 'Konza City Plots',
    subtitle: 'INVEST IN YOUR FUTURE',
    description: 'Explore spacious plots for your future home or investment plans.',
    image: '/assets/images/konza.jpg',
    price: 'KSh 600,000',
    location: 'Konza City',
    size: '100 × 100 ft',
  },
  {
    slug: 'nakuru-bahati',
    title: 'Nakuru Bahati Plots',
    subtitle: 'YOUR LAND. YOUR FUTURE.',
    description: 'Explore 100 × 100 ft plots in the Bahati area of Nakuru.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    price: 'KSh 500,000',
    location: 'Nakuru Bahati',
    size: '50 × 100 ft',
  },
  {
    slug: 'ruiru-murera',
    title: 'Ruiru Murera Plots',
    subtitle: 'SPACE FOR YOUR NEXT CHAPTER',
    description: 'Explore 100 × 100 ft plots for a planned home or land investment.',
    image: 'assets/images/murera.png',
    price: 'KSh 2,000,000',
    location: 'Ruiru Murera',
    size: '100 × 100 ft',
  },
  {
    slug: 'ruiru-kimbo',
    title: 'Ruiru Kimbo Plots',
    subtitle: 'EXPLORE LAND IN RUIRU',
    description: 'Discover spacious plots for buyers considering residential development.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1800&q=85',
    price: 'KSh 6,500,000',
    location: 'Ruiru Kimbo',
    size: '100 × 100 ft',
  },
  {
    slug: 'makuyu',
    title: 'Makuyu Plots',
    subtitle: 'YOUR LAND INVESTMENT',
    description: 'Explore affordable 100 × 100 ft plots in Makuyu.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    price: 'KSh 950,000',
    location: 'Makuyu',
    size: '100 × 100 ft',
  },
  {
    slug: 'kenol',
    title: 'Kenol Plots',
    subtitle: 'MAKE ROOM FOR YOUR PLANS',
    description: 'Explore 100 × 100 ft plots for your future home or investment.',
    image: 'assets/images/kenol.jpg',
    price: 'KSh 1,200,000',
    location: 'Kenol',
    size: '100 × 100 ft',
  },
  {
    slug: 'kabati',
    title: 'Kabati Plots',
    subtitle: 'LAND WITH POSSIBILITIES',
    description: 'Explore affordable 100 × 100 ft plots in Kabati.',
    image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1800&q=85',
    price: 'KSh 850,000',
    location: 'Kabati',
    size: '100 × 100 ft',
  },
];

export default function Home() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, []);

  const slide = slides[activeSlide];

  const showPrevious = () => {
    setActiveSlide((current) => (current - 1 + slides.length) % slides.length);
  };

  const showNext = () => {
    setActiveSlide((current) => (current + 1) % slides.length);
  };

  return (
    <main>
      <section className="hero">
        {slides.map((item, index) => (
          <div
            key={item.slug}
            className={`hero-slide ${index === activeSlide ? 'active' : ''}`}
            style={{ backgroundImage: `url("${item.image}")` }}
            aria-hidden={index !== activeSlide}
          />
        ))}

        <button
          className="slider-arrow prev"
          onClick={showPrevious}
          aria-label="Previous property"
          type="button"
        >
          ‹
        </button>

        <button
          className="slider-arrow next"
          onClick={showNext}
          aria-label="Next property"
          type="button"
        >
          ›
        </button>

        <div className="hero-content" key={slide.slug}>
          <span className="eyebrow">{slide.subtitle}</span>
          <h1>{slide.title}</h1>
          <p>{slide.description}</p>
          <div className="hero-price">{slide.price}</div>

          <Link href={`/properties/${slide.slug}`}>
            <a className="primary-button">View This Plot →</a>
          </Link>
        </div>

        <div className="slide-dots">
          {slides.map((item, index) => (
            <button
              key={item.slug}
              onClick={() => setActiveSlide(index)}
              className={index === activeSlide ? 'selected' : ''}
              aria-label={`Show ${item.title}`}
              aria-current={index === activeSlide ? 'true' : undefined}
              type="button"
            />
          ))}
        </div>

        <div className="hero-location">📍 {slide.location}</div>
      </section>

      <section className="benefits">
        <article>
          <span>◈</span>
          <div>
            <h3>Prime Locations</h3>
            <p>Explore land opportunities in selected locations.</p>
          </div>
        </article>

        <article>
          <span>✓</span>
          <div>
            <h3>Personal Assistance</h3>
            <p>Get help choosing a property that suits your plans.</p>
          </div>
        </article>

        <article>
          <span>⌂</span>
          <div>
            <h3>Investment Opportunities</h3>
            <p>Discover plots for building or investment.</p>
          </div>
        </article>

        <article>
          <span>☎</span>
          <div>
            <h3>Contact Our Team</h3>
            <p>Talk to us about availability and viewing.</p>
          </div>
        </article>
      </section>

      <section className="featured section-wrap">
        <div className="section-heading">
          <span className="eyebrow">FIND YOUR PLACE</span>
          <h2>Explore Our Properties</h2>
          <p>Browse all nine plots and find one that suits your plans and budget.</p>
        </div>

        <div className="property-grid">
          {slides.map((property) => (
            <article className="property-card" key={property.slug}>
              <Link href={`/properties/${property.slug}`}>
                <a className="property-image">
                  <img src={property.image} alt={property.title} loading="lazy" />
                  <span>📍 {property.location}</span>
                </a>
              </Link>

              <div className="property-info">
                <h3>{property.title}</h3>
                <p>⌂ {property.size} &nbsp; · &nbsp; {property.location}</p>

                <div className="property-bottom">
                  <strong>{property.price}</strong>
                  <Link href={`/properties/${property.slug}`}>
                    <a className="small-button">View Details →</a>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="center-action">
          <Link href="/properties">
            <a className="primary-button">View All Properties →</a>
          </Link>
        </div>
      </section>

      <section className="investment-cta">
        <div>
          <span className="eyebrow">YOUR NEXT INVESTMENT STARTS HERE</span>
          <h2>Ready to Find Your Perfect Plot?</h2>
          <p>Contact Touch Co. to discuss your property options.</p>
        </div>

        <Link href="/contact">
          <a className="primary-button">Contact Our Team →</a>
        </Link>
      </section>
    </main>
  );
}
