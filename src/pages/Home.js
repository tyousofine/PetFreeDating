import Navbar from "../components/Navbar";

function Home() {
    const authToken = false;
    const handleClick = () => {
        console.log("clicked!")
    }
    return (
        <div className="overlay">
            <Navbar authToken={authToken}></Navbar>
            <div className='home'>
                <h1>Swipe Right™</h1>
                <button
                    className='primary-button'
                    onClick={handleClick}>

                    {authToken ? 'Signout' : 'Create Account'}
                </button>
            </div>
        </div>

    )
}

export default Home