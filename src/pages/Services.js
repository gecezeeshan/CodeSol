import React from 'react'
import { Link } from 'react-router-dom'

const SERVICES = [
    {
        title: 'Consulting',
        slug: 'consulting',
        body: `I provide <strong>expert guidance</strong> across the <em>entire software development lifecycle</em>. From understanding your <strong>business needs</strong> and analyzing the <strong>market</strong> to defining <strong>product strategy</strong>, structure, and roadmap, I help you plan and execute projects <em>efficiently and cost-effectively</em>.`,
        image: '/assets/images/consulting.jpg'
    },
    {
        title: 'UX/UI Design',
        slug: 'design',
        body: `I design <strong>clean, intuitive, and user-friendly</strong> interfaces based on a deep understanding of <strong>user behavior</strong> and project goals. My focus is on creating <strong>seamless experiences</strong> that improve <em>engagement</em> and enhance <strong>customer satisfaction</strong>.`,
        image: '/assets/images/design.jpg'
    },
    {
        title: 'MVP Development',
        slug: 'mvp',
        body: `I transform your ideas into a <strong>functional Minimum Viable Product</strong> with <em>essential features</em>. This helps you <strong>quickly validate</strong> your concept, gather <strong>real user feedback</strong>, and prepare for a <em>scalable product launch</em> with <strong>minimal investment</strong>.`,
        image: '/assets/images/mvp.jpg'
    },
    {
        title: 'Software Engineering',
        slug: 'engineering',
        body: `I build <strong>high-quality web and mobile applications</strong> tailored to your <strong>business requirements</strong>. I handle <em>everything</em>—from <strong>development and testing</strong> to <strong>integration and deployment</strong>—ensuring your software is <strong>secure, scalable</strong>, and aligned with <em>best practices</em>.`,
        image: '/assets/images/engineering.jpg'
    },
    {
        title: 'Product Modernization',
        slug: 'modernization',
        body: `I upgrade and <strong>modernize existing software</strong> to improve <strong>performance, maintainability, and scalability</strong>. This includes <em>code refactoring</em>, <strong>architecture improvements</strong>, <strong>cloud migration</strong>, <em>new feature implementation</em>, and <strong>security enhancements</strong>.`,
        image: '/assets/images/modernization.jpg'
    },
    {
        title: 'WhatsApp Automation',
        slug: 'whatsapp',
        body: `I develop <strong>custom WhatsApp automation solutions</strong> including <em>bulk messaging tools</em>, <strong>chatbots</strong>, <em>lead follow-up systems</em>, and <strong>CRM integration</strong>—helping you <strong>streamline communication</strong> and improve <em>engagement</em>.`,
        image: '/assets/images/whatsapp.jpg'
    },
    {
        title: 'Digital Marketing Automation',
        slug: 'marketing',
        body: `I build <strong>automated marketing workflows</strong>, <em>email sequences</em>, <strong>lead-tracking dashboards</strong>, <em>campaign analytics</em>, and <strong>integration tools</strong> that help you <strong>reach your audience effectively</strong> and grow your business with <em>minimal manual effort</em>.`,
        image: '/assets/images/marketing.jpg'
    },
    {
        title: 'Web Scraping & Data Extraction',
        slug: 'scraping',
        body: `I create <strong>reliable, scalable scraping tools</strong> to <em>extract data</em> from websites, marketplaces, and online sources. This includes <strong>cleaning, structuring, and exporting</strong> data into <em>usable formats</em> for <strong>analysis or automation</strong> workflows.`,
        image: '/assets/images/scraping.jpg'
    },
    {
        title: 'Machine Learning (End-to-End)',
        slug: 'ml',
        body: `I deliver <strong>complete machine learning solutions</strong>—from <em>data collection and cleaning</em> to <strong>visualization, feature engineering, model training, and deployment</strong>. I help you convert <strong>raw data into actionable insights</strong> and <em>predictive models</em> tailored to your <strong>business needs</strong>.`,
        image: '/assets/images/ml.jpg'
    }
];


export default function Services() {
    return (
        <div>

            {/* Hero */}
            <section
                className="text-white d-flex align-items-center mb-4"
                style={{
                    backgroundImage: "url('/assets/images/services.jpeg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "120px 0",
                    backgroundColor: "rgba(0,0,0,0.45)",
                    backgroundBlendMode: "overlay",
                    borderRadius: "6px"
                }}
            >
                <div className="container">
                    <div className="col-lg-10">
                        <h1 className="display-4 font-weight-semibold mb-3">
                            End-to-End Software & Automation Services
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            I help businesses accelerate their digital journey through <strong>modern software engineering</strong>,{" "}
                            <strong>intelligent automation</strong>, <strong>data-driven solutions</strong>, and{" "}
                            <strong>personalized product development</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Services grid */}
            <div className="row">
                {SERVICES.map((s, idx) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={idx}>
                        <div className="card h-100 shadow-sm overflow-hidden">
                            <div style={{
                                backgroundImage: `url(${s.image})`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                height: '200px',
                                position: 'relative'
                            }}>
                                <div style={{
                                    position: 'absolute',
                                    top: 0,
                                    left: 0,
                                    right: 0,
                                    bottom: 0,
                                    backgroundColor: 'rgba(0, 0, 0, 0.4)'
                                }}></div>
                            </div>
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title font-weight-semibold">{s.title}</h5>

                                {/* Emphasized Keywords in service text */}
                                <p className="card-text text-muted" style={{ flex: 1 }} 
                                   dangerouslySetInnerHTML={{ __html: s.body }} />

                                <div className="mt-3 d-flex gap-2">
                                    <Link to={`/services/${s.slug}`} className="btn btn-teal btn-sm flex-grow-1">
                                        <i className="fas fa-arrow-right mr-2"></i>Learn more
                                    </Link>
                                    <Link to="/contact" className="btn btn-teal btn-sm flex-grow-1">
                                        <i className="fas fa-envelope mr-2"></i>Get in touch
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    );
}
