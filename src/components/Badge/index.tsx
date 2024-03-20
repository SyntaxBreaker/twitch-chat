import modImage from '../../../assets/mod.svg';
import subImage from '../../../assets/sub.svg';
import vipImage from '../../../assets/vip.svg';
import { UserType } from '../../types/globalTypes';
import '../../styles/Badge.scss';

function Badge({ badge }: { badge: UserType }) {
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
