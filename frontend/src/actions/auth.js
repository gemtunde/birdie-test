import axios from 'axios'

//register connects to endpoint
export const register = async (user) => await axios.post(`${process.env.REACT_APP_API}/register`, user);


//login connect to endpoint
export const login = async(user) => await axios.post(`${process.env.REACT_APP_API}/login`, user);