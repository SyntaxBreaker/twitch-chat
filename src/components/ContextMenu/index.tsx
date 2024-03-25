import '../../styles/ContextMenu.scss';
import useOutsideClick from '../../hooks/useOutsideClick';

interface IProps {
  setContextMenu: React.Dispatch<
    React.SetStateAction<{
      channel: string;
      active: boolean;
    }>
  >;
}

function ContextMenu({ setContextMenu }: IProps) {
  const ref = useOutsideClick<HTMLDivElement>(() =>
    setContextMenu((prev) => ({
      ...prev,
      channel: '',
      active: false,
    })),
  );

  return (
    <div className="contextMenu" ref={ref}>
      <button className="contextMenu__button">Edit</button>
      <button className="contextMenu__button">Remove</button>
    </div>
  );
}

export default ContextMenu;
