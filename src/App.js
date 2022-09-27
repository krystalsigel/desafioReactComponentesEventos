import './App.css';
import { useState } from "react"
import Input from './components/Input';
import Boton from './components/Boton';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [estado, setEstado] = useState('');
  return (
    <div className='container'>
      <Input estado={estado} setEstado={setEstado}/>
      {estado === "252525" && <Boton/>}

    </div>
   
  );
}

export default App;
