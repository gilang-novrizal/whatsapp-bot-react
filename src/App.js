import React from "react"
import Axios from "axios";
import qr from 'qrcode'

const URL = "http://localhost:2000";

function App() {
  const [qrcode, setQrcode] = React.useState('')
  const [number, setNumber] = React.useState(0)
  const [message, setMessage] = React.useState('')
  const [user, setUser] = React.useState({
    name: 'Aldo',
    number: 6285894676306,
    status:'Accepted',
    invoice: 'INVOICE/0019201920',
    resi1: 'RESI-18556',
    resi2: 1750253452,
    total: 1500000
  })

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

  // send notif order
  const sendNotifOrder = ()=>{
    const body ={
      number: user.number + '@c.us',
      name: user.name
    }
    Axios.post(URL + '/sendNotif/Order', body)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))
  }
  const sendNotifProccess = ()=>{
    const body ={
      number: user.number + '@c.us',
      name: user.name,
      status: user.status
    }
    Axios.post(URL + '/sendNotif/Proccess', body)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))
  }
  const sendNotifJalur = ()=>{
    const body ={
      number: user.number + '@c.us',
      name: user.name,
    }
    Axios.post(URL + '/sendNotif/Jalur', body)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))
  }
  const sendNotifInvoice = ()=>{
    const body ={
      number: user.number + '@c.us',
      name: user.name,
      invoice: user.invoice
    }
    Axios.post(URL + '/sendNotif/Invoice', body)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))
  }
  const sendNotifImport = ()=>{
    const body ={
      number: user.number + '@c.us',
      name: user.name,
      resi: user.resi1
    }
    Axios.post(URL + '/sendNotif/Import', body)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))
  }
  const sendNotifAddress = ()=>{
    const body ={
      number: user.number + '@c.us',
      name: user.name
    }
    Axios.post(URL + '/sendNotif/Address', body)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))
  }
  const sendNotifBill = ()=>{
    const body ={
      number: user.number + '@c.us',
      name: user.name,
      bill: user.total
    }
    Axios.post(URL + '/sendNotif/Bill', body)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))
  }
  const sendNotifOnDelivery = ()=>{
    const body ={
      number: user.number + '@c.us',
      name: user.name,
      resi: user.resi2
    }
    Axios.post(URL + '/sendNotif/OnDelivery', body)
    .then((res)=> console.log(res.data))
    .catch((err)=> console.log(err))
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
      <div style={{display: 'flex', flexDirection: 'column',width: '100px' }}>
        <button onClick={sendNotifOrder}>
          Send notif 0.5A
        </button>
        <button onClick={sendNotifProccess}>
          Send notif 0.5B
        </button>
        <button onClick={sendNotifJalur}>
          Send notif 1
        </button>
        <button onClick={sendNotifInvoice}>
          Send notif 2
        </button>
        <button onClick={sendNotifImport}>
          Send notif 3
        </button>
        <button onClick={sendNotifAddress}>
          Send notif 4
        </button>
        <button onClick={sendNotifBill}>
          Send notif 5
        </button>
        <button onClick={sendNotifOnDelivery}>
          Send notif 6
        </button>
      </div>
    </>
  );
}

export default App;
