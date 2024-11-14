import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Sidebar from './components/layout/Sidebar';
import Organizations from './Organizations';
import Projects from './pages/Projects';
import Events from './pages/Events';
import Donations from './DonationStats';


function App() {
  return (
    <Router>
      <div className="flex h-screen bg-slate-50">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Navbar />
          <main className="flex-1 overflow-y-auto p-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/organizations" element={<Organizations />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/events" element={<Events />} />
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