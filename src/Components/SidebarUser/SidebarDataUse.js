import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';
import { BsFillCalendarFill } from "react-icons/bs";
import { ImUser} from "react-icons/im";
import { BiBomb } from "react-icons/bi";

export const SidebarDataUse = [

  
  {
    title: 'Status De Reservation',
    path: '/Client/StatusReservation',
    icon: <BsFillCalendarFill />
  },
  {
    title: 'Suivie ',
    path: '/Client/Suivie',
    icon: <BsFillCalendarFill />
  },
  {
    title: 'Réservation ',
    path: '/Client/Reservation',
    icon: <BsFillCalendarFill />
  },
];
