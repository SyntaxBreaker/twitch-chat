import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import '../styles/App.scss';
import Homepage from '../pages/Homepage';
import Tabs from '../components/Tabs';
import { useEffect, useState } from 'react';
import Modal from '../components/Modal';
import Channel from '../pages/Channel';
import tmi from 'tmi.js';
import { useModalContext } from '../context/ModalContext';

export default function App() {
  const [channels, setChannels] = useState<string[]>([]);

  const { modal } = useModalContext();

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
        ID: tags.id,
        channel: channel.replace('#', ''),
        nickname: tags['display-name'],
        mod: tags.mod,
        sub: tags.subscriber,
        vip: tags.vip ?? false,
        message: message,
      };
      window.electron.ipcRenderer.on('addMessage', (args: any) => {
        window.electron.ipcRenderer.sendMessage(
          'readMessagesFromChannel',
          args,
        );
      });
      window.electron.ipcRenderer.sendMessage('addMessage', data);
    });
  }, [channels]);

  return (
    <Router>
      <Tabs channels={channels} />
      {modal.isModalOpen && <Modal />}
      <main style={{ filter: modal.isModalOpen ? 'blur(10rem)' : undefined }}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path=":channel" element={<Channel />} />
        </Routes>
      </main>
    </Router>
  );
}
