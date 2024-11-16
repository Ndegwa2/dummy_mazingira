import OrganisationDashboard from "./Organisation/OrganisationDashboard";
import Cards from "./Organisation/Cards";
import DonationStats from "./Organisation/DonationStats";

function App() {
  return (
    <div>
      <OrganisationDashboard />
      <Cards /> 
       <DonationStats donors={"recentDonors"} />
    </div>
  );
}

export default App;
