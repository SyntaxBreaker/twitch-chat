import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Homepage from '../pages/Homepage';
import Tabs from '../components/Tabs';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Tabs setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <main style={{ filter: isModalOpen ? 'blur(10rem)' : undefined }}>
        <Router>
          <Routes>
            <Route path="/" element={<Homepage />} />
          </Routes>
        </Router>
      </main>
    </>
  );
}
