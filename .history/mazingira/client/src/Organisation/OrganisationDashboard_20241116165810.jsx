import styles from 'App.css'
const OrganisationDashboard = ()=>{
  return(
    <nav className="Navbar">
      <div className= "Logo">
        <img src ="https://img.freepik.com/free-vector/love-our-planet_1025-594.jpg?t=st=1731764368~exp=1731767968~hmac=bd53b59c4ac9ee3969af57c55becfef56a356c27b7bebae2dc025dee53941e3f&w=900"></img>
        </div>
    <ul className= "nav-links">
      <li><a href= " /dashboard">Dashboard</a></li>
      <li><a href= " /donors">Donors</a></li>
      <li><a href= " /beneficiaries">Beneficiaries</a></li>
      <li><a href= " /storie">Stories</a></li>
      <li><a href= " /donations">Donations</a></li>
      <li><a href= " /logout" className="logout-btn"></a></li>
    </ul>
    </nav>
      
    
  );
};

export default OrganisationDashboard;