
// import {
//   Card,
//   Table,
//   TableHead,
//   TableRow,
//   TableHeaderCell,
//   TableBody,
//   TableCell,
//   Text,
//   Title,
//   Badge,
// } from "@tremor/react";

// import SidebarUser from "../Components/SidebarUser/SidebarUser";
// import React,{ useState,useEffect } from "react";

// const Reservation= () => {
//   const [data,setData]=useState({})
//   const [dataroro,setDataroro]=useState([])
//   const [prevdataroro, setPrevDataroro] = useState([]);
//   useEffect(() => {
//     const fetchReservation = async () => {
//       const response = await fetch(`http://localhost:4000/api/admin/Reservation`);
//       const jso = await response.json();
//        console.log(jso)
//       if (response.ok) {
//         setData(jso);
//       }
//     };

//     fetchReservation();
//   }, []);

//     const getRoroDisponble = async (num,armateur) => {
//       const numero=num
      
      
//       const response = await fetch(`http://localhost:4000/api/admin/Roro/${numero}/${armateur}`);
//       const jso = await response.json();
//        console.log(jso.roro)
//        if (response.ok && Array.isArray(jso.roro) && jso.roro.length > 0) {
//         return jso.roro;
//       } else {
//         alert('erreur');
//         return [];
//       }
//     };


//   useEffect(()=>{
   
//       const fetchSuivieData = async () => {
//         const suivieDataArray = [];
//         for (let i = 0; i < data.length; i++) {
//           const item = data[i];
//           const suivieData = await getRoroDisponble(item.num, item.armateur);
//           suivieDataArray.push(suivieData);
//         }
//         const flattenedData = suivieDataArray.flat();
//         setPrevDataroro(flattenedData);
//       };
  
//       if (data.length > 0) {
//         fetchSuivieData();
//       }
//   },[data])
//  const handleReserve=async(item)=>{
//   window.location.href=`/Client/Reservation/AjouterReservation/${item._id}`
//  }

//   return(
//   <div> 
//     <SidebarUser/>
//   <Card>
//     <Title>List Reservation</Title>
//     <Table className="mt-5">
//       <TableHead>
//         <TableRow>
//           <TableHeaderCell>N</TableHeaderCell>
//           <TableHeaderCell>Armateur</TableHeaderCell>
//           <TableHeaderCell>Agent Maritime	</TableHeaderCell>
//           <TableHeaderCell>Itinéraire	</TableHeaderCell>
//           <TableHeaderCell>Fréquence de touchée</TableHeaderCell>
//           <TableHeaderCell>Nombre roll on roll Off disponible	</TableHeaderCell>
//           <TableHeaderCell>Réserve	</TableHeaderCell>
//         </TableRow>
//       </TableHead>
//       <TableBody>
//         {Array.isArray(data)&&data.map((item) => (
//           <TableRow key={item._id}>
//             <TableCell>{item.num}</TableCell>
//             <TableCell>
//               <Text>{item.armateur}</Text>
//             </TableCell>
//             <TableCell>
//               <Text>{item.agentMaritime}</Text>
//             </TableCell>
//             <TableCell>
//               <Text>{item.itineraire}</Text>
//             </TableCell>
//             <TableCell>
//               <Text>{item.frequencedetouchee}</Text>
//             </TableCell>
//             {Array.isArray(dataroro)&& 
//             dataroro.filter((dataror) => dataror.numero === item.num && dataror.armateur === item.armateur)
//                   .map((dataror, index) =>{
//                     <React.Fragment key={index}>
//                           <TableCell>
//                           <Text>{dataror.nombre}</Text>
//                         </TableCell>
//                         </React.Fragment>
                      
//             })}

//             <TableCell>
//             <button type="submit"
//             onClick={()=>handleReserve(item)}
//     className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
//       Reserver</button>

//             </TableCell>
//           </TableRow>
//         ))}
//       </TableBody>
//     </Table>
//   </Card>
//   </div>
// )};
// export default Reservation
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

import SidebarUser from "../Components/SidebarUser/SidebarUser";
import React, { useState, useEffect } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Reservation = () => {
  const [data, setData] = useState({});
  const [dataroro, setDataroro] = useState([]);
  const [prevdataroro, setPrevDataroro] = useState([]);

  useEffect(() => {
    const fetchReservation = async () => {
      const response = await fetch(`http://localhost:4000/api/admin/Reservation`);
      const jso = await response.json();
      console.log(jso);
      if (response.ok) {
        setData(jso);
      }
    };

    fetchReservation();
  }, []);

  const getRoroDisponible = async (num, armateur) => {
    const numero = num;

    const response = await fetch(`http://localhost:4000/api/admin/Roro/${numero}/${armateur}`);
    const jso = await response.json();
    console.log(jso.roro);
    if (response.ok && Array.isArray(jso.roro) && jso.roro.length > 0) {
      return jso.roro;
    } else {
      toast.error("erreur ", {
        icon: "🚀"
      });
      alert("");
      return [];
    }
  };

  useEffect(() => {
    const fetchSuivieData = async () => {
      const suivieDataArray = [];
      for (let i = 0; i < data.length; i++) {
        const item = data[i];
        const suivieData = await getRoroDisponible(item.num, item.armateur);
        suivieDataArray.push(suivieData);
      }
      const flattenedData = suivieDataArray.flat();
      setPrevDataroro(flattenedData);
    };

    if (data.length > 0) {
      fetchSuivieData();
    }
  }, [data]);

  const handleReserve = async (item,roroid,nombre) => {
    window.location.href = `/Client/Reservation/AjouterReservation/${item._id}/${roroid}/${nombre}`;
  };

  return (
    <div>
      <SidebarUser />
      <Card>
        <Title>List Reservation</Title>
        <Table className="mt-5">
          <TableHead>
            <TableRow>
              <TableHeaderCell>N</TableHeaderCell>
              <TableHeaderCell>Armateur</TableHeaderCell>
              <TableHeaderCell>Agent Maritime</TableHeaderCell>
              <TableHeaderCell>Itinéraire</TableHeaderCell>
              <TableHeaderCell>Fréquence de touchée</TableHeaderCell>
              <TableHeaderCell>Nombre roll on roll Off disponible</TableHeaderCell>
              <TableHeaderCell>Réserve</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {Array.isArray(data) &&
              data.map((item) => (
                <TableRow key={item._id}>
                  <TableCell>{item.num}</TableCell>
                  <TableCell>
                    <Text>{item.armateur}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.agentMaritime}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.itineraire}</Text>
                  </TableCell>
                  <TableCell>
                    <Text>{item.frequencedetouchee}</Text>
                  </TableCell>
                  {Array.isArray(prevdataroro) &&
                    prevdataroro
                      .filter((dataror) => dataror.numero === item.num && dataror.armateur === item.armateur)
                      .map((dataror, index) => (
                        <React.Fragment key={index}>
                          <TableCell>
                            <Text>{dataror.nombre}</Text>
                          </TableCell>
                          <TableCell>
                    <button
                      type="submit"
                      onClick={() => handleReserve(item,dataror._id,dataror.nombre)}
                      className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      Reserver
                    </button>
                  </TableCell>
                        </React.Fragment>
                      ))}


                </TableRow>
              ))}
          </TableBody>
        </Table>
      </Card>
      <ToastContainer />
    </div>
  );
};

export default Reservation;
