import { useState } from "react"
import NavBar from '../components/Navbar'

function OnBoarding() {
    const [formData, setFormData] = useState({
        user_id: "",
        first_name: "",
        dob_day: "",
        dob_month: "",
        dob_year: "",
        show_gender: null,
        gender_identity: '',
        gender_interest: '',
        email: '',
        url: '',
        about: '',
        matches: []
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("sign up form submitted")
    }

    const handleChange = (e) => {
        const value = e.target.type === "checkbox" ? e.target.checked : e.target.value

        const fieldName = e.target.name;
        setFormData((prevState) => ({
            ...prevState, [fieldName]: value
        }))
    }

    console.log(formData)


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
                            name='first_name'
                            placeholder="First Name"
                            required={true}
                            value={formData.first_name}
                            onChange={handleChange} />

                        <label htmlFor="">Birthday</label>
                        <div className="multiple-input-container">
                            <input type="number"
                                id='dob-day'
                                name='dob_day'
                                placeholder="DD"
                                required={true}
                                value={formData.dob_day}
                                onChange={handleChange} />

                            <input type="number"
                                id='dob-month'
                                name='dob_month'
                                placeholder="MM"
                                required={true}
                                value={formData.dob_month}
                                onChange={handleChange} />

                            <input type="number"
                                id='dob-year'
                                name='dob_year'
                                placeholder="YYYY"
                                required={true}
                                value={formData.dob_year}
                                onChange={handleChange} />
                        </div>

                        {/* select gender section */}
                        <label htmlFor="">Gender</label>
                        <div className="multiple-input-container">
                            <input type="radio"
                                id="man-gender-identity"
                                name="gender_identity"
                                value='man'
                                onChange={handleChange}
                                checked={formData.gender_identity === 'man'} />
                            <label htmlFor="man-gender-identity" >Man</label>

                            <input type="radio"
                                id="woman-gender-identity"
                                name="gender_identity"
                                value="woman"
                                onChange={handleChange}
                                checked={formData.gender_identity === 'woman'} />
                            <label htmlFor="woman-gender-identity" >Woman</label>

                            <input type="radio"
                                id="more-gender-identity"
                                name="gender_identity"
                                value='more'
                                onChange={handleChange}
                                checked={formData.gender_identity === 'more'} />
                            <label htmlFor="more-gender-identity" >More</label>
                        </div>

                        <label htmlFor="show-gender">Show gender on my profile</label>
                        <input type="checkbox"
                            id="show-gender"
                            name="show_gender"
                            onChange={handleChange}
                            checked={formData.show_gender === true} />


                        {/* show me section */}
                        <label>Show Me</label>
                        <div className="multiple-input-container">
                            <input type="radio"
                                id="man-gender-interest"
                                name="gender_interest"
                                value='man'
                                onChange={handleChange}
                                checked={formData.gender_interest === 'man'} />
                            <label htmlFor="man-gender-interest" >Man</label>

                            <input type="radio"
                                id="woman-gender-interest"
                                name="gender_interest"
                                value='woman'
                                onChange={handleChange}
                                checked={formData.gender_interest === 'woman'} />
                            <label htmlFor="woman-gender-interest" >Woman</label>

                            <input type="radio"
                                id="everyone-gender-interest"
                                name="everyone_interest"
                                value='everyone'
                                onChange={handleChange}
                                checked={formData.gender_interest === 'everyone'} />
                            < label htmlFor="everyone-gender-interest" >everyone</label>
                        </div>

                        <label htmlFor="about">About</label>
                        <input type="text"
                            id="about"
                            name="about"
                            placeholder="I hate dogs"
                            value={formData.about}
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
                        <div className="photo-container">
                            <img src={formData.url} alt="profile pic" />
                        </div>
                    </section>
                </form>

            </div>
        </>
    )
}

export default OnBoarding