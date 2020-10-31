import React from "react"
import Axios from "axios";
import qr from 'qrcode'

const URL = "http://localhost:2000";

function App() {
  const [qrcode, setQrcode] = React.useState('')
  const [number, setNumber] = React.useState(0)
  const [message, setMessage] = React.useState('')

  // get QR Code for login
  const login = ()=>{
    Axios.get(URL)
    .then((res)=>{
      console.log(res.data)
      qr.toDataURL(res.data, (err,url)=>{
        setQrcode(url)
      })
     
    })
    .catch((err)=>{
      console.log(err)
    })
  }

  // send message from input
  const sendMessage = ()=>{
    const body ={
      number: number + "@c.us",
      message: message
    }
    Axios.post(URL +'/sendMessage', body)
    .then((res)=> console.log(res.data))
    .catch((err)=>console.log(err))
  }
  console.log(qrcode)
  return (
    <>
      <h1>Test Whatsapp</h1> 
      <button onClick={()=>login()}>
        Login
      </button>
      <img src={qrcode}/>
      {/* input for send message */}
      <input id="number" onChange={(inputNumber)=>setNumber(inputNumber.target.value)}/>
      <input id="message" onChange={(inputMsg)=>setMessage(inputMsg.target.value)}/>
      <button onClick={()=>sendMessage()}>
        Send Message
      </button>
    </>
  );
}

export default App;
