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

        <Routes>
            
            <Route>
                </Route> </Routes>
        </div>

        
    </Router>
  );
}

export default App;