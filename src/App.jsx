

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './temp1_comp/HomePage';
import Login from './temp1_comp/Login';
import DataCollection1 from './temp1_comp/DataForm1';
import Template1 from './Template1';
import Home1 from './temp1_comp/Home1';
import About1 from './temp1_comp/About1';
import Contact1 from './temp1_comp/Contact1';
import Skills1 from './temp1_comp/Skills1';
import Projects1 from './temp1_comp/Projects1';
import Template2 from './template2';
import { UserDataProvider } from './UserDataContext';

function App() {
  return (
    <UserDataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/collect-data/:templateId" element={<DataCollection1 />} />
          
          {/* Template 1 (Multi-page) */}
          <Route path="/portfolio/template1" element={<Template1 />}>
            <Route index element={<Home1 />} />
            <Route path="about" element={<About1 />} />
            <Route path="projects" element={<Projects1 />} />
            <Route path="skills" element={<Skills1 />} />
            <Route path="contact" element={<Contact1 />} />
          </Route>
          
          {/* Template 2 (Single-page) */}
          <Route path="/portfolio/template2" element={<Template2 />} />
        </Routes>
      </Router>
    </UserDataProvider>
  );
}


export default App