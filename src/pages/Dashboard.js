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
          <Card title="About me" body="I build smart, modern, and scalable digital solutions that help businesses launch faster, operate smoother, and grow confidently. My expertise spans across full-stack development, cloud engineering, AI-powered automation, and enterprise architecture — enabling me to deliver end-to-end systems that are reliable, secure, and built for real business value.

I specialize in architecting and developing applications using .NET Core, C#, Azure, SQL Server, SharePoint, React, Node.js, Python, and modern cloud-native patterns. From crafting responsive web apps to designing complex backend workflows, I turn ideas into polished digital products that are easy to use, simple to maintain, and ready for scale.

Whether you need a custom business application, workflow automation, mobile app, cloud migration, or AI-enhanced capabilities — I can help you achieve it with clean architecture, modern engineering practices, and a results-driven mindset." />
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