import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../store/actions/smurfActions'

function Form(props) {

    const [form, setForm] = useState({
        name: '',
        height: '',
        age: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        props.addSmurf(form)
        setForm({
            name: '',
            height: '',
            age: '',
        })
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={handleChange}
                    name='name'
                    value={form.name}
                    placeholder='Name'
                />
                <br />
                <input 
                    type="text"
                    name='age'
                    onChange={handleChange}
                    value={form.age}
                    placeholder='Age'
                />
                <br />
                <input 
                    type="text"
                    name='height'
                    onChange={handleChange}
                    value={form.height}
                    placeholder='Height'
                />
                <br />
                <button type="submit">Smurf that like and subscribe</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(Form);