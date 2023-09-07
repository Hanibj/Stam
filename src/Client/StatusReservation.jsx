import React, { useEffect, useState } from 'react'
import SidebarUser from '../Components/SidebarUser/SidebarUser'
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
 const StatusReservation = () => {
  const [client,setClient]=useState('')
  const [userval,setUserval]=useState('')
  const [data,setData]=useState([])
  useEffect(()=>{
    const token = localStorage.getItem('token');
    setUserval(token)
    const { email } = JSON.parse(token);
    setClient(email);
    console.log(email)
    
  },[])
  useEffect(()=>{
    const affichierres =async()=>{
      const reponse =await fetch (`http://localhost:4000/api/client/SuivieReservation/${client}`)
      const jso =await reponse.json()
      setData(jso)
        console.log(jso)
    }
    affichierres()
  },[client])
  const handleSuppremier=async(item)=>{
    const supp =await fetch (`http://localhost:4000/api/client/SupprimerReservationClient/${item._id}`,{
      method:"DELETE"
    })
    const jsooo= supp.json()
    if(!supp.ok){
      toast.error("Reservation n'est pas suppremier ", {
        icon: "🚀"
      });
      alert("")
    }
    if(supp.ok){
     
      toast.success("reservation suppremirer ", {
        icon: "🚀"
      });

       setTimeout(() => {
      window.location.reload() }, 2000);
    }
  }
  return (

    <>
    <SidebarUser />
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
         
                <TableCell>
            <button type="submit"
    onClick={()=>handleSuppremier(item)}
    className="flex flex-row items-center rounded-xl bg-red-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200">Suppremier</button>
  </TableCell>
                              
  
                
              </TableRow>
            ))}
        </TableBody>
      </Table>
    </Card>
    <ToastContainer />
  </>
  )
}
export default StatusReservation


