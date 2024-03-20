import { useParams } from 'react-router-dom';
import MessageList from '../../components/MessageList';
import { useEffect, useState } from 'react';
import { MessageItem } from '../../types/globalTypes';

function Channel() {
  const [messages, setMessages] = useState<null | MessageItem[]>(null);

  const { channel } = useParams();

  useEffect(() => {
    window.electron.ipcRenderer.on('readMessagesFromChannel', (args) => {
      setMessages(args as MessageItem[]);
    });
    window.electron.ipcRenderer.sendMessage('setCurrentChannel', channel);
    window.electron.ipcRenderer.sendMessage('readMessagesFromChannel', channel);
  }, [channel]);

  return (
    messages && messages?.length > 0 && <MessageList messages={messages} />
  );
}

export default Channel;
