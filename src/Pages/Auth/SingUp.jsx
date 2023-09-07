import { useState } from "react";
import Navbar from "../../Components/Navbar";
import STAM from "../../image/STAM.png"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function SignUp() {
  const [nom,setNom]=useState("")
  const [prenom,setPrenom]=useState("")
  const [email,setEmail]=useState("")
  const [password,setPassword]=useState("")
  const [entreprise,setEntreprise]=useState("")
  const [typeus,setTypeus]=useState("Client")
  const [error,setError]=useState(false)
  const handleSubmit =async (e)=>{
   
    e.preventDefault();
    const admin= {nom,prenom,email,password,entreprise,typeus};
       
    const response= await fetch( 'http://localhost:4000/api/Authe/Signup',{
         method:'POST',
         body: JSON.stringify(admin),
         headers: {
             "Content-Type": "application/json",
             Accept: "application/json",
           }})
     const jso =await response.json();
          
     if (!response.ok){
         setError(jso.error)
         toast.error("Erreur Lors De Création De Votre Compte", {
          icon: "🚀"
        });
     }
     if (response.ok){
      toast.success("Votre Compte Et Ajouter", {
        icon: "🚀"
      });
        //  setError(null)
        //  alert("employée ajouter")
        setTimeout(() => { 
          window.location.href='/Signin'
        }, 2000);
        
        
     }

}
  return (
    <>
     <Navbar/>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
            className="mx-auto h-40 w-40"
            src={STAM}
            alt="Your Company"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Craete your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  onChange={(e)=>setEmail(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="nom" className="block text-sm font-medium leading-6 text-gray-900">
                Nom
              </label>
              <div className="mt-2">
                <input
                  id="nom"
                  name="nom"
                  type="text"
                  autoComplete="nom"
                  onChange={(e)=>setNom(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="prenom" className="block text-sm font-medium leading-6 text-gray-900">
                Prenom
              </label>
              <div className="mt-2">
                <input
                  id="prenom"
                  name="prenom"
                  type="text"
                  autoComplete="prenom"
                  onChange={(e)=>setPrenom(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label htmlFor="societe" className="block text-sm font-medium leading-6 text-gray-900">
                Nom de Société
              </label>
              <div className="mt-2">
                <input
                  id="societe"
                  name="societe"
                  type="text"
                  autoComplete="societe"
                  onChange={(e)=>setEntreprise(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                  Password
                </label>
               
              </div>
              <div className="mt-2">
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  onChange={(e)=>setPassword(e.target.value)}
                  required
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                
              >
                Sign in
              </button>
            </div>
          </form>

 
        </div>
      </div>
      <ToastContainer />
    </>
  )
}
