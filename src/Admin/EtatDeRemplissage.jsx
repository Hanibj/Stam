

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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import Sidebar from '../Components/Sidebar/Sidebar';
const EtatDeRemplissage = () => {
  const [datasuivie, setDatasuivie] = useState([]);
  const [prevdatasuivie, setPrevDatasuivie] = useState([]);
  const [data, setData] = useState([]);
  
  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(`http://localhost:4000/api/admin/ReservationClient`);
      const jso = await response.json();
       console.log(jso)
      if (response.ok) {
        setData(jso);
      }
    };

    fetchReservation();
  }, []);

 
  

  const handleModifier = async (id) => {
    window.location.href = `/Admin/EtatRemplissage/ModifierRemplissage/${id}`;
  };
  const handleSupprimer = async (id) => {
    const reponsee= await fetch (`http://localhost:4000/api/Admin/SupprimerSuivie/${id}`,{
      method:'DELETE'
    })
    const jso = await reponsee.json();
    if (!reponsee.ok) {
      toast.error("L'État a été supprimé", {
        icon: "🚀",
  
      });
    }
    if (reponsee.ok) {
      toast.success("You can provide any string", {
        icon: "🚀"
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  return (
<>
  <Sidebar />
  <Card>
    <Title>Etat de Remplissage</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>N</TableHeaderCell>
          <TableHeaderCell>Armateur</TableHeaderCell>
          <TableHeaderCell>Agent Martime</TableHeaderCell>
          <TableHeaderCell>Itinerarire</TableHeaderCell>
          <TableHeaderCell>Nombre De RORO</TableHeaderCell>
          <TableHeaderCell>Statue</TableHeaderCell>
          <TableHeaderCell>Client</TableHeaderCell>
          
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.isArray(data) &&
          data.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.num}</TableCell>
              <TableCell>{item.armateur}</TableCell>
              <TableCell>{item.agentMaritime}</TableCell>
              <TableCell>{item.itineraire}</TableCell>
              <TableCell>{item.nombreroro}</TableCell>
              <TableCell>{item.statue}</TableCell>
              <TableCell>{item.client}</TableCell>
       

                                 {/* <TableCell><button type="submit" color='blue'
                   className="flex flex-row items-center rounded-xl bg-blue-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200"
                   onClick={() => handleAjouter(item._id)}>
                  <IoMdAddCircleOutline/>
                </button></TableCell> */}
                <TableCell> <button type="submit" 
                className="flex flex-row items-center rounded-xl bg-green-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white dark:hover:bg-green-300 dark:active:bg-green-200"
                onClick={() => handleModifier(item._id)}>
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

export default EtatDeRemplissage;

