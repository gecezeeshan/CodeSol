import React, { useState } from "react";

const ProductTabs = (props) => {
  const [tab, setTab] = useState("desc");

  return (
    <div className="card1">
      <ul className="nav nav-tabs nav-tabs-underline nav-justified mb-0" role="tablist">

        {/* Overview */}
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${tab === "desc" ? "active" : ""}`}
            href="javascript:void(0)"
            data-toggle="tab"
            onClick={() => setTab("desc")}
            role="tab"
          >
            Overview
          </a>
        </li>

        {/* Specs */}
        <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${tab === "spec" ? "active" : ""}`}
            href="javascript:void(0)"
            data-toggle="tab"
            onClick={() => setTab("spec")}
            role="tab"
          >
            Skills
          </a>
        </li>

        {/* Shipping */}
        {/* <li className="nav-item" role="presentation">
          <a
            className={`nav-link ${tab === "shipping" ? "active" : ""}`}
            href="javascript:void(0)"
            data-toggle="tab"
            onClick={() => setTab("shipping")}
            role="tab"
          >
            Shipping
          </a>
        </li> */}
      </ul>

      <div className="tab-content card-body">

        {/* Overview Tab */}
        <div
          className={`tab-pane fade ${tab === "desc" ? "show active" : ""}`}
          role="tabpanel"
        >
          <div class="d-flex align-items-start flex-nowrap text-start-force">
            <div>

              <ul class="pl-2 text-muted font-size-sm text-start-force">
                {props.overview.map((item, key) => (
                  <li key={key}>{item}</li>
                ))}

              </ul>
            </div>
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

        {/* Shipping Tab */}
        {/* <div
          className={`tab-pane fade ${tab === "shipping" ? "show active" : ""}`}
          role="tabpanel"
        >
          DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred
          pitchfork. Williamsburg whatever.
        </div> */}
      </div>
    </div>
  );
};

export default ProductTabs;
