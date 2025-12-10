import React from 'react'
import { Link } from 'react-router-dom'

export default function UXUIDesign() {
    return (
        <div>
            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">UX/UI Design</h1>
                    <p className="lead text-muted">Creating intuitive, beautiful interfaces that users love</p>
                </div>
            </div>

            {/* Content */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Overview</h3>
                            <p className="text-muted">I design <span className="fw-semibold">clean, intuitive, and user-friendly</span> interfaces based on a deep understanding of <span className="fw-semibold">user behavior</span> and project goals. My focus is on creating <span className="fw-semibold">seamless experiences</span> that improve <em>engagement</em> and enhance <span className="fw-semibold">customer satisfaction</span>.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Design Process</h3>
                            <div className="list-unstyled">
                                <div className="mb-2"><span className="fw-semibold">User Research</span> <span className="text-muted">– Understand your target audience through interviews and analytics</span></div>
                                <div className="mb-2"><span className="fw-semibold">Wireframing</span> <span className="text-muted">– Map out user flows and information architecture</span></div>
                                <div className="mb-2"><span className="fw-semibold">Prototyping</span> <span className="text-muted">– Create interactive prototypes for testing and validation</span></div>
                                <div className="mb-2"><span className="fw-semibold">Visual Design</span> <span className="text-muted">– Craft beautiful, brand-aligned interfaces</span></div>
                                <div className="mb-2"><span className="fw-semibold">Usability Testing</span> <span className="text-muted">– Validate designs with real users</span></div>
                                <div className="mb-2"><span className="fw-semibold">Design Systems</span> <span className="text-muted">– Build reusable components for consistency</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Why Great Design Matters</h3>
                            <p className="text-muted">Good UX/UI design <span className="fw-semibold">increases user satisfaction</span>, <span className="fw-semibold">reduces churn</span>, and <span className="fw-semibold">drives conversions</span>. It's not just about aesthetics—it's about creating intuitive experiences that make users' lives easier.</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Link to="/contact" className="btn btn-primary btn-lg">
                            Get Started
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h5 className="font-weight-semibold mb-3">Quick Facts</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Tools:</strong> Figma, Adobe XD, Sketch</li>
                                <li className="mb-2"><strong>Specialties:</strong> Web, Mobile, SaaS</li>
                                <li className="mb-2"><strong>Philosophy:</strong> User-centered design</li>
                                <li className="mb-2"><strong>Delivery:</strong> Designs, prototypes, design systems</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
