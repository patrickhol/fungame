import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'

import validateForm from '../method/validateForm.method'

const FormLogin = (props) => {
    const { logged, setLogged } = props

    const [name, setName] = useState()
    const [pass, setPass] = useState()
    const [info, setInfo] = useState()

    const handleInputChange = (event) => {
        event.preventDefault()
        if (event.target.id === "name") {
            setName(event.target.value)
        }
        else if (event.target.id === "pass") {
            setPass(event.target.value)
        }


    }
    const handleSubmit = (event) => {
        event.preventDefault()

        if (validateForm(name, pass)) {
            setInfo("")
            setLogged(true)
        } else {
            setInfo("Data not Valid")
        }


    }

    return (<>
        {logged && <Redirect exact from="/login" to="/play" />}

        <form className="form" onSubmit={handleSubmit} >

            <label className="label" htmlFor="username">Username:</label>
            <input className="input" onChange={handleInputChange} type="text" id="name" name="username" required />



            <label className="label" htmlFor="pass">Password:</label>
            <input className="input" onChange={handleInputChange} type="password" id="pass" name="password"
                minLength="5" required />
            <button className="btn-login" type="submit">Login </button>

        </form>
        <div className="warning validation">{info}</div>
    </>
    )
}

export default FormLogin