// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const ModifierReservation = () => {
//     const [num,setNum]=useState("")
//     const [armateur,setArmateur]=useState("")
//     const [agentMaritime,setAgentMaritime]=useState("")
//     const [itineraire,setItineraire]=useState("")
//     const [frequencedetouchee,setFrequencedetouchee]=useState("")
//     const [nbrrorodisponible,setNbrrorodisponible]=useState("")
//     const [statue,setStatue]=useState("")
//     const [data, setData] = useState({
//         num: "",
//         armateur: "",
//         agentMaritime: "",
//         itineraire: "",
//         frequencedetouchee: "",
//         nbrrorodisponible: "",
//         statue: ""
//       });
//     const {id}=useParams()

//     useEffect(() => {
//         const fetchReservation = async () => {
//           const response = await fetch(`http://localhost:4000/api/admin/Reservation/${id}`);
//           const jso = await response.json();
//            console.log(jso)
//           if (response.ok) {
//             setData(jso);
//             console.log(jso)
//           }
//         };
    
//         fetchReservation();
//       }, [id]);
// const handleSbmit =async(e)=>{
//     e.preventDefault()
//     const data ={num,armateur,agentMaritime,itineraire,frequencedetouchee,nbrrorodisponible,statue}
//     const response =await fetch (`http://localhost:4000/api/admin//ModifierReservation/${id}`,{
//         method:'PATCH',
//         body: JSON.stringify(data),
//         headers: {
//             "Content-Type": "application/json",
//             Accept: "application/json",
//           }
//     })
//     const jso =response.json()
//     if(!response.ok){
//         alert("erreur")
//     }
//    if(response.ok){
//     alert ('la reservation est ajouter')
//    }
// }
//   return (
//     <>
//  <h1>bonjour</h1>
//  {data.num}
//  <div className="max-w-2xl mx-auto bg-white p-16">
// 	<form>
 
//     <div className="grid gap-6 mb-6 lg:grid-cols-2">
//         <div>
//             <label for="num" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numéro</label>
//             <input type="text"
            
//              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//              placeholder="Numéro" 
//              value={data.num}
//              onChange={(e)=>setNum(e.target.value)}
//              />
//         </div>
//         <div>
//             <label for="armateur" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Armateur</label>
//             <input type="text"
//              id="armateur"
//              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                placeholder="Armateur"
//                value={data.armateur}
//                onChange={(e)=>setArmateur(e.target.value)}
//                 required/>
//         </div>
//         <div>
//             <label for="agentMaritime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agent Maritime</label>
//             <input type="text"
//              id="agentMaritime"
//              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//                placeholder="Agent Maritime"
//                value={data.agentMaritime}
//                onChange={(e)=>setAgentMaritime(e.target.value)}
//                required/>
//         </div>  
//         <div>
//             <label for="itineraire" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Itinéraire</label>
//             <input type="text"
//              id="itineraire" 
//              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
//              placeholder="Itinéraire"
//              value={data.itineraire}
//              onChange={(e)=>setItineraire(e.target.value)}
//              required/>
//         </div>
//         <div>
//             <label for="frequencedetouchee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"> Fréquence De Touchée</label>
//             <input type="text"
//              id="frequencedetouchee" 
//              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//              placeholder="Fréquence De Touchée" 
//              value={data.frequencedetouchee}
//              onChange={(e)=>setFrequencedetouchee(e.target.value)}
//              required/>
//         </div>
//         <div>
//         <label for="nbrrorodisponible" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre De RORO Disponible</label>
//         <input type="Number" 
//         id="nbrrorodisponible" 
//         className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
//         placeholder="Nbombre De RORO Disponible" 
//         value={data.nbrrorodisponible}
//         onChange={(e)=>setNbrrorodisponible(e.target.value)}
//         required/>
//         </div>
//     </div>

   
    
    
//     <button type="submit"
//     onClick={(e)=>handleSbmit(e)}
//     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>

//     </form>

// </div>
// </>
//   )
// }


// export default ModifierReservation
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../../Components/Sidebar/Sidebar';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModifierReservation = () => {
  const [num, setNum] = useState('');
  const [armateur, setArmateur] = useState('');
  const [agentMaritime, setAgentMaritime] = useState('');
  const [itineraire, setItineraire] = useState('');
  const [frequencedetouchee, setFrequencedetouchee] = useState('');
  const [nbrrorodisponible, setNbrrorodisponible] = useState('');
  const [statue, setStatue] = useState('');
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(`http://localhost:4000/api/admin/Reservation/${id}`);
      const jso = await response.json();
      console.log(jso);
      if (response.ok) {
        setFrequencedetouchee(jso.frequencedetouchee)
        setItineraire(jso.itineraire)
        setAgentMaritime(jso.agentMaritime)
        setArmateur(jso.armateur)
        setNum(jso.num)
        setNbrrorodisponible(jso.nbrrorodisponible)
        setData(jso);
        console.log(jso);
      }
    };

    fetchReservation();
  }, [id]);

  const handleSbmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      num,
      armateur,
      agentMaritime,
      itineraire,
      frequencedetouchee,
      nbrrorodisponible,
      statue
    };
    const updatedRoro = {
      num,
      armateur,
      nbrrorodisponible,
      
    };
    const response = await fetch(`http://localhost:4000/api/admin/ModifierReservation/${id}`, {
      method: 'PATCH',
      body: JSON.stringify(updatedData),
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    });

    if (!response.ok) {
      alert('');
      toast.error("Erreur lors de la modification de la réservation", {
        icon: "🚀"
      });
    } else {
      const responsee = await fetch(`http://localhost:4000/api/admin/ModifierRoro`, {
        method: 'PATCH',
        body: JSON.stringify(updatedRoro),
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        }
      });
      if (!responsee.ok) {
        // alert('');
        toast.error("Erreur lors de la modification de la réservation", {
          icon: "🚀"
        });
      }else{
      // alert('');
      toast.success("La réservation a été modifiée avec succès ", {
        icon: "🚀"
      }); setTimeout(() => {
      window.location.href='/Admin/Reservation' }, 2000);}
    }
  };

  return (
    <>
      <Sidebar/>
      <div>
        
        <div className="max-w-2xl mx-auto bg-white p-16">
          <form>
            <div className="grid gap-6 mb-6 lg:grid-cols-2">
              <div>
                <label htmlFor="num" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numéro</label>
                <input
                  type="text"
                  id="num"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Numéro"
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="armateur" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Armateur</label>
                <input
                  type="text"
                  id="armateur"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Armateur"
                  value={armateur}
                  onChange={(e) => setArmateur(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="agentMaritime" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Agent Maritime</label>
                <input
                  type="text"
                  id="agentMaritime"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Agent Maritime"
                  value={agentMaritime}
                  onChange={(e) => setAgentMaritime(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="itineraire" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Itinéraire</label>
                <input
                  type="text"
                  id="itineraire"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Itinéraire"
                  value={itineraire}
                  onChange={(e) => setItineraire(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="frequencedetouchee" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Fréquence De Touchée</label>
                <input
                  type="text"
                  id="frequencedetouchee"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Fréquence De Touchée"
                  value={frequencedetouchee}
                  onChange={(e) => setFrequencedetouchee(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="nbrrorodisponible" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nombre De RORO Disponible</label>
                <input
                  type="number"
                  id="nbrrorodisponible"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Nombre De RORO Disponible"
                  value={nbrrorodisponible}
                  onChange={(e) => setNbrrorodisponible(e.target.value)}
                  required
                />
              </div>
            </div>
            <button
              type="submit"
              onClick={handleSbmit}
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
           
          </form>
        </div>
      </div> 
      <ToastContainer />
    </>
  );
};

export default ModifierReservation;
