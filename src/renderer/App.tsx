import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Homepage from '../pages/Homepage';
import Tabs from '../components/Tabs';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Channel from '../pages/Channel';

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
    <Router>
      <Tabs channels={channels} setIsModalOpen={setIsModalOpen} />
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} />}
      <main style={{ filter: isModalOpen ? 'blur(10rem)' : undefined }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path=":channel" element={<Channel />} />
        </Routes>
      </main>
    </Router>
  );
}
