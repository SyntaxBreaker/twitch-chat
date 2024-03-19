import { useParams } from 'react-router-dom';
import MessageList from '../../components/MessageList';
import { useEffect, useState } from 'react';
import { IMessages } from '../../types/globalTypes';

function Channel() {
  const [messages, setMessages] = useState<null | IMessages>(null);

  const { channel } = useParams();

  useEffect(() => {
    window.electron.ipcRenderer.on('readMessagesFromChannel', (args) => {
      setMessages(args as IMessages);
    });
    window.electron.ipcRenderer.sendMessage('setCurrentChannel', channel);
    window.electron.ipcRenderer.sendMessage('readMessagesFromChannel', channel);
  }, [channel]);

  return <MessageList />;
}

export default Channel;
