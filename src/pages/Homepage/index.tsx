import '../../styles/Homepage.scss';
import chatImage from '../../../assets/chat.svg';

function Homepage() {
  return (
    <div className="homepage">
      <img src={chatImage} alt="" className="homepage__img" />
      <h1 className="homepage__heading">You haven&apos;t selected any channel yet.</h1>
    </div>
  );
}

export default Homepage;
