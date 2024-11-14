import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonationStats from './home/ndegwa/mazingira/Organisation/DonationStats.js';
import DonationsList from './home/ndegwa/mazingira/Organisation/DonorsList.js';
import OrganizationDashboard from "../../Organisation/Organisation Dashboard.js";
import OrganisationCard from './OrganisationCard.js';
import Inventory from './OrganisationInventory.js';
import Status from './OrganisationStatus.js';
import SignIn from './Sign-in.js';  // Renamed to PascalCase
import SignUp from './Sign-up.js';  // Renamed to PascalCase
import BeneficiaryStories from './home/ndegwa/mazingira/Organisation/BeneficiaryStories.js';  // Use relative path

function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Router>
        <div className="flex h-screen bg-slate-50">
          <Routes>
            <Route path="/BeneficiaryStories" element={<BeneficiaryStories />} />
            <Route path="/Donations" element={<DonationStats />} />
            <Route path="/Donors" element={<DonationsList />} />
            <Route path="/Dashboard" element={<OrganizationDashboard />} />
            <Route path="/Card" element={<OrganisationCard />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Status" element={<Status />} />
            <Route path="/Sign-in" element={<SignIn />} />
            <Route path="/Sign-up" element={<SignUp />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
