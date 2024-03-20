import Badges from '../Badges';
import { MessageItem, UserType } from '../../types/globalTypes';
import '../../styles/Message.scss';

function Message({ message }: { message: MessageItem }) {
  const badges = Object.entries({
    mod: message.mod,
    sub: message.sub,
    vip: message.vip,
  })
    .filter(([key, value]) => value === true)
    .map(([key, value]) => key) as UserType[];

  return (
    <div className="message">
      <Badges badges={badges} />
      <div className="message__content">
        <p className="message__nickname">{message.nickname}:</p>{' '}
        <p className="message__body">{message.message}</p>
      </div>
    </div>
  );
}

export default Message;
