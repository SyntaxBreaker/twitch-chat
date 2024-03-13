import { Link } from 'react-router-dom';
import '../../styles/Tab.scss';

function Tab({ channel }: { channel: string }) {
  return (
    <Link to={`/${channel}`} className="tab">
      {channel}
    </Link>
  );
}

export default Tab;
