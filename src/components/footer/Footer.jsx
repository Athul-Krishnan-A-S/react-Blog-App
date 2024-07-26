import './footer.css';
import icecream from '../../assets/icecream.png'

function Footer(){
    return (
        <div className="footer-container">
            <p>Good or bad ,we'd love to hear your thoughts. Find us on Twitter(@twitter)</p>
            <div className="footer-related-articles-container">
                <p>HERE AEE SOME RELATED ARTICLES YOU MAY FIND INTERESTING</p>
                <div className='footer-related-articles-card'>
                    <div className='footer-related-article-img-container'>
                        <img src={icecream} alt='icecream' className='footer-related-article-img'></img>
                    </div>
                    <div className='footer-related-article-contents'>
                        <p>PRODUCT - 4 MINUTE READ</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas atque iste maxime commodi sunt quas fugiat quaerat ea laudantium odit culpa eum, voluptate libero voluptatum illo, doloremque distinctio reprehenderit amet!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Footer;