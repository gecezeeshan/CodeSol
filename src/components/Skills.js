import React from "react";

const skills = [
  {
    category: "Backend",
    items: ["C#", ".NET Core", "Node.js", "Python", "Express", "NestJS"]
  },
  {
    category: "Frontend",
    items: ["React", "React Native", "Angular", "TypeScript", "jQuery"]
  },
  {
    category: "DevOps & Cloud",
    items: ["Azure", "Azure DevOps", "Docker", "Kubernetes", "GitHub Actions"]
  },
  {
    category: "Databases",
    items: ["SQL Server", "MongoDB", "PostgreSQL", "SQLite", "Cosmos DB"]
  },
  {
    category: "Power Platform",
    items: ["PowerApps", "Power Automate", "Power BI", "SharePoint Online"]
  },
  {
    category: "AI / ML & Data Science",
    items: [
      "Python", 
      "TensorFlow", 
      "Keras", 
      "PyTorch", 
      "Scikit-Learn", 
      "Pandas", 
      "NumPy",
      "LangChain",
      "HuggingFace Transformers",
      "OpenAI APIs",
      "ML.NET",
      "Computer Vision",
      "NLP"
    ]}
];

export default function SkillSection() {
  return (
    <div className="card">
      <div className="card-header bg-teal-600 text-white" style={{padding: '5px'}}>
        <h5 className="mb-0">My Expertise</h5>
      </div>

      <div className="card-body p-3"  >

        {skills.map((skill, index) => (
          <div key={index} className="row align-items-start mb-3 border-bottom" 
          >

            {/* Left Column - Category Title */}
            <div className="col-md-3 col-sm-12" >
              <h6 className="font-weight-semibold mb-2">
                {skill.category}
              </h6>
            </div>

            {/* Right Column - Skill Badges */}
            <div className="col-md-9 col-sm-12">
              {skill.items.map((item, i) => (
                <span
                  key={i}
                  className="badge bg-indigo-400 text-white mr-2 mb-2 skill-badge"
                >
                  {item}
                </span>
              ))}
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}
