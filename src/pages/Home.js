import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
import { useState } from "react";

function Home() {
    const [showModal, setShowModal] = useState(false)
    const [isSignUp, setIsSignUp] = useState(true)


    const authToken = false;
    const handleClick = () => {
        setShowModal(true);
        console.log("clicked!")
        setIsSignUp(true)
    }
    return (
        <>
            <div className="overlay">
                <Navbar
                    // authToken={authToken}
                    setShowModal={setShowModal}
                    showModal={showModal}
                    setIsSignUp={setIsSignUp}>

                </Navbar>
                <div className='home'>
                    <h1 className="primary-title">Swipe Right™</h1>
                    <button
                        className='primary-button'
                        onClick={handleClick}>

                        {authToken ? 'Signout' : 'Create Account'}
                    </button>

                </div>
            </div>
            {showModal && (
                <AuthModal setShowModal={setShowModal} isSignUp={isSignUp} />
            )}

        </>
    )
}

export default Home