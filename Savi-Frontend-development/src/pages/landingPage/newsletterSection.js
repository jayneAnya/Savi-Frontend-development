import '../../assets/scss/newsletterSection.scss';
import messageIcon from '../../assets/icons/Icon.svg';


const NewsLetterSection = () => {
    return (
        <section className="newsletter-section">
            <div className="newsletter-content">
                <div className="newsletter-title">
                    <h1 className="newsletter">Newsletter</h1>
                    <h2 className="newsletter-subheading">Be the first one to know  about discounts, offers and events</h2>
                </div>
                <div className="newsletter-button-content">
                    <img src={messageIcon} default='App-logo' alt='messageIcon'/>
                    <h1 className="email-placeholder">Enter your email</h1>
                    <div className="email-submit-button">
                        <h1 className="submit">Submit</h1>
                    </div>
                </div>
                
            </div>
        </section>
    );
};


export default NewsLetterSection;