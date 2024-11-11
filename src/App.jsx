import './App.css'
import Title from './components/Title/index.jsx';
import Calculator from './components/Calculator/index.jsx';

function App() {

  return (
    <div className="app-container">
      <Title></Title>
      <div className="main-container">
        <Calculator></Calculator>
      </div>
    </div>
  );
}

export default App
