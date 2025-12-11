import React from "react";
import { Link } from "react-router-dom";

export default function MachineLearning() {
    const approach = [
        {
            title: "Data Pipelines",
            desc: "Ingest, clean, and version datasets so experiments are repeatable and trustworthy.",
            img: "/assets/images/ml-data.jpg"
        },
        {
            title: "Exploration & Visualization",
            desc: "EDA to uncover signal, leakage, and data quality issues before we model.",
            img: "/assets/images/ml-eda.jpg"
        },
        {
            title: "Feature Engineering",
            desc: "Domain-informed features and transformations that boost model lift without overfitting.",
            img: "/assets/images/ml-training.jpg"
        },
        {
            title: "Model Training & Evaluation",
            desc: "Rigorous baselines, cross-validation, and test design to pick the right approach.",
            img: "/assets/images/ml-hero2.jpg"
        },
        {
            title: "Deployment & MLOps",
            desc: "APIs, batch jobs, or streaming inference with CI/CD, monitoring, and rollback.",
            img: "/assets/images/ml-deploy.jpg"
        },
        {
            title: "Monitoring & Improvement",
            desc: "Drift detection, performance alerts, and experiment loops to keep models healthy.",
            img: "/assets/images/ml-monitor.jpg"
        }
    ];

    const packages = [
        {
            name: "ML Discovery",
            price: "AED 4,500",
            label: "Fast Start",
            features: [
                "Business framing, success metrics, and feasibility check",
                "Data audit and risk register",
                "Baseline models with quick benchmarks",
                "Recommendations and next-step roadmap"
            ]
        },
        {
            name: "Production Model",
            price: "AED 12,500",
            label: "Most Popular",
            features: [
                "Data pipeline + feature store setup",
                "Model training with validation and ablation",
                "Inference API or batch job deployment",
                "Dashboard for quality, latency, and cost",
                "Handover docs and playbook"
            ]
        },
        {
            name: "MLOps Retainer",
            price: "AED 7,500/mo",
            label: "",
            features: [
                "Model retraining cadence and automation",
                "Monitoring, alerting, and drift mitigation",
                "Performance and cost tuning",
                "New experiments and A/B test design",
                "Monthly leadership summary"
            ]
        }
    ];

    return (
        <div className="uxui-page">
            {/* -------------------- HERO SECTION -------------------- */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage: "url('/assets/images/ml-hero2.jpg')",
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
                            Machine Learning (End-to-End)
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            From data pipelines to production models—solutions that are measurable, monitored, and built for impact.
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
                            I design and ship complete ML solutions: reliable data pipelines, feature engineering, model development,
                            deployment, and monitoring. Every project is tied to business KPIs and production-readiness from day one.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- APPROACH WITH IMAGES -------------------- */}
            <section className="text-white py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-4">How I Build ML Products</h2>

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

            {/* -------------------- WHY ML -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Why Production-Ready ML</h2>
                        <p className="text-muted fs-lg">
                            The value of ML is realized in production, not notebooks. I focus on reliability, observability, and clear ROI so models stay aligned with your users and your business over time.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- PRICING -------------------- */}
            <section className="py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <h2 className="font-weight-bold">Engagement Packages</h2>
                        <p className="lead">Pick the level of support that matches your ML maturity.</p>
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
                <h2 className="font-weight-bold mb-4">Ready to ship ML to production?</h2>
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
