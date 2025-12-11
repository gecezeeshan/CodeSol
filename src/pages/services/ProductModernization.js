import React from "react";
import { Link } from "react-router-dom";

export default function ProductModernization() {
    const approach = [
        {
            title: "Assessment & Roadmap",
            desc: "Architecture review, codebase audit, and risk register with a phased modernization plan.",
            img: "/assets/images/modern-audit.jpg"
        },
        {
            title: "Refactoring & Modularization",
            desc: "Break down monoliths, reduce tech debt, and improve maintainability without disrupting users.",
            img: "/assets/images/modern-refactor.jpg"
        },
        {
            title: "Cloud & Infrastructure",
            desc: "Migrate workloads, right-size resources, and adopt managed services where it makes sense.",
            img: "/assets/images/modern-cloud.jpg"
        },
        {
            title: "Security Hardening",
            desc: "AuthN/Z improvements, secrets management, dependency hygiene, and compliance checkpoints.",
            img: "/assets/images/modern-security.jpg"
        },
        {
            title: "DevOps & Observability",
            desc: "CI/CD, automated testing, logging, tracing, and alerting so releases are safe and fast.",
            img: "/assets/images/modern-devops.jpg"
        },
        {
            title: "Rollout & Change",
            desc: "Feature flags, blue/green deploys, and stakeholder enablement to launch with confidence.",
            img: "/assets/images/modern-rollout.jpg"
        }
    ];

    const packages = [
        {
            name: "Assessment & Plan",
            price: "AED 4,200",
            label: "Fast Start",
            features: [
                "Codebase and architecture review",
                "Risk, dependency, and cost analysis",
                "Modernization roadmap with phases",
                "Quick wins identified for immediate value",
                "Playback session with recommendations"
            ]
        },
        {
            name: "Phased Modernization",
            price: "AED 11,500",
            label: "Most Popular",
            features: [
                "Refactoring and modularization of core services",
                "Cloud migration or optimization plan",
                "CI/CD, testing, and observability setup",
                "Security hardening and dependency hygiene",
                "Pilot launch with rollback strategy"
            ]
        },
        {
            name: "Platform Evolution",
            price: "AED 6,900/mo",
            label: "",
            features: [
                "Ongoing modernization backlog delivery",
                "Performance and cost tuning each month",
                "New feature enablement atop modern stack",
                "Operational runbooks and team coaching",
                "Quarterly architecture reviews"
            ]
        }
    ];

    return (
        <div className="uxui-page">
            {/* -------------------- HERO SECTION -------------------- */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage: "url('/assets/images/modern-hero2.jpg')",
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
                            Product Modernization
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            Refresh legacy systems with better architecture, cloud efficiency, and safer releases.
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
                            I modernize existing products to improve performance, reliability, and development speed.
                            The plan is phased to reduce risk while steadily paying down technical debt.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- APPROACH WITH IMAGES -------------------- */}
            <section className="text-white py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-4">How I Modernize Your Product</h2>

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

            {/* -------------------- WHY MODERNIZE -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Why Modernize</h2>
                        <p className="text-muted fs-lg">
                            Legacy systems slow delivery and raise risk. Modernization lowers costs, improves security, and lets teams ship faster
                            with confidence. The right plan balances quick wins with long-term stability.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- PRICING -------------------- */}
            <section className="py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <h2 className="font-weight-bold">Engagement Packages</h2>
                        <p className="lead">Pick the path that matches your risk tolerance and timeline.</p>
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
                <h2 className="font-weight-bold mb-4">Ready to upgrade your stack?</h2>
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
