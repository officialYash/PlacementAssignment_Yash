
import { useState } from 'react';


import Button from '@mui/material/Button';


function App() {
  const[counter,setCounter]=useState(0);
  return (
 <div className='APP'  style={{
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '300%',
  position: 'absolute',
  width: '100%',
  height: '100%',
  top: '-15%',
}}
 >Counter App
  <div style={{
        fontSize: '120%',
        position: 'relative',
        top: '10vh',
      }}>
        {counter}
      </div>



 <div className='Buttons'>

<Button variant="contained"  style={{
 position: 'relative',
 top: '20vh',
 marginRight: '5px',}}
onClick={()=>
setCounter(counter+1)
}>Increment </Button>

<Button variant="contained" 
style={{
  position: 'relative',
  top: '20vh',
  marginRight: '5px',}}
onClick={()=>{
  if(counter!==0){
    setCounter(counter-1)
  }
}
}>Decrement</Button>

 </div>
 </div>
  );
}

export default App;
