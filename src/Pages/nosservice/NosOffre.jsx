import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { GoContainer } from "react-icons/go";
import { FcOvertime } from "react-icons/fc";
import { BiSolidDiscount } from "react-icons/bi";
import { GiLovers } from "react-icons/gi";
import Navbar from '../../Components/Navbar'

const features = [
  {
    name: 'Remises sur volume :',
    description:
      ' Pour les clients qui utilisent vos services de manière régulière ou qui ont de gros volumes de manutention, proposez des remises basées sur le volume. Plus ils utilisent vos services, plus leur remise est importante.',
    icon: GoContainer,
    Url:'/NosOffre/RemisesVolume',
  },
  {
    name: 'Offres saisonnières :',
    description:
      " Créez des offres spéciales en fonction des saisons ou des périodes de pointe de votre entreprise. Par exemple, offrez des tarifs réduits ou des services supplémentaires gratuits pendant les périodes plus calmes de l'année pour encourager les clients à utiliser vos services",
    icon: FcOvertime,
    Url:'/NosOffre/OffreSaiss',
  },
  {
    name: 'Réductions sur les services de manutention :',
    description:
      " Proposez des réductions spéciales sur les services de manutention pour les clients fidèles. Cela peut inclure des remises sur les tarifs réguliers ou des offres promotionnelles telles que 'Achetez X services de manutention, obtenez-en un gratuitement'.",
    icon: BiSolidDiscount,
    Url:'/NosOffre/Reductions',
  },
  {
    name: 'Programmes de fidélité :',
    description:
      " Mettez en place un programme de fidélité où les clients accumulent des points à chaque utilisation de vos services de manutention. Ces points peuvent être échangés contre des récompenses, des remises ou des avantages spéciaux.",
    icon: GiLovers,
    Url:'/NosOffre/Programmes',
  },
]
const handelChange =(url)=>{
  window.location.href=url
}
export default function NosOffre() {
  return (
    <>
    <Navbar/>
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2x2 lg:text-center">
         
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Nos Offres
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          En tant qu'entreprise de manutention STAM, nous attachons une grande importance à la fidélité de nos clients.
           Nous comprenons l'importance de bâtir des relations solides et durables avec nos clients réguliers. 
          C'est pourquoi nous offrons des avantages spéciaux à nos clients fidèles
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="absolute left-0 top-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                
              <a
                href={feature.Url}
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Details 
              </a>
              {/* <button type='button' className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700" onClick={()=>handelChange(feature.Url)}>Details </button> */}
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}


