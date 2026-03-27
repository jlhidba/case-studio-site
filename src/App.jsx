import { useMemo, useState } from "react";

const tabs = [
  {
    id: "about",
    label: "About",
    title: "About Case Studio Co.",
    content:
      "Case Studio Co. is a proudly Queensland-based business specialising in custom phone case printing through innovative vending machines and online design tools. We help turn favourite memories, photos, and ideas into high-quality personalised phone cases, printed in minutes with vivid colours and premium finishes. Whether customers are shopping in a mall or designing from home, Case Studio Co. makes personalisation fast, easy, and meaningful.",
  },
  {
    id: "story",
    label: "Our Story",
    title: "How Case Studio Co. Began",
    content:
      "Case Studio Co. was born from a real-life problem — and a lot of frustration. While searching for a personalised phone case as a last-minute Christmas gift, it became clear there was no way it would arrive on time. During that search, the idea of instant custom phone case vending machines emerged, but nothing like it was available anywhere near Brisbane. That moment inspired a simple mission: bring instant, high-quality personalised phone case printing to Australia in a way that feels exciting, accessible, and memorable.",
  },
  {
    id: "how",
    label: "What We Do",
    title: "Personalised Cases, Printed Your Way",
    content:
      "We combine fast in-centre printing with convenient online ordering so customers can create custom phone cases wherever suits them best. Our focus is on bold colour, premium finishes, strong everyday protection, and a smooth design experience that feels modern from start to finish.",
  },
  {
    id: "why",
    label: "Why It Works",
    title: "Fast, Personal, Retail-Ready",
    content:
      "Case Studio Co. blends customisation, instant gratification, and gift appeal into one simple experience. It is designed to create memorable shopper interactions, encourage repeat visits, and make personalised products feel spontaneous rather than slow or complicated.",
  },
];

const features = [
  {
    title: "Custom Designs",
    text: "Upload photos, showcase memories, or create something completely original.",
  },
  {
    title: "Printed in Minutes",
    text: "Fast turnaround through our vending machines in shopping centres.",
  },
  {
    title: "Premium Protection",
    text: "Quality finishes and dependable case protection for everyday use.",
  },
  {
    title: "Vivid Colour Output",
    text: "Bright, sharp printing made to bring photos and designs to life.",
  },
  {
    title: "Mall + Online Experience",
    text: "Serve impulse gift buyers in person and online shoppers from home.",
  },
  {
    title: "Delivery Options",
    text: "Customers can design online and have their case shipped directly.",
  },
];

const faqs = [
  {
    q: "What is Case Studio Co.?",
    a: "Case Studio Co. is an Australian business specialising in custom phone case printing. We offer instant personalised phone cases through our in-store vending machines as well as online customisation and delivery via our website.",
  },
  {
    q: "How does the phone case vending machine work?",
    a: "Our vending machines let you design and print your phone case in just a few minutes. Simply select your phone model, upload a photo or design, customise it on-screen, and watch your case print instantly. No waiting, no shipping delays — your case is ready on the spot.",
  },
  {
    q: "Can I design my phone case online?",
    a: "Yes. You can create your personalised phone case online using our design tools. Once completed, we print it in high definition and deliver it directly to your door anywhere in Australia.",
  },
  {
    q: "How long does it take to receive an online order?",
    a: "Online orders are typically printed within 2–3 business days and shipped shortly after. Delivery times vary depending on your location, but we always aim to get your case to you as quickly as possible.",
  },
  {
    q: "What phone models do you support?",
    a: "We support a wide range of popular phone models, including most iPhone and Samsung devices. Available models may vary by location or machine and are clearly listed during the design process.",
  },
  {
    q: "What quality are your custom phone cases?",
    a: "We use premium materials and advanced printing technology to ensure high-definition vibrant colours, scratch-resistant finishes, long-lasting print quality, and durable protective phone cases designed for everyday use.",
  },
  {
    q: "Are your phone cases protective?",
    a: "Yes. Our cases are made with high-quality materials designed to provide excellent drop protection while maintaining a slim and comfortable feel.",
  },
  {
    q: "Can I use any photo or design?",
    a: "You can use your own photos, artwork, or designs as long as you own the rights or have permission to use them. We do not allow copyrighted or offensive content.",
  },
  {
    q: "Are personalised phone cases refundable?",
    a: "Because all phone cases are custom-made, we generally don’t offer refunds for change-of-mind purchases. However, if your case arrives damaged or with a print defect, we will happily replace it.",
  },
  {
    q: "Where are Case Studio Co. vending machines located?",
    a: "Our custom phone case vending machines are placed in high-traffic shopping centres across Queensland. Locations are updated regularly on our website and social media channels.",
  },
  {
    q: "Is my payment secure?",
    a: "Absolutely. All payments made through our vending machines and website are processed using secure, encrypted payment systems to keep your information safe.",
  },
  {
    q: "Can I create phone cases as gifts?",
    a: "Yes. Personalised phone cases make meaningful and creative gifts for birthdays, anniversaries, holidays, and special occasions — especially when you need something last-minute.",
  },
  {
    q: "Do you offer bulk or corporate orders?",
    a: "Yes, we can assist with bulk orders, corporate gifts, and branded phone cases. Please contact us through our website for custom quotes.",
  },
  {
    q: "How can I contact Case Studio Co.?",
    a: "You can reach us through our Contact Us page or connect with us on social media: Instagram @casestudioco, TikTok @casestudioco, or by email.",
  },
];

function Section({ children, dark = false }) {
  return <section className={`section ${dark ? "section-dark" : ""}`}>{children}</section>;
}

function Container({ children, narrow = false }) {
  return <div className={`container ${narrow ? "container-narrow" : ""}`}>{children}</div>;
}

function Card({ children, className = "" }) {
  return <div className={`card ${className}`.trim()}>{children}</div>;
}

export default function App() {
  const [activeTab, setActiveTab] = useState("about");
  const [locatorOpen, setLocatorOpen] = useState(false);
  const [faqSectionOpen, setFaqSectionOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const active = useMemo(
    () => tabs.find((tab) => tab.id === activeTab) || tabs[0],
    [activeTab]
  );

  const toggleFaqSection = () => {
    setFaqSectionOpen((prev) => {
      const next = !prev;
      if (!next) setOpenFaq(null);
      return next;
    });
  };

  const toggleFaqItem = (index) => {
    setOpenFaq((prev) => (prev === index ? null : index));
  };

  return (
    <div className="page-shell">
      <div className="page-bg" />

      <section className="hero">
        <Container>
          <div className="hero-grid">
            <div>
              <div className="logo-text">Case Studio Co.</div>

              <h1 className="hero-title">
                Create It.
                <br />
                Print It.
                <br />
                <span className="gradient-text">Carry Your Story.</span>
              </h1>

              <p className="hero-copy">
                Custom phone case printing in minutes through interactive vending
                machines and online design tools — made for meaningful gifts,
                personal style, and instant creativity.
              </p>

              <div className="button-row">
                <button
  className="button button-primary"
  onClick={() => (window.location.href = "/coming-soon")}
>
  Start Designing
</button>
              </div>
            </div>

            <div>
              <Card className="hero-card">
                <div className="hero-gradient-frame">
                  <div className="hero-gradient-inner">
                    <h3 className="hero-card-title">Made for moments worth keeping</h3>

                    <div className="hero-mini-grid">
                      {[
                        ["Minutes", "Fast in-store printing"],
                        ["Premium", "Quality finishes"],
                        ["Personal", "Your photo, your design"],
                      ].map(([title, subtitle]) => (
                        <div key={title} className="mini-card">
                          <div className="mini-card-title">{title}</div>
                          <div className="mini-card-text">{subtitle}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="two-cards">
                  <Card className="small-info-card">
                    <div className="small-info-label gold">◔</div>
                    <div className="small-info-title">Instant gifting</div>
                    <p className="small-info-text">
                      Perfect for last-minute gifts, spontaneous shopping moments,
                      and personalised keepsakes without the long wait.
                    </p>
                  </Card>

                  <Card className="small-info-card">
                    <div className="small-info-label pink">⌂</div>
                    <div className="small-info-title">Retail experience</div>
                    <p className="small-info-text">
                      Built to feel interactive, visual, and memorable in
                      high-foot-traffic shopping centre environments.
                    </p>
                  </Card>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <Section>
        <Container>
          <Card className="tabs-shell">
            <div className="tabs-row">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  className={`tab-button ${activeTab === tab.id ? "active" : ""}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content-card">
              <h3 className="section-title-sm">{active.title}</h3>
              <p className="body-copy">{active.content}</p>
            </div>
          </Card>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <div className="section-head">
            <h2 className="section-title">Built around speed, creativity, and quality.</h2>
            <p className="body-copy max-copy">
              From on-demand vending to online customisation, the experience is
              designed to feel easy, premium, and exciting from first click to
              finished case.
            </p>
          </div>

          <div className="features-grid">
            {features.map((feature) => (
              <Card key={feature.title} className="feature-card">
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-text">{feature.text}</p>
              </Card>
            ))}
          </div>
        </Container>
      </Section>

      <Section dark>
        <Container>
          <Card className="accordion-shell">
            <button
              type="button"
              className="accordion-trigger"
              onClick={() => setLocatorOpen((prev) => !prev)}
            >
              <span className="locator-title-wrap">
                <span className="map-pin">⌖</span>
                <span className="locator-title">Find the nearest Case Studio</span>
              </span>
              <span className="accordion-symbol">{locatorOpen ? "−" : "+"}</span>
            </button>

            {locatorOpen && (
              <div className="accordion-content">
                <p className="body-copy max-copy">
                  Use the map area to locate the closest Case Studio vending
                  machine. Our machines are placed in high-traffic shopping
                  centres so customers can design and print their personalised
                  phone case in minutes.
                </p>

                <div className="locator-panel">
                  <div className="locator-grid" />
                  <div className="locator-dot dot-gold" />
                  <div className="locator-dot dot-pink" />
                  <div className="locator-dot dot-blue" />

                  <div className="locator-note">
                    <div className="locator-note-title">Locations coming soon</div>
                    <div className="locator-note-copy">
                      This area is ready for your future shopping centre locations.
                    </div>
                  </div>
                </div>
              </div>
            )}
          </Card>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <div className="cta-shell">
            <div className="cta-inner">
              <div>
                <h2 className="section-title">Create your case from anywhere.</h2>
                <p className="cta-copy">
                  Upload a photo, customise your design, and turn personal moments
                  into something practical, giftable, and uniquely yours.
                </p>
              </div>

              <div className="cta-actions">
                <button
  className="button button-primary"
  onClick={() => (window.location.href = "/coming-soon")}
>
  Create Your Case <span className="arrow">→</span>
</button>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section>
        <Container narrow>
          <Card className="accordion-shell">
            <button
              type="button"
              className="accordion-trigger"
              onClick={toggleFaqSection}
            >
              <span className="faq-heading">Common questions</span>
              <span className="accordion-symbol">{faqSectionOpen ? "−" : "+"}</span>
            </button>

            {faqSectionOpen && (
              <div className="accordion-content">
                <div className="faq-stack">
                  {faqs.map((item, index) => {
                    const isOpen = openFaq === index;

                    return (
                      <Card key={item.q} className="faq-item">
                        <button
                          type="button"
                          className="faq-question"
                          onClick={() => toggleFaqItem(index)}
                        >
                          <span>{item.q}</span>
                          <span className="accordion-symbol small">
                            {isOpen ? "−" : "+"}
                          </span>
                        </button>

                        {isOpen && (
                          <div className="faq-answer">
                            <p>{item.a}</p>
                          </div>
                        )}
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </Card>
        </Container>
      </Section>

      <footer className="footer">
        <Container>
          <div className="footer-row">
            <div>
              <div className="footer-brand">Case Studio Co.</div>
              <div className="footer-sub">Custom phone case printing in Australia.</div>
            </div>

            <div className="footer-links">
              <span>Instagram</span>
              <span>TikTok</span>
              <span>Email</span>
            </div>

            <div className="footer-copy">
              © {new Date().getFullYear()} Case Studio Co. All rights reserved.
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
}
