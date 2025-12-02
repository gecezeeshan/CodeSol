import React, { useState } from "react";

const ProductTabs = (props) => {
  const [tab, setTab] = useState("desc");

  return (
    <div className="card1">
      <ul className="nav nav-tabs nav-tabs-underline nav-justified mb-0" role="tablist">
        
        {/* Overview */}
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className={`nav-link btn-reset ${tab === "desc" ? "active" : ""}`}
            onClick={() => setTab("desc")}
            role="tab"
          >
            Overview
          </button>
        </li>

        {/* Specs */}
        <li className="nav-item" role="presentation">
          <button
            type="button"
            className={`nav-link btn-reset ${tab === "spec" ? "active" : ""}`}
            onClick={() => setTab("spec")}
            role="tab"
          >
            Skills
          </button>
        </li>

      </ul>

      <div className="tab-content card-body">

        {/* Overview Tab */}
        <div
          className={`tab-pane fade ${tab === "desc" ? "show active" : ""}`}
          role="tabpanel"
        >
          <div className="d-flex align-items-start flex-nowrap text-start-force">
            <ul className="pl-2 text-muted font-size-sm text-start-force">
              {props.overview.map((item, key) => (
                <li key={key}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        {/* Specs Tab */}
        <div
          className={`tab-pane fade ${tab === "spec" ? "show active" : ""}`}
          role="tabpanel"
        >
          <div className="mt-2">
            {props.skills.map((skill, key) => (
              <span key={key} className="skill-pill">
                {skill}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductTabs;
