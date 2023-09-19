import React, {useState} from 'react';

export default function TextForm(props) {
    const [text, setText] = useState("Enter the text here");   // hook
                                                                // text = "new text " =>> it will give error 
                                                                // setText("new text") ==> correct way
    const handleOnChange = (event)=> {setText(event.target.value);};

    const handleOnClickUpper = ()=> {
      setText(text.toUpperCase());
      props.showAlert("success", "The text changed to UpperCase Successfully!");
    };
    
    const handleOnClickLower = ()=> {
      setText(text.toLowerCase());
      props.showAlert("success", "The text changed to LowerCase Successfully!");
    };
    
    const handleOnClickClear = ()=> {
      setText('');
      props.showAlert("success", "The text is cleaned Successfully!");
    };

    const handleOnClickCopy = ()=> {
      navigator.clipboard.writeText(text);
      props.showAlert("success", "The text is copied to clipboard Successfully!");
    };
    
    const handleOnClickExtraSpaces = () => {
      setText(text.split(/[ ]+/).join(' '));
      props.showAlert("success", "Extra Space is removed Successfully!");
    };

    const countWords=(sentence)=> sentence.split(/\s+/).filter((element)=>element.length!== 0).length; 

    return (
<div className="container my-3">  
  <h1>{props.heading}</h1>
  
  <div className="mb-3">
    <textarea className="form-control" id="myBox" rows="8" value={text} onChange={handleOnChange}/>
    
    <p>Characters:{text.length} | Words: {countWords(text)} | Read Time: {(countWords(text)*0.008).toPrecision(2)} mins</p>
  </div>
  
  <button className="btn btn-secondary mx-1 my-1" onClick={handleOnClickUpper}>Convert to UpperCase</button>
  <button className="btn btn-secondary mx-1 my-1" onClick={handleOnClickLower}>Convert to LowerCase</button>
  <button className="btn btn-secondary mx-1 my-1" onClick={handleOnClickClear}>Clean</button>
  <button className="btn btn-secondary mx-1 my-1" onClick={handleOnClickCopy}>Copy</button>
  <button className="btn btn-secondary mx-1 my-1" onClick={handleOnClickExtraSpaces}>Remove Extra Spaces</button>
</div>
  );
}
