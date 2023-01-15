import Home from "./pages/Home";
import Login from "./pages/Login";
import Test from "./pages/Test";
import { ThemeProvider } from "@mui/material";
import Signup from "./pages/Signup";
import Upcomming from "./pages/Upcomming";
import Mininav from "./components/home/Mininav";
import Singlevent from "./pages/Singlevent";
import Orgnaize from "./pages/Orgnaize";
import Attend from "./pages/Attend";
import Userhomepage from "./pages/Userhomepage";
import Settings from "./pages/Settings";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const { currentUser } = useSelector((state) => state.user);

  return (
    <div>
      {/*  
      
              
                 <Test/>
            <Home /><Login />
          
             <Mininav/>        <Signup />
             <Singlevent/>            <Upcomming/>
             <Orgnaize/>
               <Attend />
                 <Userhomepage/>
      */}

      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Login" element={<Login />} />
          <Route exact path="/Signup" element={<Signup />} />
          <Route exact path="card/:eventId" element={<Singlevent />} />
          <Route exact path="/:eventId" element={<Attend />} />
          <Route
            exact
            path="/Orgnaize"
            element={currentUser ? <Orgnaize /> : <Login />}
          />
        
       
    
        </Routes>
      </Router>
    </div>
  );
}

export default App;
