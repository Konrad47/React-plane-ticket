import React from "react"
import FormContainer from "./FormContainer"
import Header from "./Header"
import "./style.css"

class App extends React.Component {
    state = {}

    render() {
        return(
            <div className="form">
                <Header />
                <FormContainer />
            </div>
        )
    }

}

export default App