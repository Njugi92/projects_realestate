
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
          content="Learn about Touch Co Ltd and explore property investment opportunities in Kithimani, Konza City, Nakuru Bahati and Thika Greens."
        />
      </Head>

      <Header />

      <main className="inner-page">
        <section className="page-banner">
          <span className="eyebrow">WELCOME TO TOUCH CO.</span>
          <h1>About Us</h1>
          <p>Real estate opportunities for your future.</p>
        </section>

        <section className="about-section section-wrap">
          <div className="about-image">
            <Image
              src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=85"
              alt="Property and real estate"
              width={1200}
              height={800}
              priority
              style={{
                width: '100%',
                height: 'auto',
                objectFit: 'cover',
              }}
            />
          </div>

          <div className="about-copy">
            <span className="eyebrow">WHO WE ARE</span>

            <h2>
              Helping You Discover Property Opportunities
            </h2>

            <p>
              Touch Co. connects prospective buyers with plot opportunities
              in Kithimani, Konza City, Nakuru Bahati and Thika Greens Golf
              Estate.
            </p>

            <p>
              Our goal is to make it easier for you to explore property
              options, compare prices and contact our team for more
              information.
            </p>

            <Link href="/properties">
              <a className="primary-button">
                Explore Properties →
              </a>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
