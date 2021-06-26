import React from "react"
import Components from "./Components"

class FormContainer extends React.Component {
    state = {
        firstName: "",
        lastName: "",
        age: null,
        gender: "",
        destination: "",
        isVegan: false,
    }

    handleChange = (event) => {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({
            [name]: checked
        }):
        this.setState ({
            [name]: value
        })
    }

    render() {
        return(
            <Components 
            handleChange={this.handleChange}
            data={this.state}
            />
        )
    }
}

export default FormContainer