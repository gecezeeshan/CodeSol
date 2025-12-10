import React from 'react'
import { Link } from 'react-router-dom'

export default function MachineLearning() {
    return (
        <div>
            {/* Hero */}
            <div className="page-header page-header-light mb-4">
                <div className="page-title">
                    <h1 className="display-4 font-weight-semibold">Machine Learning (End-to-End)</h1>
                    <p className="lead text-muted">Transform data into intelligent solutions</p>
                </div>
            </div>

            {/* Content */}
            <div className="row">
                <div className="col-lg-8">
                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Overview</h3>
                            <p className="text-muted">I deliver <span className="fw-semibold">complete machine learning solutions</span>—from <em>data collection and cleaning</em> to <span className="fw-semibold">visualization, feature engineering, model training, and deployment</span>. I help you convert <span className="fw-semibold">raw data into actionable insights</span> and <em>predictive models</em> tailored to your <span className="fw-semibold">business needs</span>.</p>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">ML Services</h3>
                            <div className="list-unstyled">
                                <div className="mb-2"><span className="fw-semibold">Data Collection & Preparation</span> <span className="text-muted">– Gather and clean training data</span></div>
                                <div className="mb-2"><span className="fw-semibold">Exploratory Data Analysis</span> <span className="text-muted">– Understand data patterns</span></div>
                                <div className="mb-2"><span className="fw-semibold">Feature Engineering</span> <span className="text-muted">– Create meaningful features</span></div>
                                <div className="mb-2"><span className="fw-semibold">Model Development</span> <span className="text-muted">– Classification, regression, clustering</span></div>
                                <div className="mb-2"><span className="fw-semibold">Model Training & Evaluation</span> <span className="text-muted">– Optimize for accuracy</span></div>
                                <div className="mb-2"><span className="fw-semibold">Deployment & Monitoring</span> <span className="text-muted">– Production ML systems</span></div>
                            </div>
                        </div>
                    </div>

                    <div className="card mb-3">
                        <div className="card-body">
                            <h3 className="fw-semibold fs-lg mb-3">Applications</h3>
                            <p className="text-muted"><span className="fw-semibold">Predictive analytics</span>, <span className="fw-semibold">recommendation engines</span>, <span className="fw-semibold">fraud detection</span>, <span className="fw-semibold">customer segmentation</span>, <span className="fw-semibold">image recognition</span>, <span className="fw-semibold">NLP solutions</span>, and more. Leverage AI to gain competitive advantage.</p>
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
                                <li className="mb-2"><strong>Stack:</strong> Python, TensorFlow, scikit-learn</li>
                                <li className="mb-2"><strong>Specialties:</strong> NLP, computer vision, forecasting</li>
                                <li className="mb-2"><strong>Deployment:</strong> Cloud (AWS, GCP, Azure)</li>
                                <li className="mb-2"><strong>Delivery:</strong> Trained models + API endpoints</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
