import '../../styles/Homepage.scss';
import chatIcon from '../../../assets/chatIcon.svg';

function Homepage() {
  return (
    <div className="homepage">
      <img src={chatIcon} alt="" className="homepage__img" />
      <div className="homepage__container">
        <h1 className="homepage__heading">Choose a channel to begin</h1>
        <p className="homepage__text">
          Select a channel to get started. Once you've made your choice, you'll be able to see the chat.
        </p>
      </div>
    </div>
  );
}

export default Homepage;
