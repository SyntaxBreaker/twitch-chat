import { Link } from 'react-router-dom';
import '../../styles/Tab.scss';
import ContextMenu from '../ContextMenu';

interface TabProps {
  channel: string;
  contextMenu: { channel: string; active: boolean };
  handleContextMenu: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    channel: string,
  ) => void;
}

function Tab({ channel, contextMenu, handleContextMenu }: TabProps) {
  return (
    <>
      <Link
        to={`/${channel}`}
        className="tab"
        onContextMenu={(e) => handleContextMenu(e, channel)}
      >
        {channel}
      </Link>
      {contextMenu.active && contextMenu.channel === channel && <ContextMenu />}
    </>
  );
}

export default Tab;
