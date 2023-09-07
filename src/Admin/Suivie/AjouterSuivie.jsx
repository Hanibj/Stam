import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
    Card,
    Table,
    TableHead,
    TableRow,
    TableHeaderCell,
    TableBody,
    TableCell,
    Text,
    Title,
    Badge,
  } from "@tremor/react";
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
const AjouterSuivie = () => {
    const [datasuivie,setDatasuivie]=useState({})
    const [data,setData]=useState({})
    const[nom,setNom]=useState("")
    const[numdouanier,setNumdouanier]=useState("")
    const[dateentree,setDateentree]=useState("")
    const[datesortie,setDatesortie]=useState("")
    const[numcolis,setNumcolis]=useState("")
    const[localisation,setLocalisation]=useState("")
    const {id}=useParams()
    useEffect(()=>{
      const fetchAgen=async()=>{
        const responsee=await fetch(`http://localhost:4000/api/Admin/SingleAgentMartinm/${id}`)
        const jsoo=await responsee.json()
        if(!responsee.ok){
          alert('echec')
        }
        if(responsee.ok){
          setNom(jsoo.nom)
          setNumdouanier(jsoo.numdouanier)
        }
      }
      fetchAgen()
    },[id])
    const handleSbmit =async(e)=>{
      e.preventDefault()
      const data ={dateentree,datesortie,numcolis,localisation,nom,numdouanier}
      console.log(data)
      const reponse =await fetch('http://localhost:4000/api/Admin/AjouterSuivie',{
        method:'POST',
        body:JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        }
  
      })
      const jso= await reponse.json()
      if(reponse.ok){
       
        toast.success("Le suivie ajouter", {
          icon: "🚀"
        });
        setTimeout(() => {window.location.href='/Admin/Suivie' }, 2000);
      }
      if(!reponse.ok){
        // alert("")
        toast.error("Le Suivie n' a pas ajouter", {
          icon: "🚀"
        });
         setTimeout(() => {
        window.location.href='/Admin/Suivie' }, 2000);
      }
    }
  return (
    <><Sidebar/>
      <div>
        <div class="max-w-2xl mx-auto bg-white p-16">

<form>
  <div class="grid gap-6 mb-6 lg:grid-cols-2">
     
      <div>
          <label for="nom" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
          <input type="text"
           id="nom"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="nom"
             value={nom}
              required/>
      </div>
      <div>
          <label for="numdouanier" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numéro Douanier</label>
          <input type="text"
           id="numdouanier"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="numdouanier"
             value={numdouanier}
              required/>
      </div>
      
       <div>
          <label for="dateentree" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date Entree</label>
          <input type="Date"
           id="dateentree"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="dateentree"
            onChange={(e)=>setDateentree(e.target.value)}
             required/>
      </div> 
      <div>
          <label for="datedesortie" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date De Sortie</label>
          <input type="Date"
           id="datedesortie"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="datedesortie"
             onChange={(e)=>setDatesortie(e.target.value)}
             required/>
      </div> 
      <div>
          <label for="numcolis" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numéro Colis</label>
          <input type="text"
           id="numcolis"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="numcolis"
             onChange={(e)=>setNumcolis(e.target.value)}
             required/>
      </div> 
      <div>
          <label for="localisation" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Localisation</label>
          <input type="text"
           id="localisation"
            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
             placeholder="localisation"
             onChange={(e)=>setLocalisation(e.target.value)}
             required/>
      </div> 

  
  <button type="submit"
  onClick={(e)=>handleSbmit(e)}
  class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
  </div>
</form>

</div></div>
<ToastContainer /></>
)
}

export default AjouterSuivie