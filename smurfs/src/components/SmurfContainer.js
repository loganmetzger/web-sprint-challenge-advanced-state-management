import React from 'react'
import { connect } from 'react-redux'
import SmurfCard from  './SmurfCard'

function SmurfContainer(props){


    return(
        <div>
            {props.smurfs.map(smurf => {
                return <SmurfCard key={smurf.id} smurf={smurf} />
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfContainer)