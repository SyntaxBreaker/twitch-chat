import { useRef } from 'react';
import addIcon from '../../../assets/add.svg';
import leftArrow from '../../../assets/leftArrow.svg';
import rightArrow from '../../../assets/rightArrow.svg';
import '../../styles/Tabs.scss';
import TabList from '../TabList';

function Tabs({
  channels,
  setIsModalOpen,
}: {
  channels: string[];
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
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
        <button className="tablist__button" onClick={() => scrollTabs('left')}>
          <img src={leftArrow} alt="" />
        </button>
        <TabList channels={channels} ref={myRef} />
        <button className="tablist__button" onClick={() => scrollTabs('right')}>
          <img src={rightArrow} alt="" />
        </button>
      </div>
      <button className="tabs__button" onClick={() => setIsModalOpen(true)}>
        <img src={addIcon} />
      </button>
    </nav>
  );
}

export default Tabs;
