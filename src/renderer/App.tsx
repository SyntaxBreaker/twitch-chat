import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Homepage from '../pages/Homepage';
import Tabs from '../components/Tabs';

export default function App() {
  return (
    <>
      <Tabs />
      <main>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}
