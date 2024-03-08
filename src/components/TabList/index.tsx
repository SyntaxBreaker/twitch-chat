import Tab from '../Tab';
import "../../styles/TabList.scss";

interface IProps {
  channels: IChannels[];
}

interface IChannels {
  id: string;
  name: string;
}

function TabList({ channels }: IProps) {
  return (
    <div className="tablist">
      {channels.map((channel) => (
        <Tab channel={channel.name} key={channel.id} />
      ))}
    </div>
  );
}

export default TabList;
