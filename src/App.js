import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react'; 
import vaso1 from './assets/images/vaso1.png'; 
import vaso2 from './assets/images/vaso2.png';  
import vaso3 from './assets/images/vaso3.png';  
import vasca from './assets/images/vasca.png'; 








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
               <h2 style={{fontWeight: 'bold'}}>Umidità delle piante in tempo reale!</h2> 

               <div className='grid_container'> 


                  <div className='grid_item'> 
               <h3>VASO CON BASILICO: </h3>
               <img src={vaso1} alt='basil_vase' height="300px" width="300px" />
               <h2>Umidità terreno : {u1}</h2> 
               </div>


               <div className='grid_item'>
               <h3>VASO CON ULIVO: </h3> 
               <img src={vaso2} alt='basil_vase' height="300px" width="300px" /> 
               <h2>Umidità terreno : {u2}</h2>  
</div>
               
               <div className='grid_item'>
                <h3>VASO CON ROSMARINO 1 : </h3> 
                <img src={vaso3} alt='rosemary_vase' height="300px" width="300px" /> 
                <h2>Umidità terreno : {u3}</h2> 

               </div> 

               <div className='grid_item'>
                <h3>VASO CON ROSMARINO 2 : </h3> 
                <img src={vaso3} alt='rosemary_vase_copy' height="300px" width="300px" /> 
                <h2>Umidità terreno : {u4}</h2> 

               </div>
               
               </div> 



               <h3>VASCA ACQUA</h3> 
               <img src={vasca} alt='tub' height="300px" width="300px" /> 
               <h2>Livello acqua : {sl1}</h2> 
               
           </div>
           <div className='footer'>
               <h3>Made by ITS Agroalimentare - Team Software</h3>
           </div>
       </>
); 


} 



export default App;