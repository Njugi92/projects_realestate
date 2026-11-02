
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Touch Co Ltd</title>
        <meta
          name="description"
          content="Discover Touch Co Ltd, a real estate company offering land and plot investment opportunities in Thika, Ruiru, Kithimani, Konza City, Nakuru, Makuyu, Kenol and Kabati."
        />
      </Head>

      <Header />

      <main className="inner-page">
        {/* Page Banner */}
        <section className="page-banner">
          <span className="eyebrow">WELCOME TO TOUCH CO.</span>

          <h1>About Us</h1>

          <p>
            Real estate opportunities. Secure investments.
            A place to build your future.
          </p>
        </section>

        {/* About Section */}
        <section className="about-section section-wrap">
          <div className="about-image">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
              alt="Modern residential property and real estate"
              width={1200}
              height={800}
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                borderRadius: '12px',
              }}
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">WHO WE ARE</span>

            <h2>
              Helping You Discover the Right Property Opportunities
            </h2>

            <p>
              Touch Co Ltd is focused on connecting prospective
              property buyers with land and plot investment
              opportunities across selected locations in Kenya.
            </p>

            <p>
              Our property listings include Kithimani, Konza City,
              Nakuru Bahati, Thika Greens Golf Estate, Ruiru Murera,
              Ruiru Kimbo, Makuyu, Kenol and Kabati.
            </p>

            <p>
              We believe that finding land should be a straightforward
              experience. Our website allows you to explore available
              listings, compare plot sizes and prices, and contact
              our team for additional information.
            </p>

            <p>
              Whether you are planning to build your dream home,
              develop commercial property or explore long-term
              investment opportunities, Touch Co Ltd is ready to
              assist you through your property search.
            </p>

            <Link href="/properties" className="primary-button">
              Explore Our Properties →
            </Link>
          </div>
        </section>

        {/* Our Values */}
        <section className="benefits">
          <article>
            <span>⌂</span>
            <div>
              <h3>Property Opportunities</h3>
              <p>
                Explore land opportunities in selected locations
                across Kenya.
              </p>
            </div>
          </article>

          <article>
            <span>✓</span>
            <div>
              <h3>Customer Support</h3>
              <p>
                Get assistance when enquiring about plots,
                availability and site visits.
              </p>
            </div>
          </article>

          <article>
            <span>◈</span>
            <div>
              <h3>Investment Choices</h3>
              <p>
                Compare different locations, plot sizes and
                listed prices.
              </p>
            </div>
          </article>

          <article>
            <span>☎</span>
            <div>
              <h3>Easy Enquiries</h3>
              <p>
                Contact our team directly through WhatsApp
                or our contact page.
              </p>
            </div>
          </article>
        </section>

        {/* Contact CTA */}
        <section className="investment-cta">
          <div>
            <span className="eyebrow">
              START YOUR PROPERTY JOURNEY
            </span>

            <h2>Let&apos;s Help You Find Your Next Plot</h2>

            <p>
              Browse our available properties or get in touch
              with the Touch Co Ltd team today.
            </p>
          </div>

          <Link href="/contact" className="primary-button">
            Contact Our Team →
          </Link>
        </section>
      </main>

      <Footer />
    </>
  );
}
