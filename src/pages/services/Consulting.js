import React from "react";
import { Link } from "react-router-dom";

export default function Consulting() {
    const approach = [
        {
            title: "Discovery & Alignment",
            desc: "Stakeholder interviews, success metrics, and risk mapping so everyone agrees on the problem and definition of done.",
            img: "/assets/images/consult-discovery.jpg"
        },
        {
            title: "Product Strategy",
            desc: "Clear value propositions, prioritized bets, and a roadmap tied to measurable outcomes and business goals.",
            img: "/assets/images/consult-strategy.jpg"
        },
        {
            title: "Architecture Blueprint",
            desc: "Target-state architecture, integration plan, and data flows that keep your stack scalable and maintainable.",
            img: "/assets/images/consult-architecture.jpg"
        },
        {
            title: "Delivery Oversight",
            desc: "Agile cadence setup, backlog hygiene, vendor coordination, and risk/issue tracking to keep delivery on course.",
            img: "/assets/images/consult-delivery.jpg"
        },
        {
            title: "Change Management",
            desc: "Stakeholder comms, enablement, and adoption plans so teams actually use what we build together.",
            img: "/assets/images/consult-change.jpg"
        },
        {
            title: "Optimization & Scale",
            desc: "Instrumentation, cost/performance reviews, and continuous improvement to protect ROI after launch.",
            img: "/assets/images/consult-optimization.jpg"
        }
    ];

    const packages = [
        {
            name: "Discovery Workshop",
            price: "AED 1,500",
            label: "Fast Start",
            features: [
                "Half-day (remote or onsite) workshop with key stakeholders",
                "Problem framing, success metrics, and decision log",
                "Risks, assumptions, constraints register",
                "Prioritized outcomes and scope boundaries",
                "Lightweight delivery roadmap with budget ranges"
            ]
        },
        {
            name: "Product Strategy Sprint",
            price: "AED 3,500",
            label: "Most Popular",
            features: [
                "Two-week sprint to produce a clear roadmap and investment case",
                "Market and competitor scan with key insights",
                "User journeys, opportunity sizing, and value props",
                "Prioritized feature backlog (RICE) and OKRs",
                "12-week delivery plan with resourcing options",
                "Executive-ready deck and playback session"
            ]
        },
        {
            name: "CTO Advisory",
            price: "AED 3,500/mo",
            label: "",
            features: [
                "Architecture review and modernization plan",
                "Team structure, hiring, and vendor selection support",
                "Delivery governance and KPI scorecard",
                "Cloud cost and performance review with savings ideas",
                "Security, compliance, and risk checklist",
                "Bi-weekly leadership sessions and on-call guidance"
            ]
        }
    ];

    return (
        <div className="uxui-page">
            {/* -------------------- HERO SECTION -------------------- */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage: "url('/assets/images/consult-hero.jpg')",
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
                            Consulting Services
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            Strategy, architecture, and delivery oversight that keep your products on time, on budget, and delivering results.
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
                            I help teams turn business goals into executable plans. From problem framing and product strategy to architecture
                            guidance and delivery governance, I provide hands-on consulting that reduces risk, accelerates time-to-market,
                            and aligns everyone around measurable outcomes.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- APPROACH WITH IMAGES -------------------- */}
            <section className="text-white py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-4">How I Partner With You</h2>

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

            {/* -------------------- WHY CONSULTING -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Why Strategic Consulting Matters</h2>
                        <p className="text-muted fs-lg">
                            Great ideas fail without alignment, governance, and the right architecture. Strong consulting reduces rework,
                            keeps delivery predictable, and ensures every dollar spent ties back to outcomes your stakeholders care about.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- PRICING -------------------- */}
            <section className="py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <h2 className="font-weight-bold">Engagement Packages</h2>
                        <p className="lead">Pick the level of support that fits where you are in the journey.</p>
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
                <h2 className="font-weight-bold mb-4">Ready to unlock better outcomes?</h2>
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
