import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import Home from "./componentes/Home"
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Home></Home>
      <Footer></Footer>
      
    </>
  );
}

export default App;
