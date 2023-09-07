
import Navbar from '../../Components/Navbar'
import styled from 'styled-components';
import service from './image/service.jpg'
import service1 from './image/service1.jpg'
import service2 from './image/service2.jpg'
import service3 from './image/service3.jpg'
import { Card, Title, Text, Grid } from "@tremor/react";
 import STAM from './STAM.png'

const NosServices = () => {
  const styles = {
    container: {
      backgroundImage: `url(${service})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
      height: "100%",
      padding: "20px",
    },
    text: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };
  const styles1 = {
    container: {
      backgroundImage: `url(${service1})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
      height: "100%",
      padding: "20px",
    },
    text: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };
  const styles2 = {
    container: {
      backgroundImage: `url(${service2})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
      height: "100%",
      padding: "20px",
    },
    text: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };
  const styles3 = {
    container: {
      backgroundImage: `url(${service3})`,
      backgroundPosition: "center",
      backgroundSize: "cover",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column",
      color: "white",
      textShadow: "2px 2px 4px rgba(0, 0, 0, 0.6)",
      height: "100%",
      padding: "20px",
    },
    text: {
      fontSize: "24px",
      fontWeight: "bold",
    },
  };
  const Container = styled.div`
  width: auto;
  background: linear-gradient(
    RGBA(65, 105, 225, 1),
    RGBA(135, 206, 250, 1),
    RGBA(135, 206, 250, 1),RGBA(255,255,255,1)
  ) center;
  background-size: 100%; /* Ajustement de la taille du fond d'écran */
  align-items: center;
  justify-content: center;
  padding-left: 20px;
  padding-right: 20px;
`;

  return (
    <div>
      <Navbar />
      <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
       
      <main>
      <div className="mx-auto max-w-2x2 lg:text-center">
        <Title>Nos Services</Title>
        <p className="mt-9 text-lg leading-50 text-gray-600">
        Nous sommes fiers de vous offrir nos services de manutention Roro de première classe au port de La Goulette. 
        Avec notre expertise et notre expérience dans le domaine de la logistique portuaire, nous sommes spécialisés 
        dans le chargement et le déchargement efficace des navires Roro, garantissant une manipulation rapide et sûre des véhicules et des marchandises. Notre équipe hautement qualifiée utilise des équipements de manutention modernes et bien entretenus pour assurer une manipulation sans heurts des cargaisons Roro, en veillant à ce que chaque opération se déroule de manière fluide. Que vous ayez besoin de transporter des voitures, des camions, des remorques ou des marchandises lourdes, nous sommes là pour répondre à vos besoins avec professionnalisme et efficacité. 
        Faites-nous confiance pour une manutention Roro de qualité supérieure au port de La Goulette.
          </p>

        </div>

        <Grid numColsLg={2} style={{ width: "1170px" }} className="mt-6 gap-6">
          <Card style={{ height: "70vh" }}>
            <div style={styles.container}>
              <h1 style={styles.text}>La manipulation des marchandises embarquées ou débarquées depuis ou vers les navires </h1>
            </div>
          </Card>
          <Card style={{ height: "70vh" }}>
            <div style={styles1.container}>
              <h1 style={styles.text}>Chargement ou déchargement des Marchandises</h1>
            </div>
          </Card>
          <Card style={{ height: "70vh" }}>
            <div style={styles2.container}>
              <h1 style={styles.text}> Le stockage dans les magasins et les terres pleins</h1>
            </div>
          </Card>
          <Card style={{ height: "70vh" }}>
            <div style={styles3.container}>
              <h1 style={styles.text}>consignation sécurisation des marchandises et leur enlèvement.</h1>
            </div>
          </Card>
        </Grid>
      </main>
      </div></div></div>
    
  );
};

export default NosServices;
