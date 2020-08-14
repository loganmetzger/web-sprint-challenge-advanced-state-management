import axios from 'axios'

export const SMURF_LOADING = 'SMURF_LOADING'
export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const SMURF_FAIL = 'SMURF_FAIL'

export const getSmurfs = () => (dispatch) => {
    dispatch({ type: SMURF_LOADING })
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            console.log(res)
        })
        .catch(err => {
            dispatch({ type: SMURF_FAIL, payload: err })
        })
}
