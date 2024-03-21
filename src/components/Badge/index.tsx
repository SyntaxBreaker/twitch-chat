import modImage from '../../../assets/mod.svg';
import subImage from '../../../assets/sub.svg';
import vipImage from '../../../assets/vip.svg';
import { BadgeType } from '../../types/globalTypes';
import '../../styles/Badge.scss';

function Badge({ badge }: { badge: BadgeType }) {
  return (
    <img
      src={
        badge === 'mod'
          ? modImage
          : badge === 'vip'
          ? vipImage
          : badge === 'sub'
          ? subImage
          : ''
      }
      className="badge"
    />
  );
}

export default Badge;
