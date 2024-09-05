import '../../styles/ContextMenu.scss';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useModalContext } from '../../context/ModalContext';
import { useNavigate } from 'react-router-dom';

interface IProps {
  channel: string;
  setChannelContextMenu: React.Dispatch<
    React.SetStateAction<{
      channel: string;
      active: boolean;
    }>
  >;
}

function ChannelContextMenu({ channel, setChannelContextMenu }: IProps) {
  const ref = useOutsideClick<HTMLDivElement>(() =>
    setChannelContextMenu((prev) => ({
      ...prev,
      channel: '',
      active: false,
    })),
  );
  const { setModal } = useModalContext();
  const navigate = useNavigate();

  const removeChannel = () => {
    window.electron.ipcRenderer.sendMessage('removeChannel', channel);
    window.electron.ipcRenderer.sendMessage('readChannels');
    navigate('/');
  };

  return (
    <div className="context-menu" ref={ref}>
      <button
        className="context-menu__button"
        onClick={() => {
          setModal((prev) => ({
            ...prev,
            channel: channel,
            isModalOpen: true,
          }));
          setChannelContextMenu((prev) => ({
            channel: '',
            active: false,
          }));
        }}
      >
        Edit
      </button>
      <button className="context-menu__button" onClick={removeChannel}>
        Remove
      </button>
    </div>
  );
}

export default ChannelContextMenu;
