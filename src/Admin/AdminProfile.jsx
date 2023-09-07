import { PaperClipIcon } from '@heroicons/react/20/solid'
import Sidebar from '../Components/Sidebar/Sidebar'
import { useEffect, useState } from 'react'

const AdminProfile=()=> {
  const [email,setEmail]=useState('')
  const [userval,setUserval]=useState('')
  const [admins,setAdmins]=useState([])
  useEffect(()=>{
    const token = localStorage.getItem('token');
    setUserval(token)
    const { email } = JSON.parse(token);
    setEmail(email);
    console.log(email)
    
  },[])
  useEffect(()=>{
    const affadmin = async () => {
      const response = await fetch(`http://localhost:4000/api/admin/Profile/${email}`);
      const jso = await response.json();
console.log(jso.data)
  if (response.ok) {
    setAdmins(jso.data);
    
  }
}; 

affadmin();  },[email])
  return (
    <div>
        <Sidebar/>
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        {admins &&
        admins.map((admin,index) => (
          <div key={admin._id}>
       
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <img
                className="mx-auto h-40 w-40 rounded-full"
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt=""
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Profile
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-lg font-medium leading-6 text-gray-900">
                Email address
              </label>

              <div className="mt-2">
              <div className="block w-full rounded-md py-1.5 text-lg text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 ">
  {admin.email}
</div>

              </div>
            </div>
            <div>
              <label htmlFor="nom" className="block text-lg font-medium leading-6 text-gray-900">
                Nom
              </label>
              <div className="mt-2">
                <div
                  
                  className="block w-full rounded-md py-1.5 text-lg text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 "
                >{admin.nom}</div>
              </div>
            </div>
            <div>
              <label htmlFor="prenom" className="block text-lg font-medium leading-6 text-gray-900">
                Prenom
              </label>
              <div className="mt-2">
              <div
                  
                  className="block w-full rounded-md py-1.5 text-lg text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 "
                >{admin.prenom}</div>
              </div>
            </div>
            <div>
              <label htmlFor="societe" className="block text-lg font-medium leading-6 text-gray-900">
                Nom de Société
              </label>
              <div className="mt-2">
              <div
                  
                  className="block w-full rounded-md py-1.5 text-lg text-gray-900 shadow-sm ring-0 ring-inset ring-gray-300 " >{admin.entreprise}</div>
              </div>
            </div>

     
            

          
          </form>

 
        </div>
        </div>
        ))}
        </div>
    </div>
  )
}


export default AdminProfile