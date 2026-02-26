import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; 


    function App() { 


    const [sl1, setSl1] = useState(0);
    const [u1, setU1] = useState(0); 
    const [u2, setU2] = useState(0); 
    const [u3, setU3] = useState(0);
    const [u4, setU4] = useState(0); 


   useEffect(() => { 


const fetchLivelloAcqua = async () => {

    try {

        const response = await fetch("http://10.0.2.125/livelloAcqua");

        const data = await response.json();

        console.log(data);

        setSl1(data.livelloAcqua);
} catch (error) {
      console.error(error);
  } 
 
}; 

       const fetchUmiditaVaso = async () => {
           try {
               const response = await fetch("http://10.0.2.125/umiditaVaso");
               const data = await response.json();
               console.log(data);
               setU1(data.umidita1);
               setU2(data.umidita2);
               setU3(data.umidita3);
               setU4(data.umidita4);
           } catch (error) {
               console.error(error);
           }
       };

 
       fetchLivelloAcqua(); 

 
       fetchUmiditaVaso();
const intervalLivello = setInterval(fetchLivelloAcqua, 5000); 

const intervalloUmidita1 = setInterval(fetchUmiditaVaso, 55000); 


       return () => {
           clearInterval(intervalLivello);
           clearInterval(intervalloUmidita1);
       };
   }, []);

   return (

       <>
           <div className='header'>
               <h3><a href='https://hydrotech.wordpress.com' target='_blank'>Tutto su di noi</a></h3>
           </div>
           <div className='main'>
               <h1>Arduino's Control Panel</h1>
               <h5>Umidità delle piante in tempo reale: </h5>
               <ol>
                   <li>Vaso 1: {u1}</li>
                   <li>Vaso 2: {u2}</li>
                   <li>Vaso 3: {u3}</li>
                   <li>Vaso 4: {u4}</li>
               </ol>
               <h5>Livello liquidi dei vasi che riforniscono: </h5>
               <ol>
                   <li>Acqua liscia: {sl1}</li>
               </ol>
           </div>
           <div className='footer'>
               <h3>Made by ITS Agroalimentare - Team Software</h3>
           </div>
       </>
); 


} 



export default App;