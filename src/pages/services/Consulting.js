import React from 'react'
import { Link } from 'react-router-dom'

export default function Consulting() {
    return (
        <div>
            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">Consulting</h1>
                    <p className="lead text-muted">Expert guidance across the entire software development lifecycle</p>
                </div>
            </div>

            {/* Content */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Overview</h3>
                            <p className="text-muted">I provide <span className="fw-semibold">expert guidance</span> across the <em>entire software development lifecycle</em>. From understanding your <span className="fw-semibold">business needs</span> and analyzing the <span className="fw-semibold">market</span> to defining <span className="fw-semibold">product strategy</span>, structure, and roadmap, I help you plan and execute projects <em>efficiently and cost-effectively</em>.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">What We Offer</h3>
                            <div className="list-unstyled">
                                <div className="mb-2"><span className="fw-semibold">Business Analysis</span> <span className="text-muted">– Understand your market and competitive landscape</span></div>
                                <div className="mb-2"><span className="fw-semibold">Requirements Elicitation</span> <span className="text-muted">– Translate business goals into technical requirements</span></div>
                                <div className="mb-2"><span className="fw-semibold">Product Strategy</span> <span className="text-muted">– Define your product vision, roadmap, and go-to-market strategy</span></div>
                                <div className="mb-2"><span className="fw-semibold">Architecture Planning</span> <span className="text-muted">– Design scalable, maintainable system architecture</span></div>
                                <div className="mb-2"><span className="fw-semibold">Project Budgeting</span> <span className="text-muted">– Realistic cost estimation and resource planning</span></div>
                                <div className="mb-2"><span className="fw-semibold">Regulatory Compliance</span> <span className="text-muted">– Ensure adherence to industry standards and regulations</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Why Choose This Service?</h3>
                            <p className="text-muted">Strategic consulting <span className="fw-semibold">reduces project risk</span>, <span className="fw-semibold">accelerates time-to-market</span>, and ensures your software investment aligns with business objectives. I bring years of experience across multiple industries and technologies.</p>
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
                                <li className="mb-2"><strong>Expertise:</strong> 10+ years in software strategy</li>
                                <li className="mb-2"><strong>Industries:</strong> FinTech, E-Commerce, SaaS, Healthcare</li>
                                <li className="mb-2"><strong>Approach:</strong> Data-driven, collaborative, results-focused</li>
                                <li className="mb-2"><strong>Delivery:</strong> Roadmaps, specifications, risk assessments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
