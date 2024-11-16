// src/pages/DonationStats.js
export default function DonationStats() {
    const stats = {
      totalDonations: 500,
      largestDonation: 1000,
      recentDonors: ["Alice", "Bob", "Charlie"],
    };
  
    return (
      <div>
        <h1>Donation Statistics</h1>
        <p>Total Donations: {stats.totalDonations}</p>
        <p>Largest Donation: ${stats.largestDonation}</p>
        <h2>Recent Donors:</h2>
        <ul>
          {stats.recentDonors.map((donor, index) => (
            <li key={index}>{donor}</li>
          ))}
        </ul>
      </div>
    );
  }
  