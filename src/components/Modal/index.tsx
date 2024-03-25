import { useState } from 'react';
import '../../styles/Modal.scss';
import useOutsideClick from '../../hooks/useOutsideClick';

function Modal({
  setIsModalOpen,
}: {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [nickname, setNickname] = useState('');

  const ref = useOutsideClick<HTMLFormElement>(() => setIsModalOpen(false));

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    window.electron.ipcRenderer.sendMessage('addChannel', nickname.trim());
    window.electron.ipcRenderer.sendMessage('readChannels');
    setIsModalOpen(false);
  };

  return (
    <form className="modal" onSubmit={handleSubmit} ref={ref}>
      <label className="modal__label">Nickname:</label>
      <input
        name="nickname"
        onChange={(event) => setNickname(event.target.value)}
        placeholder="Enter a nickname"
        className="modal__input"
        autoFocus
      />
      <button type="submit" className="modal__button">
        Add Channel
      </button>
    </form>
  );
}

export default Modal;
