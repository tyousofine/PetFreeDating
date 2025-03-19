import { useState } from "react"
import NavBar from '../components/Navbar'

function OnBoarding() {
    return (
        <>
            <NavBar
                minimal={false}
                authToken={true}

                setShowModal={() => { }}
                showModal={false}

            ></NavBar>
            <div></div>
        </>
    )
}

export default OnBoarding