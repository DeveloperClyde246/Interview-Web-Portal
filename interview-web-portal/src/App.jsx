import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* Add other routes here */}
      </Routes>
    </Router>
  );
}

export default App;
