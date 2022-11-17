import { Route } from 'react-router-dom';
import './App.css'
import { Routes } from 'react-router-dom';
import CountriesList from './Components/CountriesList';
import CountryDetails from './Components/CountryDetails';



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" />
        <Route path="/CountriesList" element={<CountriesList />} />
        <Route path="/CountryDetails" element={<CountryDetails />} />
      </Routes>
      <Routes>
        <Route path="/:countryId" element={<CountryDetails />} />
      </Routes>
    </div>
  );
}

export default App;


