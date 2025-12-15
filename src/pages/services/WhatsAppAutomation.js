import React from "react";
import { Link } from "react-router-dom";

export default function WhatsAppAutomation() {
    const approach = [
        {
            title: "Chatbots & FAQs",
            desc: "Design conversational flows that answer questions instantly and keep users on track.",
            img: "/assets/images/wa-bot.jpg"
        },
        {
            title: "Campaigns & Broadcasts",
            desc: "Targeted broadcasts with personalization, segmentation, and compliance baked in.",
            img: "/assets/images/wa-campaign.jpg"
        },
        {
            title: "Lead & Order Flows",
            desc: "Guided journeys for lead capture, qualification, and order status updates.",
            img: "/assets/images/wa-flows.jpg"
        },
        {
            title: "CRM Integration",
            desc: "Two-way sync with your CRM so contacts, deals, and tickets stay current.",
            img: "/assets/images/wa-crm.jpg"
        },
        {
            title: "Analytics & Alerts",
            desc: "Track opens, replies, drop-offs, and trigger alerts when users need a human.",
            img: "/assets/images/wa-analytics.jpg"
        },
        {
            title: "Support Handoffs",
            desc: "Routing rules, SLAs, and escalation paths so agents can jump in seamlessly.",
            img: "/assets/images/wa-support.jpg"
        }
    ];

    const packages = [
        {
            name: "Campaign Starter",
            price: "AED 1,700",
            label: "Fast Start",
            features: [
                "Use-case discovery and messaging plan",
                "1-2 automated flows (lead capture or FAQ)",
                "Broadcast template setup and approval guidance",
                "Basic analytics dashboard",
                "Handover and playbook"
            ]
        },
        {
            name: "Growth Automation",
            price: "AED 3,200",
            label: "Most Popular",
            features: [
                "Multi-step bots for leads, orders, and support triage",
                "Segmentation and personalization rules",
                "CRM integration and contact lifecycle sync",
                "Alerts and inbox routing for agents",
                "Performance review after 30 days"
            ]
        },
        {
            name: "CX Automation",
            price: "AED 2,800/mo",
            label: "",
            features: [
                "Ongoing flow optimization and A/B tests",
                "New templates and journeys each month",
                "Proactive churn/recovery campaigns",
                "Advanced analytics and reporting",
                "Monthly roadmap and training session"
            ]
        }
    ];

    return (
        <div className="uxui-page">
            {/* -------------------- HERO SECTION -------------------- */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage: "url('/assets/images/wa-hero2.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "120px 0",
                    backgroundColor: "rgba(0,0,0,0.45)",
                    backgroundBlendMode: "overlay"
                }}
            >
                <div className="container">
                    <div className="col-lg-10">
                        <h1 className="display-3 font-weight-bold mb-3">
                            WhatsApp Automation
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            Engage, qualify, and support customers on the channel they read first—without losing the human touch.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- OVERVIEW -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Overview</h2>
                        <p className="text-muted fs-lg">
                            I build WhatsApp automations that blend bots with human handoffs: broadcasts, lead flows, support triage,
                            and CRM sync—so your team responds faster and closes more conversations.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- APPROACH WITH IMAGES -------------------- */}
            <section className="text-white py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-4">How I Automate WhatsApp</h2>

                        <div className="row">
                            {approach.map((item, idx) => (
                                <div className="col-md-4 mb-4" key={idx}>
                                    <div className="card bg-white text-dark h-100 border-0 shadow-sm">
                                        <img
                                            src={item.img}
                                            alt={item.title}
                                            style={{
                                                height: "180px",
                                                width: "100%",
                                                objectFit: "cover",
                                                borderTopLeftRadius: "6px",
                                                borderTopRightRadius: "6px"
                                            }}
                                        />
                                        <div className="card-body">
                                            <h5 className="font-weight-bold">{item.title}</h5>
                                            <p className="text-muted">{item.desc}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* -------------------- WHY WHATSAPP -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Why Automate on WhatsApp</h2>
                        <p className="text-muted fs-lg">
                            With sky-high open rates and instant attention, WhatsApp is where customers respond.
                            Automation keeps you responsive at scale while preserving personal, timely interactions.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- PRICING -------------------- */}
            <section className="py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <h2 className="font-weight-bold">Engagement Packages</h2>
                        <p className="lead">Pick the automation depth that matches your goals.</p>
                    </div>

                    <div className="row">
                        {packages.map((plan, idx) => (
                            <div className="col-md-4 mb-4" key={idx}>
                                <div className="card h-100 shadow-lg border-0">
                                    {plan.label && (
                                        <div className="badge bg-warning text-dark position-absolute" style={{ top: 10, right: 10 }}>
                                            {plan.label}
                                        </div>
                                    )}

                                    <div className="card-body text-dark">
                                        <h4 className="font-weight-bold">{plan.name}</h4>

                                        <h2 className="font-weight-bold mt-2">{plan.price}</h2>

                                        <ul className="list-unstyled mt-3">
                                            {plan.features.map((f, i) => (
                                                <li key={i} className="mb-2">
                                                    {f}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="mt-4">
                                            <Link to="/contact" className="btn btn-teal btn-block">
                                                Start This Plan
                                            </Link>
                                            <Link to="/contact" className="btn btn-outline-teal btn-block mt-2">
                                                Book a Discovery Call
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* -------------------- CTA -------------------- */}
            <section className="py-5 bg-white text-center">
                <h2 className="font-weight-bold mb-4">Ready to scale WhatsApp engagement?</h2>
                <Link to="/contact" className="btn btn-teal btn-block">
                                                                Let's Get Started →
                                                            </Link>
                                                            <a href="https://wa.me/971502195152" target="_blank" rel="noreferrer" className="btn btn-outline-teal btn-block mt-2">
                                                                Chat Now
                                                            </a>
            </section>
        </div>
    );
}
