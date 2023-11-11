import React from 'react';
import exchangeIcon from '../../assets/icons/exchange.svg';
import walletIcon from '../../assets/icons/Wallet.svg';
import notificationIcon from '../../assets/icons/Notification.svg';
import '../../assets/scss/whyUseSaviSection.scss';

const WhySaviSection = () => {
  return (
    <section className='why-savi-section'>
      <h1 className="why-use-savi">Why use Savi?</h1>
      <div className='why-savi-content'>
        <div className="whyUseSavi-feature">
          <div className='saviIcon-div'>
            <img src={exchangeIcon} className="App-logo" alt="exchangeIcon" />
          </div>
          <h3 className="whySavi-title">Contribution Analytics</h3>
          <div className='whySaviDescription-div'>
            <p className="whySavi-description">Admins gain valuable insights into group contributions and track member participation.</p>
          </div>
        </div>

        <div className="whyUseSavi-feature">
          <div className='saviIcon-div'>
            <img src={walletIcon} className="App-logo" alt="walletIcon" />
          </div>
          <h3 className="whySavi-title">Wallet Integration</h3>
          <div className='whySaviDescription-div'>
            <p className="whySavi-description">Add funds to your wallet easily using various payment methods and withdraw securely.</p>
          </div>
        </div>

        <div className="whyUseSavi-feature">
          <div className='saviIcon-div'>
            <img src={notificationIcon} className="App-logo" alt="notificationIcon" />
          </div>
          <h3 className="whySavi-title">Notifications and Reminders</h3>
          <div className='whySaviDescription-div'>
            <p className="whySavi-description">Stay informed about group activities, cashouts, and important updates.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySaviSection;
