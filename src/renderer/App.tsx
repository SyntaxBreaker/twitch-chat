import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Homepage from '../pages/Homepage';
import Tabs from '../components/Tabs';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Channel from '../pages/Channel';
import tmi from 'tmi.js';

export default function App() {
  const [channels, setChannels] = useState<string[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    window.electron.ipcRenderer.on('readChannels', (arg: any) => {
      setChannels(arg.channels);
    });
    window.electron.ipcRenderer.sendMessage('readChannels');
  }, []);

  useEffect(() => {
    const client = new tmi.Client({
      channels: channels,
    });

    client.connect();

    client.on('message', (channel, tags, message, self) => {
      const data = {
        channel: channel.replace('#', ''),
        nickname: tags['display-name'],
        mod: tags.mod,
        sub: tags.subscriber,
        vip: tags.vip ?? false,
        message: message,
      };
      window.electron.ipcRenderer.sendMessage('addMessage', data);
    });
  }, [channels]);

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
