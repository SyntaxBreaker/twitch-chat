import { useEffect, useState } from 'react';
import '../../styles/Modal.scss';
import useOutsideClick from '../../hooks/useOutsideClick';
import { useModalContext } from '../../context/ModalContext';

function Modal() {
  const [nickname, setNickname] = useState('');

  const { modal, setModal } = useModalContext();
  const ref = useOutsideClick<HTMLFormElement>(() =>
    setModal((prev) => ({ ...prev, channel: '', isModalOpen: false })),
  );

  const addChannel = (nickname: string) => {
    window.electron.ipcRenderer.sendMessage('addChannel', nickname.trim());
    window.electron.ipcRenderer.sendMessage('readChannels');
  };

  const updateChannel = (nickname: string) => {
    window.electron.ipcRenderer.sendMessage('updateChannel', {
      oldValue: modal.channel,
      newValue: nickname.trim(),
    });
    window.electron.ipcRenderer.sendMessage('readChannels');
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (modal.channel) {
      updateChannel(nickname);
    } else {
      addChannel(nickname);
    }

    setModal((prev) => ({ ...prev, channel: '', isModalOpen: false }));
  };

  useEffect(() => {
    if (modal.channel) {
      setNickname(modal.channel);
    }
  }, [modal]);

  return (
    <form className="modal" onSubmit={handleSubmit} ref={ref}>
      <label className="modal__label">Nickname:</label>
      <input
        name="nickname"
        onChange={(event) => setNickname(event.target.value)}
        placeholder="Enter a nickname"
        className="modal__input"
        autoFocus
        value={nickname}
      />
      <button type="submit" className="modal__button">
        {!modal.channel ? 'Add Channel' : 'Update Channel'}
      </button>
    </form>
  );
}

export default Modal;
