import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert.js";
import React ,{  useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";



function App() {
  //enable dark mode

  const [mode, setMode] = useState("light");
  
  // enable alert for mode change
  const [alert, setAlert] = useState(null);

 
//const alert with message type and message
  const showAlert = (message, type) => {

    setAlert({

      message: message,
      type:type

    });
  }



  

  const toogleMode = () => {
    setMode(mode === "light" ? "dark" : "light",

    );


    if (mode === "light") {
      document.body.style.backgroundColor = "grey";
      showAlert("darkMode has been enabled","success")
    }
    else {
      document.body.style.backgroundColor = "white";
      showAlert("darkMode has been disabled","success")
    }



    
  }

  //enable dark background
  



  return (

    <>
    {/* function App() {
  //enable dark mode 

  const [mode, setMode] = useState("light");
  

  const toogleMode = () => {
    setMode(mode === "light" ? "dark" : "light");
  }
*/}

<Router>
      <Navbar title="TextUtils" home="Home" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert}  showAlert ={showAlert}  />

      <Routes>
          <Route path="/about"
            element={<About />} />
         

          <Route path="/"
            element={<Textarea showAlert={showAlert}heading="" mode={mode} />} />
        
      </Routes>

      </Router>
    </>
  );
}

  
 


export default App;
