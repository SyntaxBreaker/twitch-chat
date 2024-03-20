import { IMessage } from '../../types/globalTypes';
import Message from '../Message';
import '../../styles/MessageList.scss';

function MessageList({ messages }: { messages: IMessage[] }) {
  return (
    <section className="messageList">
      {messages.map((message) => (
        <Message message={message} />
      ))}
    </section>
  );
}

export default MessageList;
