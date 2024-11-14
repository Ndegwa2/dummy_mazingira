import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/layout/Sidebar';
import Organizations from './Organizations';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Donations from './DonationStats';
import BeneficiaryStories from './BeneficiaryStories';


function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-8">
            <Routes>
              <Route path="/Organisation/BeneficiaryStories.js" element={<BeneficiaryStories/>} />
              <Route path="/organizations" element={<Organizations />} />
            
              <Route path="/" element={<Events />} />
              <Route path="/donations" element={<Donations />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;