import React from 'react'
import { Link } from 'react-router-dom'

export default function WebScrapingDataExtraction() {
    return (
        <div>
            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">Web Scraping & Data Extraction</h1>
                    <p className="lead text-muted">Extract, clean, and leverage data from any source</p>
                </div>
            </div>

            {/* Content */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Overview</h3>
                            <p className="text-muted">I create <span className="fw-semibold">reliable, scalable scraping tools</span> to <em>extract data</em> from websites, marketplaces, and online sources. This includes <span className="fw-semibold">cleaning, structuring, and exporting</span> data into <em>usable formats</em> for <span className="fw-semibold">analysis or automation</span> workflows.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Services Include</h3>
                            <div className="list-unstyled">
                                <div className="mb-2"><span className="fw-semibold">Website Scraping</span> <span className="text-muted">– Extract data from static and dynamic sites</span></div>
                                <div className="mb-2"><span className="fw-semibold">E-Commerce Scraping</span> <span className="text-muted">– Product prices, reviews, inventory</span></div>
                                <div className="mb-2"><span className="fw-semibold">Data Cleaning & Transformation</span> <span className="text-muted">– Format raw data for analysis</span></div>
                                <div className="mb-2"><span className="fw-semibold">API Integration</span> <span className="text-muted">– Fetch data from APIs at scale</span></div>
                                <div className="mb-2"><span className="fw-semibold">Real-time Monitoring</span> <span className="text-muted">– Track price changes, new listings</span></div>
                                <div className="mb-2"><span className="fw-semibold">Database Storage</span> <span className="text-muted">– Organize data for easy access</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Use Cases</h3>
                            <p className="text-muted"><span className="fw-semibold">Price comparison tools</span>, <span className="fw-semibold">market research</span>, <span className="fw-semibold">competitive intelligence</span>, <span className="fw-semibold">lead generation</span>, <span className="fw-semibold">SEO monitoring</span>, and <span className="fw-semibold">business intelligence</span>. Turn public data into competitive advantage.</p>
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
                                <li className="mb-2"><strong>Tech:</strong> Python, Node.js, Puppeteer</li>
                                <li className="mb-2"><strong>Scale:</strong> Millions of records/day</li>
                                <li className="mb-2"><strong>Reliability:</strong> 99.9% uptime SLA</li>
                                <li className="mb-2"><strong>Delivery:</strong> Scrapers + dashboards</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
