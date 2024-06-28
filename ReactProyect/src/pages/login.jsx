import { getUser } from '../service/getUser'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Start from '../pages/start'

import LoginBostrap from '../components/LoginBostrap'

function Login() {

    return(
        <>
        <Start/>
        <LoginBostrap/>
        </>
    )
}


export default Login