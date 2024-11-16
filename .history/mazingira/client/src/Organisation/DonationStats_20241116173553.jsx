import PropTypes from 'prop-types';
import './styles.css'; 

const DonationStats = ({ donors }) => {
  return (
    <div className="donation-stats-card">
      <h3>Recent Donors</h3>
      <ul>
        {donors.map((donor, index) => (
          <li key={index} className="donor">
            <div className="donor-info">
              <span className="donor-name">
                {donor.type === 'Anonymous' ? 'Anonymous' : donor.name}
              </span>
              <span className="donor-amount">${donor.amount}</span>
              <span className="donor-date">{donor.date}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DonationStats;
