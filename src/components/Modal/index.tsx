import { useEffect, useState } from 'react';
import '../../styles/Modal.scss';
import useOutsideClick from '../../hooks/useOutsideClick';

interface ModalProps {
  channel?: string;
  addChannel?: (nickname: string) => void;
  updateChannel?: (nickname: string) => void;
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Modal({
  channel,
  addChannel,
  updateChannel,
  setIsModalOpen,
}: ModalProps) {
  const [nickname, setNickname] = useState('');

  const ref = useOutsideClick<HTMLFormElement>(() => setIsModalOpen(false));

  useEffect(() => {
    if (channel) {
      setNickname(channel);
    }
  }, [channel]);

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (addChannel) {
      addChannel(nickname);
    }

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
        value={nickname}
      />
      <button type="submit" className="modal__button">
        {!channel ? 'Add Channel' : 'Update Channel'}
      </button>
    </form>
  );
}

export default Modal;
