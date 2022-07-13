import { chipClasses, selectClasses } from "@mui/material";
import React, {  useState } from "react"


export default function Textarea(props) {
  const [text,setText]=useState ('Enter text here');
//style={{backgroundcolour: props.mode==='dark'? 'Grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}

  const handleClick = () => {
   let newText =text.toUpperCase();
    setText(newText)
    props.showAlert('Text has been converted to uppercase','success')

  };
  const handlelowerClick = () => {
    let newText =text.toLowerCase();
     setText(newText)
      props.showAlert('Text has been converted to lowercase','success')
 
   };
   const handleproperClick = () => {
    console.log('clickedproper')

      setText("")
      props.showAlert('Text has been cleared','success')

   };
  const handleChange = (event) => {
   
    console.log("onchange")
    setText(event.target.value)

    

   };

   
  return( 
    <> 
      <div className="container my-5" style={{color: props.mode ==='dark'?'white':'grey'}}> 
            <h2>{ props.heading}</h2>
            <div className=" container " >
             
              <input type="text" className="form-control input-group-lg my-2"  value={text} onChange={handleChange} style={{backgroundColor:props.mode ==="light" ? "white" : "grey", color:props.mode=== 'dark'?'white': 'black'}} placeholder="enter text"  aria-label="Username" aria-describedby="addon-wrapping"/>
              <button className="btn btn-primary mx-2 my-2"  onClick={handleClick}> convert to uppercasee</button>
              <button className="btn btn-primary mx-2 my-2"  onClick={handlelowerClick}> convert to lowercasee</button>
              <button className="btn btn-primary mx-2 my-2"  onClick={handleproperClick }> ClearText</button>
            </div> 
      </div>

      <div className="container my-3" style={{color: props.mode ==='dark'?'white':'grey'}}>
        

          <h2 style={{backgroundColor: "#00AA9E"}} >Your text summary</h2>
          <p>there are {text.split(" ").length} words and {text.length} characters</p>
          <p> It will take about{ 0.008*text.split(" ").length} minutes to read</p>
        </div>

     

      <div className="container my-4" style={{color: props.mode ==='dark'?'white':'grey'}}>
        <h2>Preview</h2>

        <p> {text.length>0?text:"Your text is Empty,enter something"}</p>
      </div>
   </>
  );
}
