import { useEffect, useState } from "react"
import { Navigate, Outlet } from "react-router-dom"
import axios from 'axios'
export default function AdminRoutes()
{
    const [isAdminPresent, setAdminPresent] = useState()
    const [shouldNavigate, setShouldNavigate] = useState(false)

    useEffect(()=>{
        if(localStorage.getItem("Auth"))
        {
            axios.get("/isAdminPresent").then((response) => {
                setAdminPresent(response.data)
            }).catch(() => {
                setAdminPresent(false)
            })
        }
        else{
            setShouldNavigate(true)
        }
        return () => {

        }
    },[])
    console.log(shouldNavigate)
    return (
        shouldNavigate ? <Navigate to="/"/> : isAdminPresent == null ? <div className="routes-loader"></div> : isAdminPresent ? <Outlet/> : <div>Forbidden</div>
    );
}