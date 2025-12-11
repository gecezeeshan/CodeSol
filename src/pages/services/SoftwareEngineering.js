import React from "react";
import { Link } from "react-router-dom";

export default function SoftwareEngineering() {
    const approach = [
        {
            title: "Front-End Experiences",
            desc: "Responsive, accessible interfaces that stay fast and consistent across devices.",
            img: "/assets/images/se-frontend.jpg"
        },
        {
            title: "Backend & APIs",
            desc: "Robust services, data models, and integrations that scale with your traffic and features.",
            img: "/assets/images/se-backend.jpg"
        },
        {
            title: "Mobile Delivery",
            desc: "React Native or native apps with offline support, push, and analytics baked in.",
            img: "/assets/images/se-mobile.jpg"
        },
        {
            title: "DevOps & Reliability",
            desc: "CI/CD, infrastructure-as-code, and observability to keep releases safe and repeatable.",
            img: "/assets/images/se-devops.jpg"
        },
        {
            title: "Quality Engineering",
            desc: "Automated tests, performance checks, and secure coding practices to reduce regressions.",
            img: "/assets/images/se-quality.jpg"
        },
        {
            title: "Support & Enablement",
            desc: "Documentation, runbooks, and pairing sessions so your team can move faster after handoff.",
            img: "/assets/images/se-support.jpg"
        }
    ];

    const packages = [
        {
            name: "Feature Pod",
            price: "AED 5,500",
            label: "Fast Start",
            features: [
                "Scoped feature delivery with design handoff support",
                "API integration and test coverage",
                "Deployment and monitoring setup",
                "Knowledge transfer session"
            ]
        },
        {
            name: "Full Product Build",
            price: "AED 12,000",
            label: "Most Popular",
            features: [
                "End-to-end build (web or mobile) with backend APIs",
                "CI/CD pipeline and infrastructure-as-code",
                "Security and performance best practices",
                "Launch support and 30-day stabilization"
            ]
        },
        {
            name: "Engineering Leadership",
            price: "AED 7,500/mo",
            label: "",
            features: [
                "Architecture guidance and code reviews",
                "Team processes, rituals, and standards",
                "Hiring support and vendor coordination",
                "Technical roadmap and risk management",
                "Monthly delivery and quality scorecard"
            ]
        }
    ];

    return (
        <div className="uxui-page">
            {/* -------------------- HERO SECTION -------------------- */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage: "url('/assets/images/se-hero2.jpg')",
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
                            Software Engineering
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            Build reliable, scalable software with clean code, strong architecture, and predictable delivery.
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
                            I deliver production-grade software across web, mobile, and backend stacks. Each build emphasizes
                            quality, security, and observability so your team can ship confidently.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- APPROACH WITH IMAGES -------------------- */}
            <section className="text-white py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-4">How I Build</h2>

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

            {/* -------------------- WHY ENGINEERING -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Why This Approach</h2>
                        <p className="text-muted fs-lg">
                            Great engineering is predictable: clear requirements, clean code, automation, and visibility.
                            This reduces regressions, speeds up delivery, and keeps your users happy.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- PRICING -------------------- */}
            <section className="py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <h2 className="font-weight-bold">Engagement Packages</h2>
                        <p className="lead">Pick the support level that matches your build.</p>
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
                <h2 className="font-weight-bold mb-4">Ready to build with confidence?</h2>
               <Link to="/contact" className="btn btn-teal btn-block">
                                                               Let's Get Started →
                                                           </Link>
                                                           <a href="https://wa.me/971502195152" target="_blank" className="btn btn-outline-teal btn-block mt-2">
                                                               Chat Now
                                                           </a>
            </section>
        </div>
    );
}
