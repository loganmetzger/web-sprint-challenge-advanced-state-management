import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addSmurf } from '../store/actions/smurfActions'

function Form(props) {

    const [smurf, setSmurf] = props

    const handleChange = (e) => {
        setSmurf({
            ...smurf,
            [e.target.name]: e.target.value
        })
    }

    return(
        <div>
            <form>
                <input 
                    type="text"
                    onChange={handleChange}
                    name='name'
                    value={smurf.name}
                    placeholder='Name'
                />
                <input 
                    type="text"
                    name='age'
                    onChange={handleChange}
                    value={smurf.age}
                    placeholder='Age'
                />
                <input 
                    type="text"
                    name='height'
                    onChange={handleChange}
                    value={smurf.height}
                    placeholder='Height'
                />
                <button type="submit">Smurf that like and subscribe</button>
            </form>
        </div>
    )
}

export default connect(null, {addSmurf})(Form);