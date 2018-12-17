import axios from 'axios';
import {API_BASE} from "../constants/API";

class TodosServiceClass {

    getAll(usertoken){
        return axios.get(`${API_BASE}/todos`,{headers:{token:usertoken}})
            .then(res =>{
                return res
            })
            .catch(err=>console.log(err));
    }

    editTodo(usertoken, completed, id, title, expires_at){
        return axios.put(`${API_BASE}/todos/${id}`, {title, completed, expires_at}, {headers:{token:usertoken}})
            .then(res=>{
                console.log(res.data);
                return res
            })
            .catch(err=>console.log(err));
    }

    deleteTodo(usertoken, id){
        return axios.delete(`${API_BASE}/todos/${id}`, {headers:{token:usertoken}})
            .then(res=>{
                console.log(res.data);
            })
            .catch(err=>console.log(err));
    }

    getTodo(usertoken,id){
        return axios.get(`${API_BASE}/todos/${id}`, {headers:{token:usertoken}})
            .then(res=>{
                return res
            })
            .catch(err=>console.log(err));
    }
    
    addTodo(usertoken, title, expires_at){
        return axios.post(`${API_BASE}/todos`, {title, expires_at}, {headers:{token:usertoken}})
            .then(res =>{
                console.log(res.data);
                return res
            })
            .catch(err=>console.log(err));
    }
}

const TodosService = new TodosServiceClass();
export default TodosService;