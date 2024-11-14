import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DonationStats from './home/ndegwa/mazingira/Organisation/DonationStats.js';
import DonationsList from './home/ndegwa/mazingira/Organisation/DonorsList.js';
import OrganizationDashboard from "../../Organisation/Organisation Dashboard.js";
import OrganisationCard from './OrganisationCard.js';
import Inventory from './OrganisationInventory.js';
import Status from './OrganisationStatus.js';
import Sign-in from './Sign-in.js';
import sign-up  from './Sign-up.js';
import BeneficiaryStories from "/home/ndegwa/mazingira/Organisation/BeneficiaryStories.js";

function App() {
  return (
    <div> {}
      <h1>Hello World</h1> {}
      <Router>
        <div className="flex h-screen bg-slate-50">
          <Routes>
            <Route path="/BeneficiaryStories" element={BeneficiaryStories} />
            <Route path="/Donations" element={DonationStats}/>
            <Route path="/Donors" element={DonationsList}/>
            <Route path="/Dashboard" element={OrganizationDashboard}/>
            <Route path="/Card" element={OrganisationCard}/>
            <Route path="/Inventory" element={OrganisationInventory}/>
            <Route path="/Status" element={OrganisationStatus.js}/>
            <Route path="/Sign-in" element={sign-in}/>
            <Route path="/Sign-up" element={sign-up}/>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
