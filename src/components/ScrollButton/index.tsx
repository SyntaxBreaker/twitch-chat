import leftArrowIcon from '../../../assets/leftArrowIcon.svg';
import rightArrowIcon from '../../../assets/rightArrowIcon.svg';

interface ScrollButtonProps {
  tabListRef: React.RefObject<HTMLDivElement>;
  direction: 'left' | 'right';
}

function ScrollButton({ tabListRef, direction }: ScrollButtonProps) {
  const scrollTabs = (direction: 'left' | 'right') => {
    if (tabListRef.current) {
      if (direction === 'left') {
        tabListRef.current.scrollBy(-50, 0);
      } else {
        tabListRef.current.scrollBy(50, 0);
      }
    } else {
      return;
    }
  };

  return (
    <button
      className={`tab-list__button tab-list__button--${direction}`}
      onClick={() => scrollTabs(direction)}
    >
      <img
        src={`${direction === 'left' ? leftArrowIcon : rightArrowIcon}`}
        alt={`${direction} arrow`}
      />
    </button>
  );
}

export default ScrollButton;
