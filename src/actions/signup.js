import SignupService from '../services/SignupService';

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';

export const createAccount = (user) => dispatch =>{
    return SignupService.registration(user)
        .then((request)=>{
            dispatch({
                type:CREATE_ACCOUNT,
                user: request.user,
                message: request.message
            });
    })
    .catch(err=>console.log(err))
};