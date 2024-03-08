import addIcon from '../../../assets/add.svg';
import '../../styles/Tabs.scss';
import TabList from '../TabList';

const CHANNELS = [
  {
    id: '0',
    name: 'Test',
  },
  {
    id: '1',
    name: 'Test2',
  },
  {
    id: '2',
    name: 'Test3',
  },
  {
    id: '3',
    name: 'Test4',
  },
  {
    id: '4',
    name: 'Someone',
  },
];

function Tabs() {
  return (
    <nav className="tabs">
      <TabList channels={CHANNELS} />
      <button className="tabs__button">
        <img src={addIcon} />
      </button>
    </nav>
  );
}

export default Tabs;
