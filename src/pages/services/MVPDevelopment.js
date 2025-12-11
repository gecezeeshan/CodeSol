import React from "react";
import { Link } from "react-router-dom";

export default function MVPDevelopment() {
    const approach = [
        {
            title: "Product Discovery",
            desc: "Clarify the problem, users, and success metrics; cut scope to the essentials.",
            img: "/assets/images/mvp-discovery.jpg"
        },
        {
            title: "Prototyping",
            desc: "Low and high-fidelity prototypes to validate flows before we write code.",
            img: "/assets/images/mvp-prototype.jpg"
        },
        {
            title: "Rapid Build",
            desc: "Build the core experience with modern, scalable foundations.",
            img: "/assets/images/mvp-build.jpg"
        },
        {
            title: "Quality & UAT",
            desc: "Functional testing, accessibility checks, and user acceptance feedback loops.",
            img: "/assets/images/mvp-test.jpg"
        },
        {
            title: "Launch Readiness",
            desc: "Go-live plan, instrumentation, error monitoring, and handover.",
            img: "/assets/images/mvp-launch.jpg"
        },
        {
            title: "Learn & Iterate",
            desc: "Collect real usage data and prioritize the next experiments.",
            img: "/assets/images/mvp-learn.jpg"
        }
    ];

    const packages = [
    {
        name: "Prototype Sprint",
        price: "AED 1,499",
        label: "Fast Start",
        features: [
            "Product discovery call",
            "User journeys + basic wireframes",
            "Clickable prototype (Figma)",
            "Recommended tech stack",
            "Release plan for MVP build"
        ]
    },
    {
        name: "MVP Build",
        price: "AED 4,999",
        label: "Most Popular",
        features: [
            "UI/UX for core features",
            "MVP build (Web or Mobile)",
            "Authentication + dashboard",
            "Basic integrations (email, analytics, payments optional)",
            "QA, UAT, and bug fixes",
            "Deployment to production",
            "14-day post-launch support"
        ]
    },
    {
        name: "Monthly Product Iteration",
        price: "AED 1,999/mo",
        label: "",
        features: [
            "Monthly new feature releases",
            "Conversion & retention analytics",
            "Performance improvements",
            "Design updates & refinements",
            "Monthly planning session",
            "Priority support"
        ]
    }
];


    return (
        <div className="uxui-page">
            {/* -------------------- HERO SECTION -------------------- */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage: "url('/assets/images/mvp-hero2.jpg')",
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
                            MVP Development
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            Ship a focused, testable product quickly—collect real feedback, then iterate with confidence.
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
                            I turn ideas into working MVPs fast. We validate the core value, avoid overbuilding, and set up the product
                            for a clean path to version 1.0 and beyond.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- APPROACH WITH IMAGES -------------------- */}
            <section className="text-white py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-4">How I Build Your MVP</h2>

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

            {/* -------------------- WHY MVP -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Why Start with an MVP</h2>
                        <p className="text-muted fs-lg">
                            Launching lean reduces risk, keeps costs focused on what matters, and speeds up learning from real users.
                            It is the fastest way to get evidence on whether to double down or pivot.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- PRICING -------------------- */}
            <section className="py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <h2 className="font-weight-bold">Engagement Packages</h2>
                        <p className="lead">Choose the build speed and support level that fit your launch.</p>
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
                                            {/* <Link to="/contact" className="btn btn-teal btn-block">
                                                Start This Plan
                                            </Link> */}
                                            <Link to="/contact" className="btn btn-outline-teal btn-block mt-2">
                                                Get 
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
                <h2 className="font-weight-bold mb-4">Ready to validate your product?</h2>
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
