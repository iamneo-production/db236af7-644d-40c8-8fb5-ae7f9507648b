import { useEffect, useState } from "react";
import { Navigate, Outlet,useNavigate } from "react-router-dom";
import axios from "axios";
import click from '../../assets/click.svg';
export default function UserRoutes()
{
    const [isAuthenticated, setIsAuth] = useState()
    const [isAdminPresent, setAdminPresent] = useState(false)
    const navigate = useNavigate()
    axios.interceptors.request.use(function (config) {
        const token = localStorage.getItem("Auth")
        config.headers.Authorization =  token;
        return config;
    });
    useEffect(() => {
        if(localStorage.getItem("Auth")){
        axios.get("/isAdminPresent").then((response) => {
            setIsAuth(true)
            setAdminPresent(response.data)
            }
            ).catch((error) => {
            localStorage.clear()
            setIsAuth(false)}) 
        }
        else{
            setIsAuth(false)
        }
        return () => {
        }

    },[])
    const handleAdmin = () =>
    {
        navigate("/admin/gifts")
    }
    return (
        isAuthenticated == null ? <div className="routes-loader"></div> : isAuthenticated ? isAdminPresent ? <><button className="admin-button" onClick={handleAdmin}>Switch as Admin <img className = "adBtnImg"src = {click} alt="adminswitch"></img></button><Outlet/></> : <Outlet/> : <Navigate to = "/"/>
    );
}