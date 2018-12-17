import LoginService from '../services/LoginServise';

export const LOGIN_USER = 'LOGIN_USER';
export const LOGOUT_USER = 'LOGOUT_USER';
export const ERROR_LOGIN = 'ERROR_LOGIN';

export const loginUser = (user)=>dispatch=>{
    return LoginService.login(user)
        .then((res)=>{
            localStorage.setItem('token', JSON.stringify(res.token));
            localStorage.setItem('auth', JSON.stringify(res.auth));
            dispatch({
                type: LOGIN_USER,
                token: res.token,
                auth: res.auth,
                user: res.user
            });
        })
        .catch(
            err=>{
                console.log(err);
                dispatch({
                    type: ERROR_LOGIN,
                    errorLogin: 'Incorrect username or password'
                })
            }
            
        )
};

export const logoutUser = ()=>dispatch=>{
    localStorage.removeItem('token');
    localStorage.removeItem('auth');
    dispatch({
    type: LOGOUT_USER
    })
};