// import Navbar from "../../../Components/Navbar";

// export default function Reductions() {
//     return (
//       <><Navbar/>
//       <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">

//         <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
//         <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
//         <div className="mx-auto max-w-2xl lg:max-w-4xl">
//         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Réductions sur les services de manutention :</h1>
//           <figure className="mt-10">
//             <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
//               <p>
               
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

const Reductions = () => {
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
        <Title>Réductions sur les services de manutention </Title>
        <p className="mt-9 text-lg leading-50 text-gray-600">
        Cher client fidèle,

Nous sommes ravis de vous proposer des réductions spéciales sur nos services de manutention en guise de remerciement pour votre fidélité. Nous comprenons l'importance de votre soutien continu et souhaitons vous offrir des avantages supplémentaires.

Nous avons le plaisir de vous annoncer que nous proposons des remises exclusives sur nos tarifs réguliers de services de manutention. Vous pourrez ainsi profiter d'une réduction de [insérer le pourcentage de réduction] sur chaque service de manutention que vous utiliserez.

Mais ce n'est pas tout ! Nous avons également une offre promotionnelle spéciale pour vous : "Achetez X services de manutention, obtenez-en un gratuitement". Cela signifie que si vous achetez [insérer le nombre requis] services de manutention, nous vous offrirons un service supplémentaire sans frais supplémentaires. C'est notre façon de vous remercier de votre fidélité et de vous offrir une valeur ajoutée.

Pour bénéficier de ces réductions spéciales, il vous suffit de mentionner le code promotionnel [insérer le code promotionnel] lors de la réservation de vos services de manutention. Notre équipe se fera un plaisir d'appliquer la réduction correspondante à votre facture.

Nous tenons à souligner que ces offres sont exclusivement réservées à nos clients fidèles, tels que vous. Nous apprécions votre confiance et votre soutien continus, et nous espérons pouvoir vous offrir des services de manutention exceptionnels à des tarifs avantageux.

N'hésitez pas à nous contacter si vous avez des questions ou si vous souhaitez réserver nos services de manutention avec ces réductions spéciales. Nous sommes impatients de continuer à vous servir avec excellence.

Cordialement,

L'équipe des services de manutention
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

export default Reductions;

