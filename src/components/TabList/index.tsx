import Tab from '../Tab';
import '../../styles/TabList.scss';
import React, { useState } from 'react';

interface Props {
  channels: string[];
}

const TabList = React.forwardRef<HTMLDivElement, Props>(
  function TabList(props, ref) {
    const [channelContextMenu, setChannelContextMenu] = useState({
      channel: '',
      active: false,
    });

    const { channels } = props;

    const handleChannelContextMenu = (
      e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
      channel: string,
    ) => {
      e.preventDefault();
      setChannelContextMenu((prev) => ({
        ...prev,
        channel: channel,
        active: true,
      }));
    };

    return (
      <div
        className={channels.length > 0 ? 'tablist' : 'tablist--empty'}
        ref={ref}
        onClick={(e) => e.preventDefault()}
      >
        {props.channels?.map((channel) => (
          <Tab
            channel={channel.replace('#', '')}
            channelContextMenu={channelContextMenu}
            setChannelContextMenu={setChannelContextMenu}
            handleChannelContextMenu={handleChannelContextMenu}
            key={channel}
          />
        ))}
      </div>
    );
  },
);

export default TabList;
