import logo from './logo.svg';
import './App.css';

function App() { 


  //MOCK UP 
  let u1 = 2; 
  let u2 = 3; 
  let u3 = 5; 
  let u4 = 7; 

  let sl1 = 30; 
  let sl2 = 40; 
  let sl3 = 50; 

  const handleFirst = () => { 

    alert("Hai aperto l'elettrovalvola 1!"); 
  };  

   const handleSecond = () => { 

    alert("Hai aperto l'elettrovalvola 2!");  
  }; 

   const handleThird = () => { 

    alert("Hai aperto il rubinetto 1!"); 
  }; 

   const handleFourty = () => { 

    alert("Hai aperto il rubinetto 2!"); 
  };  

   const handleFifty = () => { 

    alert("Hai aperto il rubinetto 3!");  
  };  

   const handleSixty = () => { 

    alert("Hai aperto il rubinetto 4!"); 

  };  
  
   const handleSeventh = () => { 

    alert("Hai aperto la pompa !"); 

  };   








  return (
   <>
   <div className='header'> 
      <h3>Tutto su di noi</h3> 
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
        <li>Acqua con colorante: {sl2}</li> 
        <li>Acqua mescolata: {sl3}</li>
        </ol> 
        <h5>Attuatori, pulsanti: </h5> 
        <button onClick={handleFirst}>A1</button> <br /> <br />
        <button onClick={handleSecond}>A2</button> <br /> <br />
        <button onClick={handleThird}>A3</button> <br /> <br /> 
        <button onClick={handleFourty}>A4</button> <br /> <br /> 
        <button onClick={handleFifty}>A5</button> <br /> <br /> 
        <button onClick={handleSixty}>A6</button> <br /> <br /> 
        <button onClick={handleSeventh}>A7</button> <br /> <br /> 

   </div> 
   <div className='footer'>
    <h3>Made by ITS Agroalimentare - Team Software</h3> 
   </div>
   </>
  );
}

export default App;
