import '../../styles/ContextMenu.scss';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useModalContext } from '../../context/ModalContext';
import { useNavigate } from 'react-router-dom';

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
  const { setModal } = useModalContext();
  const navigate = useNavigate();

  const removeChannel = () => {
    window.electron.ipcRenderer.sendMessage('removeChannel', channel);
    window.electron.ipcRenderer.sendMessage('readChannels');
    navigate('/');
  };

  return (
    <div className="contextMenu" ref={ref}>
      <button
        className="contextMenu__button"
        onClick={() => {
          setModal((prev) => ({
            ...prev,
            channel: channel,
            isModalOpen: true,
          }));
          setContextMenu((prev) => ({
            channel: '',
            active: false,
          }));
        }}
      >
        Edit
      </button>
      <button className="contextMenu__button" onClick={removeChannel}>
        Remove
      </button>
    </div>
  );
}

export default ContextMenu;
