
import Link from 'next/link';

const properties = [
  {
    slug: 'kithimani',
    name: 'Kithimani Plots',
    location: 'Kithimani',
    size: '50 × 100 ft',
    price: 'KSh 200,000',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    description:
      'Affordable plots with water and electricity available.',
  },
  {
    slug: 'konza-city',
    name: 'Konza City Plots',
    location: 'Konza City',
    size: '100 × 100 ft',
    price: 'KSh 1,000,000',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    description:
      'Spacious plots for prospective property investors.',
  },
  {
    slug: 'nakuru-bahati',
    name: 'Nakuru Bahati Plots',
    location: 'Nakuru Bahati',
    size: '100 × 100 ft',
    price: 'KSh 650,000',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    description:
      'Explore land for your future home or investment.',
  },
  {
    slug: 'thika-greens',
    name: 'Thika Greens Golf Estate',
    location: 'Thika',
    size: '100 × 100 ft',
    price: 'KSh 20,000,000',
    image: '/assets/images/thikagre.jpg',
    description:
      'Premium estate plots featuring good roads and an attractive setting.',
  },
  {
    slug: 'ruiru-murera',
    name: 'Ruiru Murera Plots',
    location: 'Ruiru Murera',
    size: '100 × 100 ft',
    price: 'KSh 2,000,000',
    image:
      '/assets/images/murera.png',
    description:
      'Spacious plots for a planned family home or long-term land investment.',
  },
  {
    slug: 'ruiru-kimbo',
    name: 'Ruiru Kimbo Plots',
    location: 'Ruiru Kimbo',
    size: '100 × 100 ft',
    price: 'KSh 6,500,000',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    description:
      'Premium-priced plots for prospective homeowners and property investors.',
  },
  {
    slug: 'makuyu',
    name: 'Makuyu Plots',
    location: 'Makuyu',
    size: '100 × 100 ft',
    price: 'KSh 950,000',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    description:
      'Affordable land for buyers planning a future home or building a property portfolio.',
  },
  {
    slug: 'kenol',
    name: 'Kenol Plots',
    location: 'Kenol',
    size: '100 × 100 ft',
    price: 'KSh 1,200,000',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80',
    description:
      'Generously sized plots for prospective homeowners and land investors.',
  },
  {
    slug: 'kabati',
    name: 'Kabati Plots',
    location: 'Kabati',
    size: '100 × 100 ft',
    price: 'KSh 850,000',
    image:
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1000&q=80',
    description:
      'Explore land for future residential development or investment.',
  },
];

export default function Properties() {
  return (
    <div className="inner-page">
      <section className="page-banner">
        <span className="eyebrow">TOUCH CO. REAL ESTATE</span>
        <h1>Our Properties</h1>
        <p>
          Explore available plots, compare prices, and find
          the right property for your plans.
        </p>
      </section>

      <section className="section-wrap">
        <div className="property-grid">
          {properties.map((property) => (
            <Link
              href={`/properties/${property.slug}`}
              key={property.slug}
            >
              <a
                className="property-card property-card-link"
                aria-label={`View details for ${property.name}`}
              >
                <div className="property-image">
                  <img
                    src={property.image}
                    alt={property.name}
                    loading="lazy"
                  />
                  <span>📍 {property.location}</span>
                </div>

                <div className="property-info">
                  <h3>{property.name}</h3>
                  <p>{property.size}</p>
                  <p>{property.description}</p>

                  <div className="property-bottom">
                    <strong>{property.price}</strong>
                    <span className="small-button">
                      View Details →
                    </span>
                  </div>
                </div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
