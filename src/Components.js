import React from "react"
import "./style.css"

function Components(props) {
    return (
        <main>
            <form >
                <input className="chooser"
                    type="text"
                    value={props.data.firstName}
                    name="firstName"
                    placeholder="First Name"
                    onChange={props.handleChange}
                />

                <input className="chooser"
                    type="text"
                    value={props.data.lastName}
                    name="lastName"
                    placeholder="Last Name"
                    onChange={props.handleChange}
                />

                <input className="chooser"
                    type="number" min='1'
                    value={props.data.age}
                    name="age"
                    placeholder="Age"
                    onChange={props.handleChange}
                />
                <label className="checkbox"> Choose your gender:
                    <input
                        type="radio"
                        value="male"
                        name="gender"
                        chacked={props.data.gender === "male"}
                        onChange={props.handleChange}
                    />Male
                    <input
                        type="radio"
                        value="female"
                        name="gender"
                        chacked={props.data.gender === "female"}
                        onChange={props.handleChange}
                    />Female
                </label>

                <label className="checkbox" >
                    <select
                        value={props.data.destination}
                        name="destination"
                        onChange={props.handleChange}
                    >
                        <option value="">Choose location</option>
                        <option value="Germany">Germany</option>
                        <option value="Holand">Holand</option>
                        <option value="France">France</option>
                        <option value="Spain">Spain</option>
                        <option value="Portugal">Portugal</option>
                        <option value="England">England</option>
                        <option value="Italy">Italy</option>
                    </select>
                </label>

                <label className="checkbox">
                    Are you vegan?
                    <input
                        type="checkbox"
                        name="isVegan"
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                    />
                </label>
            </form>
            <br />
            <form className="result">
                <h4>Your Name: {props.data.firstName} {props.data.lastName}</h4>
                <hr />
                <p>Age: {props.data.age}</p>
                <hr />
                <p>Gender: {props.data.gender}</p>
                <hr />
                <p>Destination: {props.data.destination}</p>
                <hr />
                <p>Vegan: {props.data.isVegan ? "Yes" : "No"}</p>
                <hr />
            </form>
        </main>
    )
}

export default Components