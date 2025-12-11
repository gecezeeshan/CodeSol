import React from "react";
import { Link } from "react-router-dom";

export default function WebScrapingDataExtraction() {
    const approach = [
        {
            title: "Target Definition",
            desc: "Clarify sources, frequency, and fields to collect with compliance in mind.",
            img: "/assets/images/scrape-target.jpg"
        },
        {
            title: "Crawler Build",
            desc: "Reliable scrapers for static and dynamic sites with smart retries and proxying.",
            img: "/assets/images/scrape-build.jpg"
        },
        {
            title: "Cleaning & Normalization",
            desc: "Deduplicate, structure, and standardize data so it is analysis-ready.",
            img: "/assets/images/scrape-clean.jpg"
        },
        {
            title: "Storage & Access",
            desc: "Deliver data to files, databases, or APIs with secure access controls.",
            img: "/assets/images/scrape-store.jpg"
        },
        {
            title: "Monitoring & Alerts",
            desc: "Health checks, captcha handling, and notifications when sources change.",
            img: "/assets/images/scrape-monitor.jpg"
        },
        {
            title: "APIs & Feeds",
            desc: "Expose clean data through APIs or scheduled exports into your tools.",
            img: "/assets/images/scrape-api.jpg"
        }
    ];

    const packages = [
        {
            name: "Targeted Pull",
            price: "AED 2,900",
            label: "Fast Start",
            features: [
                "One-time scrape of defined sources",
                "Data cleaning and validation",
                "CSV/JSON delivery with basic schema",
                "Runbook and replay instructions"
            ]
        },
        {
            name: "Recurring Feeds",
            price: "AED 6,900",
            label: "Most Popular",
            features: [
                "Recurring scrapes with scheduling",
                "Robust anti-blocking and retries",
                "Data loading to your DB or warehouse",
                "Quality checks and change detection",
                "Monthly performance report"
            ]
        },
        {
            name: "Managed Data Ops",
            price: "AED 5,500/mo",
            label: "",
            features: [
                "Ongoing scraper maintenance and fixes",
                "Schema evolution and new fields on demand",
                "Monitoring, alerting, and SLA reporting",
                "API or feed delivery with auth",
                "Quarterly optimization and roadmap"
            ]
        }
    ];

    return (
        <div className="uxui-page">
            {/* -------------------- HERO SECTION -------------------- */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage: "url('/assets/images/scrape-hero2.jpg')",
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
                            Web Scraping & Data Extraction
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            Dependable scrapers and data pipelines that deliver clean, usable data from the web.
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
                            I build scrapers that handle dynamic sites, clean the data, and deliver it where you need it—files, databases,
                            or APIs—while monitoring health and adapting to source changes.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- APPROACH WITH IMAGES -------------------- */}
            <section className="text-white py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-4">How I Deliver Data</h2>

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

            {/* -------------------- WHY SCRAPING -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Why Reliable Scraping</h2>
                        <p className="text-muted fs-lg">
                            Reliable data collection fuels market research, pricing intelligence, and lead generation.
                            Robust scrapers with monitoring protect you from silent failures and bad data.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- PRICING -------------------- */}
            <section className="py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <h2 className="font-weight-bold">Engagement Packages</h2>
                        <p className="lead">Select the cadence and support your data operation needs.</p>
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
                <h2 className="font-weight-bold mb-4">Ready to turn the web into clean data?</h2>
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
