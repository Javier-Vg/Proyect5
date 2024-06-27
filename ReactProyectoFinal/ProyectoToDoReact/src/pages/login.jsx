import { getUser } from '../service/getUser'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"

import LoginBostrap from '../components/LoginBostrap'

function Login() {

    return(
        <>
        <LoginBostrap/>
        </>
    )
}


export default Login