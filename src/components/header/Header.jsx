import './header.css';
import Button from '../Button/Button';


function Header(props) {
    return (
        <div>
            <div className="header-box">
                <p className="header-category">{props.category}</p>
            </div>
            <div className="header-box">
                <p className="header-title">{props.title}</p>
                {props.title === 'Blogs' && <Button value="Add New Blogg" onClick = {props.openModal} />}
            </div>
        </div>
    )
}
export default Header;