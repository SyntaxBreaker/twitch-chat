import { useParams } from 'react-router-dom';
import MessageList from '../../components/MessageList';
import { useEffect, useState } from 'react';
import { MessageItem } from '../../types/globalTypes';
import chatImage from '../../../assets/beginChat.svg';
import '../../styles/ChatBox.scss';

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

  return messages && messages?.length > 0 ? (
    <MessageList messages={messages} />
  ) : (
    <div className="chat-box">
      <img src={chatImage} alt="" className="chat-box__img" />
      <h1 className="chat-box__heading">
        There are no messages on {channel}&apos;s channel.
      </h1>
    </div>
  );
}

export default Channel;
