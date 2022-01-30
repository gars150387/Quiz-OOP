import logo from './logo.svg';
import './App.css';
import {CardTemplate } from './component/Card'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <CardTemplate />
      </header>
    </div>
  );
}

export default App;
