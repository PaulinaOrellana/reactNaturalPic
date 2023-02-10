import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Barra from "./Components/Barra";
import Favoritos from "./Views/Favoritos.jsx";
import Home from "./Views/Home.jsx";
import MiContexto from "./Contexts/MiContexto";
import 'font-awesome/css/font-awesome.min.css';


function App() {
 
const [fotos, setFotos] = useState([]);
const estadoGlobal = {fotos, setFotos};

async function obtenerDatos(){
  const res = await fetch('/data/fotos.json');
  const data = await res.json();

  setFotos(data.photos);
}

useEffect(() => {
 obtenerDatos();  
}, [])

return(
  <div className="App">
    <MiContexto.Provider value={estadoGlobal}>
    <BrowserRouter>
    <Barra></Barra>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/favoritos" element={<Favoritos></Favoritos>}></Route>
    </Routes>
    </BrowserRouter>
    </MiContexto.Provider>
  </div>
);
  
    }  

      export default App;
