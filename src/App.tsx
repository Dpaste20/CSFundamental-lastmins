// src/App.tsx
import { Routes, Route } from 'react-router-dom';


import Home from './pages/Home';
import OS from './pages/OS';
import DBMS from './pages/DBMS';
import CN from './pages/CN';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/os" element={<OS />} />
        <Route path="/dbms" element={<DBMS />} />
        <Route path="/cn" element={<CN />} />
      </Routes>
    </div>
  );
}

export default App;