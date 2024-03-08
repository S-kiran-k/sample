import {useState} from "react"
import './App.css'
import axios from "axios"
function App() {
  const [values,setValues] = useState({
    name:"",
    email:"",
    password:""
  }
  )

  function handleChange(a){
    setValues({...values,[a.target.name]:a.target.value});
    console.log(a.target.name)
    console.log(a.target.value)
  }
  function handelSubmit(){
    axios.post("http://localhost:3000/signup",values)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div>
      <form className="" onSubmit={handelSubmit}>
        <label htmlFor="name">Username:</label>
        <input type="text" name="name" onChange={handleChange}/>
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <label htmlFor="password">password</label>
        <input type="password" name="password" onChange={handleChange} />
        <button type="submit" >submit</button>
      </form>
    </div>
  )
}

export default App
