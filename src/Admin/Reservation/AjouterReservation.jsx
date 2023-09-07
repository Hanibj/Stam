import React, { useState } from 'react'
import Sidebar from '../../Components/Sidebar/Sidebar'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AjouterReservation = () => {
    const [num,setNum]=useState("")
    const [armateur,setArmateur]=useState("")
    const [agentMaritime,setAgentMaritime]=useState("")
    const [itineraire,setItineraire]=useState("")
    const [frequencedetouchee,setFrequencedetouchee]=useState("")
    const [nbrrorodisponible,setNbrrorodisponible]=useState("")
    const [statue,setStatue]=useState("disponible")
const handleSbmit =async(e)=>{
    e.preventDefault()
    const data ={num,armateur,agentMaritime,itineraire,frequencedetouchee,nbrrorodisponible,statue}
    const roro={num,armateur,nbrrorodisponible}
    const response =await fetch ('http://localhost:4000/api/admin/AjouterReservation',{
        method:'POST',
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
    })
    const jso =response.json()
    if(!response.ok){
        toast.error("Erreur", {
            icon: "🚀"
          });
    }
   if(response.ok){

    const reponse =await fetch ('http://localhost:4000/api/admin/AjouterRoro',{
        method:'POST',
        body: JSON.stringify(roro),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          }
    })
    const jsoo=reponse.json()
    if(!reponse.ok){
        // alert("roro n'est pas ajouter")
        toast.error("Erreur dans l'ajout", {
            icon: "🚀"
          });
    }
    if(reponse.ok){
        // alert("")
        toast.success("l'ajout est terminer", {
            icon: "🚀"
          }); setTimeout(() => {
        window.location.href='/Admin/Reservation' }, 2000);
        
    }
   }
}
  return (
    <>
    <Sidebar/>
    <div class="max-w-2xl mx-auto bg-white p-16">

	<form>
    <div class="grid gap-6 mb-6 lg:grid-cols-2">
        <div>
            <label for="num" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numéro</label>
            <input type="text"
             id="num" 
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Numéro" 
             onChange={(e)=>setNum(e.target.value)}
             required/>
        </div>
        <div>
            <label for="armateur" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Armateur</label>
            <input type="text"
             id="armateur"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Armateur"
               onChange={(e)=>setArmateur(e.target.value)}
                required/>
        </div>
        <div>
            <label for="agentMaritime" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agent Maritime</label>
            <input type="text"
             id="agentMaritime"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="Agent Maritime"
               onChange={(e)=>setAgentMaritime(e.target.value)}
               required/>
        </div>  
        <div>
            <label for="itineraire" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Itinéraire</label>
            <input type="text"
             id="itineraire" 
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="Itinéraire"
             onChange={(e)=>setItineraire(e.target.value)}
             required/>
        </div>
        <div>
            <label for="frequencedetouchee" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Fréquence De Touchée</label>
            <input type="text"
             id="frequencedetouchee" 
             class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
             placeholder="Fréquence De Touchée" 
             onChange={(e)=>setFrequencedetouchee(e.target.value)}
             required/>
        </div>
        <div>
        <label for="nbrrorodisponible" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre De RORO Disponible</label>
        <input type="Number" 
        id="nbrrorodisponible" 
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
        placeholder="Nbombre De RORO Disponible" 
        onChange={(e)=>setNbrrorodisponible(e.target.value)}
        required/>
        </div>
    </div>

   
    
    
    <button type="submit"
    onClick={(e)=>handleSbmit(e)}
    class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
      
</form>

</div> 
<ToastContainer />
</>
  )
}

export default AjouterReservation;