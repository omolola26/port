import './App.css';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Mission from './Component/Mission/Mission';
import PortfolioOne from './Component/PortfolioOne';
import PortfolioTwo from './Component/PortfolioTwo';
import PortfolioThree from './Component/PortfolioThree';
import PortfolioFour from './Component/PortfolioFour';
import PortfolioFive from './Component/PortfolioFive';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Mission/>
      <PortfolioOne/>
      <PortfolioTwo/>
      <PortfolioThree/>
      <PortfolioFour/>
      <PortfolioFive/>
      <Footer/>
    </div>
  );
}

export default App;
