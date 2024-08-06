import { useRef } from 'react';
import addIcon from '../../../assets/addIcon.svg';
import leftArrowIcon from '../../../assets/leftArrowIcon.svg';
import rightArrowIcon from '../../../assets/rightArrowIcon.svg';
import '../../styles/Tabs.scss';
import TabList from '../TabList';
import { useModalContext } from '../../context/ModalContext';

function Tabs({ channels }: { channels: string[] }) {
  const { setModal } = useModalContext();
  const myRef = useRef<HTMLDivElement>(null);

  const scrollTabs = (direction: 'left' | 'right') => {
    if (myRef.current) {
      if (direction === 'left') {
        myRef.current.scrollBy(-50, 0);
      } else {
        myRef.current.scrollBy(50, 0);
      }
    } else {
      return;
    }
  };

  return (
    <nav className="tabs">
      <div className="tabs__container">
        {channels.length > 0 && (
          <button
            className="tablist__button"
            onClick={() => scrollTabs('left')}
          >
            <img src={leftArrowIcon} alt="" />
          </button>
        )}
        <TabList channels={channels} ref={myRef} />
        {channels.length > 0 && (
          <button
            className="tablist__button"
            onClick={() => scrollTabs('right')}
          >
            <img src={rightArrowIcon} alt="" />
          </button>
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
