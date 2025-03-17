import redLogo from '../images/NopetsDatingRed.png';
import noDog from '../images/noDog.png';
import nopetText from '../images/nopetText.png';

function Navbar({ minimal = false, authToken }) {

    return (
        <nav>
            <div className='logo-container'>
                <img className="logo" src={minimal ? redLogo : nopetText} alt="" />
            </div>
            {!authToken && <button className='nav-button'>Log in</button>}
        </nav>

    )
}

export default Navbar