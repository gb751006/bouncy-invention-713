import logo from "./logo.svg";
import "./App.css";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import AllRoutes from "./Routes/AllRoutes";
import { ChakraProvider } from "@chakra-ui/react";
import Navbarrr from "./Components/NavBar2";

function App() {
  return (
    <ChakraProvider>
    <AllRoutes/>
    <Footer/>
    </ChakraProvider>
  )
}

export default App;
