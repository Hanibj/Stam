// // import React from 'react'

// import Navbar from "../../../Components/Navbar";

// // const RemisesVolume = () => {
// //   return (
// //     <div>
// //)
// // }

// // export default RemisesVolume
// export default function RemisesVolume() {
//     return (
//       <><Navbar/>
//       <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
//         <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
//         <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
//         <div className="mx-auto max-w-2xl lg:max-w-4xl">
//         <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Remises sur volume </h1>
//           <figure className="mt-10">
//             <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
//               <p>
//               Notre programme de remises sur volume fonctionne de manière simple : plus vous utilisez nos services de manière régulière et plus vos volumes de manutention sont importants, plus votre remise sera conséquente. Nous croyons fermement qu'il est important de reconnaître la valeur que vous apportez en tant que client précieux, et nous souhaitons vous offrir des avantages attractifs en retour.

// Voici comment notre programme de remises sur volume est structuré :

// Pour un volume de manutention mensuel entre [x] et [y] unités, vous bénéficierez d'une remise de [z] % sur l'ensemble de votre facture.
// Pour un volume de manutention mensuel entre [y+1] et [z] unités, votre remise augmentera à [a] %.
// Et ainsi de suite, avec des paliers de remises supplémentaires en fonction de l'augmentation de votre volume de manutention.
// Ces remises sur volume sont cumulatives avec nos autres offres promotionnelles et avantages, vous permettant ainsi d'économiser davantage sur vos coûts de manutention tout en profitant de notre service de haute qualité.

// Nous comprenons que chaque client est unique, avec des besoins et des volumes de manutention spécifiques. C'est pourquoi nous sommes flexibles et ouverts à discuter des remises sur volume personnalisées en fonction de vos exigences particulières. Nous sommes là pour vous aider à trouver la meilleure solution adaptée à votre entreprise.

// N'hésitez pas à contacter notre équipe commerciale pour discuter des détails de notre programme de remises sur volume et pour obtenir un devis personnalisé en fonction de vos besoins spécifiques. Nous sommes impatients de travailler avec vous et de vous offrir les meilleurs avantages possibles en tant que client précieux.

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

const OffreSaiss = () => {
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
        <Title>Remises sur volume</Title>
        <p className="mt-9 text-lg leading-50 text-gray-600">
        Notre programme de remises sur volume fonctionne de manière simple : plus vous utilisez nos services de manière régulière et plus vos volumes de manutention sont importants, plus votre remise sera conséquente. Nous croyons fermement qu'il est important de reconnaître la valeur que vous apportez en tant que client précieux, et nous souhaitons vous offrir des avantages attractifs en retour.

Voici comment notre programme de remises sur volume est structuré :

Pour un volume de manutention mensuel entre [x] et [y] unités, vous bénéficierez d'une remise de [z] % sur l'ensemble de votre facture.
Pour un volume de manutention mensuel entre [y+1] et [z] unités, votre remise augmentera à [a] %.
Et ainsi de suite, avec des paliers de remises supplémentaires en fonction de l'augmentation de votre volume de manutention.
Ces remises sur volume sont cumulatives avec nos autres offres promotionnelles et avantages, vous permettant ainsi d'économiser davantage sur vos coûts de manutention tout en profitant de notre service de haute qualité.

Nous comprenons que chaque client est unique, avec des besoins et des volumes de manutention spécifiques. C'est pourquoi nous sommes flexibles et ouverts à discuter des remises sur volume personnalisées en fonction de vos exigences particulières. Nous sommes là pour vous aider à trouver la meilleure solution adaptée à votre entreprise.

N'hésitez pas à contacter notre équipe commerciale pour discuter des détails de notre programme de remises sur volume et pour obtenir un devis personnalisé en fonction de vos besoins spécifiques. Nous sommes impatients de travailler avec vous et de vous offrir les meilleurs avantages possibles en tant que client précieux.

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

export default OffreSaiss;

