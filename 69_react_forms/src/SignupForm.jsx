import { useState } from "react"

export default function SignupForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: ""
    })

    const handleChange = evt => {
        const fieldName = evt.target.name
        const value = evt.target.value

        setFormData(currData => {
            // currData[fieldName] = value
            // return { ...currData }
            return {
                ...currData,
                [fieldName]: value
            }
        })
    }

    const handleSubmit = () => {
        console.log(formData)
    }

    return (
        <div>
            <label htmlFor="firstname">First Name: </label>
            <input type="text" name="firstName" placeholder="firstname" value={formData.firstName}
                onChange={handleChange} id="firstname"></input>
            <label htmlFor="lastname">Last Name: </label>
            <input type="text" name="lastName" placeholder="lastname" value={formData.lastName}
                onChange={handleChange} id="lastname"></input>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}