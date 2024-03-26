import '../../styles/ContextMenu.scss';
import useOutsideClick from '../../hooks/useOutsideClick';

interface IProps {
  channel: string;
  setContextMenu: React.Dispatch<
    React.SetStateAction<{
      channel: string;
      active: boolean;
    }>
  >;
}

function ContextMenu({ channel, setContextMenu }: IProps) {
  const ref = useOutsideClick<HTMLDivElement>(() =>
    setContextMenu((prev) => ({
      ...prev,
      channel: '',
      active: false,
    })),
  );

  const removeChannel = () => {
    window.electron.ipcRenderer.sendMessage('removeChannel', channel);
    window.electron.ipcRenderer.sendMessage('readChannels');
  };

  return (
    <div className="contextMenu" ref={ref}>
      <button className="contextMenu__button">Edit</button>
      <button className="contextMenu__button" onClick={removeChannel}>
        Remove
      </button>
    </div>
  );
}

export default ContextMenu;
