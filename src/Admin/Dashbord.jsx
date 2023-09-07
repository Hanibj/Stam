import { Card, Metric, Text, Flex, BadgeDelta, DeltaType, Grid, Button } from "@tremor/react";
import SidebarAdmin from '../Components/Sidebar/SidebarAdmin'
import Sidebar from "../Components/Sidebar/Sidebar";
import { useEffect, useState } from "react";
import {   Tab, TabList, Title,Table,TableHead,TableHeaderCell,TableRow, TableBody,TableCell,BarChart, DonutChart } from '@tremor/react';

const valueFormatter = (number) => ` ${Intl.NumberFormat('us').format(number).toString()}`;

const valueobjectif = (number) => ` ${Intl.NumberFormat('us').format(number).toString()}`;

const dataFormatter = (number) => {
  return Intl.NumberFormat('us').format(number).toString();
};
const Dashboard =() =>{
  const [nombreReservationEffectue, setNombreReservationEffectue] = useState('');
  const [etatMaterielle, setEtatMaterielle] = useState('');
  const [reservationTerminer, setReservationTerminer] = useState('');
  const [reservationPasEncor, setReservationPasEncor] = useState('');
  const [reservationEnCour, setReservationEnCour] = useState('');
  const [nombreReservationEffectueParClient, setNombreReservationEffectueParClient] = useState('');
  const [email, setEmail] = useState('')
  const [client, setClient] = useState({})
  const [error, setError] = useState(null);
  const [reff, setReff] = useState(true);
  useEffect(()=>{
    const AffClient=async()=>{
       const response =await fetch("http://localhost:4000/api/Admin/AllClient")
       const jso=await response.json()
       if(!response){
        console.log(error)
       }else{
        console.log(jso)
        setClient(jso)
       }
    }
    AffClient()
  },[])
  useEffect(()=>{
const nbrReservationClient =async()=>{
  const response =await fetch(`http://localhost:4000/api/Admin/ReservationClientDashbord/${email}`)
  const jso=await response.json()
  if(!response){
   console.log(error)
  }else{
   console.log(jso)
   setNombreReservationEffectueParClient(jso)
  }
}
nbrReservationClient()
  },[email])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const NbrReservationEffectue = await fetch('http://localhost:4000/api/Admin/ReservationDashbord');
        const ReservationEffectue = await NbrReservationEffectue.json();
        setNombreReservationEffectue(ReservationEffectue);

        const etMaterielle = await fetch('http://localhost:4000/api/Admin/EtatMaterielDashbord');
        const Materielle = await etMaterielle.json();
        setEtatMaterielle(Materielle);

 

        setReff(false);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, [reff]);
  
  const NombreReservationEffectue = [
    {
      name: 'Reservation effectue',
      sales: nombreReservationEffectue.totalCount || 0,
    },
  ];
  const NombreReservationEffectueParClient = [
   { name: 'NombreReservationEffectueParClient ',
    sales: nombreReservationEffectueParClient || 0,},
  ];
  const StatueDeRemplissage = [
    {
      name: 'Remplissage Terminer',
      sales: nombreReservationEffectue.totalTerminer || 0,
    },
    {
      name: 'Remplissage EnCour',
      sales: nombreReservationEffectue.totalEnCour || 0,
    },
    {
      name: 'Remplissage PasEnCour',
      sales: nombreReservationEffectue.totalPasEnCour || 0,
    },
  ];
  const NombreDeMaterielle = [
    {
      name: 'Totale Materielle ',
      sales: etatMaterielle.totalCount || 0,
    },

  ];
  const EtatMaterielle = [
    {
      name: 'Materielle En Panne',
      sales: etatMaterielle.totalEnpanne || 0,
    },
    {
      name: 'Materielle En Maintenance',
      sales: etatMaterielle.totalEnmaintenance || 0,
    },
    {
      name: 'Materielle En Marche',
      sales: etatMaterielle.totalPasEnmarche || 0,
    },
  ];
  return (
  <>
  <Sidebar/>
      <main className="bg-slate-50 p-6 sm:p-10">
        <Title>Dashboard</Title>
  
        <TabList defaultValue="2" className="mt-6">
          <Tab value="1" text="Overview" />
          <Tab value="2" text="Remplissage" />
        </TabList>
  
        <Grid numColsLg={3} className="mt-6 gap-6">
          <Card className="max-w-lg">
            <Title>Statue De Remplissage</Title>
            <DonutChart
              className="mt-6"
              data={StatueDeRemplissage}
              category="sales"
              index="name"
              valueFormatter={valueFormatter}
              colors={['green', 'orange', 'red']}
            />
          </Card>
         
          <Card className="max-w-lg">
            <Title>Nombre De Reservation Effectue</Title>
            <DonutChart
              className="mt-6"
              data={NombreReservationEffectue}
              category="sales"
              index="name"
              valueFormatter={valueFormatter}
              colors={['violet', 'indigo', 'rose', 'cyan', 'amber']}
            />
          </Card>

        </Grid>
          
        <TabList defaultValue="2" className="mt-6">
          <Tab value="1" text="Overview" />
          <Tab value="2" text="Etat de Materielle" />
        </TabList>
  
        <Grid numColsLg={3} className="mt-6 gap-6">
          <Card className="max-w-lg">
            <Title>Nombre De Materielle</Title>
            <DonutChart
              className="mt-6"
              data={NombreDeMaterielle}
              category="sales"
              index="name"
              valueFormatter={valueFormatter}
              colors={['violet', 'indigo', 'rose', 'cyan', 'amber']}
            />
          </Card>
         
          <Card className="max-w-lg">
            <Title>Statue De Materielle</Title>
            <DonutChart
              className="mt-6"
              data={EtatMaterielle}
              category="sales"
              index="name"
              valueFormatter={valueFormatter}
              colors={['red', 'orange', 'green']}
            />
          </Card>

        </Grid>
        <TabList defaultValue="2" className="mt-6">
          <Tab value="1" text="Overview" />
          <Tab value="2" text="Liste Des Client" />
          <Tab value="3" text="Reservation" />
        </TabList>
  
        <Grid numColsLg={3} className="mt-6 gap-6">
          <Card className="max-w-lg">
            <Title>Liste Des Clients</Title>
            <Table className="mt-5">
            <TableHead>
            <TableRow>
          <TableHeaderCell>Client</TableHeaderCell>
          </TableRow>
              </TableHead>
              <TableBody>
{Array.isArray(client)&&client.map((clien)=>(
  <TableRow key={clien._id}>
  <TableCell>{clien.email}</TableCell>
  <TableCell>
   <Button onClick={()=>setEmail(clien.email)}>Reservation</Button>
  </TableCell>
  </TableRow>

  ))}
  
                </TableBody>
              </Table>
          </Card>
          <Card className="max-w-lg">
          <TabList defaultValue="3" className="mt-6">
          <Tab value="1" text="Overview" />
          <Tab value="2" text="Liste Des Client" />
          <Tab value="3" text="Reservation Du client" />
        </TabList>
            <Title>nombre de reservation du chaque client</Title>
            <DonutChart
              className="mt-6"
              data={NombreReservationEffectueParClient}
              category="sales"
              index="name"
              valueFormatter={valueFormatter}
              colors={['red', 'orange', 'green']}
            />
          </Card>
          </Grid>
  
  
      </main>
      </>);
}
export default Dashboard;