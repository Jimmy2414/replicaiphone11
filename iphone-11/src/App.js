import './App.css';
import { Route, Routes } from 'react-router-dom';
import Containter from './components/container';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Containter />} />
      </Routes>
    </div>
  );
}

export default App;
