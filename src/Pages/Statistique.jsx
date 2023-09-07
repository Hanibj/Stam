import { Card, Title, AreaChart } from "@tremor/react";
import { Grid, Col, Text, Metric, Tab, TabList } from "@tremor/react";
import {   DonutChart } from "@tremor/react";
import Navbar from "../Components/Navbar";

const chartdata = [
  {
    date: "2016",
    Import: 23603,
    "Export": 16960,
  },
  {
    date: "2017",
    Import: 31843,
    "Export": 18632,
  },
  {
    date: "2018",
    Import: 37045,
    "Export": 24393,
  },
  {
    date: "2020",
    Import: 35222,
    "Export": 24132,
  },
  {
    date: "2021",
    Import: 9915,
    "Export": 7263,
  },

];
const Debarquement = [
  {
    name: "S/R Plein",
    sales: 14720,
  },
  {
    name: "S/R Vides",
    sales: 1561,
  },
  {
    name: "S/R Frigorifiques",
    sales: 0,
  },
  {
    name: "Camion/ens Routiers A.CH",
    sales: 3342,
  },
  {
    name: "Camion/ens Routiers S.CH",
    sales: 914,
  },
  {
    name: "Voitures A.CH",
    sales: 0,
  },
  {
    name: "Voitures S.CH",
    sales: 5041,
  },
  {
    name: "Autre unites Automotrices",
    sales: 4394,
  },
];
const embarquement = [
  {
    name: "S/R Plein",
    sales: 29515,
  },
  {
    name: "S/R Vides",
    sales: 461,
  },
  {
    name: "S/R Frigorifiques",
    sales: 1971,
  },
  {
    name: "Camion/ens Routiers A.CH",
    sales: 1481,
  },
  {
    name: "Camion/ens Routiers S.CH",
    sales: 90,
  },
  {
    name: "Voitures A.CH",
    sales: 0,
  },
  {
    name: "Voitures S.CH",
    sales: 0,
  },
  {
    name: "Autre unites Automotrices",
    sales: 70,
  },
];
const Navires = [
  {
    name: "Generale cargo",
    sales: 3,
  },
  {
    name: "Container Ship",
    sales: 0,
  },
  {
    name: "RORO Ship",
    sales: 3,
  },
  {
    name: "Vehicles carrier",
    sales: 9,
  },
  {
    name: "Oil Tankr",
    sales: 1,
  },
  {
    name: "Passenger Ship",
    sales: 7,
  },
  {
    name: "Cement Carrier",
    sales: 2,
  },
  
];
const EscaleEffectues= [
  {
    name: "Generale cargo",
    sales: 3,
  },
  {
    name: "Container Ship",
    sales: 0,
  },
  {
    name: "RORO Ship",
    sales: 4,
  },
  {
    name: "Vehicles carrier",
    sales: 9,
  },
  {
    name: "Oil Tankr",
    sales: 1,
  },
  {
    name: "Passenger Ship",
    sales: 70,
  },
  {
    name: "Cement Carrier",
    sales: 4,
  },
  
];
//////////////////////////////////////////////////////
////////////////////////////////////////////////////
const Debarquement8 = [
  {
    name: "S/R Plein",
    sales: 12990,
  },
  {
    name: "S/R Vides",
    sales: 1655,
  },
  {
    name: "S/R Frigorifiques",
    sales: 0,
  },
  {
    name: "Camion/ens Routiers A.CH",
    sales: 2159,
  },
  {
    name: "Camion/ens Routiers S.CH",
    sales: 674,
  },
  {
    name: "Voitures A.CH",
    sales: 0,
  },
  {
    name: "Voitures S.CH",
    sales: 4336,
  },
  {
    name: "Autre unites Automotrices",
    sales: 1643,
  },
];
const embarquement8 = [
  {
    name: "S/R Plein",
    sales: 15731,
  },
  {
    name: "S/R Vides",
    sales: 282,
  },
  {
    name: "S/R Frigorifiques",
    sales: 2313,
  },
  {
    name: "Camion/ens Routiers A.CH",
    sales: 1258,
  },
  {
    name: "Camion/ens Routiers S.CH",
    sales: 4,
  },
  {
    name: "Voitures A.CH",
    sales: 0,
  },
  {
    name: "Voitures S.CH",
    sales: 4,
  },
  {
    name: "Autre unites Automotrices",
    sales: 5,
  },
];
const Navires8 = [
  {
    name: "Generale cargo",
    sales: 0,
  },
  {
    name: "Container Ship",
    sales: 0,
  },
  {
    name: "RORO Ship",
    sales: 3,
  },
  {
    name: "Vehicles carrier",
    sales: 6,
  },
  {
    name: "Oil Tankr",
    sales: 0,
  },
  {
    name: "Passenger Ship",
    sales: 7,
  },
  {
    name: "Cement Carrier",
    sales: 3,
  },
  
];
const EscaleEffectues8= [
  {
    name: "Generale cargo",
    sales: 0,
  },
  {
    name: "Container Ship",
    sales: 0,
  },
  {
    name: "RORO Ship",
    sales: 4,
  },
  {
    name: "Vehicles carrier",
    sales: 6,
  },
  {
    name: "Oil Tankr",
    sales: 0,
  },
  {
    name: "Passenger Ship",
    sales: 67,
  },
  {
    name: "Cement Carrier",
    sales: 4,
  },
  
];
//////////////////////////////////////////////////////
////////////////////////////////////////////////////
const Debarquement9 = [
  {
    name: "S/R Plein",
    sales: 20425,
  },
  {
    name: "S/R Vides",
    sales: 2285,
  },
  {
    name: "S/R Frigorifiques",
    sales: 940,
  },
  {
    name: "Camion/ens Routiers A.CH",
    sales: 2217,
  },
  {
    name: "Camion/ens Routiers S.CH",
    sales: 861,
  },
  {
    name: "Voitures A.CH",
    sales: 0,
  },
  {
    name: "Voitures S.CH",
    sales: 3907,
  },
  {
    name: "Autre unites Automotrices",
    sales: 1947,
  },
];
const embarquement9 = [
  {
    name: "S/R Plein",
    sales: 21900,
  },
  {
    name: "S/R Vides",
    sales: 140,
  },
  {
    name: "S/R Frigorifiques",
    sales: 1447,
  },
  {
    name: "Camion/ens Routiers A.CH",
    sales: 1132,
  },
  {
    name: "Camion/ens Routiers S.CH",
    sales: 0,
  },
  {
    name: "Voitures A.CH",
    sales: 0,
  },
  {
    name: "Voitures S.CH",
    sales: 21,
  },
  {
    name: "Autre unites Automotrices",
    sales: 84,
  },
];
const Navires9 = [
  {
    name: "Generale cargo",
    sales: 3,
  },
  {
    name: "Container Ship",
    sales: 0,
  },
  {
    name: "RORO Ship",
    sales: 3,
  },
  {
    name: "Vehicles carrier",
    sales: 4,
  },
  {
    name: "Oil Tankr",
    sales: 0,
  },
  {
    name: "Passenger Ship",
    sales: 7,
  },
  {
    name: "Cement Carrier",
    sales: 2,
  },
  
];
const EscaleEffectues9= [
  {
    name: "Generale cargo",
    sales: 3,
  },
  {
    name: "Container Ship",
    sales: 0,
  },
  {
    name: "RORO Ship",
    sales: 6,
  },
  {
    name: "Vehicles carrier",
    sales: 5,
  },
  {
    name: "Oil Tankr",
    sales: 0,
  },
  {
    name: "Passenger Ship",
    sales: 53,
  },
  {
    name: "Cement Carrier",
    sales: 3,
  },
  
];
const dataFormatter = (number) => {
  return "qte" + Intl.NumberFormat("us").format(number).toString();
};
const valueFormatter = (number) => ` ${Intl.NumberFormat("us").format(number).toString()}`;
const Statistique = () => (
  <>  
  <Navbar/>
  <main className="bg-slate-50 p-6 sm:p-10">
  <TabList defaultValue="2" className="mt-6">
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Trafics Des Roulatns Pour le 7/2022" />
      </TabList>

  <Title>Trafics Des Roulatns Pour le 7/2022</Title>
  
  <Grid numColsLg={2} className="mt-6 gap-6">
 
    
    <Card  className="max-w-lg">
      <Title>Debarquement</Title>
    <DonutChart
    //  className="mt-6"
      data={Debarquement}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
      </Card>
      <Card className="max-w-lg">
    <Title>Embarquement</Title>
    <DonutChart
    //  className="mt-6"
      data={embarquement}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber", "cyan"]}
    />
    </Card>
    
  



  </Grid>
  <TabList defaultValue="2" className="mt-6">
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Tonnage De La Marchandise Diverse Realise Par l'Agence Goulette Pour le 7/2022" />
      </TabList>
  <Title>Tonnage De La Marchandise Diverse Realise Par l'Agence Goulette Pour le 7/2022</Title>
  <Grid  numColsLg={2} className="mt-6 gap-6">
 
    
      <Card className="max-w-lg" >
      <Title>Navires</Title>
    <DonutChart
      className="mt-6"
      data={Navires}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["rose", "violet", "indigo", "rose", "cyan", "amber"]}
    />
      </Card>
    
    <Card className="max-w-lg">
    <Title>Escale Effectués</Title>
    <DonutChart
      className="mt-6"
      data={EscaleEffectues}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
    </Card>



  </Grid>
{/*///////////////////////////////////////////////////////////////////////////////////////*/ }

{/*///////////////////////////////////////////////////////////////////////////////////////*/ }
<TabList defaultValue="2" className="mt-6">
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Trafics Des Roulatns Pour le 8/2022" />
      </TabList>

<Title>Trafics Des Roulatns Pour le 8/2022</Title>
  <Grid  numColsLg={2} className="mt-6 gap-6">
 
    
      <Card className="max-w-lg">
      <Title>Debarquement 8/2022</Title>
    <DonutChart
      className="mt-6"
      data={Debarquement8}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
      </Card>
    
    <Card className="max-w-lg">
    <Title>Embarquement 8/2022</Title>
    <DonutChart
      className="mt-6"
      data={embarquement8}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
    </Card>



  </Grid>
  <TabList defaultValue="2" className="mt-6">
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Tonnage De La Marchandise Diverse Realise Par l'Agence Goulette Pour le 8/2022" />
      </TabList>
  <Title>Tonnage De La Marchandise Diverse Realise Par l'Agence Goulette Pour le 8/2022</Title>
  <Grid  numColsLg={2} className="mt-6 gap-6">
 
    
      <Card className="max-w-lg">
      <Title>Navires 8/2022</Title>
    <DonutChart
      className="mt-6"
      data={Navires8}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
      </Card>
  
    <Card className="max-w-lg">
    <Title>Escale Effectués 8/2022</Title>
    <DonutChart
      className="mt-6"
      data={EscaleEffectues8}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
    </Card>



  </Grid>
  {/*///////////////////////////////////////////////////////////////////////////////////////*/ }

{/*///////////////////////////////////////////////////////////////////////////////////////*/ }
<TabList defaultValue="2" className="mt-6">
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Trafics Des Roulatns Pour le 9/2022" />
      </TabList>

<Title>Trafics Des Roulatns Pour le 9/2022</Title>
  <Grid  numColsLg={2} className="mt-6 gap-6">
 
    
      <Card className="max-w-lg">
      <Title>Debarquement 9/2022</Title>
    <DonutChart
      className="mt-6"
      data={Debarquement9}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
      </Card>
  
    <Card className="max-w-lg">
    <Title>Embarquement 9/2022</Title>
    <DonutChart
      className="mt-6"
      data={embarquement9}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
    </Card>



  </Grid>
  <TabList defaultValue="2" className="mt-6">
        <Tab value="1" text="Overview" />
        <Tab value="2" text="Tonnage De La Marchandise Diverse Realise Par l'Agence Goulette Pour le 9/2022" />
      </TabList>
  <Title>Tonnage De La Marchandise Diverse Realise Par l'Agence Goulette Pour le 9/2022</Title>
  <Grid  numColsLg={2} className="mt-6 gap-6">
 
  
      <Card className="max-w-lg" >
      <Title>Navires 9/2022</Title>
    <DonutChart
      className="mt-6"
      data={Navires9}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
      </Card>
    
    <Card className="max-w-lg">
    <Title>Escale Effectués 9/2022</Title>
    <DonutChart
      className="mt-6"
      data={EscaleEffectues9}
      category="sales"
      index="name"
      valueFormatter={valueFormatter}
      colors={["slate", "violet", "indigo", "rose", "cyan", "amber"]}
    />
    </Card>



  </Grid>
  <Card>
    <Title>Trafic du port de la goulette entre (2016 et 2021)</Title>
    <AreaChart
      //className="h-72 mt-4"
      data={chartdata}
      index="date"
      categories={["Import", "Export"]}
      colors={['violet',  'rose']}
      valueFormatter={dataFormatter}
    />
  </Card>
  </main>
  </>

);
export default Statistique