import Navbar from "../components/Navbar";
import AuthModal from "../components/AuthModal";
import { useState } from "react";

function Home() {
    const [showModal, setShowModal] = useState(false)


    const authToken = false;
    const handleClick = () => {
        setShowModal(true);
        console.log("clicked!")
    }
    return (
        <div className="overlay">
            <Navbar authToken={authToken} setShowModal={setShowModal} showModal={showModal}></Navbar>
            <div className='home'>
                <h1>Swipe Right™</h1>
                <button
                    className='primary-button'
                    onClick={handleClick}>

                    {authToken ? 'Signout' : 'Create Account'}
                </button>

                {showModal && (
                    <AuthModal setShowModal={setShowModal} />
                )}
            </div>
        </div>

    )
}

export default Home