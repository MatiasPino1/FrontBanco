import Footer from "./componentes/Footer";
import Navbar from "./componentes/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Outlet } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
      
    </>
  );
}

export default App;
