import pikaPaymentsLogo from './PikaPaymentsLogo.PNG';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={pikaPaymentsLogo} className="App-logo" />
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p style={{color: 'black'}}>
          Save mo money
        </p>
      </header>
    </div>
  );
}

export default App; 
