import React from "react";
import { Link } from "react-router-dom";

export default function DigitalMarketingAutomation() {
    const approach = [
        {
            title: "Funnel Design",
            desc: "Map awareness, nurture, and conversion steps with triggers that move prospects forward automatically.",
            img: "/assets/images/dma-funnels.jpg"
        },
        {
            title: "Email Journeys",
            desc: "Behavior-based sequences, lead scoring, and branching logic to warm up every segment.",
            img: "/assets/images/dma-email.jpg"
        },
        {
            title: "Social Scheduling",
            desc: "Plan and auto-publish content across channels with approvals, tagging, and link tracking.",
            img: "/assets/images/dma-social.jpg"
        },
        {
            title: "CRM & Integrations",
            desc: "Two-way sync with your CRM, forms, and ads—so data flows cleanly without manual work.",
            img: "/assets/images/dma-crm.jpg"
        },
        {
            title: "Analytics & Dashboards",
            desc: "Attribution, UTM hygiene, and dashboards that surface ROI across campaigns and cohorts.",
            img: "/assets/images/dma-analytics.jpg"
        },
        {
            title: "Lifecycle Experiments",
            desc: "Always-on A/B tests for subject lines, offers, and cadences to steadily improve conversion.",
            img: "/assets/images/dma-journey.jpg"
        }
    ];

    const packages = [
        {
            name: "Launch & Nurture",
            price: "AED 1,200",
            label: "Fast Start",
            features: [
                "Funnel and audience mapping workshop",
                "Welcome + nurture email journeys (3-4 steps)",
                "Opt-in forms with CRM sync",
                "UTM and tracking setup",
                "Performance dashboard (top-line metrics)"
            ]
        },
        {
            name: "Revenue Accelerator",
            price: "AED 4,900",
            label: "Most Popular",
            features: [
                "Multi-channel automations (email + social + retargeting)",
                "Lead scoring, routing, and lifecycle stages",
                "Playbooks for reactivation and win-back",
                "Campaign analytics with cohort and attribution views",
                "Weekly optimization sprints for 4 weeks"
            ]
        },
        {
            name: "Ops Co-Pilot",
            price: "AED 2,500/mo",
            label: "",
            features: [
                "Ongoing automation tuning and QA",
                "New journeys and experiments each month",
                "Audience hygiene and data quality checks",
                "Channel performance reviews and recommendations",
                "Monthly leadership readout and roadmap"
            ]
        }
    ];

    return (
        <div className="uxui-page">
            {/* -------------------- HERO SECTION -------------------- */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage: "url('/assets/images/dma-hero.jpg')",
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
                            Digital Marketing Automation
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            Build predictable pipelines with automated journeys, clean data, and dashboards that show what is working.
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
                            I design and implement marketing automation that connects ads, forms, email, CRM, and reporting.
                            The result: more qualified leads, faster follow-up, and clear insight into ROI without manual effort.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- APPROACH WITH IMAGES -------------------- */}
            <section className="text-white py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-4">How I Automate Your Marketing</h2>

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

            {/* -------------------- WHY AUTOMATION -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Why Automation Matters</h2>
                        <p className="text-muted fs-lg">
                            Leads should never slip through the cracks. Automation enforces follow-up, keeps data synchronized,
                            and shows you which campaigns truly perform—so your spend focuses on what converts.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- PRICING -------------------- */}
            <section className="py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <h2 className="font-weight-bold">Engagement Packages</h2>
                        <p className="lead">Choose the automation depth that matches your goals.</p>
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
                <h2 className="font-weight-bold mb-4">Ready to automate your pipeline?</h2>
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
