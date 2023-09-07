// import Navbar from "../../../Components/Navbar";

// export default function OffreSaiss() {
//     return (
//       <>
//       <Navbar/>
//       <section className="relative isolate overflow-hidden bg-white px-6 py-12 sm:py-12 lg:px-8">
//         <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.indigo.100),white)] opacity-20" />
//         <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
//         <div className="mx-auto max-w-4x3 lg:max-w-4xl">
       
//         <div className="sm:max-w-lg"> <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Offre Sissonaire</h1>
//         </div>
//           <figure className="mt-8">
//             <blockquote className="text-center text-xl font-semibold leading-4 text-gray-900 sm:text-2x3 sm:leading-6">
//               <p>
//               Nos offres saisonnières vous offrent des tarifs réduits ou des services supplémentaires gratuits pendant les périodes de pointe de votre entreprise. L'objectif est de vous encourager à profiter de nos services de qualité supérieure tout en bénéficiant d'avantages exclusifs.

// Voici quelques exemples d'offres saisonnières que nous proposons :

// Tarifs réduits : Pendant les périodes plus calmes de l'année, nous vous offrons des tarifs spéciaux réduits pour nos services. Cela vous permet de réduire vos coûts tout en continuant à bénéficier d'un service fiable et professionnel.

// Services supplémentaires gratuits : Pour vous remercier de votre fidélité et de votre engagement envers notre entreprise, nous offrons des services supplémentaires gratuits pendant les périodes de pointe. Il peut s'agir de mises à niveau de service, de fonctionnalités supplémentaires ou même d'un support client premium sans frais supplémentaires.

// Programmes de fidélité saisonniers : Nous avons également mis en place des programmes de fidélité saisonniers où vous pouvez accumuler des points ou des récompenses spéciales en utilisant nos services pendant les périodes moins fréquentées. Ces récompenses peuvent être échangées contre des avantages tels que des réductions supplémentaires, des services premium ou des cadeaux exclusifs.

// Nous sommes convaincus que ces offres saisonnières vous aideront à optimiser votre utilisation de nos services et à atteindre vos objectifs commerciaux. Elles sont conçues pour être flexibles et adaptées à vos besoins spécifiques, afin que vous puissiez en tirer le meilleur parti.

// N'hésitez pas à contacter notre équipe commerciale pour discuter des offres saisonnières actuelles et pour obtenir des informations détaillées sur la façon dont vous pouvez en bénéficier. Nous sommes là pour vous aider à saisir ces opportunités spéciales et à renforcer notre partenariat pour une réussite mutuelle.
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
        <Title>Offre Sissonaire</Title>
        <p className="mt-9 text-lg leading-50 text-gray-600">
        Nos offres saisonnières vous offrent des tarifs réduits ou des services supplémentaires gratuits pendant les périodes de pointe de votre entreprise. L'objectif est de vous encourager à profiter de nos services de qualité supérieure tout en bénéficiant d'avantages exclusifs.

 Voici quelques exemples d'offres saisonnières que nous proposons :

Tarifs réduits : Pendant les périodes plus calmes de l'année, nous vous offrons des tarifs spéciaux réduits pour nos services. Cela vous permet de réduire vos coûts tout en continuant à bénéficier d'un service fiable et professionnel.

 Services supplémentaires gratuits : Pour vous remercier de votre fidélité et de votre engagement envers notre entreprise, nous offrons des services supplémentaires gratuits pendant les périodes de pointe. Il peut s'agir de mises à niveau de service, de fonctionnalités supplémentaires ou même d'un support client premium sans frais supplémentaires.

 Programmes de fidélité saisonniers : Nous avons également mis en place des programmes de fidélité saisonniers où vous pouvez accumuler des points ou des récompenses spéciales en utilisant nos services pendant les périodes moins fréquentées. Ces récompenses peuvent être échangées contre des avantages tels que des réductions supplémentaires, des services premium ou des cadeaux exclusifs.

 Nous sommes convaincus que ces offres saisonnières vous aideront à optimiser votre utilisation de nos services et à atteindre vos objectifs commerciaux. Elles sont conçues pour être flexibles et adaptées à vos besoins spécifiques, afin que vous puissiez en tirer le meilleur parti.

 N'hésitez pas à contacter notre équipe commerciale pour discuter des offres saisonnières actuelles et pour obtenir des informations détaillées sur la façon dont vous pouvez en bénéficier. Nous sommes là pour vous aider à saisir ces opportunités spéciales et à renforcer notre partenariat pour une réussite mutuelle.
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

