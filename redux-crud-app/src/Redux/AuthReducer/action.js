import * as types from "./actionTypes"
import axios from "axios"
const register=(payload)=>(dispatch)=>{

    dispatch({type:types.REGISTER_REQUEST})

    return axios.post("http://masai-api-mocker.herokuapp.com/auth/register",payload)
    .then((res)=>{console.log(res)
        dispatch({type:types.REGISTER_SUCCESS,payload:res.data}) 
        return types.REGISTER_SUCCESS
    })
    .catch((e)=>{console.log(e)
        dispatch({type:types.REGISTER_FAILURE,payload:e})
        return types.REGISTER_FAILURE
    })

    
}


const login =(params)=>(dispatch)=>{

    dispatch({type:types.LOGIN_REQUEST})

    return axios.post("http://masai-api-mocker.herokuapp.com/auth/login",params)
    .then((res)=>{console.log(res)
        dispatch({type:types.LOGIN_SUCCESS,payload:res.data.token})
        return types.LOGIN_SUCCESS
    })
    .catch((e)=>{console.log(e)
        dispatch({type:types.LOGIN_FAILURE,payload:e})
        return types.LOGIN_FAILURE
    })
}


export {register,login}