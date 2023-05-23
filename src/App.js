import { useState } from 'react';
import './App.css';
import Characters from './Characters';
import Button from './components/Button';
import Effect from './components/Effect';
import Estado from './components/Estado';
import MiContexto from './shared/MiContexto';
import Input from './components/Input';
import Input2 from './components/Input2';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Pagina1 from './pages/Pagina1';
import Pagina2 from './pages/Pagina2';
import Pagina3 from './pages/Pagina3';

function App() {
  const [name, setName] = useState("Pepe")
  const [name2, setName2] = useState("Luis")
  return (
    <MiContexto.Provider value={{name,setName, name2,setName2}}>
      <div className="app">
        <p>Hola</p>
        <Input />
        <Input2 />
        <Button name="Pepe"><p>HOla Pepe</p></Button>
        <Button name="Juan"><p>HOla Juan</p></Button>
        <Button name="Luis"><p>HOla Luis</p></Button>
        {/* <Estado /> */}
        <Effect />
        {/* <Characters /> */}
      </div>

      <BrowserRouter >
        <Routes>
          <Route path="/page1" element={<Pagina1 />}/> 
          <Route path="/page2" element={<Pagina2 />}/> 
          <Route path="/page3" element={<Pagina3 />}/> 
        </Routes>
      </BrowserRouter>


    </MiContexto.Provider>
    
  );
}

export default App;
