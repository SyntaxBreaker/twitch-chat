import { BadgeType } from '../../types/globalTypes';
import Badge from '../Badge';
import '../../styles/Badges.scss';

function Badges({ badges }: { badges: BadgeType[] }) {
  return (
    <div className="badges">
      {badges.map((badge) => (
        <Badge badge={badge} />
      ))}
    </div>
  );
}

export default Badges;
