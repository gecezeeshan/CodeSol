import React from 'react'
import { Link } from 'react-router-dom'

export default function DigitalMarketingAutomation() {
    return (
        <div>
            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">Digital Marketing Automation</h1>
                    <p className="lead text-muted">Automate your marketing workflows and grow smarter</p>
                </div>
            </div>

            {/* Content */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Overview</h3>
                            <p className="text-muted">I build <span className="fw-semibold">automated marketing workflows</span>, <em>email sequences</em>, <span className="fw-semibold">lead-tracking dashboards</span>, <em>campaign analytics</em>, and <span className="fw-semibold">integration tools</span> that help you <span className="fw-semibold">reach your audience effectively</span> and grow your business with <em>minimal manual effort</em>.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Marketing Automation Solutions</h3>
                            <div className="list-unstyled">
                                <div className="mb-2"><span className="fw-semibold">Email Marketing Workflows</span> <span className="text-muted">– Automated nurture sequences</span></div>
                                <div className="mb-2"><span className="fw-semibold">Lead Scoring & Segmentation</span> <span className="text-muted">– Prioritize high-value leads</span></div>
                                <div className="mb-2"><span className="fw-semibold">CRM Integration</span> <span className="text-muted">– Sync with HubSpot, Pipedrive, Salesforce</span></div>
                                <div className="mb-2"><span className="fw-semibold">Campaign Analytics</span> <span className="text-muted">– Real-time performance dashboards</span></div>
                                <div className="mb-2"><span className="fw-semibold">Social Media Automation</span> <span className="text-muted">– Schedule and automate posts</span></div>
                                <div className="mb-2"><span className="fw-semibold">Conversion Tracking</span> <span className="text-muted">– Monitor funnel performance</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Benefits</h3>
                            <p className="text-muted"><span className="fw-semibold">Save time</span>, <span className="fw-semibold">increase efficiency</span>, <span className="fw-semibold">nurture more leads</span>, and <span className="fw-semibold">improve conversion rates</span>. Marketing automation helps you do more with less and scale your business predictably.</p>
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
                                <li className="mb-2"><strong>Platforms:</strong> HubSpot, Zapier, Make, Pipedrive</li>
                                <li className="mb-2"><strong>Expertise:</strong> Email, social, lead nurturing</li>
                                <li className="mb-2"><strong>ROI:</strong> 300-500% typical increase</li>
                                <li className="mb-2"><strong>Delivery:</strong> Workflows + training</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
