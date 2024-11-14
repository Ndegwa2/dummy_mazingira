import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/layout/Sidebar";
import Organizations from "./Organizations";
import Projects from "./pages/Projects";
import Events from "./pages/Events";
import Donations from "./DonationStats";
import BeneficiaryStories from "/home/ndegwa/mazingira/Organisation/BeneficiaryStories.js";

function App() {
  return (
    <div>
        <h1>"Hello World</h1>
    </div>
     <Router>
       <div className="flex h-screen bg-slate-50">
         <Routes>
          <Route path="/BeneficiaryStories" element = {BeneficiaryStories }/>
        </Routes>
      </div>
     </Router>
  );
}

export default App;
