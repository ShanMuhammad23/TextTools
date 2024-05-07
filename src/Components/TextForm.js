import React, { useState } from "react";
export default function TextForm(props){
    const handlechange=(event)=>{
        setText(event.target.value)
    }
    const handleupcase=()=>{
        let newtext=text.toUpperCase();
        setText(newtext)
    }
    const handlelocase=()=>{
        let newtext=text.toLowerCase();
        setText(newtext);
    }
    const handlecleartext=()=>{
        setText("");
    }
    const handlespace=()=>{
let newtext=text.replace(/\s+/g, ' ')
        setText(newtext)
    }
    const [text,setText]=useState("");
    return(
        <>
        <div className={`container ${props.mode}`} >
        <h1>Enter Text To Analyze</h1> 
<textarea className="form-control" name="text" id="mytext"  rows="8" value={text} onChange={handlechange} style={{backgroundColor:props.mode==='light'?'white':'grey',color:props.mode==='light'?'black':'white'}}></textarea>
       <button disabled={text.length===0} className="btn btn-primary my-3 " onClick={handleupcase}>Change To UpperCase</button>
       <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handlelocase}>Change To LowerCase</button>
       <button disabled={text.length===0} className="btn btn-primary my-3 mx-3" onClick={handlespace}>Remove Extra Spaces</button>
       <button disabled={text.length===0} className="btn btn-primary my-3" onClick={handlecleartext}>Clear Text</button>


       
        <h2>Your Text Summary</h2>
        <button type="button" className="btn btn-primary">
  Words <span className="badge bg-secondary">{text.split(" ").filter((element)=>{return element.length!==0}).length} </span>
</button>
<button type="button" className="btn btn-primary mx-2">
  Characters <span className="badge bg-secondary">{text.length}</span>
</button>
<p>{text.split(" ").filter((element)=>{return element.length!==0}).length*0.0052} Minutes Read</p>
       
       <h2>Overview</h2>
       <p className="border-success border p-4">{text.length>0?text:"Nothing to Preview"}</p>
       </div>
        </>
    )
}