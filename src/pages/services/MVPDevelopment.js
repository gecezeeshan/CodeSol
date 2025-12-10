import React from 'react'
import { Link } from 'react-router-dom'

export default function MVPDevelopment() {
    return (
        <div>
            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">MVP Development</h1>
                    <p className="lead text-muted">Turn your idea into a market-ready product quickly</p>
                </div>
            </div>

            {/* Content */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Overview</h3>
                            <p className="text-muted">I transform your ideas into a <span className="fw-semibold">functional Minimum Viable Product</span> with <em>essential features</em>. This helps you <span className="fw-semibold">quickly validate</span> your concept, gather <span className="fw-semibold">real user feedback</span>, and prepare for a <em>scalable product launch</em> with <span className="fw-semibold">minimal investment</span>.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">MVP Development Approach</h3>
                            <div className="list-unstyled">
                                <div className="mb-2"><span className="fw-semibold">Feature Prioritization</span> <span className="text-muted">– Identify core features that solve your key problem</span></div>
                                <div className="mb-2"><span className="fw-semibold">Rapid Development</span> <span className="text-muted">– Build fast without technical debt</span></div>
                                <div className="mb-2"><span className="fw-semibold">Quality Assurance</span> <span className="text-muted">– Ensure the MVP is stable and reliable</span></div>
                                <div className="mb-2"><span className="fw-semibold">Deployment</span> <span className="text-muted">– Launch to your target audience</span></div>
                                <div className="mb-2"><span className="fw-semibold">User Feedback</span> <span className="text-muted">– Gather insights for product refinement</span></div>
                                <div className="mb-2"><span className="fw-semibold">Iteration</span> <span className="text-muted">– Improve based on real user data</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Why Start with an MVP?</h3>
                            <p className="text-muted">An MVP <span className="fw-semibold">reduces risk</span>, <span className="fw-semibold">minimizes upfront costs</span>, and allows you to <span className="fw-semibold">validate your business idea</span> before committing significant resources. It's the smart way to enter the market.</p>
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
                                <li className="mb-2"><strong>Timeline:</strong> 4-12 weeks typical</li>
                                <li className="mb-2"><strong>Cost:</strong> Significantly lower than full product</li>
                                <li className="mb-2"><strong>Tech Stack:</strong> Modern, scalable frameworks</li>
                                <li className="mb-2"><strong>Delivery:</strong> Working product, documentation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
