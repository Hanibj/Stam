// import Navbar from "../../../Components/Navbar";

// export default function Programmes() {
//     return (
//       <><Navbar/>
//       <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
//         <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
//         <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
//         <div className="mx-auto max-w-2xl lg:max-w-4xl">
//        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Programmes de fidélité</h1>
     
//           <figure className="mt-10">
//             <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
//               <p>
//               Notre programme de fidélité fonctionne de manière simple : à chaque utilisation de nos services, vous accumulez des points qui peuvent être échangés contre des récompenses, des remises ou des avantages spéciaux. Nous croyons fermement qu'il est important de reconnaître la valeur que vous apportez en tant que client fidèle, et nous souhaitons vous offrir des avantages attrayants en retour.

// Voici comment fonctionne notre programme de fidélité :

// 1. Accumulation de points : Chaque fois que vous utilisez nos services de manutention, vous accumulez des points en fonction du volume ou de la fréquence de vos demandes. Plus vous utilisez nos services, plus vous accumulez de points.

// 2. Récompenses et avantages : Une fois que vous avez accumulé suffisamment de points, vous pouvez les échanger contre une variété de récompenses et d'avantages. Cela peut inclure des remises sur vos prochaines factures, des services gratuits ou des avantages spéciaux tels que des accès privilégiés à de nouveaux services ou des consultations personnalisées.

// 3. Niveaux de fidélité : Nous avons également mis en place des niveaux de fidélité qui offrent des avantages supplémentaires en fonction de votre engagement continu avec nos services. À mesure que vous atteignez des paliers spécifiques, vous pouvez accéder à des récompenses exclusives et à des avantages supplémentaires réservés aux clients les plus fidèles.

// Nous comprenons que chaque client est unique, avec des besoins spécifiques en matière de manutention. C'est pourquoi notre programme de fidélité est conçu pour être flexible et adaptable à vos besoins particuliers. Nous sommes là pour vous aider à maximiser les avantages de notre programme de fidélité et à trouver la meilleure solution adaptée à votre entreprise.

// N'hésitez pas à contacter notre équipe commerciale pour en savoir plus sur notre programme de fidélité, les récompenses disponibles et les détails sur l'accumulation et l'échange de points. Nous sommes impatients de vous récompenser en tant que client fidèle et de vous offrir une expérience de manutention encore plus gratifiante.
//               </p>
//             </blockquote>

//           </figure>
//         </div>
        
//         <a
//                 href="/NosOffre"
//                 className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
//               >
//                 Nos Offres
//               </a>
//       </section>
//       </>
//     )
//   }

import Navbar from "../../../Components/Navbar";
import styled from 'styled-components';

import { Card, Title, Text, Grid } from "@tremor/react";

const Programmes = () => {
  const styles = {
    container: {
     
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
        <Title>Programmes de fidélité</Title>
        <p className="mt-9 text-lg leading-50 text-gray-600">
        Notre programme de fidélité fonctionne de manière simple : à chaque utilisation de nos services, vous accumulez des points qui peuvent être échangés contre des récompenses, des remises ou des avantages spéciaux. Nous croyons fermement qu'il est important de reconnaître la valeur que vous apportez en tant que client fidèle, et nous souhaitons vous offrir des avantages attrayants en retour.

Voici comment fonctionne notre programme de fidélité :

1. Accumulation de points : Chaque fois que vous utilisez nos services de manutention, vous accumulez des points en fonction du volume ou de la fréquence de vos demandes. Plus vous utilisez nos services, plus vous accumulez de points.

2. Récompenses et avantages : Une fois que vous avez accumulé suffisamment de points, vous pouvez les échanger contre une variété de récompenses et d'avantages. Cela peut inclure des remises sur vos prochaines factures, des services gratuits ou des avantages spéciaux tels que des accès privilégiés à de nouveaux services ou des consultations personnalisées.

3. Niveaux de fidélité : Nous avons également mis en place des niveaux de fidélité qui offrent des avantages supplémentaires en fonction de votre engagement continu avec nos services. À mesure que vous atteignez des paliers spécifiques, vous pouvez accéder à des récompenses exclusives et à des avantages supplémentaires réservés aux clients les plus fidèles.

Nous comprenons que chaque client est unique, avec des besoins spécifiques en matière de manutention. C'est pourquoi notre programme de fidélité est conçu pour être flexible et adaptable à vos besoins particuliers. Nous sommes là pour vous aider à maximiser les avantages de notre programme de fidélité et à trouver la meilleure solution adaptée à votre entreprise.

N'hésitez pas à contacter notre équipe commerciale pour en savoir plus sur notre programme de fidélité, les récompenses disponibles et les détails sur l'accumulation et l'échange de points. Nous sommes impatients de vous récompenser en tant que client fidèle et de vous offrir une expérience de manutention encore plus gratifiante.
       
       </p>

        </div>

               <a
                 href="/NosOffre"
                 className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
               >
                 Nos Offres
               </a>
      </main>
      </div></div></div> 
    
  );
};

export default Programmes;




   