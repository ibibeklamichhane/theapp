import Navbar from "./components/Navbar.js";
import About from "./components/About.js";
import Textarea from "./components/Textarea";
import Alert from "./components/Alert.js";
import React ,{  useState } from 'react';
//import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';


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


      <Navbar title="TextUtils" home="Home" mode={mode} toogleMode={toogleMode} />
      <Alert alert={alert}  showAlert ={showAlert}  />

        
         

         
            <Textarea showAlert={showAlert}heading="" mode={mode} />
        
    

    </>
  );
}

  
 


export default App;
