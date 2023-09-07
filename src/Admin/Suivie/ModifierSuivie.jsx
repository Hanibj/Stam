
import React, { useEffect, useState } from 'react';
import {
  Card,
  Table,
  TableHead,
  TableRow,
  TableHeaderCell,
  TableBody,
  TableCell,
  Text,
  Title,
  Badge,
} from "@tremor/react";
import Sidebar from '../../Components/Sidebar/Sidebar';
import { useParams } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ModifierSuivie = () => {
  const [datasuivie, setDatasuivie] = useState({});
  const [data, setData] = useState([]);
  const [dateentree, setDateentree] = useState("");
  const [datesortie, setDatesortie] = useState("");
  const [numcolis, setNumcolis] = useState("");
  const [localisation, setLocalisation] = useState("");
  const { nom, numdouanier } = useParams();

  useEffect(() => {
    const fetchSuivie = async () => {
      const responsee = await fetch(`http://localhost:4000/api/Admin/GetSuivie/${nom}/${numdouanier}`);
      const jsoo = await responsee.json();
      if (!responsee.ok) {
        alert('echec');
      }
      if (responsee.ok) {
        setData(jsoo.suiviee);
        setDateentree(jsoo.dateentree);
        setDatesortie(jsoo.datesortie);
        setNumcolis(jsoo.numcolis);
        setLocalisation(jsoo.localisation);
      }
    };
    fetchSuivie();
  }, [nom, numdouanier]);

  const handleSbmit = async (e,suiv) => {
    e.preventDefault()
    const reponse = await fetch(`http://localhost:4000/api/Admin/ModifierSuivie/${suiv._id}`, {
      method: 'PATCH',
      body: JSON.stringify(suiv),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      }
    });
    const jso = await reponse.json();
    if (reponse.ok) {
    
      toast.success("Le suivi a été modifié", {
        icon: "🚀"
      });
       setTimeout(() => {window.location.href = '/Admin/Suivie'; }, 2000);
    }
    if (!reponse.ok) {

      toast.error("Le suivi n'a pas été modifié", {
        icon: "🚀"
      });
       setTimeout(() => {window.location.href = '/Admin/Suivie'; }, 2000);
    }
  };
 
        const handleChange = (e, index) => {
          const { name, value } = e.target;
      
          setData((prevData) => {
            const updatedSuivie = [...prevData];
            updatedSuivie[index] = {
              ...updatedSuivie[index],
              [name]: value,
            };
      
            return updatedSuivie;
          });
        };
  return (
    <>
      <Sidebar />
      <div className="max-w-2xl mx-auto bg-white p-16">
        <form>
          <div className="grid gap-6 mb-6 lg:grid-cols-2">
            {Array.isArray(data) &&
              data.map((suiv,index) => (
                <div key={suiv._id}>
                  <div>
                    <label htmlFor="nom" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Nom</label>
                    <input
                      type="text"
                      id="nom"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="nom"
                      value={nom}
                      required
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="numdouanier" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numéro Douanier</label>
                    <input
                      type="text"
                      id="numdouanier"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder="numdouanier"
                      value={numdouanier}
                      required
                      disabled
                    />
                  </div>
                  <div>
                    <label htmlFor="dateentree" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date Entree</label>
                    <input
                      type="date"
                      name="dateentree"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={suiv.dateentree}
                      onChange={(e) => handleChange(e,index)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="datedesortie" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Date De Sortie</label>
                    <input
                      type="date"
                      name="datesortie"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={suiv.datesortie}
                      onChange={(e) => handleChange(e,index)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="numcolis" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Numéro Colis</label>
                    <input
                      type="text"
                      name="numcolis"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={suiv.numcolis}
                      onChange={(e) => handleChange(e,index)}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="localisation" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Localisation</label>
                    <input
                      type="text"
                      name="localisation"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      value={suiv.localisation}
                      onChange={(e) => handleChange(e,index)}
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    onClick={(e) => handleSbmit(e,suiv)}
                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Modifier
                  </button>
                </div>
              ))}
          </div>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default ModifierSuivie;
