import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from './Layout';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';

function App() {
  return (
    <div className="App">
      {/* <Dashboard></Dashboard> */}
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Dashboard />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
