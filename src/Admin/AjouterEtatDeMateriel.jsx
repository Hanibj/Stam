import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const AjouterEtatDeMateriel = () => {
  const [num,setNum]=useState("")
  const [numgarge,setNumgarge]=useState("")
  const [type,setType]=useState("")
  
  const [remarque,setRemarque]=useState("")

  const [statue,setStatue]=useState("")

  const handleSbmit =async(e)=>{
    e.preventDefault()
    const data ={num,numgarge,type,remarque,statue}
    console.log(data)
    const reponse =await fetch('http://localhost:4000/api/Admin/AjouterMateriel',{
      method:'POST',
      body:JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }

    })
    const jso= await reponse.json()
    if(reponse.ok){
      // alert("")
      toast.success("l'etat a ajouter", {
        icon: "🚀"
      });
       setTimeout(() => {
     window.location.href='/Admin/EtatMaterielle' }, 2000);
    }
    if(!reponse.ok){
      // alert("")
      toast.success("l'etat n' a pas ajouter", {
        icon: "🚀"
      });
       setTimeout(() => {
      window.location.href='/Admin/EtatMaterielle' }, 2000);
    }
  }
  return (
    <div><div class="max-w-2xl mx-auto bg-white p-16">

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
              <label for="numgarge" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">numgarge</label>
              <input type="text"
               id="numgarge"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="numgarge"
                 onChange={(e)=>setNumgarge(e.target.value)}
                  required/>
          </div>
          <div>
              <label for="type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Type</label>
              <input type="text"
               id="type"
                class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                 placeholder="type"
                 onChange={(e)=>setType(e.target.value)}
                 required/>
          </div> 
          <div className="col-span-full">
              <label htmlFor="remarque" className="block text-sm font-medium leading-6 text-gray-900">
              Remarque
              </label>
              <div className="mt-2">
                <textarea
                  id="remarque"
                  name="remarque"
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  defaultValue={''}
                  onChange={(e)=>setRemarque(e.target.value)}
                />
              </div> 
          {/* <div>
              <label for="remarque" class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">remarque</label>
              <input type="text"
               id="remarque" 
               class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
               placeholder="remarque"
               onChange={(e)=>setRemarque(e.target.value)}
               required/>*/}
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
                   <option value="" >----Choisie l'Etat----</option>
                  <option value="en panne" color='red'>En Panne</option>
                  <option value="en maintenance" color='grey'>En Maintenance</option>
                  <option value="en marche" color='green'>En Marche</option>
                </select>
              </div>
            </div>

      </div>
  
     
      
      
      <button type="submit"
      onClick={(e)=>handleSbmit(e)}
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
     
  </form>
  
  </div>   <ToastContainer /> </div>
  )
}

export default AjouterEtatDeMateriel