import { ArrowPathIcon, CloudArrowUpIcon, FingerPrintIcon, LockClosedIcon } from '@heroicons/react/24/outline'
import { MdOutlinePlace } from "react-icons/md";
import { FaRoute } from "react-icons/fa";
import { GrServices } from "react-icons/gr";
import { GrUserExpert } from "react-icons/gr";
import { SiPowerbi } from "react-icons/si";
import { GiCargoShip } from "react-icons/gi";
import Navbar from '../../Components/Navbar'

const features = [
  {
    name: 'Emplacement géographique :',
    description:
      " Son emplacement stratégique en fait un point de transit idéal pour les navires RoRo qui souhaitent desservir l'Afrique du Nord, l'Europe et d'autres destinations méditerranéennes.",
    icon: MdOutlinePlace,
  },
  {
    name: 'Connexions de transport terrestre:',
    description:
      " La Goulette est bien reliée aux réseaux de transport terrestre, ce qui facilite le déplacement des véhicules en provenance ou à destination du port",
    icon: FaRoute,
  },
  {
    name: 'Services et facilités :',
    description:
      "Le port de La Goulette peut offrir une gamme de services et de facilités pour répondre aux besoins des navires RoRo.",
    icon: GrServices,
  },
  {
    name: 'Expérience et expertise :',
    description:
      " La Goulette a acquis une certaine expérience dans le traitement des navires RoRo en raison de son utilisation antérieure pour ce type de trafic.",
    icon: GrUserExpert,
  },
  {
  name: 'Équipements de manutention : ',
  description:
   "Le port de La Goulette est équipé de matériels de manutention adaptés aux véhicules RoRo. ",
   icon: GiCargoShip,
},
{
  
  name: 'Capacité de traitement : ',
  description:
     " La capacité de traitement des navires RoRo est un critère important dans le choix d'un port.",
  icon: SiPowerbi,
    },
]

export default function Avantage() {
  return (
    <>
    <Navbar/>
    <div className="bg-white py-24 sm:py-12">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2x2 lg:text-center">
         
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Avantage
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
          Le port de La Goulette présente plusieurs avantages en tant que port maritime. Situé en Tunisie, il offre une multitude de bénéfices stratégiques et économiques pour la région et le pays dans son ensemble. Voici quelque avantages du port de La Goulette :
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
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
    </>
  )
}




 

    
 