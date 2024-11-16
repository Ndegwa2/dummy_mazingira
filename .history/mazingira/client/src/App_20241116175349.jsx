
import OrganisationDashboard from "./Organisation/OrganisationDashboard";
import Cards from "./Organisation/Cards";
import DonationStats from "./Organisation/DonationStats";

function App() {
  // Define the recentDonors array
  const recentDonors = [
    { name: 'John Doe', amount: 100, date: '2024-11-15', type: 'Known' },
    { name: '', amount: 50, date: '2024-11-14', type: 'Anonymous' },
    { name: 'Jane Smith', amount: 75, date: '2024-11-13', type: 'Known' },
  ];

  return (
    <div>
      <OrganisationDashboard />
      <Cards />
      {/* Pass the recentDonors array as a prop to DonationStats */}
      <DonationStats donors={recentDonors} />
    </div>
  );
}

export default App;

