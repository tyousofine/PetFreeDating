import React, { useState } from 'react'

export default function AuthModal({ setShowModal, isSignUp, }) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmedPassword, setConfirmedPassword] = useState("");
    const [error, setError] = useState("");



    const handleClick = () => {
        setShowModal(false)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            if (isSignUp && (password !== confirmedPassword)) {
                setError("Passwords need to match!")
            }
            console.log("make a post request to our database")
        }
        catch (error) {
            console.log(error.message)
        }
    }

    return (
        <div className='auth-modal'>
            <div
                className="xButton-container"
                onClick={handleClick}>
                <button className='x-button'>⮾</button>
            </div>
            <h2>
                {isSignUp ? "CREATE ACCOUNT" : "LOG IN"}
            </h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy </p>
            <form action="" onSubmit={handleSubmit}>
                <input type="email"
                    id='email'
                    name="email"
                    placeholder='email'
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                />
                <input type="password"
                    id='password'
                    name="password"
                    placeholder='password'
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                />
                {isSignUp && <input type="password"
                    id='confirmedPassword'
                    name="confirmedPassword"
                    placeholder='confirmed password'
                    required={true}
                    onChange={(e) => setConfirmedPassword(e.target.value)}
                    value={confirmedPassword}
                />
                }
                <input className="secondary-button" type="submit" />
                {/* doubleCheck about above line */}
                <p>{error}</p>
                <h2>GET THE APP</h2>
            </form>
            <hr />


        </div>
    )
}
