import modIcon from '../../../assets/modIcon.svg';
import subIcon from '../../../assets/subIcon.svg';
import vipIcon from '../../../assets/vipIcon.svg';
import { BadgeType } from '../../types/globalTypes';
import '../../styles/Badge.scss';

function Badge({ badge }: { badge: BadgeType }) {
  return (
    <img
      src={
        badge === 'mod'
          ? modIcon
          : badge === 'vip'
          ? vipIcon
          : badge === 'sub'
          ? subIcon
          : ''
      }
      className="badge"
    />
  );
}

export default Badge;
