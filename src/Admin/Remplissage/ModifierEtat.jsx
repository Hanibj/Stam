
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModifierEtat = () => {
  const [num,setNum]=useState("")
  const [nombreroro,setNombreroro]=useState("")
  const [client,setClient]=useState("")
  const [itineraire,setItineraire]=useState("")
  const [statue,setStatue]=useState("")
  const [agentMaritime,setAgentMaritime]=useState("")
  const [armateur,setArmateur]=useState("")
  const [transactions,setTransactions]= useState({})
  const {id}=useParams()

console.log(id)
useEffect(() => {
    const fetchEtat = async () => {
      const response = await fetch(`http://localhost:4000/api/Admin/ReservationClient/${id}`);
      const jso = await response.json();
      console.log(jso);
      if (response.ok) {
        setTransactions(jso);
        setNum(jso.num)
        setArmateur(jso.armateur)
        setAgentMaritime(jso.agentMaritime)
        setNombreroro(jso.nombreroro)
        setClient(jso.client)
        setStatue(jso.statue)
        setItineraire(jso.itineraire)
        console.log(jso);
      }
    };

    fetchEtat();
  }, [id]);
  const handleSbmit = async (e)=>{
    e.preventDefault()
    const data ={num,itineraire,client,nombreroro,agentMaritime,armateur,statue}
    console.log(data)
    const ressponse =await fetch(`http://localhost:4000/api/Admin/ModifierReservationClient/${id}`,{
      method:'PATCH',
      body:JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }

    })
   // const jso= await reponse.json()
   
   if (!ressponse.ok) {
    // alert('');
    toast.error("Erreur lors de la modification de la Remplissage ", {
      icon: "🚀"
    }); setTimeout(() => {
    window.location.href='/Admin/EtatMaterielle' }, 2000);
  } else {
    // alert('');
    toast.success("La remplissage a été modifiée avec succès ", {
      icon: "🚀"
    }); setTimeout(() => {
    window.location.href='/Admin/EtatDeRemplissage' }, 2000);
  }
  
  }
  return (
    <div><div className="max-w-2xl mx-auto bg-white p-16">

    <form>
      <div className="grid gap-6 mb-6 lg:grid-cols-2">
          <div>
              <label htmlFor="num" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numéro</label>
              <input type="text"
               id="num" 
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               value={num}
              readOnly
               required/>
          </div>
          <div>
              <label htmlFor="armateur" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Armateur</label>
              <input type="text"
               id="armateur"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={armateur}
                 onChange={(e)=>setArmateur(e.target.value)}
                 readOnly
                  required/>
          </div>
          <div>
              <label htmlFor="agentMaritime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agent Maritime</label>
              <input type="text"
               id="agentMaritime"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={agentMaritime}
                 onChange={(e)=>setAgentMaritime(e.target.value)}
                 readOnly
                 required/>
          </div> 
          <div>
              <label htmlFor="nombreroro" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">nombreroro</label>
              <input type="text"
               id="nombreroro"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={nombreroro}
                 onChange={(e)=>setNombreroro(e.target.value)}
                 readOnly
                 required/>
          </div> 
          <div>
              <label htmlFor="client" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Client</label>
              <input type="text"
               id="client"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={client}
                 onChange={(e)=>setClient(e.target.value)}
                 readOnly
                 required/>
          </div> 
          <div>
              <label htmlFor="itineraire" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Itineraire</label>
              <input type="text"
               id="itineraire"
               className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                value={itineraire}
                 onChange={(e)=>setItineraire(e.target.value)}
                 readOnly
                 required/>
          </div> 
          {/* <div>
              <label for="statue" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> statue</label>
              <option></option>
              {/* <input type="text"
               id="statue" 
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
               placeholder="Fréquence De Touchée" 
               onChange={(e)=>setStatue(e.target.value)}
               required/> 
          </div> */}
           <div className="sm:col-span-3">
              <label htmlFor="statue" className="block text-sm font-medium leading-6 text-gray-900">
              statue
              </label>
              <div className="mt-2">
                <select
                  id="statue"
                  name="statue"
                  autoComplete="statue"
                  onChange={(e)=>setStatue(e.target.value)}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                >
                   <option value={statue} >----Choisie l'Etat----</option>
                  <option value="pas encore" >Pas Encore</option>
                  <option value="en cour">En Cour</option>
                  <option value="terminer">Terminer</option>
                </select>
              </div>
            </div>

      </div>
  
     
      
      
      <button type="submit"
      onClick={handleSbmit}
      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
        
  </form>
  
  </div>
   <ToastContainer /></div>
  )
}


export default ModifierEtat