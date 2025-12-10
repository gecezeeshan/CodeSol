import React from 'react'
import { Link } from 'react-router-dom'

const SERVICES = [
    {
        title: 'Consulting',
        slug: 'consulting',
        body: `I provide <strong>expert guidance</strong> across the <em>entire software development lifecycle</em>. From understanding your <strong>business needs</strong> and analyzing the <strong>market</strong> to defining <strong>product strategy</strong>, structure, and roadmap, I help you plan and execute projects <em>efficiently and cost-effectively</em>.`
    },
    {
        title: 'UX/UI Design',
        slug: 'design',
        body: `I design <strong>clean, intuitive, and user-friendly</strong> interfaces based on a deep understanding of <strong>user behavior</strong> and project goals. My focus is on creating <strong>seamless experiences</strong> that improve <em>engagement</em> and enhance <strong>customer satisfaction</strong>.`
    },
    {
        title: 'MVP Development',
        slug: 'mvp',
        body: `I transform your ideas into a <strong>functional Minimum Viable Product</strong> with <em>essential features</em>. This helps you <strong>quickly validate</strong> your concept, gather <strong>real user feedback</strong>, and prepare for a <em>scalable product launch</em> with <strong>minimal investment</strong>.`
    },
    {
        title: 'Software Engineering',
        slug: 'engineering',
        body: `I build <strong>high-quality web and mobile applications</strong> tailored to your <strong>business requirements</strong>. I handle <em>everything</em>—from <strong>development and testing</strong> to <strong>integration and deployment</strong>—ensuring your software is <strong>secure, scalable</strong>, and aligned with <em>best practices</em>.`
    },
    {
        title: 'Product Modernization',
        slug: 'modernization',
        body: `I upgrade and <strong>modernize existing software</strong> to improve <strong>performance, maintainability, and scalability</strong>. This includes <em>code refactoring</em>, <strong>architecture improvements</strong>, <strong>cloud migration</strong>, <em>new feature implementation</em>, and <strong>security enhancements</strong>.`
    },
    {
        title: 'WhatsApp Automation',
        slug: 'whatsapp',
        body: `I develop <strong>custom WhatsApp automation solutions</strong> including <em>bulk messaging tools</em>, <strong>chatbots</strong>, <em>lead follow-up systems</em>, and <strong>CRM integration</strong>—helping you <strong>streamline communication</strong> and improve <em>engagement</em>.`
    },
    {
        title: 'Digital Marketing Automation',
        slug: 'marketing',
        body: `I build <strong>automated marketing workflows</strong>, <em>email sequences</em>, <strong>lead-tracking dashboards</strong>, <em>campaign analytics</em>, and <strong>integration tools</strong> that help you <strong>reach your audience effectively</strong> and grow your business with <em>minimal manual effort</em>.`
    },
    {
        title: 'Web Scraping & Data Extraction',
        slug: 'scraping',
        body: `I create <strong>reliable, scalable scraping tools</strong> to <em>extract data</em> from websites, marketplaces, and online sources. This includes <strong>cleaning, structuring, and exporting</strong> data into <em>usable formats</em> for <strong>analysis or automation</strong> workflows.`
    },
    {
        title: 'Machine Learning (End-to-End)',
        slug: 'ml',
        body: `I deliver <strong>complete machine learning solutions</strong>—from <em>data collection and cleaning</em> to <strong>visualization, feature engineering, model training, and deployment</strong>. I help you convert <strong>raw data into actionable insights</strong> and <em>predictive models</em> tailored to your <strong>business needs</strong>.`
    }
];


export default function Services() {
    return (
        <div>

            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">
                        End-to-End Software & Automation Services
                    </h1>
                    <p className="lead text-muted">
                        I help businesses accelerate their digital journey through 
                        <strong> modern software engineering</strong>, 
                        <strong> intelligent automation</strong>,
                        <strong> data-driven solutions</strong>, and 
                        <strong> personalized product development</strong>.
                    </p>
                </div>
            </div>

            {/* Services grid */}
            <div className="row">
                {SERVICES.map((s, idx) => (
                    <div className="col-sm-12 col-md-6 col-lg-4 mb-4" key={idx}>
                        <div className="card h-100 shadow-sm">
                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title font-weight-semibold">{s.title}</h5>

                                {/* Emphasized Keywords in service text */}
                                <p className="card-text text-muted" style={{ flex: 1 }} 
                                   dangerouslySetInnerHTML={{ __html: s.body }} />

                                <div className="mt-3 d-flex gap-2">
                                    <Link to={`/services/${s.slug}`} className="btn btn-secondary btn-sm flex-grow-1">
                                        Learn more
                                    </Link>
                                    <Link to="/contact" className="btn btn-primary btn-sm flex-grow-1">
                                        Get in touch
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