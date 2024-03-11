import Tab from '../Tab';
import '../../styles/TabList.scss';
import React from 'react';

interface IProps {
  channels: IChannels[];
}

interface IChannels {
  id: string;
  name: string;
}

const TabList = React.forwardRef<HTMLDivElement, IProps>(
  function TabList(props, ref) {
    const { channels } = props;

    return (
      <div className="tablist" ref={ref}>
        {channels.map((channel) => (
          <Tab channel={channel.name} key={channel.id} />
        ))}
      </div>
    );
  },
);

export default TabList;
