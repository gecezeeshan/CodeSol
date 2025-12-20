import Card from '../components/Card'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ConnectTiles from '../components/Connect'

function Dashboard() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <div
        className="card  shadow-sm mb-4 text-white"
        style={{
            backgroundImage: 'url(/assets/images/hero-bg3.png)',
          border: 'solid 1px #28a745',
          backgroundColor: '#a6adaaff',
          
       }}
      >
        <div className="card-body py-5">
          <div className="row align-items-center">

            {/* LEFT */}
            <div className="col-lg-7">
              <span className="badge badge-flat border-dark  text-dark text-white text-uppercase mb-3">
                Enterprise-grade • Cloud-native • Automation-driven
              </span>

              <h1 className="font-weight-semibold mb-3">
                Building Scalable Web, Cloud & Automation Solutions
              </h1>

              <p className="font-size-lg opacity-90 mb-4">
                Senior Software Architect delivering secure, scalable,
                and business-driven digital systems.
              </p>

              <div className="d-flex flex-wrap align-items-center mb-3">
                <a href="#projects" className="btn btn-teal btn-lg mr-3 mb-2">
                  View My Work
                </a>

              </div>

              {/* Trust signals (Part-6 #1) */}
              <div className="d-flex flex-wrap small opacity-90">
                <div className="mr-4 mb-2">
                  <i className="icon-checkmark3 mr-1"></i> Enterprise & Startup Projects
                </div>
                <div className="mr-4 mb-2">
                  <i className="icon-checkmark3 mr-1"></i> End-to-End Ownership
                </div>
                <div className="mr-4 mb-2">
                  <i className="icon-checkmark3 mr-1"></i> Cloud & Automation Focus
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="col-lg-5 mt-4 mt-lg-0">
              <div className="p-4 rounded hero-icons  ">

              <div className="hero-icon-grid">
                  {[
                    { icon: 'icon-cloud-check', label: 'Architecture', color: 'text-info' },
                    { icon: 'icon-cog3', label: 'Automation', color: 'text-warning' },
                    { icon: 'icon-shield-check', label: 'Security', color: 'text-success' },
                    { icon: 'icon-rocket', label: 'Scale', color: 'text-danger' }
                  ].map((item, i) => (
                    <div key={i} className="hero-icon-wrapper" >
                      <div className={`hero-icon ${item.color}`}>
                        <i className={item.icon}></i>
                      </div>
                      <div className="hero-icon-label">{item.label}</div>
                    </div>
                  ))}
                </div>

              </div>
            </div>


          </div>
        </div>
      </div>

      {/* ================= MAIN CONTENT ================= */}
      <div className="row">
        <div className="col-xl-6">

          <Card
            title="About Me"
            body={
              <>
                {/* Part-6 #2 — quick scannable highlights */}
                <ul className="list list-unstyled mb-3">
                  <li>
                    <i className="icon-checkmark3 text-success mr-2"></i>
                    Full-stack & cloud-native application development
                  </li>
                  <li>
                    <i className="icon-checkmark3 text-success mr-2"></i>
                    Workflow automation & system integration
                  </li>
                  <li>
                    <i className="icon-checkmark3 text-success mr-2"></i>
                    Clean architecture & scalable design
                  </li>
                </ul>

                <p>
                  I build <strong>smart, modern, and scalable digital solutions</strong> that help
                  businesses <strong>launch faster, operate smoother, and grow confidently</strong>.
                  My work spans full-stack development, cloud engineering, automation,
                  and enterprise architecture — delivering systems that are reliable,
                  secure, and built for real business value.
                </p>

                <p>
                  I specialize in <strong>.NET, Azure, SQL Server, SharePoint, React,
                    Node.js, and Python</strong>, applying modern cloud-native patterns
                  to turn ideas into polished digital products that are easy to use,
                  simple to maintain, and ready for scale.
                </p>

                <p className="mb-0">
                  Whether it’s a custom business app, workflow automation,
                  cloud migration, or AI-enhanced capability —
                  I focus on results, clarity, and long-term maintainability.
                </p>
              </>
            }
          />

          {/* Part-6 #3 — Projects should expose outcomes */}
          <Projects />
        </div>

        <div className="col-xl-6">
          <Skills />
          <ConnectTiles />
        </div>
      </div>
    </>
  )
}

export default Dashboard
