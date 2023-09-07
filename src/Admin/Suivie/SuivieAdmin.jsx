
// import React, { useEffect, useState } from 'react';
// import {
//   Card,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeaderCell,
//   TableBody,
//   TableCell,
//   Text,
//   Title,
//   Badge,
//   Button,
// } from "@tremor/react";
// import Sidebar from '../../Components/Sidebar/Sidebar';

// const SuivieAdmin = () => {
//   const [datasuivie, setDatasuivie] = useState([]);
//   const [prevdatasuivie, setPrevDatasuivie] = useState([]);
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch('http://localhost:4000/api/Admin/AgentMartinm');
//       const jso = await response.json();
//       if (!response.ok) {
//         alert('error');
//       }
//       if (response.ok) {
//         console.log(jso);
//         setData(jso);
//       }
//     };
//     fetchData();
//   }, []);

//   const getSuivie = async (nom, numdouanier) => {
//     const response = await fetch(`http://localhost:4000/api/Admin/GetSuivie/${nom}/${numdouanier}`);
//     const jso = await response.json();
//     if (response.ok && Array.isArray(jso.suiviee) && jso.suiviee.length > 0) {
//       return jso.suiviee;
//     } else {
//       alert('erreur');
//       return [];
//     }
//   };

//   useEffect(() => {
//     const fetchSuivieData = async () => {
//       const suivieDataArray = [];
//       for (let i = 0; i < data.length; i++) {
//         const item = data[i];
//         const suivieData = await getSuivie(item.nom, item.numdouanier);
//         suivieDataArray.push(suivieData);
//       }
//       const flattenedData = suivieDataArray.flat();
//       setPrevDatasuivie(flattenedData);
//     };

//     if (data.length > 0) {
//       fetchSuivieData();
//     }
//   }, [data]);

//   const handleAjouter = async (id) => {
//     window.location.href = `/Admin/Suivie/AjouterSuivie/${id}`;
//   };

//   return (
//     <>
//       <Sidebar />
//       <Card>
//         <Title>Suivie</Title>
//         <Table className="mt-5">
//           <TableHead>
//             <TableRow>
//               <TableHeaderCell>Nom de Navire</TableHeaderCell>
//               <TableHeaderCell>Armateur</TableHeaderCell>
//               <TableHeaderCell>Numéro D'escale</TableHeaderCell>
//               <TableHeaderCell>Port de chargement</TableHeaderCell>
//               <TableHeaderCell>Port de Déchargement</TableHeaderCell>
//               <TableHeaderCell>Numéro Douanier</TableHeaderCell>
//               <TableHeaderCell>Nature</TableHeaderCell>
//               <TableHeaderCell>Poid/Quantités</TableHeaderCell>
//               <TableHeaderCell>Nom de Destinateur</TableHeaderCell>
//               <TableHeaderCell>Date D'Entrée</TableHeaderCell>
//               <TableHeaderCell>Date De Sortie</TableHeaderCell>
//               <TableHeaderCell>Localisation</TableHeaderCell>
//               <TableHeaderCell>Numéro De Colis</TableHeaderCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {Array.isArray(data) &&
//               data.map((item, index) => (
//                 <TableRow key={index}>
//                   <TableCell>{item.nomnavire}</TableCell>
//                   <TableCell>
//                     <Text>{item.nom}</Text>
//                   </TableCell>
//                   <TableCell>
//                     <Text>{item.numesale}</Text>
//                   </TableCell>
//                   <TableCell>
//                     <Text>{item.portchargement}</Text>
//                   </TableCell>
//                   <TableCell>
//                     <Text>{item.portdechargement}</Text>
//                   </TableCell>
//                   <TableCell>
//                     <Text>{item.numdouanier}</Text>
//                   </TableCell>
//                   <TableCell>
//                     <Text>{item.nature}</Text>
//                   </TableCell>
//                   <TableCell>
//                     <Text>{item.poid}</Text>
//                   </TableCell>
//                   <TableCell>
//                     <Text>{item.nomdestinateur}</Text>
//                   </TableCell>
//                   {Array.isArray(prevdatasuivie) &&
//                     prevdatasuivie
//                       .filter((suivie) => suivie.nom === item.nom && suivie.numdouanier === item.numdouanier)
//                       .map((suivie, index) => (
//                         <div key={index}>
//                           <TableCell>
//                             <Text>{suivie.dateentree}</Text>
//                           </TableCell>
//                           <TableCell>
//                             <Text>{suivie.datesortie}</Text>
//                           </TableCell>
//                           <TableCell>
//                             <Text>{suivie.numcolis}</Text>
//                           </TableCell>
//                           <TableCell>
//                             <Text>{suivie.localisation}</Text>
//                           </TableCell>
//                         </div>
//                       ))}
//                   <TableCell>
//                     <Button type="submit" onClick={() => handleAjouter(item._id)}>
//                       Ajouter
//                     </Button>
//                   </TableCell>
//                 </TableRow>
//               ))}
//           </TableBody>
//         </Table>
//       </Card>
//     </>
//   );
// };

// export default SuivieAdmin;

import React, { useEffect, useState } from 'react';
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
  Button,
} from "@tremor/react";
import Sidebar from '../../Components/Sidebar/Sidebar';
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const SuivieAdmin = () => {
  const [datasuivie, setDatasuivie] = useState([]);
  const [prevdatasuivie, setPrevDatasuivie] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('http://localhost:4000/api/Admin/AgentMartinm');
      const jso = await response.json();
      if (!response.ok) {
        alert('error');
      }
      if (response.ok) {
        console.log(jso);
        setData(jso);
      }
    };
    fetchData();
  }, []);

  const getSuivie = async (nom, numdouanier) => {
    const response = await fetch(`http://localhost:4000/api/Admin/GetSuivie/${nom}/${numdouanier}`);
    const jso = await response.json();
    if (response.ok && Array.isArray(jso.suiviee) && jso.suiviee.length > 0) {
      return jso.suiviee;
    } else {
      
      toast.error("Erreur de Suivie", {
        icon: "🚀"
      });
      return [];
    }
  };

  useEffect(() => {
    const fetchSuivieData = async () => {
      const suivieDataArray = [];
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const suivieData = await getSuivie(item.nom, item.numdouanier);
        suivieDataArray.push(suivieData);
      }
      const flattenedData = suivieDataArray.flat();
      setPrevDatasuivie(flattenedData);
    };

    if (data.length > 0) {
      fetchSuivieData();
    }
  }, [data]);

  const handleAjouter = async (id) => {
    window.location.href = `/Admin/Suivie/AjouterSuivie/${id}`;
  };
  const handleModifier = async (nom,numdouanier) => {
    window.location.href = `/Admin/Suivie/ModifierSuivie/${nom}/${numdouanier}`;
  };
  const handleSupprimer = async (id) => {
    const reponsee= await fetch (`http://localhost:4000/api/Admin/SupprimerSuivie/${id}`,{
      method:'DELETE'
    })
    const jso = await reponsee.json();
    if (!reponsee.ok) {
      toast.error("error de Suppression", {
        icon: "🚀"
      });
      
    }
    if (reponsee.ok) {
      toast.success("Suivie Suppremier", {
        icon: "🚀"
      });
      setTimeout(() => {
        window.location.reload()
      }, 2000);
      
    }
  };
  return (
<>
  <Sidebar />
  <Card>
    <Title>Suivie </Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nom de Navire</TableHeaderCell>
          <TableHeaderCell>Armateur</TableHeaderCell>
          <TableHeaderCell>Numéro D'escale</TableHeaderCell>
          <TableHeaderCell>Port de chargement</TableHeaderCell>
          <TableHeaderCell>Port de Déchargement</TableHeaderCell>
          <TableHeaderCell>Numéro Douanier</TableHeaderCell>
          <TableHeaderCell>Nature</TableHeaderCell>
          <TableHeaderCell>Poid/Quantités</TableHeaderCell>
          <TableHeaderCell>Nom de Destinateur</TableHeaderCell>
          <TableHeaderCell>Date D'Entrée</TableHeaderCell>
          <TableHeaderCell>Date De Sortie</TableHeaderCell>
          <TableHeaderCell>Numéro De Colis</TableHeaderCell>
          <TableHeaderCell>Localisation</TableHeaderCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.isArray(data) &&
          data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.nomnavire}</TableCell>
              <TableCell>{item.nom}</TableCell>
              <TableCell>{item.numesale}</TableCell>
              <TableCell>{item.portchargement}</TableCell>
              <TableCell>{item.portdechargement}</TableCell>
              <TableCell>{item.numdouanier}</TableCell>
              <TableCell>{item.nature}</TableCell>
              <TableCell>{item.poid}</TableCell>
              <TableCell>{item.nomdestinateur}</TableCell>
              {Array.isArray(prevdatasuivie) &&
                prevdatasuivie
                  .filter((suivie) => suivie.nom === item.nom && suivie.numdouanier === item.numdouanier)
                  .map((suivie, index) => (
                    <React.Fragment key={index}>
                      <TableCell>{suivie.dateentree}</TableCell>
                      <TableCell>{suivie.datesortie}</TableCell>
                      <TableCell>{suivie.numcolis}</TableCell>
                      <TableCell>{suivie.localisation}</TableCell>
                      <TableCell> <button type="submit"
                      className="flex flex-row items-center rounded-xl bg-red-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200"
                      onClick={() => handleSupprimer(suivie._id)}>
                       <AiOutlineDelete/>
                    </button></TableCell>

                    </React.Fragment>
                                   
                  ))}
                                 <TableCell><button type="submit" color='blue'
                   className="flex flex-row items-center rounded-xl bg-blue-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200"
                   onClick={() => handleAjouter(item._id)}>
                  <IoMdAddCircleOutline/>
                </button></TableCell>
                <TableCell> <button type="submit" 
                className="flex flex-row items-center rounded-xl bg-green-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white dark:hover:bg-green-300 dark:active:bg-green-200"
                onClick={() => handleModifier(item.nom,item.numdouanier)}>
                  <MdModeEditOutline/>
                </button></TableCell>
          

              
            </TableRow>
          ))}
      </TableBody>
    </Table>
  </Card>
  <ToastContainer />
</>

  );
};

export default SuivieAdmin;
