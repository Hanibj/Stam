import React from 'react'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Switch } from '@headlessui/react'
import Navbar from '../../Components/Navbar'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Contact =()=> {
  const [agreed, setAgreed] = useState(false)
  const [nom,setNom]=useState('')
  const [prenom,setPrenom]=useState('')
  const [email,setEmail]=useState('')
  const [entreprise,setEntreprise]=useState('')
  const [message,setMessage]=useState('')


  const handelSubmit =async (e) =>{
    
    e.preventDefault()
  const emailSubject = 'Contact';
  const emailContent = `from  ${nom} ${prenom} de l'entreprise ${entreprise},\n\n :${message}.`;

  // Send the email content to the server for email sending
  const emailResponse = await fetch('http://localhost:4000/api/Mail/Sendemail', {
    method: 'POST',
    body: JSON.stringify({
      recipient: email,
      subject: emailSubject,
      content: emailContent,
    }),
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  if (emailResponse.ok) {
    toast.success("Merci De Nos Contacté ", {
      icon: "🚀"
    });
    toast.success("Email sent successfully ", {
      icon: "🚀"
    });
    setTimeout(() => {
    window.location.href='/' }, 3000);
  } else {
    toast.error("Error sending email ", {
      icon: "🚀"
    });
    console.error(':', emailResponse.statusText);
  }
}
  return (
    <div>
    <div>
    <Navbar/></div>
    <div className=" bg-white px-6 py-24 sm:py-12 lg:px-8">
      <div
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
        aria-hidden="true"
      >
        <div
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
      <div className="mx-auto max-w-2x2 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Contact Us</h2>
        <p className="mt-9 text-lg leading-50 text-gray-600">
        Si vous avez besoin de prendre contact avec notre entreprise, Stam Agence La Goulette, pour toute demande ou réclamation, nous sommes là pour vous aider. Notre équipe dévouée est disponible pour répondre à vos questions, résoudre les problèmes ou prendre note de vos suggestions. 
        Nous comprenons l'importance d'une communication efficace et sommes déterminés à offrir un service client de qualité
        </p>
      </div>
      <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Nom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="nom"
                id="nom"
                onChange={(e)=>setNom(e.target.value)}
                autoComplete="nom"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-gray-900">
              Prenom
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="Prenom"
                id="Prenom"
                autoComplete="Prenom"
                onChange={(e)=>setPrenom(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
              Entreprise
            </label>
            <div className="mt-2.5">
              <input
                type="text"
                name="Entreprise"
                id="Entreprise"
                autoComplete="Entreprise"
                onChange={(e)=>setEntreprise(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
              Email
            </label>
            <div className="mt-2.5">
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                onChange={(e)=>setEmail(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                name="message"
                id="message"
                rows={4}
                onChange={(e)=>setMessage(e.target.value)}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
              />
            </div>
          </div>
  

        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          onClick={(e)=>handelSubmit(e)}>
            Let's talk
          </button>
        </div>
      </form>
    </div>
    <ToastContainer />
    </div>
  )
}
export default Contact