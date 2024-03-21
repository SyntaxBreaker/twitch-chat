import { MessageItem } from '../../types/globalTypes';
import Message from '../Message';
import '../../styles/MessageList.scss';

function MessageList({ messages }: { messages: MessageItem[] }) {
  return (
    <section className="messageList">
      {messages.map((message) => (
        <Message message={message} key={message.ID} />
      ))}
    </section>
  );
}

export default MessageList;
