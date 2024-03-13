import { useParams } from 'react-router-dom';
import MessageList from '../../components/MessageList';

function Channel() {
  const { channel } = useParams();

  return <MessageList />;
}

export default Channel;
