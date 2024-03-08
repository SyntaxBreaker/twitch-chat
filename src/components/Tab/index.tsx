import "../../styles/Tab.scss";

function Tab({ channel }: { channel: string }) {
  return <button className="tab">{channel}</button>
}

export default Tab;
