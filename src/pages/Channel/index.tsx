import { useParams } from 'react-router-dom';
import MessageList from '../../components/MessageList';
import { useEffect, useState } from 'react';
import { IMessage } from '../../types/globalTypes';

function Channel() {
  const [messages, setMessages] = useState<null | IMessage[]>(null);

  const { channel } = useParams();

  useEffect(() => {
    window.electron.ipcRenderer.on('readMessagesFromChannel', (args) => {
      setMessages(args as IMessage[]);
    });
    window.electron.ipcRenderer.sendMessage('setCurrentChannel', channel);
    window.electron.ipcRenderer.sendMessage('readMessagesFromChannel', channel);
  }, [channel]);

  return <MessageList />;
}

export default Channel;
