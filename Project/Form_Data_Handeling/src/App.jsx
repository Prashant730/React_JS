import React from 'react'
import {useState} from "react"

const App = () => {

  const [data, setData] = useState({name: '', number: '' ,email: ''})
  const [submissions, setSubmissions] = useState([])

  function display(e) {
    e.preventDefault()
    console.log("submit: ",data)
    setSubmissions([...submissions, data])
    setData({name: '',number: '',email: ''})
  }

  function handel(e) {
    const { name, value } = e.target
    setData((prev)=>({...prev,[name]:value}))
  }

  return (
    <div className='min-h-screen flex justify-center items-center bg-neutral-400 p-5 gap-5'>
      <form onSubmit={display} className="flex flex-col justify-center gap-5 rounded-lg bg-black p-10">

        <input name="name" onChange={handel} className="border border-white p-2 rounded-lg" type="text" placeholder="Name" value={data.name} required/>

        <input name="number" onChange={handel} className="border border-white p-2 rounded-lg" type="tel" placeholder="Phone number" value={data.number} required maxLength={10}
        pattern="[0-9]{10}"/>

        <input name="email" onChange={handel} className="border border-white p-2 rounded-lg" type="email" placeholder="Email" value={data.email} required/>

        <button type="submit">Submit</button>
      </form>

      {submissions.length > 0 && (
        <div className="bg-black text-white p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-3">Submitted Data:</h2>
          {submissions.map((item, index) => (
            <div key={index} className="border-b border-gray-600 pb-2 mb-2">
              <p><strong>#{index + 1}</strong></p>
              <p>Name: {item.name}</p>
              <p>Phone: {item.number}</p>
              <p>Email: {item.email}</p>
            </div>
          ))}
        </div>
      )}

    </div>
  )
}

export default App
