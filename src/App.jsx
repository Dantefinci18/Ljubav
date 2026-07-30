import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import Home from "./pages/Home";
import Producto from "./pages/Producto";
import Navbar from "./components/Navbar"
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";


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
          path="/productos/:id"
          element={<Producto />}
        />

      </Routes>

      <Footer />
      <WhatsAppButton />
    </BrowserRouter>

  );

}

export default App;