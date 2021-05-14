import React, { useState} from 'react';
import './App.css';
import {Button, FormControl, Input, InputLabel} from '@material-ui/core';

function App() {
  const [input, setInput]= useState('');
  const [messages, setMessage]= useState(['s','a','l','o','n','i']);
  const sendMessage=(event) =>{ 
    event.preventDefault();
    setMessage([...messages, input]);
    setInput('');
  }

  console.log(messages);

  return (
    <div className="App">
     <h1> Hello Deepak Here We will build a Firebase fb messenger clone</h1>


     <form>
        <FormControl>
          <InputLabel>✅ Write a Message</InputLabel>
          <Input placeholder="✍"  value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>
        <Button type="submit" disabled={!input} variant="contained" color="primary" onClick={sendMessage}>Send Message 🚀 </Button>
  
      </form>

     
    
   
   {
     messages.map(message => (
     <p> {message}</p>
     ))
   }
    </div>
    
   
  );
}

export default App;
