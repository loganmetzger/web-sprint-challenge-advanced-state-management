import axios from 'axios'

export const SMURF_LOADING = 'SMURF_LOADING'
export const SMURF_SUCCESS = 'SMURF_SUCCESS'
export const SMURF_FAIL = 'SMURF_FAIL'

export const getSmurfs = () => (dispatch) => {
    dispatch({ type: SMURF_LOADING })
    axios.get('http://localhost:3333/smurfs')
        .then(res => {
            dispatch({ type: SMURF_SUCCESS, payload: res.data })
            console.log(res.data)
        })
        .catch(err => {
            dispatch({ type: SMURF_FAIL, payload: err })
        })
}

export const addSmurf = (smurf) => (dispatch) => {
    dispatch({ type: SMURF_LOADING })
    axios.post('http://localhost:3333/smurfs')
        .then(res => {

        })
        .catch(err => {
            dispatch({ type: SMURF_FAIL, payload: err })
        })
}