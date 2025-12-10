import React from 'react'
import { Link } from 'react-router-dom'

export default function ProductModernization() {
    return (
        <div>
            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">Product Modernization</h1>
                    <p className="lead text-muted">Revamp legacy systems for performance and scalability</p>
                </div>
            </div>

            {/* Content */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Overview</h3>
                            <p className="text-muted">I upgrade and <span className="fw-semibold">modernize existing software</span> to improve <span className="fw-semibold">performance, maintainability, and scalability</span>. This includes <em>code refactoring</em>, <span className="fw-semibold">architecture improvements</span>, <span className="fw-semibold">cloud migration</span>, <em>new feature implementation</em>, and <span className="fw-semibold">security enhancements</span>.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Modernization Services</h3>
                            <div className="list-unstyled">
                                <div className="mb-2"><span className="fw-semibold">Code Refactoring</span> <span className="text-muted">– Clean up technical debt and improve code quality</span></div>
                                <div className="mb-2"><span className="fw-semibold">Architecture Redesign</span> <span className="text-muted">– Migrate from monolithic to microservices</span></div>
                                <div className="mb-2"><span className="fw-semibold">Cloud Migration</span> <span className="text-muted">– Move from on-premise to cloud (AWS, Azure, GCP)</span></div>
                                <div className="mb-2"><span className="fw-semibold">Database Optimization</span> <span className="text-muted">– Improve performance and scalability</span></div>
                                <div className="mb-2"><span className="fw-semibold">Security Upgrades</span> <span className="text-muted">– Implement modern security standards</span></div>
                                <div className="mb-2"><span className="fw-semibold">Feature Enhancement</span> <span className="text-muted">– Add new capabilities to existing products</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Benefits of Modernization</h3>
                            <p className="text-muted">Modernization <span className="fw-semibold">reduces maintenance costs</span>, <span className="fw-semibold">improves system reliability</span>, <span className="fw-semibold">enables faster feature releases</span>, and positions your product for future growth. Don't let legacy systems hold you back.</p>
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
                                <li className="mb-2"><strong>Approach:</strong> Phased, low-risk migration</li>
                                <li className="mb-2"><strong>Timeline:</strong> Varies by scope</li>
                                <li className="mb-2"><strong>Cost Savings:</strong> 30-50% reduction in maintenance</li>
                                <li className="mb-2"><strong>Delivery:</strong> Modern, maintainable codebase</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
