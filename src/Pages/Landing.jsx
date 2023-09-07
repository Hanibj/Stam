import Navbar from "../Components/Navbar";
import STAM from '../image/STAM.png';
import L1 from './nosservice/image/L1.png'
import L2 from './nosservice/image/L2.jpg'
import L3 from './nosservice/image/L3.jpg'
import L4 from './nosservice/image/L4.jpg'
import L5 from './nosservice/image/L5.jpg'
import L6 from './nosservice/image/L6.jpg'

export default function Example() {
  return (
    <>
    <Navbar/>
    <div className="relative overflow-hidden bg-white">
      <div className="pb-80 pt-16 sm:pb-40 sm:pt-24 lg:pb-48 lg:pt-40">
        <div className="relative mx-auto max-w-7xl px-4 sm:static sm:px-6 lg:px-8">
          <div className="sm:max-w-lg">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
            Société Tunisienne d'Acconage et de Manutention
            </h1>
            <p className="mt-4 text-xl text-gray-500">
            Le port de la Goulette est l'une des destinations les plus appréciées dans le bassin ouest de la Méditerranée. Le port de la Goulette est le point de convergence des grands réseaux routiers et ferroviaires de la Tunisie. Il assurait jusqu’au 
            milieu des années quatre-vingt la majeure partie des échanges maritimes de la TUNISIE
            </p>
            <p className="mt-4 text-xl text-gray-500">
            La STAM assure la fonction de Prestataire de Chargement et de Déchargement et concessionnaire et gestionnaire du terminal à conteneurs du port de Radés et assure toutes les opérations
             de chargement et de déchargement au port de La Goulette
            </p>
          </div>
          <div>
            <div className="mt-10">
              {/* Decorative image grid */}
              <div
                aria-hidden="true"
                className="pointer-events-none lg:absolute lg:inset-y-0 lg:mx-auto lg:w-full lg:max-w-7xl"
              >
                <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
                  <div className="flex items-center space-x-6 lg:space-x-8">
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg sm:opacity-0 lg:opacity-100">
                        <img
                          src={L3}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={L2}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={L1}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-47 overflow-hidden rounded-lg">
                        <img
                          src={STAM}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={L4}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                    <div className="grid flex-shrink-0 grid-cols-1 gap-y-6 lg:gap-y-8">
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={L5}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                      <div className="h-64 w-44 overflow-hidden rounded-lg">
                        <img
                          src={L6}
                          alt=""
                          className="h-full w-full object-cover object-center"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="/NosServices"
                className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
              >
                Nos Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
