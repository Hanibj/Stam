import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { BsFillCalendarFill } from "react-icons/bs";
import { ImUser} from "react-icons/im";
import { BiBomb } from "react-icons/bi";

export const SidebarData = [
  {
    title: 'Dashboard',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    
  },
  {
    title: 'Liste des Reservation',
    path: '/Admin/Reservation',
    icon: <BsFillCalendarFill />
  },
  {
    title: 'Etat De Remplissage',
    path: '/Admin/EtatDeRemplissage',
    icon: <BsFillCalendarFill />
  },
  {
    title: 'Suivie',
    path: '/Admin/Suivie',
    icon: <BsFillCalendarFill />
  },
  {
    title: 'Etat du Materielle',
    path: '/Admin/EtatMaterielle',
    icon: <BsFillCalendarFill />
  },
  
];
