import axios from 'axios';
import {API_BASE} from "../constants/API";

class SignupServiseClass{
    registration(user){
        return axios.post(`${API_BASE}/users/sign_up`,{...user})
            .then(res => {
                return res.data;
            })
            .catch(err=>console.log(err));
    }
}

const SignupService = new SignupServiseClass();
export default SignupService;