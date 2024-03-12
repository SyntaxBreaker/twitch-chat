import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Homepage from '../pages/Homepage';
import Tabs from '../components/Tabs';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';

export default function App() {
  const [channels, setChannels] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.electron.ipcRenderer.on('readChannels', (arg: any) => {
      setChannels(arg.channels);
    });
    window.electron.ipcRenderer.sendMessage('readChannels');
  }, []);

  return (
    <>
      <Tabs channels={channels} setIsModalOpen={setIsModalOpen} />
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
