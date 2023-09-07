

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

import SidebarUser from '../Components/SidebarUser/SidebarUser';
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
      toast.error("erreur ", {
        icon: "🚀"
      });
      alert('');
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

  return (
<>
  <SidebarUser />
  <Card>
    <Title>Suivie</Title>
    <Table className="mt-5">
      <TableHead>
        <TableRow>
          <TableHeaderCell>Nom de Navire</TableHeaderCell>
          <TableHeaderCell>Armateur</TableHeaderCell>
          <TableHeaderCell>Numéro D'escale</TableHeaderCell>
          <TableHeaderCell>Port de chargement</TableHeaderCell>
          <TableHeaderCell>Port de Déchargement</TableHeaderCell>
        
          <TableHeaderCell>Nature</TableHeaderCell>
          <TableHeaderCell>Date D'Entrée</TableHeaderCell>
          <TableHeaderCell>Date De Sortie</TableHeaderCell>

          <TableHeaderCell>Numéro De Colis</TableHeaderCell>
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
          
              <TableCell>{item.nature}</TableCell>
             
            
              {Array.isArray(prevdatasuivie) &&
                prevdatasuivie
                  .filter((suivie) => suivie.nom === item.nom && suivie.numdouanier === item.numdouanier)
                  .map((suivie, index) => (
                    <React.Fragment key={index}>
                      <TableCell>{suivie.dateentree}</TableCell>
                      <TableCell>{suivie.datesortie}</TableCell>
                      <TableCell>{suivie.numcolis}</TableCell>
                    </React.Fragment>
                  ))}

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
