import { UserType } from '../../types/globalTypes';
import Badge from '../Badge';
import '../../styles/Badges.scss';

function Badges({ badges }: { badges: UserType[] }) {
  return (
    <div className="badges">
      {badges.map((badge) => (
        <Badge badge={badge} />
      ))}
    </div>
  );
}

export default Badges;
