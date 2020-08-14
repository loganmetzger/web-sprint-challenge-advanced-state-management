import React from 'react'
import { connect } from 'react-redux'

function SmurfContainer(props){


    return(
        <div></div>
    )
}

const mapStateToProps = (state) => {
    return {
        smurfs: state.smurfs
    }
}

export default connect(mapStateToProps, {})(SmurfContainer)