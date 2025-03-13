import React from 'react'

function Home() {
    const authToken = true;
    const handleClick = () => {
        console.log("clicked!")
    }
    return (
        <div className='home'>
            <h1>Swipe Right™</h1>
            <button
                className='primary-button'
                onClick={handleClick}>

                {authToken ? 'Signout' : 'Create Account'}
            </button>


        </div>
    )
}

export default Home