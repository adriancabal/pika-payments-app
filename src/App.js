import pikaPaymentsLogo from './PikaPaymentsLogo.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pikaPaymentsLogo} className="App-logo" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3 style={{ color: 'black' }}>
          We're currently building our site!...
        </h3>
        <div className="text-container">
        
          <div>
            {"Please send us your merchant statement and company name to "}
            <span style={{fontWeight: 'bold'}}>
            <a href={"mailto:contact@pikapayments.com"}>{"contact@pikapayments.com"}</a>
            {/* {"contact@pikapayments.com"} */}
            </span>
            
            </div>
            <div>
            to get a free cost savings analysis on merchant payment processing.
          </div>
          
          <div>
            We'll get back to you within 48-72 hours.
          </div>
          <p>
            Also feel free to contact us for any questions.
          </p>
          <h4 style={{ color: 'black' }}>
            Thank you!
          </h4>
          
        </div>
      </header>
    </div>
  );
}

export default App; 
