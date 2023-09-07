import {
  Card,
  Title,
  Text,
  Flex,
  Table,
  TableRow,
  TableCell,
  TableHead,
  TableHeaderCell,
  TableBody,
  Badge,
  Button,
  Color,
} from "@tremor/react";
import NavbarAdmin from "../Components/NavbarAdmin";
import Sidebar from "../Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const colors = {
  "Ready for dispatch": "gray",
  Cancelled: "rose",
  Shipped: "emerald",
};


export default function EtatMaterielle() {
  const [transactions,setTransactions]= useState({})
  useEffect(() => {
    const fetchEtat = async () => {
      const reponse = await fetch('http://localhost:4000/api/Admin/Materiel');
      const jso = await reponse.json();
      if (reponse.ok) {
        setTransactions(jso);
      }
      if (!reponse.ok) {
        console.log('erreur');
      }
    };
    fetchEtat();
  }, []);
  const handleDelete =async (id)=>{
      const response=await fetch(`http://localhost:4000/api/Admin/SupprimerMaterielle/${id}`,{
        method:'DELETE'
      })
      const jso =await response.json()
      if(response.ok)
      {
        // alert("l'Etat Supprimer")

        toast.success("Materiel a été supprimé", {
          icon: "🚀",
   
        });
        setTimeout(() => {
          window.location.reload();
        }, 2000);
    }
    if(!response.ok)
    {
      // alert("")
      toast.error("l'Etat n'est pas Supprimer", {
        icon: "🚀"
      });
    
  }

  }
  const handleUpdate =async (id)=>{
  window.location.href=`/Admin/EtatMaterielle/ModifierEtatDeMateriel/${id}`
  }
  return (
    <div>
      <Sidebar/>
    <Card>
      <Flex justifyContent="start" className="space-x-2">
        <Title>Etats Materiel </Title>
      </Flex>
     

      <Table className="mt-6">
        
        <TableHead>
        <Button color="blue">   <a
                href="/Admin/EtatMaterielle/AjouterEtatDeMateriel"
              >
            Ajouter
              </a>  </Button>
          <TableRow>
            <TableHeaderCell>N </TableHeaderCell>
            <TableHeaderCell>N Garge</TableHeaderCell>
            <TableHeaderCell> Type</TableHeaderCell>
            <TableHeaderCell>Status</TableHeaderCell>
            <TableHeaderCell>Remarque </TableHeaderCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {Array.isArray(transactions)&&transactions.map((item) => (
            <TableRow key={item._id}>
              <TableCell>{item.num}</TableCell>
              <TableCell>{item.numgarge}</TableCell>
              <TableCell>{item.type}</TableCell>
              <TableCell>
                <Badge color={colors[item.statue]} size="xs">
                  {item.statue}
                </Badge>
              </TableCell>
              <TableCell className="text-right">{item.remarque}</TableCell>

              <TableCell>
                <Button size="xs" color="blue" onClick={()=>handleUpdate(item._id)}>
                  Modifier
                </Button>
                <Button size="xs"  color="blue" onClick={()=>handleDelete(item._id)}>
                  Suppremier
                </Button>
               
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Card>
    <ToastContainer />
    </div>
  );
}

