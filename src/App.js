import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Consulting from './pages/services/Consulting';
import UXUIDesign from './pages/services/UXUIDesign';
import MVPDevelopment from './pages/services/MVPDevelopment';
import SoftwareEngineering from './pages/services/SoftwareEngineering';
import ProductModernization from './pages/services/ProductModernization';
import WhatsAppAutomation from './pages/services/WhatsAppAutomation';
import DigitalMarketingAutomation from './pages/services/DigitalMarketingAutomation';
import WebScrapingDataExtraction from './pages/services/WebScrapingDataExtraction';
import MachineLearning from './pages/services/MachineLearning';

function App() {
  return (
    <div className="App">
      {/* <Dashboard></Dashboard> */}
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/consulting" element={<Consulting />} />
            <Route path="/services/design" element={<UXUIDesign />} />
            <Route path="/services/mvp" element={<MVPDevelopment />} />
            <Route path="/services/engineering" element={<SoftwareEngineering />} />
            <Route path="/services/modernization" element={<ProductModernization />} />
            <Route path="/services/whatsapp" element={<WhatsAppAutomation />} />
            <Route path="/services/marketing" element={<DigitalMarketingAutomation />} />
            <Route path="/services/scraping" element={<WebScrapingDataExtraction />} />
            <Route path="/services/ml" element={<MachineLearning />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
