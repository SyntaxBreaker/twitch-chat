import { useModalContext } from '../../context/ModalContext';
import addIcon from '../../../assets/addIcon.svg';

function AddChannelButton() {
  const { setModal } = useModalContext();

  return (
    <button
      className="tabs__button"
      onClick={() =>
        setModal((prev) => ({ ...prev, channel: '', isModalOpen: true }))
      }
    >
      <img src={addIcon} />
    </button>
  );
}

export default AddChannelButton;
