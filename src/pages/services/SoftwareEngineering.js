import React from 'react'
import { Link } from 'react-router-dom'

export default function SoftwareEngineering() {
    return (
        <div>
            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">Software Engineering</h1>
                    <p className="lead text-muted">Building robust, scalable applications that perform</p>
                </div>
            </div>

            {/* Content */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Overview</h3>
                            <p className="text-muted">I build <span className="fw-semibold">high-quality web and mobile applications</span> tailored to your <span className="fw-semibold">business requirements</span>. I handle <em>everything</em>—from <span className="fw-semibold">development and testing</span> to <span className="fw-semibold">integration and deployment</span>—ensuring your software is <span className="fw-semibold">secure, scalable</span>, and aligned with <em>best practices</em>.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Services Include</h3>
                            <div className="list-unstyled">
                                <div className="mb-2"><span className="fw-semibold">Web Development</span> <span className="text-muted">– React, Node.js, Vue, Django, .NET</span></div>
                                <div className="mb-2"><span className="fw-semibold">Mobile Development</span> <span className="text-muted">– React Native, Flutter, native iOS/Android</span></div>
                                <div className="mb-2"><span className="fw-semibold">Backend Engineering</span> <span className="text-muted">– APIs, microservices, databases</span></div>
                                <div className="mb-2"><span className="fw-semibold">DevOps & Deployment</span> <span className="text-muted">– AWS, Azure, Docker, CI/CD pipelines</span></div>
                                <div className="mb-2"><span className="fw-semibold">Testing & QA</span> <span className="text-muted">– Unit, integration, performance testing</span></div>
                                <div className="mb-2"><span className="fw-semibold">Maintenance & Support</span> <span className="text-muted">– Bug fixes, updates, monitoring</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Our Approach</h3>
                            <p className="text-muted">We follow <span className="fw-semibold">agile methodologies</span>, maintain <span className="fw-semibold">clean code</span>, and prioritize <span className="fw-semibold">security and performance</span>. Every project is treated with care and delivered to the highest standards.</p>
                        </div>
                    </div>

                    <div className="mt-4">
                        <Link to="/contact" className="btn btn-teal btn-lg">
                            <i className="fas fa-envelope mr-2"></i>Get Started
                        </Link>
                    </div>
                </div>

                <div className="col-lg-4">
                    <div className="card bg-light">
                        <div className="card-body">
                            <h5 className="font-weight-semibold mb-3">Quick Facts</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Tech Stack:</strong> Modern & scalable</li>
                                <li className="mb-2"><strong>Experience:</strong> 10+ years</li>
                                <li className="mb-2"><strong>Specialties:</strong> SaaS, E-Commerce, FinTech</li>
                                <li className="mb-2"><strong>Delivery:</strong> Production-ready code</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
