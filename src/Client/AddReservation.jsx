
import { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export default function AddReservation() {
  const [open, setOpen] = useState(true)
  const [data,setData]=useState({})
  const [valeur,setValeur]=useState(0)
  const {id,roroid,nombre} =useParams()
  const[userval,setUserval]=useState('')
  const[username,setUsername]=useState('')
  const [admins, setAdmins] = useState([]);
  useEffect(() => {
    const token = localStorage.getItem('token');
    setUserval(token)
    const { email } = JSON.parse(token);
    setUsername(email);
    console.log(username)
  }, []);

  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(`http://localhost:4000/api/admin/Reservation/${id}`);
      const jso = await response.json();
       console.log(jso)
      if (response.ok) {
        setData(jso);
        console.log(jso.nbrrorodisponible)
      }
    };

    fetchReservation();
  }, []);
const handleIncri =async(valeur)=>{
  if(valeur<nombre){
   valeur= valeur+1;
  setValeur(valeur)}else
  {
    setValeur(nombre)
  }
}
const handleDicri =async(valeur)=>{
  if(valeur>0){
  valeur= valeur-1;
  setValeur(valeur)}else{
    setValeur(0)
  }
}
const handlAnnuler =async()=>{
  setOpen(false)
  setTimeout(() => {
    window.location.href='/Client/Reservation'
  }, 2000);
  
}
const handleSubmit=async()=>{
  const {num,armateur,agentMaritime,itineraire,frequencedetouchee,nbrrorodisponible,statue}=data
  const nombreroro=valeur
  const client=username
  const datas ={num,armateur,agentMaritime,itineraire,frequencedetouchee,nbrrorodisponible:nbrrorodisponible-valeur,nombreroro,statue:'pas encore',client}
  console.log('valeur',valeur)
  console.log('nbrrorodisponible',nbrrorodisponible-valeur)
  const roro={num,armateur,nbrrorodisponible:nbrrorodisponible-valeur}
    const reponse =await fetch('http://localhost:4000/api/Client/ReservationRoro',{
      method:'POST',
      body: JSON.stringify(datas),
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
  })
  const jso =reponse.json()
  if(!reponse.ok){
      alert("erreur")
  }
 if(reponse.ok){
  const reponsee =await fetch('http://localhost:4000/api/Client/ModifierRoro',{
    method:'PATCH',
    body: JSON.stringify(roro),
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
})
 
  
  if(!reponsee.ok){
    toast.error("roro n'est pas ajouter ", {
      icon: "🚀"
    });
      alert("")
  }
  if(reponsee.ok){
    const reponseee =await fetch(`http://localhost:4000/api/Client/ModifierReservation/${id}`,{
      method:'PATCH',
      body: JSON.stringify(datas),
      headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
  })
  toast.success("la reservation est ajouter ", {
    icon: "🚀"
  }); setTimeout(() => {
      window.location.href='/client/Reservation' }, 2000);
      
  }
 }

}
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
          {/* <div className="pointer-events-none fixed inset-y-0 flex max-w-full pl-10 justify-center items-center"> */}
          <div className="flex  items-center justify-center pointer-events-none max-w-full pl-10 inset-y-0 ">
  

              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">Reservation</Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul role="list" className="-my-6 divide-y divide-gray-200">
               
                              <li  className="flex py-6">


                                <div className="ml-4 flex flex-1 flex-col">
                                  <div>
                                    <div className="flex justify-between text-base font-medium text-gray-900">

                                      <p className="ml-4">Numéro {data.num}</p>
                                    </div>
                                    <p className="ml-4">Armateur:{data.armateur}</p>
                                  </div>
                                  <div className="flex flex-1 items-end justify-between text-sm">
                                 
                                    <p className="ml-4">Nombre De RORO Disponible {data.nbrrorodisponible}</p>


                                  </div>
                                  <div className="mbsc-form-group">
            <div className="mbsc-form-group-title">Nombre Roro à Réserver</div>
              <div>
                <button  onClick={()=>handleDicri(valeur)}>-</button>
                <input type='text' name='valeur' value={valeur} />
                <button onClick={()=>handleIncri(valeur)} >+</button>
              </div>
            
    
        </div>
                                </div>
                              </li>
                      
                          </ul>
                        </div>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 px-4 py-6 sm:px-6">

                      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
                      <div className="mt-6">
                        <button
                          onClick={handleSubmit}
                          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                        >
                          Réserver
                        </button>
                      </div>
                      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                        <p>
                          or
                          <button
                            type="button"
                            className="font-medium text-indigo-600 hover:text-indigo-500"
                            onClick={() => handlAnnuler()}
                          >
                            Continue Shopping
                            <span aria-hidden="true"> &rarr;</span>
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
            
          </div>
          <ToastContainer />
        </div>

      </Dialog>
    </Transition.Root>
  )
}
