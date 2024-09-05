import { useRef } from 'react';
import addIcon from '../../../assets/addIcon.svg';
import '../../styles/Tabs.scss';
import TabList from '../TabList';
import { useModalContext } from '../../context/ModalContext';
import ScrollButton from '../ScrollButton';

function Tabs({ channels }: { channels: string[] }) {
  const { setModal } = useModalContext();
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
      <button
        className="tabs__button"
        onClick={() =>
          setModal((prev) => ({ ...prev, channel: '', isModalOpen: true }))
        }
      >
        <img src={addIcon} />
      </button>
    </nav>
  );
}

export default Tabs;
