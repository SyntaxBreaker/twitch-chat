import { Link } from 'react-router-dom';
import '../../styles/Tab.scss';
import ChannelContextMenu from '../ChannelContextMenu';

interface TabProps {
  channel: string;
  channelContextMenu: { channel: string; active: boolean };
  setChannelContextMenu: React.Dispatch<
    React.SetStateAction<{
      channel: string;
      active: boolean;
    }>
  >;
  handleChannelContextMenu: (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    channel: string,
  ) => void;
}

function Tab({
  channel,
  channelContextMenu,
  setChannelContextMenu,
  handleChannelContextMenu,
}: TabProps) {
  return (
    <>
      <Link
        to={`/${channel}`}
        className="tab"
        onContextMenu={(e) => handleChannelContextMenu(e, channel)}
      >
        {channel}
      </Link>
      {channelContextMenu.active && channelContextMenu.channel === channel && (
        <ChannelContextMenu
          channel={channel}
          setChannelContextMenu={setChannelContextMenu}
        />
      )}
    </>
  );
}

export default Tab;
