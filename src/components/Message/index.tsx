import Badges from '../Badges';
import { MessageItem, BadgeType } from '../../types/globalTypes';
import '../../styles/Message.scss';

function Message({ message }: { message: MessageItem }) {
  const badges = Object.entries({
    mod: message.mod,
    sub: message.sub,
    vip: message.vip,
  })
    .filter(([, value]) => !!value === true)
    .map(([key]) => key) as BadgeType[];

  return (
    <div className="message">
      <Badges badges={badges} />
      <div className="message__content">
        <p className="message__nickname" style={{ color: message.color }}>
          {message.nickname}:{' '}
          <span
            className="message__body"
            dangerouslySetInnerHTML={{ __html: message.message }}
          />
        </p>{' '}
      </div>
    </div>
  );
}

export default Message;
