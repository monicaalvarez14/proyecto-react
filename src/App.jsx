import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import RegisterPage from "./components/RegisterPage";
import Login from "./components/Login";

function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      {/*<div className="flex-grow-1">
       <Home /> 
      </div>*/}
      {/*<Login />*/}
      <RegisterPage />
      <Footer />
    </div>
  );
}

export default App;

