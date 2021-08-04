import axios from 'axios';


export const createRecord = async (token, data) => {
   await  axios.post(`${process.env.REACT_APP_API}/create-record`, data, {
       headers : {
           Authorization : `Bearer ${token}`,
       },
   });
}