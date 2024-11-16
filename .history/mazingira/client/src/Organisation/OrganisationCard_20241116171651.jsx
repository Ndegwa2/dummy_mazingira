
import './styles.css';

const Cards = () => {
  return (
    <div className="cards-container">
      {/* Card 1: Donations Total */}
      <div className="card">
        <div className="card-logo">💰</div> {/* Optional logo */}
        <div className="card-content">
          <h3>Total Donations</h3>
          <p>$10,000</p>
        </div>
      </div>

      {/* Card 2: Active Donors */}
      <div className="card">
        <div className="card-logo">👥</div> {/* Optional logo */}
        <div className="card-content">
          <h3>Active Donors</h3>
          <p>350</p>
        </div>
      </div>

      {/* Card 3: Beneficiaries Stats */}
      <div className="card">
        <div className="card-logo">📊</div> {/* Optional logo */}
        <div className="card-content">
          <h3>Beneficiaries</h3>
          <p>1200</p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
