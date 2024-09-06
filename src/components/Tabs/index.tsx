import { useRef } from 'react';
import '../../styles/Tabs.scss';
import TabList from '../TabList';
import ScrollButton from '../ScrollButton';
import AddChannelButton from '../AddChannelButton';

function Tabs({ channels }: { channels: string[] }) {
  const tabListRef = useRef<HTMLDivElement>(null);

  return (
    <nav className="tabs">
      <div className="tabs__container">
        {channels.length > 0 && (
          <ScrollButton tabListRef={tabListRef} direction={'left'} />
        )}
        <TabList channels={channels} ref={tabListRef} />
        {channels.length > 0 && (
          <ScrollButton tabListRef={tabListRef} direction={'right'} />
        )}
      </div>
      <AddChannelButton />
    </nav>
  );
}

export default Tabs;
