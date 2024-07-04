import { getUser } from '../service/getUser'
import { useState,useEffect } from 'react'
import { useNavigate } from "react-router-dom"
import Footer from '../components/footer'
import Nabvar from '../components/navbar'

import LoginBostrap from '../components/LoginBostrap'

function Login() {

    return(
        <>
        <Nabvar/>
        <LoginBostrap/>
        <Footer/>
        </>
    )
}


export default Login