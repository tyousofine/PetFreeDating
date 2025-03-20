import { useState } from "react"
import NavBar from '../components/Navbar'

function OnBoarding() {

    const handleSubmit = () => {
        console.log("sign up form submitted")
    }

    const handleChange = (e) => {
        e.preventDefault()


    }


    return (
        <>
            <NavBar
                minimal={false}
                authToken={true}

                setShowModal={() => { }}
                showModal={false}

            ></NavBar>
            <div className="onboarding">
                <h2>CREATE ACCOUNT</h2>
                <form action="" onSubmit={handleSubmit}>
                    <section>

                        {/* name, dob section */}
                        <label htmlFor="first-name">First Name</label>
                        <input type="text"
                            id='first-name'
                            name='first-name'
                            placeholder="First Name"
                            required={true}
                            value={""}
                            onChange={handleChange} />

                        <label htmlFor="">Birthday</label>
                        <div className="multiple-input-container">
                            <input type="number"
                                id='dob-day'
                                name='dob-day'
                                placeholder="DD"
                                required={true}
                                value={""}
                                onChange={handleChange} />

                            <input type="number"
                                id='dob-month'
                                name='dob-month'
                                placeholder="MM"
                                required={true}
                                value={""}
                                onChange={handleChange} />

                            <input type="number"
                                id='dob-year'
                                name='dob-year'
                                placeholder="YYYY"
                                required={true}
                                value={""}
                                onChange={handleChange} />
                        </div>

                        {/* select gender section */}
                        <label htmlFor="">Gender</label>
                        <div className="multiple-input-container">
                            <input type="radio"
                                id="man-gender-identity"
                                name="gender-identity"
                                value="man"
                                onChange={handleChange}
                                checked={false} />
                            <label htmlFor="man-gender-identity" >Man</label>

                            <input type="radio"
                                id="woman-gender-identity"
                                name="gender-identity"
                                value="woman"
                                onChange={handleChange}
                                checked={false} />
                            <label htmlFor="woman-gender-identity" >Woman</label>

                            <input type="radio"
                                id="more-gender-identity"
                                name="gender-identity"
                                value="more"
                                onChange={handleChange}
                                checked={false} />
                            <label htmlFor="more-gender-identity" >More</label>
                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input type="checkbox"
                            id="show-gender"
                            name="show-gender"
                            onChange={handleChange}
                            checked={false} />


                        {/* show me section */}
                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input type="radio"
                                id="man-gender-interest"
                                name="gender-interest"
                                value="man"
                                onChange={handleChange}
                                checked={false} />
                            <label htmlFor="man-gender-interest" >Man</label>

                            <input type="radio"
                                id="woman-gender-interest"
                                name="gender-interest"
                                value="woman"
                                onChange={handleChange}
                                checked={false} />
                            <label htmlFor="woman-gender-interest" >Woman</label>

                            <input type="radio"
                                id="everyone-gender-interest"
                                name="everyone-interest"
                                value="everyone"
                                onChange={handleChange}
                                checked={false} />
                            <label htmlFor="everyone-gender-interest" >everyone</label>
                        </div>

                        <label htmlFor="about">About</label>
                        <input type="text"
                            id="about"
                            name="about"
                            placeholder="I hate dogs"
                            value="about"
                            required={true}
                            onChange={handleChange} />

                        <input type="submit" />
                    </section>

                    <section>
                        <label htmlFor="about">Profile</label>
                        <input type="url"
                            name="url"
                            id="url"
                            onChange={handleChange}
                            required={true} />
                        <div className="photo-container"></div>
                    </section>
                </form>

            </div>
        </>
    )
}

export default OnBoarding