import { useEffect, useRef } from 'react';
import addIcon from '../../../assets/add.svg';
import leftArrow from '../../../assets/leftArrow.svg';
import rightArrow from '../../../assets/rightArrow.svg';
import '../../styles/Tabs.scss';
import TabList from '../TabList';

const CHANNELS = [
  {
    id: '0',
    name: 'Aurora',
  },
  {
    id: '1',
    name: 'Zephyr',
  },
  {
    id: '2',
    name: 'Cassiopeia',
  },
  {
    id: '3',
    name: 'Orion',
  },
  {
    id: '4',
    name: 'Luna',
  },
  {
    id: '5',
    name: 'Nova',
  },
  {
    id: '6',
    name: 'Phoenix',
  },
  {
    id: '7',
    name: 'Galaxy',
  },
  {
    id: '8',
    name: 'Stardust',
  },
  {
    id: '9',
    name: 'Celestia',
  },
  {
    id: '10',
    name: 'Nebula',
  },
  {
    id: '11',
    name: 'Lyra',
  },
  {
    id: '12',
    name: 'Aether',
  },
  {
    id: '13',
    name: 'Solstice',
  },
  {
    id: '14',
    name: 'Aquila',
  },
  {
    id: '15',
    name: 'Vega',
  },
  {
    id: '16',
    name: 'Polaris',
  },
  {
    id: '17',
    name: 'Andromeda',
  },
  {
    id: '18',
    name: 'Sirius',
  },
  {
    "id": "19",
    "name": "Eclipse"
  },
  {
    "id": "20",
    "name": "Supernova"
  },
  {
    "id": "21",
    "name": "Aurora Borealis"
  },
  {
    "id": "22",
    "name": "Pegasus"
  },
  {
    "id": "23",
    "name": "Comet"
  },
  {
    "id": "24",
    "name": "Spectra"
  },
  {
    "id": "25",
    "name": "Andromeda"
  },
  {
    "id": "26",
    "name": "Nebula"
  },
  {
    "id": "27",
    "name": "Asteria"
  },
  {
    "id": "28",
    "name": "Stellar"
  },
  {
    "id": "29",
    "name": "Quasar"
  },
  {
    "id": "30",
    "name": "Cosmos"
  }
];

function Tabs() {
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
        <TabList channels={CHANNELS} ref={myRef} />
        <button className="tablist__button" onClick={() => scrollTabs('right')}>
          <img src={rightArrow} alt="" />
        </button>
      </div>
      <button className="tabs__button">
        <img src={addIcon} />
      </button>
    </nav>
  );
}

export default Tabs;
