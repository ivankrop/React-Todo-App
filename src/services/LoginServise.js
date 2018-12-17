import axios from 'axios';
import {API_BASE} from "../constants/API";

class LoginServiceClass{
    login(data){
        return axios.post(`${API_BASE}/users/sign_in`,{...data})
            .then(res => {
                return res.data;
            })
            .catch(err=>console.log(err));
    }
}

const LoginService = new LoginServiceClass();
export default LoginService;