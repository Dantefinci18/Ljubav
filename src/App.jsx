import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Producto from "./pages/Producto";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import Admin from "./pages/Admin";


function App(){

  return (

    <BrowserRouter>
      <Navbar />

      <Routes>

        <Route 
          path="/"
          element={<Home />}
        />


        <Route
          path="/nuestra-pasteleria/:id"
          element={<Producto tag="Nuestra Pastelería" backLink="/#productos"/>}
        />

        <Route
          path="/especial-dia-del-ninio/:id"
          element={<Producto tag="ESPECIAL DÍA DEL NIÑO" backLink="/#dia-del-ninio"/>}
        />

        <Route path="/admin" element={<Admin/>}/>

      </Routes>

      <Footer />
    </BrowserRouter>

  );

}

export default App;