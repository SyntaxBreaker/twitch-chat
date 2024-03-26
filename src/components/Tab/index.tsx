import { Link } from 'react-router-dom';
import '../../styles/Tab.scss';
import ContextMenu from '../ContextMenu';

interface TabProps {
  channel: string;
  contextMenu: { channel: string; active: boolean };
  setContextMenu: React.Dispatch<
    React.SetStateAction<{
      channel: string;
      active: boolean;
    }>
  >;
  handleContextMenu: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    channel: string,
  ) => void;
}

function Tab({
  channel,
  contextMenu,
  setContextMenu,
  handleContextMenu,
}: TabProps) {
  return (
    <>
      <Link
        to={`/${channel}`}
        className="tab"
        onContextMenu={(e) => handleContextMenu(e, channel)}
      >
        {channel}
      </Link>
      {contextMenu.active && contextMenu.channel === channel && (
        <ContextMenu channel={channel} setContextMenu={setContextMenu} />
      )}
    </>
  );
}

export default Tab;
