import React, { useEffect, useState } from 'react'
import { Route, Routes, useNavigate } from 'react-router-dom'
import Landing from './Landing'
import Navbar from '../Components/Navbar'
import SignIn from './Auth/SignIn'
import SignUp from './Auth/SingUp'
import NosServices from './nosservice/NosServices'
import Avantage from './Avantage/Avantage'
import Contact from './Avantage/Contact'
import Dashbord from '../Admin/Dashbord'
import AcceptReservation from '../Admin/AcceptReservation'
import EtatDeRemplissage from '../Admin/EtatDeRemplissage'
import EtatMaterielle from '../Admin/EtatMaterielle'
import Reservation from '../Client/Reservation'
import Suivie from '../Client/Suivie'
import NosOffre from './nosservice/NosOffre'
import Statistique from './Statistique'
import RemisesVolume from './nosservice/NosOffreDetaille/RemisesVolume'
import Reductions from './nosservice/NosOffreDetaille/Reductions'
import Programmes from './nosservice/NosOffreDetaille/Programmes'
import OffreSaiss from './nosservice/NosOffreDetaille/OffreSaiss'
import ProfileClient from '../Client/ProfileClient'
import AjouterReservation from '../Admin/Reservation/AjouterReservation'
import ModifierReservation from '../Admin/Reservation/ModifierReservation'
import AdminProfile from '../Admin/AdminProfile'
import Logout from './Logout'
import AjouterEtatDeMateriel from '../Admin/AjouterEtatDeMateriel'
import ModifierEtatMateriel from '../Admin/EtatMateriel/ModifierEtatMateriel'
import AjouterSuivie from '../Admin/Suivie/AjouterSuivie'
import SuivieAdmin from '../Admin/Suivie/SuivieAdmin'
import ModifierSuivie from '../Admin/Suivie/ModifierSuivie'
import AddReservation from '../Client/AddReservation'
import ModifierEtat from '../Admin/Remplissage/ModifierEtat'
import StatusReservation from '../Client/StatusReservation'
import Done from '../Dialogue/Done'
import DashbordClient from '../Client/DashbordClient'
import ForgetPassword from './Auth/ForgetPassword'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Routess = () => {
  const [isLogin, setIsLogin] = useState(false);
  const navigate = useNavigate();
  const [type, setType] = useState('');
  useEffect(() => {
    const token = localStorage.getItem('login');
    setIsLogin(token === 'true');
    const user =localStorage.getItem('token');
    // const { typeus } = JSON.parse(user);
    // setType(typeus);
      // Check if 'user' is not null before parsing
      if (user) {
        const userData = JSON.parse(user);
  
        // Check if 'typeus' exists in the parsed data
        if (userData.typeus) {
          setType(userData.typeus);
        } }
  }, []);
  return (
  <div>
         {isLogin ? (
        <>
        {type === 'Admin' ?(
          <>
      <Routes>

        <Route path='/'  element={<Dashbord />} />
        <Route path='/Admin/AcceptReservation' element={<AcceptReservation />} />
        <Route path='/Admin/EtatDeRemplissage' element={<EtatDeRemplissage />} />
        <Route path='/Admin/Reservation' element={<AcceptReservation />} />
        <Route path='/Admin/Reservation/AjouterReservation' element={<AjouterReservation />} />
        <Route path='/Admin/Reservation/ModifierReservation/:id' element={<ModifierReservation />} />
        <Route path='/Admin/Suivie/AjouterSuivie/:id' element={<AjouterSuivie/>} />
        <Route path='/Admin/Suivie' element={<SuivieAdmin/>} />
        <Route path='/Admin/Suivie/ModifierSuivie/:nom/:numdouanier' element={<ModifierSuivie/>} />*
        <Route path='/Admin/EtatRemplissage/ModifierRemplissage/:id' element={<ModifierEtat/>} />
        <Route path='/Admin/Profile' element={<AdminProfile />} />
        <Route path='/Admin/EtatMaterielle' element={<EtatMaterielle />} />
        <Route path='/Admin/EtatMaterielle/AjouterEtatDeMateriel' element={<AjouterEtatDeMateriel />} />
        <Route path='/Admin/EtatMaterielle/ModifierEtatDeMateriel/:id' element={<ModifierEtatMateriel/>} />
        <Route path='/Logout' element={<Logout />} />
        </Routes>  </> ):(<Routes>
        {/* //<Route path='/Admin/Reservation/SupprimierReservation' element={<Su />} /> */}

        <Route path='/Client/Dashbord' element={<DashbordClient />} />
        <Route path='/Client/Reservation' element={<Reservation />} />
        <Route path='/Client/Suivie' element={<Suivie />} />
        <Route path='/Client/StatusReservation' element={<StatusReservation/>} />
        <Route path='/Client/Reservation/AjouterReservation/:id/:roroid/:nombre' element={<AddReservation />} />
        <Route path='/Client/Profile' element={<ProfileClient />} />
        
        <Route path='/dialogue' element={<Done/>}/>
        <Route path='/Logout' element={<Logout />} />
        
    </Routes>
    )}
    </> ) : ( 
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/Signin' element={<SignIn />} />
        <Route path='/Signup' element={<SignUp />} />
        <Route path='/ForgetPassord' element={<ForgetPassword />} />
        <Route path='/NosServices' element={<NosServices />} />
        <Route path='/Avantage' element={<Avantage />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/NosOffre/RemisesVolume' element={<RemisesVolume />} />
        <Route path='/NosOffre/Reductions' element={<Reductions />} />
        <Route path='/NosOffre/Programmes' element={<Programmes />} />
        <Route path='/NosOffre/OffreSaiss' element={<OffreSaiss />} />
        <Route path='/NosOffre' element={<NosOffre />} />
        <Route path='/Statistique' element={<Statistique/>} />
      </Routes>
     )}
    </div>
  )
}

export default Routess