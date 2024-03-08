import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Homepage from '../pages/Homepage';

export default function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </Router>
    </main>
  );
}
