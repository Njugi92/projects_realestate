
import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';

import Header from '../components/Header';
import Footer from '../components/Footer';

const WHATSAPP_NUMBER = '254722300705';

const propertyOptions = [
  'Kithimani Plots - 50 × 100 ft',
  'Konza City Plots - 100 × 100 ft',
  'Nakuru Bahati Plots - 100 × 100 ft',
  'Thika Greens Golf Estate - 100 × 100 ft',
  'Ruiru Murera Commercial Plots - 100 × 100 ft',
  'Ruiru Kimbo Plots - 100 × 100 ft',
  'Makuyu Plots - 100 × 100 ft',
  'Kenol Plots - 100 × 100 ft',
  'Kabati Plots - 100 × 100 ft',
  'Other Property Enquiry',
];

export default function Contact() {
  const [form, setForm] = useState({
    fullName: '',
    phone: '',
    email: '',
    property: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const enquiry = [
      'NEW PROPERTY ENQUIRY - TOUCH CO. LTD',
      '-----------------------------------',
      '',
      `Full Name: ${form.fullName}`,
      `Phone Number: ${form.phone}`,
      `Email Address: ${form.email || 'Not provided'}`,
      `Property of Interest: ${form.property}`,
      '',
      'CUSTOMER MESSAGE:',
      form.message,
      '',
      'Please contact me with more information about this property.',
    ].join('\n');

    const whatsappUrl =
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(enquiry)}`;

    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <>
      <Head>
        <title>Contact Us | Touch Co Ltd</title>

        <meta
          name="description"
          content="Contact Touch Co Ltd for land and plot enquiries in Kithimani, Konza City, Nakuru Bahati, Thika Greens, Ruiru Murera, Ruiru Kimbo, Makuyu, Kenol and Kabati."
        />
      </Head>

      <Header />

      <main className="inner-page contact-page">

        {/* CONTACT BANNER */}
        <section className="page-banner contact-banner">
          <span className="eyebrow">
            LET&apos;S TALK PROPERTY
          </span>

          <h1>Contact Us</h1>

          <p>
            Your property investment journey starts with a conversation.
            Get in touch with Touch Co Ltd today.
          </p>
        </section>

        {/* CONTACT CONTENT */}
        <section className="contact-section section-wrap">

          <div className="contact-intro">
            <span className="eyebrow">GET IN TOUCH</span>

            <h2>
              We Are Here To Help You Find Your
              <span> Ideal Property</span>
            </h2>

            <p>
              Are you interested in buying land or learning more about
              our available plots? Contact our team for property details,
              pricing, payment options and site visits.
            </p>
          </div>

          <div className="contact-grid">

            {/* LEFT: CONTACT INFORMATION */}
            <div className="contact-information">

              <div className="contact-info-card">
                <div className="contact-icon">☎</div>

                <div>
                  <h3>Call Us</h3>

                  <p>
                    Speak directly with our team about available
                    properties and investment opportunities.
                  </p>

                  <a href="tel:+254722300705">
                    0722 300 705
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">☘</div>

                <div>
                  <h3>WhatsApp</h3>

                  <p>
                    Send us your enquiry and receive assistance
                    about our available plots.
                  </p>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat with us
                  </a>
                </div>
              </div>

              <div className="contact-info-card">
                <div className="contact-icon">⌖</div>

                <div>
                  <h3>Our Property Locations</h3>

                  <p>
                    Explore our available property opportunities in:
                  </p>

                  <ul className="contact-locations">
                    <li>Kithimani</li>
                    <li>Konza City</li>
                    <li>Nakuru Bahati</li>
                    <li>Thika Greens Golf Estate</li>
                    <li>Ruiru Murera</li>
                    <li>Ruiru Kimbo</li>
                    <li>Makuyu</li>
                    <li>Kenol</li>
                    <li>Kabati</li>
                  </ul>
                </div>
              </div>

              <div className="contact-note">
                <h3>Looking for your next investment?</h3>

                <p>
                  Let us help you explore available plots and find
                  an option that suits your needs and budget.
                </p>
              </div>

            </div>

            {/* RIGHT: CONTACT FORM */}
            <div
              className="contact-form-container"
              id="contact-form"
            >

              <div className="contact-form-heading">
                <span className="eyebrow">SEND AN ENQUIRY</span>

                <h2>Get In Touch With Us</h2>

                <p>
                  Complete the form below and send your enquiry
                  directly to our WhatsApp team.
                </p>
              </div>

              <form
                onSubmit={handleSubmit}
                className="contact-form"
              >

                {/* FULL NAME */}
                <div className="form-group">
                  <label htmlFor="fullName">
                    Full Name *
                  </label>

                  <input
                    id="fullName"
                    name="fullName"
                    type="text"
                    placeholder="Enter your full name"
                    value={form.fullName}
                    onChange={handleChange}
                    autoComplete="name"
                    required
                    minLength={2}
                  />
                </div>

                {/* PHONE AND EMAIL */}
                <div className="form-row">

                  <div className="form-group">
                    <label htmlFor="phone">
                      Phone Number *
                    </label>

                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={handleChange}
                      autoComplete="tel"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">
                      Email Address
                    </label>

                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Your email address"
                      value={form.email}
                      onChange={handleChange}
                      autoComplete="email"
                    />
                  </div>

                </div>

                {/* PROPERTY SELECTION */}
                <div className="form-group">
                  <label htmlFor="property">
                    Property of Interest *
                  </label>

                  <select
                    id="property"
                    name="property"
                    value={form.property}
                    onChange={handleChange}
                    required
                  >
                    <option value="">
                      Select a property
                    </option>

                    {propertyOptions.map((property) => (
                      <option
                        key={property}
                        value={property}
                      >
                        {property}
                      </option>
                    ))}
                  </select>
                </div>

                {/* MESSAGE */}
                <div className="form-group">
                  <label htmlFor="message">
                    Your Message *
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell us what property information you need..."
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    minLength={3}
                  />
                </div>

                {/* SUBMIT */}
                <button
                  type="submit"
                  className="contact-submit-button"
                >
                  <span>Send Enquiry via WhatsApp</span>
                  <span>→</span>
                </button>

                <p className="form-disclaimer">
                  Your enquiry will open WhatsApp, where you can
                  review and send your message.
                </p>

              </form>
            </div>

          </div>
        </section>

        {/* BOTTOM CALL TO ACTION */}
        <section className="contact-cta">

          <div>
            <span className="eyebrow">
              TOUCH CO. LTD
            </span>

            <h2>
              Ready To Own Your Piece Of Land?
            </h2>

            <p>
              Explore our available plots and take the next step
              towards your property investment.
            </p>
          </div>

          <Link
            href="/properties"
            className="contact-cta-button"
          >
            Explore Our Properties →
          </Link>

        </section>

      </main>

      <Footer />
    </>
  );
}
