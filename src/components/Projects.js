import ProductTabs from "./ProductTabs";

function Projects() {
    return (
        <div className="card">
            <div className="card-header header-elements-inline">
                <h6 className="card-title">Enterprise Project Portfolio</h6>
            </div>

            <div className="card-body pb-1">

                {/* Row 1 ---------------------------------------------------------------- */}
                <div className="row">

                    {/* Construction & Real Estate */}
                    <div className="col-xl-4 mb-3">
                        <div className="card h-100">
                            <div className="card-img-actions mx-1 mt-1">
                                <img className="card-img img-fluid" src="../../../assets/images/construction.jpeg" alt="" />
                            </div>

                            <div className="card-body project-card-body">
                                <span className="text-default font-weight-semibold letter-icon-title">
                                    Construction & Real Estate
                                </span>

                                <ProductTabs
                                    overview={[
                                        "Residential Portal Management System",
                                        "Builder–Homeowner Warranty Module",
                                        "Buyer Survey & Experience Analytics"
                                    ]}
                                    skills={["C#", "SQL Server", "SharePoint", "React"]}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Healthcare IT Solutions */}
                    <div className="col-xl-4 mb-3">
                        <div className="card h-100">
                            <div className="card-img-actions mx-1 mt-1">
                                <img className="card-img img-fluid" src="../../../assets/images/healthcare.jpeg" alt="" />
                            </div>

                            <div className="card-body project-card-body">
                                <span className="text-default font-weight-semibold letter-icon-title">
                                    Healthcare IT Solutions
                                </span>

                                <ProductTabs
                                    overview={[
                                        "Clinic Management & e-Practice Suite",
                                        "Patient Check-in Kiosk",
                                        "Medical Dictation & Workflow Platform"
                                    ]}
                                    skills={[".NET Core", "SQL", "Azure App Services", "Microservices"]}
                                />
                            </div>
                        </div>
                    </div>

                    {/* Aviation & Airforce Systems */}
                    <div className="col-xl-4 mb-3">
                        <div className="card h-100">
                            <div className="card-img-actions mx-1 mt-1">
                                <img className="card-img img-fluid" src="../../../assets/images/aviation.jpeg" alt="" />
                            </div>

                            <div className="card-body project-card-body">
                                <span className="text-default font-weight-semibold letter-icon-title">
                                    Aviation & Airforce Systems
                                </span>

                                <ProductTabs
                                    overview={[
                                        "Aviation Ops & Communication Suite",
                                        "Flight Assignment Workflow",
                                        "Secure Operations Portal"
                                    ]}
                                    skills={["C#", "React", "Azure Functions", "SignalR"]}
                                />
                            </div>
                        </div>
                    </div>

                </div>

                {/* Row 2 ---------------------------------------------------------------- */}
                <div className="row mt-3">

                    {/* Textile ERP Systems */}
                    <div className="col-xl-4 mb-3">
                        <div className="card h-100">
                            <div className="card-img-actions mx-1 mt-1">
                                <img className="card-img img-fluid" src="../../../assets/images/textile.jpeg" alt="" />
                            </div>

                            <div className="card-body project-card-body">
                                <span className="text-default font-weight-semibold letter-icon-title">
                                    Textile ERP Systems
                                </span>

                                <ProductTabs
                                    overview={[
                                        "Inventory & Warehouse Module",
                                        "Finance & Procurement ERP",
                                        "Import Bond & GatePass Automation"
                                    ]}
                                    skills={["ASP.NET MVC", "SQL Server", "jQuery", "Bootstrap"]}
                                />
                            </div>
                        </div>
                    </div>

                    {/* AI, ML & Data Engineering */}
                    <div className="col-xl-4 mb-3">
                        <div className="card h-100">
                            <div className="card-img-actions mx-1 mt-1">
                                <img className="card-img img-fluid" src="../../../assets/images/aiProject.jpeg" alt="" />
                            </div>

                            <div className="card-body project-card-body">
                                <span className="text-default font-weight-semibold letter-icon-title">
                                    AI, ML & Data Engineering
                                </span>

                                <ProductTabs
                                    overview={[
                                        "LLM / RAG Search & Knowledge Engine",
                                        "Document Classification Models",
                                        "AI Chatbots & Automation Workflows"
                                    ]}
                                    skills={["Python", "TensorFlow", "Transformers", "LangChain"]}
                                />
                            </div>
                        </div>
                    </div>

                    {/* HR, Finance & Digital Apps */}
                    <div className="col-xl-4 mb-3">
                        <div className="card h-100">
                            <div className="card-img-actions mx-1 mt-1">
                                <img className="card-img img-fluid" src="../../../assets/images/hr.jpeg" alt="" />
                            </div>

                            <div className="card-body project-card-body">
                                <span className="text-default font-weight-semibold letter-icon-title">
                                    HR, Finance & Digital Apps
                                </span>

                                <ProductTabs
                                    overview={[
                                        "Online Invoicing System",
                                        "Employee Onboarding Platform",
                                        "Digital Survey Application"
                                    ]}
                                    skills={["C#", "Python", "React", "Azure DevOps"]}
                                />
                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    );
}

export default Projects;
