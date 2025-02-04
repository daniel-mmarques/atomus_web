import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SlidingForm from "./SlidingForm";
import Home from './Home';
import Dashboard from './Dashboard';

export function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sliding-form" element={<SlidingForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}
