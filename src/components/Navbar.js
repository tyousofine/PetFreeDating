import redLogo from '../images/NopetsDatingRed.png';
import noDog from '../images/noDog.png';
import nopetText from '../images/nopetText.png';

function Navbar({ minimal = true, authToken, setShowModal, showModal, isSignUp, setIsSignUp }) {

    const handleClick = () => {
        setShowModal(true)
        console.log("login Clicked")
        setIsSignUp(false)
    }

    return (
        <nav>
            <div className='logo-container'>
                {!minimal ? <img className="logo" src={redLogo} alt='' /> : <h2 style={{ color: "white" }}>NO PET</h2>}

            </div>
            {!authToken &&
                <button
                    onClick={handleClick}
                    className='nav-button'
                    disabled={showModal}>Log in</button>}
        </nav >

    )
}

export default Navbar