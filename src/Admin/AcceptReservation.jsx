
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
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineDelete } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { IoMdAddCircleOutline } from "react-icons/io";
import { useState,useEffect } from "react";
import Sidebar from "../Components/Sidebar/Sidebar";

const AcceptReservation= () => {
  const [data,setData]=useState({})
  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(`http://localhost:4000/api/admin/Reservation`);
      const jso = await response.json();
       console.log(jso)
      if (response.ok) {
        setData(jso);
      }
    };

    fetchReservation();
  }, []);
  const handleModifier = async(id)=>{
    window.location.href=`/Admin/Reservation/ModifierReservation/${id}`
  }
  const handleAjout =async () =>{
    
    window.location.href=`/Admin/Reservation/AjouterReservation`
  
  }
  const handleSuppremier=async(item)=>{
    const supp =await fetch (`http://localhost:4000/api/admin/SuppremierReservation/${item._id}`,{
      method:"DELETE"
    })
    const jsooo= supp.json()
    if(!supp.ok){
      alert("Reservation n'est pas suppremier")
    }
    if(supp.ok){
      const suppr =await fetch (`http://localhost:4000/api/admin/SuppremierRoro/${item.num}/${item.armateur}`,{
        method:"DELETE"
      })
      const jsooo= supp.json()
      if(!suppr.ok){
        // alert("Reservation n'est pas suppremier")
        toast.error("Reservation n'est pas suppremier", {
          icon: "🚀"
        });
      }else{
      // alert("reservation suppremirer")
      toast.success("reservation suppremirer", {
        icon: "🚀"
      }); setTimeout(() => {
      window.location.reload() }, 2000);}
    }
  }
 
  return(
  <div> 
    <Sidebar/>
  <Card>
    <Title>List Reservation</Title>
    <Table className="mt-5">
      <TableHead>
      <button type="submit"
    onClick={handleAjout}
    className="flex flex-row items-center rounded-xl bg-blue-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-blue-600 active:bg-blue-700 dark:bg-blue-400 dark:text-white dark:hover:bg-blue-300 dark:active:bg-blue-200"><IoMdAddCircleOutline/></button>

        <TableRow>
          <TableHeaderCell>N</TableHeaderCell>
          <TableHeaderCell>Armateur</TableHeaderCell>
          <TableHeaderCell>Agent Maritime	</TableHeaderCell>
          <TableHeaderCell>Itinéraire	</TableHeaderCell>
          <TableHeaderCell>Fréquence de touchée</TableHeaderCell>
          <TableHeaderCell>Nombre roll on roll Off disponible	</TableHeaderCell>
      
        </TableRow>
      </TableHead>
      <TableBody>
        {Array.isArray(data)&&data.map((item) => (
          <TableRow key={item._id}>
            <TableCell>{item.num}</TableCell>
            <TableCell>
              <Text>{item.armateur}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.agentMaritime}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.itineraire}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.frequencedetouchee}</Text>
            </TableCell>
            <TableCell>
              <Text>{item.nbrrorodisponible}</Text>
            </TableCell>
            <TableCell>
            <button type="submit"
    onClick={()=>handleSuppremier(item)}
    className="flex flex-row items-center rounded-xl bg-red-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-red-600 active:bg-red-700 dark:bg-red-400 dark:text-white dark:hover:bg-red-300 dark:active:bg-red-200"><AiOutlineDelete/></button>
   
  </TableCell>
  <TableCell>
 <button type="submit"
    onClick={()=>handleModifier(item._id)}
    className="flex flex-row items-center rounded-xl bg-green-500 px-4 py-3 text-base font-medium text-white transition duration-200 hover:bg-green-600 active:bg-green-700 dark:bg-green-400 dark:text-white dark:hover:bg-green-300 dark:active:bg-green-200"><MdModeEditOutline/></button>

</TableCell>     
          </TableRow>
        ))}
      </TableBody>
    </Table>
  </Card> 
   <ToastContainer />
  </div>
)};
export default AcceptReservation
