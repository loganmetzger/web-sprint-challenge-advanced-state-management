import React from 'react'

export default function Smurf(props) {
    const { name, age, height } = props.smurf
    return (
        <>
            <div className='smurf-card'>
                <h4>{name}</h4>
                <h4>{age}</h4>
                <h4>{height}</h4>
            </div>
        </>
    )
}