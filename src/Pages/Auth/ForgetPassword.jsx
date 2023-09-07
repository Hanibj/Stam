import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import STAM from "../../image/STAM.png" 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ForgetPassword = () => {
    const [email,setEmail]=useState("")
    const [errorResponse, setError] = useState("");
        
 
        const generateRandomPassword = () => {
            const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';
            const length = 10;
            let password = '';
        
            for (let i = 0; i < length; i++) {
              const randomIndex = Math.floor(Math.random() * characters.length);
              password += characters.charAt(randomIndex);
            }
        
            return password;
          };
        const Change=async (e) =>{
          e.preventDefault()
            const password=generateRandomPassword()
            const response = await fetch('http://localhost:4000/api/Authe/ResetPassword', {
            method: 'PATCH',
            body: JSON.stringify({email, password}),
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
          });
    
          if (!response.ok) {
            toast.error("Erreur de Modification de Mot De Passe", {
              icon: "🚀"
            });
           
          } else {
            const emailSubject = 'Your Randomly Generated Password';
            const emailContent = `Dear ${email},\n\nYour randomly generated password is: ${password}\n\nPlease keep it secure.`;
    
            // Send the email content to the server for email sending
            const emailResponse = await fetch('http://localhost:4000/api/mail/SendemailPassword', {
              method: 'POST',
              body: JSON.stringify({
                recipient: email,
                subject: emailSubject,
                content: emailContent,
              }),
              headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json',
              },
            });
    
            if (emailResponse.ok) {
              toast.success("Email sent successfully ", {
                icon: "🚀"
              });
              setTimeout(() => {window.location.href='/'
              }, 2000);
              
            } else {
              toast.error("Error sending email ", {
                icon: "🚀"
              });
              console.error(':', emailResponse.statusText);
            }
    
            
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
            Change your Password
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" >
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
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                onClick={(e)=>Change(e)}
              >
                Valider
              </button>
            </div>
          </form>


        </div>
      </div>
      <ToastContainer />
    </>
  )
}

export default ForgetPassword