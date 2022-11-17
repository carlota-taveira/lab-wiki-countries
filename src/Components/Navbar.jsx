import { Link } from 'react-router-dom';



function Navbar() {
    return (
      <nav className="Navbar">
        <ul>
        <p>Lab Countries</p>
          <Link to="/CountriesList">Countries List</Link>
          <Link to="/CountryDetails">Country Details</Link>
        </ul>
      </nav>
    );
  }
  
  export default Navbar;