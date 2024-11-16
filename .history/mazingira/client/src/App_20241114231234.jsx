
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// Import components with corrected relative paths
import Donations from "./Organisation/DonationStats.js";
import Dashboard from "./Organisation/OrganisationDashboard.js";
import Card from "./Organisation/OrganisationCard.js";
import Inventory from "./Organisation/OrganisationInventory.js";
import Status from "./Organisation/OrganisationStatus.js";
import SignIn from "./Organisation/sign-in.js";  
import SignUp from "./Organisation/sign-up.js";  
import BeneficiaryStories from "./Organisation/BeneficiaryStories.js";

function App() {
  return (
    <Router>
      <Routes>
        {/* Define routes */}
        <Route path="/BeneficiaryStories" element={<BeneficiaryStories />} />
        <Route path="/Donations" element={<Donations />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Card" element={<Card />} />
        <Route path="/Inventory" element={<Inventory />} />
        <Route path="/Status" element={<Status />} />
        <Route path="/Sign-in" element={<SignIn />} />
        <Route path="/Sign-up" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;
