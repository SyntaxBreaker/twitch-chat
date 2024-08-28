import { MessageItem } from '../../types/globalTypes';
import Message from '../Message';
import '../../styles/MessageList.scss';
import { useEffect, useRef } from 'react';

function MessageList({ messages }: { messages: MessageItem[] }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <section className="messageList">
      {messages.map((message) => (
        <Message message={message} key={message.id} />
      ))}
      <div ref={ref}></div>
    </section>
  );
}

export default MessageList;
