import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { useState } from 'react';




function App() {

  const [alert, setAlert] = useState(false); 
  const showAlert = (type, message) => {
    setAlert({
      type: type,
      message: message, 
    },
    setTimeout(()=>{setAlert(false);}, 1000)
    );
  };

  return (
  <>
      <Navbar showAlert={showAlert} title="TextUtils"/>
      <Alert alert={alert}/>
      <TextForm  showAlert={showAlert} heading='Enter the text to analyze below'/>
  </>
  );
}

export default App;
