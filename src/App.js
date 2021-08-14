import pikaPaymentsLogo from './PikaPaymentsLogo.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pikaPaymentsLogo} className="App-logo" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3 style={{ color: 'black' }}>
          We're currently building the site!...
        </h3>
        <div className="text-container">
          <div>
            {"Please send us a merchant statement and your company name to "}
            <span style={{fontWeight: 'bold'}}>
            <a href={"mailto:contact@pikapayments.com"}>{"contact@pikapayments.com"}</a>
            {/* {"contact@pikapayments.com"} */}
            </span>
            
            </div>
          <div>
            to get a savings estimate on payment processing.
          </div>
          
        </div>
        <h4 style={{ color: 'black' }}>
          Thank you!
        </h4>
      </header>
    </div>
  );
}

export default App; 
