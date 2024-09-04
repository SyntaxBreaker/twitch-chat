import modIcon from '../../../assets/modIcon.svg';
import subIcon from '../../../assets/subIcon.svg';
import vipIcon from '../../../assets/vipIcon.svg';
import { BadgeType } from '../../types/globalTypes';
import '../../styles/Badge.scss';

const badgeIcons = {
  mod: modIcon,
  vip: vipIcon,
  sub: subIcon,
};

function Badge({ badge }: { badge: BadgeType }) {
  return (
    <img src={badgeIcons[badge]} className="badge" alt={`${badge} badge`} />
  );
}

export default Badge;
