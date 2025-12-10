import React from 'react'
import Card from '../components/Card'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ConnectTiles from '../components/Connect'

function Dashboard() {
  return (
    <>

      <div class="row">
        <div class="col-xl-6">
          <Card title="About me" body={<>I build <span className="fw-semibold">smart, modern, and scalable digital solutions</span> that help businesses <span className="fw-semibold">launch faster, operate smoother, and grow confidently</span>. My expertise spans across <span className="fw-semibold">full-stack development, cloud engineering, AI-powered automation, and enterprise architecture</span> — enabling me to deliver <span className="fw-semibold">end-to-end systems that are reliable, secure, and built for real business value</span>.

<br /><br />I specialize in architecting and developing applications using <span className="fw-semibold">.NET Core, C#, Azure, SQL Server, SharePoint, React, Node.js, Python</span>, and <span className="fw-semibold">modern cloud-native patterns</span>. From crafting <span className="fw-semibold">responsive web apps</span> to designing <span className="fw-semibold">complex backend workflows</span>, I turn ideas into <span className="fw-semibold">polished digital products</span> that are <em>easy to use, simple to maintain, and ready for scale</em>.

<br /><br />Whether you need a <span className="fw-semibold">custom business application, workflow automation, mobile app, cloud migration, or AI-enhanced capabilities</span> — I can help you achieve it with <span className="fw-semibold">clean architecture, modern engineering practices, and a results-driven mindset</span>.</>} />
          <Projects></Projects>
        </div>
        <div class="col-xl-6">
          <Skills></Skills>
          <ConnectTiles></ConnectTiles>
        </div>
      </div>


    </>


  )
}

export default Dashboard