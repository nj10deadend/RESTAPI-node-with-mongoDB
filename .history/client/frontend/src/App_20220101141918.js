import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import BugTable from './components/BugTable';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="*" element={<Signup />} />
          <Route path="/bug-table" element={<BugTable />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
