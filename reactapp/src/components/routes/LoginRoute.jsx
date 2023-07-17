import { useEffect, useState } from "react"
import axios from 'axios'
import { Navigate, Outlet } from "react-router-dom"
export default function LoginRoute()
{
    const [isUserPresent, setUserPresent] = useState()
    useEffect(()=>{
        if(localStorage.getItem("Auth"))
        {
            axios.get("/isUserPresent").then((response) => {
                setUserPresent(response.data)
            }).catch(() => {
                setUserPresent(false)
            })
        }
        else
        {
            setUserPresent(false)
        }
        return () => {

        }
    },[])
    return (
        isUserPresent == null ? <div className="routes-loader"></div> : isUserPresent ? <Navigate to = "/user/test"/> : <Outlet/>
    );
}