import React from "react";
import { Link } from "react-router-dom";

export default function UXUIDesign() {
    return (
        <div className="uxui-page">

            {/* -------------------- HERO SECTION WITH BACKGROUND IMAGE -------------------- */}
            <section
                className="text-white d-flex align-items-center"
                style={{
                    backgroundImage:
                        "url('/assets/images/uxui-hero.jpg')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    padding: "120px 0",
                    backgroundColor: "rgba(0,0,0,0.4)",
                    backgroundBlendMode: "overlay"
                }}
            >
                <div className="container">
                    <div className="col-lg-10">
                        <h1 className="display-3 font-weight-bold mb-3">
                            UX/UI Design Services
                        </h1>
                        <p className="lead" style={{ opacity: 0.9 }}>
                            Designing intuitive, elegant, user-centered experiences that delight users.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- OVERVIEW SECTION -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Overview</h2>
                        <p className="text-muted fs-lg">
                            I create <strong>clean, modern, user-friendly</strong> interfaces built on real user
                            behavior and business goals. Every design aims for <strong>clarity, emotional impact,</strong> 
                            and <strong>effortless usability</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- DESIGN PROCESS SECTION WITH IMAGES -------------------- */}
            <section
                className="text-white py-5"
                style={{ backgroundColor: "#0f766e" }}
            >
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-4">My Design Process</h2>

                        <div className="row">
                            {[
                                {
                                    title: "User Research",
                                    desc: "Understanding your users and their real needs",
                                    img: "/assets/images/uxui-user-research.jpg"
                                },
                                {
                                    title: "Wireframing",
                                    desc: "Mapping user flows & structure",
                                    img: "/assets/images/uxui-wireframing.jpg"
                                },
                                {
                                    title: "Prototyping",
                                    desc: "Clickable prototypes for rapid validation",
                                    img: "/assets/images/uxui-prototyping.jpg"
                                },
                                {
                                    title: "Visual Design",
                                    desc: "Beautiful, brand-aligned UI",
                                    img: "/assets/images/uxui-visual-design.jpg"
                                },
                                {
                                    title: "Usability Testing",
                                    desc: "Testing designs with real users",
                                    img: "/assets/images/uxui-usability-testing.jpg"
                                },
                                {
                                    title: "Design Systems",
                                    desc: "Reusable components for consistency",
                                    img: "/assets/images/uxui-design-systems.jpg"
                                }
                            ].map((item, idx) => (
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

            {/* -------------------- WHY DESIGN MATTERS -------------------- */}
            <section className="py-5 bg-white">
                <div className="container">
                    <div className="col-lg-10 mx-auto">
                        <h2 className="font-weight-bold mb-3">Why Great Design Matters</h2>
                        <p className="text-muted fs-lg">
                            Strong UX/UI increases <strong>conversions</strong>, boosts 
                            <strong> engagement</strong>, reduces <strong>support costs</strong>,
                            and builds strong emotional connection with users.
                        </p>
                    </div>
                </div>
            </section>

            {/* -------------------- MODERN PRICING SECTION -------------------- */}
            <section className="py-5" style={{ backgroundColor: "#0f766e" }}>
                <div className="container text-white">
                    <div className="text-center mb-5">
                        <h2 className="font-weight-bold">Website Packages</h2>
                        <p className="lead">Choose the plan that fits your business needs</p>
                    </div>

                    <div className="row">

                        {/* Pricing Cards */}
                        {[
                            {
                                name: "Starter Website",
                                price: "999",
                                label: "",
                                features: [
                                    "1–3 Pages",
                                    "Custom Home Page",
                                    "Mobile Responsive",
                                    "Basic Contact Form",
                                    "SEO-Friendly Structure",
                                    "SSL Setup",
                                    "Speed Optimization",
                                    "2 Revisions",
                                    "Basic Logo Included"
                                ]
                            },
                            {
                                name: "Professional Website",
                                price: "2,699",
                                label: "Most Popular",
                                features: [
                                    "5–7 Pages",
                                    "Premium UI/UX",
                                    "Fully Responsive",
                                    "Advanced Contact Form",
                                    "Social Media Integration",
                                    "On-Page SEO",
                                    "Blog Section",
                                    "Stock Images",
                                    "4 Revisions",
                                    "Standard Logo Included"
                                ]
                            },
                            {
                                name: "Premium Corporate",
                                price: "4,799",
                                label: "",
                                features: [
                                    "Up to 12 Pages",
                                    "Custom Figma Design",
                                    "Multi-Language Support",
                                    "Speed Score 90+",
                                    "Security Optimization",
                                    "Advanced Animations",
                                    "Blog + Portfolio",
                                    "Monthly Backup Setup",
                                    "6 Revisions",
                                    "Premium Logo Included"
                                ]
                            },
                            {
                                name: "Ecommerce Starter",
                                price: "8,199",
                                label: "",
                                features: [
                                    "Up to 20 Products",
                                    "Shopping Cart + Wishlist",
                                    "Secure Checkout",
                                    "Payment Gateway Integration",
                                    "Coupons & Discounts",
                                    "Basic SEO",
                                    "3 Revisions",
                                    "1 Month Free Maintenance",
                                    "Logo Included"
                                ]
                            },
                            {
                                name: "Ecommerce Business",
                                price: "13,799",
                                label: "Best Value",
                                features: [
                                    "Up to 100 Products",
                                    "Premium Store UI/UX",
                                    "Advanced Filters",
                                    "Shipping Setup",
                                    "Product Reviews",
                                    "Abandoned Cart Setup",
                                    "Advanced SEO",
                                    "Speed Optimization",
                                    "5 Revisions",
                                    "2 Months Free Maintenance",
                                    "Brand Kit Logo Included"
                                ]
                            },
                            {
                                name: "Enterprise",
                                price: "Custom Quote",
                                label: "",
                                features: [
                                    "Fully Custom Website",
                                    "Unlimited Pages",
                                    "Figma UI/UX From Scratch",
                                    "Advanced Animations",
                                    "Custom Features / API Integration",
                                    "Multi-Language Setup",
                                    "High-Speed Optimization",
                                    "Advanced Security Hardening",
                                    "Priority Support",
                                    "Unlimited Revisions",
                                    "Full Brand Guidelines Included"
                                ]
                            }
                        ].map((plan, idx) => (
                            <div className="col-md-4 mb-4" key={idx}>
                                <div className="card h-100 shadow-lg border-0">

                                    {plan.label && (
                                        <div className="badge bg-warning text-dark position-absolute" style={{ top: 10, right: 10 }}>
                                            {plan.label}
                                        </div>
                                    )}

                                    <div className="card-body text-dark">
                                        <h4 className="font-weight-bold">{plan.name}</h4>

                                        <h2 className="font-weight-bold mt-2">
                                            {plan.price === "Custom Quote"
                                                ? "Custom"
                                                : `AED ${plan.price}`}
                                        </h2>

                                        <ul className="list-unstyled mt-3">
                                            {plan.features.map((f, i) => (
                                                <li key={i} className="mb-2">✔ {f}</li>
                                            ))}
                                        </ul>

                                        <div className="mt-4">
                                            <Link to="/contact" className="btn btn-teal btn-block">
                                                Let's Get Started →
                                            </Link>
                                            <a href="https://wa.me/971502195152" target="_blank" rel="noreferrer" className="btn btn-outline-teal btn-block mt-2">
                                                Chat Now
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* -------------------- CTA SECTION -------------------- */}
            <section className="py-5 bg-white text-center">
                <h2 className="font-weight-bold mb-4">Ready to Create Exceptional Experiences?</h2>
                <Link to="/contact" className="btn btn-teal btn-lg px-4 py-2">
                    <i className="fas fa-envelope mr-2"></i>
                    Get Started
                </Link>
            </section>
        </div>
    );
}
