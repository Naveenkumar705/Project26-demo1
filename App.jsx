import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated import for v6
import Login from './components/Login';
import Signup from './components/Signup';
import BuyerPage from './components/BuyerPage';
import SellerPage from './components/SellerPage';
import AgentPage from './components/AgentPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/buyer" element={<BuyerPage />} />
        <Route path="/seller" element={<SellerPage />} />
        <Route path="/agent" element={<AgentPage />} />
        <Route path="/" element={<Login />} /> {/* Default route */}
      </Routes>
    </Router>
  );
}

export default App;
