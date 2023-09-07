import React, { useEffect } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Logout = () => {
useEffect(()=>{
    
    
    toast.success("A Bientôt", {
      icon: "🚀"
    });
    setTimeout(() => { 
      window.localStorage.clear()
      window.location.href='/'
    }, 2000);
   
},{})
  return (
    <div> <ToastContainer /></div>
  )
}

export default Logout