import React from 'react'
import { Link } from 'react-router-dom'

export default function WhatsAppAutomation() {
    return (
        <div>
            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">WhatsApp Automation</h1>
                    <p className="lead text-muted">Streamline communication and scale your engagement</p>
                </div>
            </div>

            {/* Content */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Overview</h3>
                            <p className="text-muted">I develop <span className="fw-semibold">custom WhatsApp automation solutions</span> including <em>bulk messaging tools</em>, <span className="fw-semibold">chatbots</span>, <em>lead follow-up systems</em>, and <span className="fw-semibold">CRM integration</span>—helping you <span className="fw-semibold">streamline communication</span> and improve <em>engagement</em>.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Solutions Offered</h3>
                            <div className="list-unstyled">
                                <div className="mb-2"><span className="fw-semibold">WhatsApp Chatbots</span> <span className="text-muted">– AI-powered conversational interfaces</span></div>
                                <div className="mb-2"><span className="fw-semibold">Bulk Messaging</span> <span className="text-muted">– Send campaigns to thousands of users</span></div>
                                <div className="mb-2"><span className="fw-semibold">Lead Follow-up Automation</span> <span className="text-muted">– Nurture leads automatically</span></div>
                                <div className="mb-2"><span className="fw-semibold">Customer Support Bots</span> <span className="text-muted">– 24/7 automated support</span></div>
                                <div className="mb-2"><span className="fw-semibold">CRM Integration</span> <span className="text-muted">– Sync with Salesforce, HubSpot, etc.</span></div>
                                <div className="mb-2"><span className="fw-semibold">Analytics Dashboard</span> <span className="text-muted">– Track engagement and conversions</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Why WhatsApp Automation?</h3>
                            <p className="text-muted">WhatsApp reaches <span className="fw-semibold">2B+ users globally</span> with a <span className="fw-semibold">98% open rate</span>. Automating communication on WhatsApp helps you <span className="fw-semibold">scale customer engagement</span>, <span className="fw-semibold">reduce response times</span>, and <span className="fw-semibold">improve conversions</span>.</p>
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
                                <li className="mb-2"><strong>Platforms:</strong> Official API, Green API</li>
                                <li className="mb-2"><strong>Use Cases:</strong> Marketing, support, sales</li>
                                <li className="mb-2"><strong>Integration:</strong> CRM, email, analytics</li>
                                <li className="mb-2"><strong>Delivery:</strong> Custom solution + training</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
