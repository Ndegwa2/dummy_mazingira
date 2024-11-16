
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AdminDashboard from "./admin/AdminDashboard";
import OrganizationDetails from "./admin/OrganizationDetails";
import DonationStats from './home/ndegwa/mazingira/Organisation/DonationStats.js';
import DonationsList from './home/ndegwa/mazingira/Organisation/DonorsList.js';
import OrganizationDashboard from "../../Organisation/Organisation Dashboard.js";
import OrganisationCard from './OrganisationCard.js';
import Inventory from './OrganisationInventory.js';
import Status from './OrganisationStatus.js';
import SignIn from './Sign-in.js';  // Renamed to PascalCase
import SignUp from './Sign-up.js';  // Renamed to PascalCase
import BeneficiaryStories from './home/ndegwa/mazingira/Organisation/BeneficiaryStories.js';  // Use relative path

// import Home from "./Home";

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/organization" element={<OrganizationDetails />} />
        <Route path="/BeneficiaryStories.js" element={<BeneficiaryStories.js />} />
            <Route path="/Donations" element={<DonationStats />} />
            <Route path="/Donors" element={<DonationsList />} />
            <Route path="/Dashboard" element={<OrganizationDashboard />} />
            <Route path="/Card" element={<OrganisationCard />} />
            <Route path="/Inventory" element={<Inventory />} />
            <Route path="/Status" element={<Status />} />
            <Route path="/Sign-in" element={<SignIn />} />
            <Route path="/Sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
